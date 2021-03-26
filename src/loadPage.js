import {loadHome} from './home'

const content = document.querySelector('#content');
const footer = document.querySelector('#footer');

const topBar = document.createElement('div');
topBar.setAttribute('class', 'topBar');

/*Head title and text*/
const title = document.createElement('div');
title.setAttribute('class', 'title');

const titleText = document.createElement('h4');
titleText.textContent = 'Pizza House'

title.appendChild(titleText);

const buttonBar = document.createElement('div');
buttonBar.setAttribute('class', 'buttonBar');

/*Home*/
const home = document.createElement('div');
home.setAttribute('class', 'home');

const homeButton = document.createElement('button');
homeButton.setAttribute('class', 'button');
homeButton.setAttribute('id', 'btnHome');
homeButton.textContent = 'Home';

home.appendChild(homeButton);

/*Menu*/
const menu = document.createElement('div');
menu.setAttribute('class', 'menu');

const menuButton = document.createElement('button');
menuButton.setAttribute('class', 'button');
menuButton.setAttribute('id', 'btnMenu');
menuButton.textContent = 'Menu';

menu.appendChild(menuButton);

/*About*/
const about = document.createElement('div');
about.setAttribute('class', 'about');

const aboutButton = document.createElement('button');
aboutButton.setAttribute('class', 'button');
aboutButton.setAttribute('id', 'btnAbout');
aboutButton.textContent = 'About';

about.appendChild(aboutButton);

/*Append buttons and head title to the home page*/
buttonBar.appendChild(home);
buttonBar.appendChild(menu);
buttonBar.appendChild(about);
topBar.appendChild(title);
topBar.appendChild(buttonBar);

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
    content.appendChild(topBar);
    footer.appendChild(footerText);
    footer.appendChild(githubLink);
    loadHome();
}

export default loadPage;
