const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// select tab conent item
function selectItem(e){
    removeBorder();
    removeShow();
    // Add border to current tab
    // access item that was clicked with "this"
    this.classList.add('tab-border');
    // grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
    // console.log(this.id)

}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

// event listener
// node list like an array to loop through - listen for click on tabItem and run function 'selectItem'
tabItems.forEach(item => item.addEventListener('click', selectItem));