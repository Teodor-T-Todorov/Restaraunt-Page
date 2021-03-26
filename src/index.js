//import loadPage
import loadPage from './loadPage';
import {loadHome, removeHome} from './home';
import {loadMenu, removeMenu} from './menu';
loadPage();

const topBar = document.querySelector('.topBar');

topBar.addEventListener('click', function(e)
{
    if(e.target.id == 'btnHome')
    {
        if(document.getElementsByClassName('menuPage'))
        {
            removeMenu();
        }
        loadHome();
    }

    else if(e.target.id == 'btnMenu')
    {
        if(document.getElementsByClassName('homePage'))
        {
            removeHome();
        }
        loadMenu();
    }

    else if(e.target.id == 'btnAbout')
    {

    }
})