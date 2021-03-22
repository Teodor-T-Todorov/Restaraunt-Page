import homeLoad from './home'

const content = document.querySelector('#content');
const footer = document.querySelector('#footer');

const homePage = document.createElement('div');
homePage.setAttribute('class', 'homePage');

/*Head title and text*/
const headTitle = document.createElement('div');
headTitle.setAttribute('class', 'headTitle');

const headText = document.createElement('h4');
headText.textContent = 'Pizza House'

headTitle.appendChild(headText);

const buttonBar = document.createElement('div');
buttonBar.setAttribute('class', 'buttonBar');

/*Home*/
const home = document.createElement('div');
home.setAttribute('class', 'home');

const homeButton = document.createElement('button');
homeButton.setAttribute('id', 'button');
homeButton.textContent = 'Home';

home.appendChild(homeButton);

/*Menu*/
const menu = document.createElement('div');
menu.setAttribute('class', 'home');

const menuButton = document.createElement('button');
menuButton.setAttribute('id', 'button');
menuButton.textContent = 'Menu';

menu.appendChild(menuButton);

/*About*/
const about = document.createElement('div');
about.setAttribute('class', 'about');

const aboutButton = document.createElement('button');
aboutButton.setAttribute('id', 'button');
aboutButton.textContent = 'About';

about.appendChild(aboutButton);

/*Contacts*/
const contacts = document.createElement('div');
contacts.setAttribute('class', 'conctacts');

const contactsButton = document.createElement('button');
contactsButton.setAttribute('id', 'button');
contactsButton.textContent = 'Contacts';

contacts.appendChild(contactsButton);

/*Append buttons and head title to the home page*/
buttonBar.appendChild(home);
buttonBar.appendChild(menu);
buttonBar.appendChild(about);
buttonBar.appendChild(contacts);
homePage.appendChild(headTitle);
homePage.appendChild(buttonBar);

/*Footer*/
const footerText = document.createElement('p');
footerText.setAttribute('class', 'footerText');
footerText.textContent = "Copyright © 2021 teodor-t-todorov";

/*Link to github and github icon*/
const githubLink = document.createElement('a');
githubLink.href = 'https://github.com/Teodor-T-Todorov';
githubLink.setAttribute('target', '_blank');

const githubIcon = document.createElement('i');
githubIcon.classList.add("fab");
githubIcon.classList.add("fa-github");

githubLink.appendChild(githubIcon);

const loadPage = () =>{
    content.appendChild(homePage);
    footer.appendChild(footerText);
    footer.appendChild(githubLink);
    homeLoad();
}

export default loadPage;
