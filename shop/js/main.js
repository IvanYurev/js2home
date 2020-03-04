const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];

const renderProduct = (obj) => {
    return `<div class="product-item" id="${obj.id}">
    <img src="unnamed.jpg" alt="Картинка товара" width="50" height="50">
                <h3 class="caption-title">${obj.title}</h3>
                <p class="price">${obj.price}</p>
                <button class="buy-btn">Добавить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map((item) => renderProduct(item));
   for( let i in productsList)
       document.querySelector('.products').innerHTML+= productsList[i];
}

renderPage(products);
