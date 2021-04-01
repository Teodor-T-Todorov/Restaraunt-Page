const content = document.querySelector('#content');
const menuPage = document.createElement('div');
menuPage.setAttribute('class', 'menuPage');

const loadMenu = () =>
{
    menuPage.innerHTML = `
    <div class="pizzas">
        <div class="pizza1" id="pizza">
            <img src="images/p1.png" alt="pizza1" class="imgPizza">
            <h3 class="pizzaName">Anti-Vampire Pizza</h3>
            <p class="pizzaInfo">With salami, garlic and tomatoes</p>
            <div class = "orderBar">
                <p>Prize: 11,99$</p>
            <button class = "btnOrder"> Buy now </button>
        </div>
        </div>

        <div class="pizza2" id="pizza">
            <img src="images/p2.png" alt="pizza2" class="imgPizza">
            <h3 class="pizzaName">The Seaside Minecraft Cheese Pizza</h3>
            <p class="pizzaInfo">With shrimp, cheese and olives </p>
            <div class = "orderBar">
                <p>Prize: 11,99$</p>
                <button class = "btnOrder"> Buy now </button>
            </div>
        </div>

        <div class="pizza3" id="pizza">
            <img src="images/p3.png" alt="pizza3" class="imgPizza">
            <h3 class="pizzaName">Red Hot Chili Peppers</h3>
            <p class="pizzaInfo">With red pepper, cheese and olives </p>
            <div class = "orderBar">
                <p>Prize: 11,99$</p>
            <button class = "btnOrder"> Buy now </button>
        </div>
        </div>

        <div class="pizza4" id="pizza">
            <img src="images/p4.png" alt="pizza4" class="imgPizza">
            <h3 class="pizzaName">Hawaii Bacon</h3>
            <p class="pizzaInfo">With bacon, pineapple and olives </p>
            <div class = "orderBar">
                <p>Prize: 11,99$</p>
            <button class = "btnOrder"> Buy now </button>
        </div>
        </div>

        <div class="pizza5" id="pizza">
            <img src="images/p5.png" alt="pizza5" class="imgPizza">
            <h3 class="pizzaName">Geometric Pizza</h3>
            <p class="pizzaInfo">With peppers, shrooms and onion </p>
            <div class = "orderBar">
                <p>Prize: 11,99$</p>
            <button class = "btnOrder"> Buy now </button>
        </div>
        </div>

        <div class="pizza6" id="pizza">
            <img src="images/p6.png" alt="pizza6" class="imgPizza">
            <h3 class="pizzaName">Green Hot Chili Peppers</h3>
            <p class="pizzaInfo">With green pepper, cheese, olives and onion </p>
            <div class = "orderBar">
                <p>Prize: 11,99$</p>
            <button class = "btnOrder"> Buy now </button>
        </div>
        </div>

        <div class="pizza7" id="pizza">
            <img src="images/p7.png" alt="pizza7" class="imgPizza">
            <h3 class="pizzaName">Hawaii Shrimp</h3>
            <p class="pizzaInfo">With shrimps, pineapple and olives </p>
            <div class = "orderBar">
                <p>Prize: 11,99$</p>
            <button class = "btnOrder"> Buy now </button>
        </div>
        </div>

        <div class="pizza8" id="pizza">
            <img src="images/p8.png" alt="pizza8" class="imgPizza">
            <h3 class="pizzaName">Pizza of the House</h3>
            <p class="pizzaInfo">With salami, bacon, garlic and different peppers </p>
            <div class = "orderBar">
                <p>Prize: 11,99$</p>
            <button class = "btnOrder"> Buy now </button>
        </div>
        </div>

        <div class="pizza9" id="pizza">
            <img src="images/p9.png" alt="pizza9" class="imgPizza">
            <h3 class="pizzaName">Classy Vegan</h3>
            <p class="pizzaInfo">With green pepper, shrooms, onion and tomatoes </p>
            <div class = "orderBar">
                <p>Prize: 11,99$</p>
            <button class = "btnOrder"> Buy now </button>
        </div>
        </div>
    </div>

    `;

    content.appendChild(menuPage);
}


export {loadMenu, menuPage};
