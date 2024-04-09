let bar = document.getElementById("bar");
let navBar = document.getElementById( "navBar" );
let close = document.getElementById( 'close' );
let shopCart =document.getElementById('shopCart')
let cartTap=document.getElementById('cart-tap');
let cartClose=document.getElementById('btn-close');
let listCary=document.getElementById('list-cart');
let tableCart=document.getElementById( 'cart-table' )

shopCart.addEventListener('click',function(){
    cartTap.style.cssText=`
    visibility: visible;
    `
})
cartClose.addEventListener('click',function(){
    cartTap.style.cssText='visibility:hidden';  
});
if (bar) {
    bar.addEventListener('click', () =>{
        navBar.style.display='block';
    })
    
}
if (close) {
    close.addEventListener('click', () =>{
        navBar.style.display='none';
    })
    
}
let  dataProducts;
if (localStorage.products !=null) {
    dataProducts = JSON.parse(localStorage.products)
}else{
    dataProducts=[];
}
let cardName=document.getElementById('card-name');
let cardPrice=document.getElementById('card-price');
let cardImg=document.getElementById('card-img');



let productsCard={
    name:cardName.textContent,
    price:cardPrice.textContent,
    img:cardImg.src,
}

function saveData() {
dataProducts.push(productsCard);
localStorage.setItem('products',JSON.stringify(dataProducts));
addToCCart()
}
function addToCCart() {
    let tr =document.createElement('tr') ;
    for (let index = 0; index < dataProducts.length; index++) {
        
        tr +=`
        <tr>
            <th><img src="img/products/f1.jpg" alt=""></th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
        </tr>
        `
    
    }
    tableCart.appendChild(tr);
}        


