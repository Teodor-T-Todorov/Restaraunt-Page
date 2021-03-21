const content = document.querySelector('#content');

const greetingDiv = document.createElement('div');
greetingDiv.setAttribute('class', 'greetingDiv');
const greetingText = document.createElement('p');
greetingText.setAttribute('class', 'greetingText');
greetingText.textContent = "Welcome to Pizza House. Here you will find the best pizza in town bla bla.";
greetingDiv.appendChild(greetingText);


const homeScreen = document.createElement('div');
homeScreen.setAttribute('class', 'homeScreen');

const homeCard1 = document.createElement('div');
homeCard1.setAttribute('class', 'homeCard1');
const pizzaImg = document.createElement('img');
pizzaImg.setAttribute('class','pizzaImg');
pizzaImg.src = '../dist/images/1pizza.png';
const homeText1 = document.createElement('p');
homeText1.setAttribute('class', 'homeText1');
homeText1.textContent = "1. Choose a delicious pizza from our glorious menu."
homeCard1.appendChild(pizzaImg);
homeCard1.appendChild(homeText1);


const homeCard2 = document.createElement('div');
homeCard2.setAttribute('class', 'homeCard2');
const deliveryImg = document.createElement('img');
deliveryImg.setAttribute('class','deliveryImg');
deliveryImg.src = '../dist/images/2delivery.png';
const homeText2 = document.createElement('p');
homeText2.setAttribute('class', 'homeText2');
homeText2.textContent = "2. We'll make sure to deliver your pizza warm and fresh within 30 minutes from the order!";
homeCard2.appendChild(deliveryImg);
homeCard2.appendChild(homeText2);


const homeCard3 = document.createElement('div');
homeCard3.setAttribute('class', 'homeCard3');
const enjoyImg = document.createElement('img');
enjoyImg.setAttribute('class', 'enjoyImg');
enjoyImg.src = '../dist/images/3enjoy.png';
const homeText3 = document.createElement('p');
homeText3.setAttribute('class', 'homeText3');
homeText3.textContent = "3. It's that simple! Enjoy our pizza which is made with passion and love!";
homeCard3.appendChild(enjoyImg);
homeCard3.appendChild(homeText3);

homeScreen.appendChild(homeCard1);
homeScreen.appendChild(homeCard2);
homeScreen.appendChild(homeCard3);


const homeLoad = () =>
{
    content.appendChild(greetingDiv);
    content.appendChild(homeScreen);
}

export default homeLoad;