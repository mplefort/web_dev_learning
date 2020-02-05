const url = 'docs/pdf_ex.pdf';

//
let pdfDoc = null,
  pageNum = 1,
  pageIsRendering = false,
  pageNumIsPending = null;

// fetch pdf and put in canvas
const scale = 1,
  canvas = document.querySelector('#pdf-render'),
  ctx = canvas.getContext('2d');

// Render the page given pagenumber function
const renderPage = num => {
  // update page rendering monitor
  pageIsRendering = true;
  // get page
  pdfDoc.getPage(num).then(page => {
    // set scale
    const viewport = page.getViewport({ scale: scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderCtx = {
      canvasContext: ctx,
      viewport
    };

    page.render(renderCtx).promise.then(() => {
      pageIsRendering = false;

      if (pageNumIsPending !== null) {
        renderPage(pageNumIsPending);
        pageNumIsPending = null;
      }
    });

    // Output current page
    document.getElementById('page-num').innerHTML = num;
  });
};

// Check for pages rendering
const queueRenderpage = num => {
  if (pageIsRendering) {
    pageNumIsPending = num;
  } else {
    renderPage(num);
  }
};

// show prev page
const showPrevPage = () => {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  queueRenderpage(pageNum);
};

// show next page
const showNextPage = () => {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }
  pageNum++;
  queueRenderpage(pageNum);
};

// Get document
// from cdn include in html
pdfjsLib
  .getDocument(url)
  .promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    // set page count from loadign doc
    document.getElementById('page-count').innerHTML = pdfDoc.numPages;

    renderPage(pageNum);
  })
  .catch(err => {
    // display error
    const div = document.createElement('div');
    div.className = 'error';
    div.appendChild(document.createTextNode(err.message));
    document.querySelector('body').insertBefore(div, canvas);

    // remove topbar
    document.querySelector('.top-bar').style.display = 'none';
  });

// Button eEvents
document.getElementById('prev-page').addEventListener('click', showPrevPage);
document.getElementById('next-page').addEventListener('click', showNextPage);
