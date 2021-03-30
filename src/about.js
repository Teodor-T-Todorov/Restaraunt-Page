const content = document.querySelector('#content');
const aboutPage = document.createElement('div');
aboutPage.setAttribute('class', 'aboutPage');

const loadAbout = () =>
{
    aboutPage.innerHTML = `
        <div class="aboutInfo">
            <b>About</b>
            <p>Pizza House is all about tradition and taste.
            We use our own grown products to make the pizza taste as good as ever.
            Everything we do is with love and passion.
            </p>
        </div>
        <div class="contactsInfo">
            <b>Contacts</b>
            <p>Phone: 038 138 238</p>
            <p>Adress: 38 Thirty Eight street</p>
            <p>e-mail: pizzahouse38@pizzahouse.com</p>
        </div>
    `;
    content.appendChild(aboutPage);
}


export {loadAbout, aboutPage};