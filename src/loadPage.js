import homeLoad from './home'

const content = document.querySelector('#content');

const homePage = document.createElement('div');
homePage.setAttribute('class', 'homePage');

const headTitle = document.createElement('div');
headTitle.setAttribute('class', 'headTitle');
const headText = document.createElement('h4');
headText.textContent = 'Pizza House'

const buttonBar = document.createElement('div');
buttonBar.setAttribute('class', 'buttonBar');

const home = document.createElement('div');
home.setAttribute('class', 'home');

const homeButton = document.createElement('button');
homeButton.setAttribute('id', 'button');
homeButton.textContent = 'Home';

const menu = document.createElement('div');
menu.setAttribute('class', 'home');

const menuButton = document.createElement('button');
menuButton.setAttribute('id', 'button');
menuButton.textContent = 'Menu';

const about = document.createElement('div');
about.setAttribute('class', 'about');

const aboutButton = document.createElement('button');
aboutButton.setAttribute('id', 'button');
aboutButton.textContent = 'About';

const contacts = document.createElement('div');
contacts.setAttribute('class', 'conctacts');

const contactsButton = document.createElement('button');
contactsButton.setAttribute('id', 'button');
contactsButton.textContent = 'Contacts';

const loadPage = () =>{
    home.appendChild(homeButton);
    menu.appendChild(menuButton);
    about.appendChild(aboutButton);
    contacts.appendChild(contactsButton);
    buttonBar.appendChild(home);
    buttonBar.appendChild(menu);
    buttonBar.appendChild(about);
    buttonBar.appendChild(contacts);
    headTitle.appendChild(headText);
    homePage.appendChild(headTitle);
    homePage.appendChild(buttonBar);
    content.appendChild(homePage);
    homeLoad();
}

export default loadPage;
