//import loadPage
import loadPage from './loadPage';
import {loadHome, homePage} from './home';
import {loadMenu, menuPage} from './menu';
import {loadAbout, aboutPage} from './about'
loadPage();

const topBar = document.querySelector('.topBar');

topBar.addEventListener('click', function(e)
{
    if(e.target.id == 'btnHome')
    {
        if(document.getElementsByClassName('menuPage'))
        {
            menuPage.remove();
        }
        if(document.getElementsByClassName('aboutPage'))
        {
            aboutPage.remove();
        }
        loadHome();
    }

    else if(e.target.id == 'btnMenu')
    {
        if(document.getElementsByClassName('homePage'))
        {
            homePage.remove();
        }
        if(document.getElementsByClassName('aboutPage'))
        {
            aboutPage.remove();
        }
        loadMenu();
    }

    else if(e.target.id == 'btnAbout')
    {
        if(document.getElementsByClassName('homePage'))
        {
            homePage.remove();
        }
        if(document.getElementsByClassName('menuPage'))
        {
            menuPage.remove();
        }
        loadAbout();
    }
})