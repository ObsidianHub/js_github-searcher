// init Github
const github = new Github();

// init UI module
const ui = new UI();

// init search input 
const searchInput = document.getElementById('searchUser');

// add event listener
searchInput.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;

    if (userText !== '') {
        ui.showLoader();
    }
});