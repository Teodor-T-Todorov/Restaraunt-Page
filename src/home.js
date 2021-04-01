const content = document.querySelector('#content');

const homePage = document.createElement('div');
homePage.setAttribute('class', 'homePage');


const loadHome = () =>
{
    homePage.innerHTML = `
    <div class="homePage">
        <div class="homeText">
            <p class="greetingText">Welcome to Pizza House. Here you will find the best pizza in town bla bla.</p>
        </div>
        <div class="homeScreen">
            <div class="homeCard1">
                <img class="pizzaImg" src="images/1pizza.png">
                <p class="homeText1">1. Choose a delicious pizza from our diverse menu full with a lot of surpirses!</p>
            </div>
            <div class="homeCard2">
                <img class="deliveryImg" src="images/2delivery.png">
                <p class="homeText2">2. We'll make sure to deliver your pizza warm and fresh within 30 minutes from the order!</p>
                </div>
            <div class="homeCard3">
                <img class="enjoyImg" src="images/3enjoy.png">
                <p class="homeText3">3. It's that simple! Enjoy our pizza which is made with passion and love!</p>
            </div>
        </div>
    </div>
    `;
    content.appendChild(homePage);
}

export {loadHome, homePage};
