class ProductsList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
    } 
    
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend',productObj.render())
        }
    }
    basketPrice(){
        let summ=0;
        for(let i in this.allProducts)
            summ+=this.allProducts[i].price;   
    }
}
class Basket{
    
    add(){

    }
    remove(){

    }
    buy(){

    }
}
class BasketItem{
    constructor(item, img="unnamed.jpg"){
        this.title = item.title;
		this.price = item.price;
		this.id = item.id;
		this.img = img;
    }
    render(){
        
    }
}

class ProductItem{
	constructor(product, img = "unnamed.jpg"){
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.img = img;
		
	}
	render(){
		 return `<div class="product-item" id="${this.id}">
         <img src="unnamed.jpg" alt="Картинка товара" width="50" height="50">
                     <h3 class="caption-title">${this.title}</h3>
                     <p class="price">${this.price}</p>
                     <button class="buy-btn">Добавить</button>
                 </div>`
	}
}
let list = new ProductsList();
list.render();
list.basketPrice();