const posts = [
  { title: 'Post1', body: 'This is post1' },
  { title: 'Post2', body: 'This is post2' }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      // normally do an error check
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error: this is the error');
      }
    }, 2000);
  });
}

// createPost({ title: 'Post3', body: 'This is post3' })
//   .then(getPosts)
//   .catch(err => console.log(err));

// // promise.all
// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, 'Goodbye');
// });

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>
//   res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then(values =>
//   console.log(values)
// );

// // Async Await

// async function init() {
//   // await - waits for an asynchronough object to complete
//   await createPost({ title: 'Post3', body: 'This is post3' });
//   getPosts();
// }
// init();

// Async Await with fetch

async function fetchUsers() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  ).then(res => res.json());

  console.log(res);
}

fetchUsers();
