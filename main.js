const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')

//select tab content item
function selectItem(e) { //why here e and in removeBorder no e

    removeBorder()
    removeShow()
    // Add border to current tab
    this.classList.add('tab-border'); //this returns to what?

    //Grab content item from the DOM.
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    //Add show class
    tabContentItem.classList.add('show')
}


function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}

//Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));