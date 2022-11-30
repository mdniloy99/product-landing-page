let featuredProduct = document.querySelector( '#product' );
let blueProduct = document.querySelector( '#blue' );
let whiteProduct = document.querySelector( '#white' );
let blackProduct = document.querySelector( '#black' );

blueProduct.addEventListener('click', () => {
    document.body.style.background = '#0260bf';

    product.setAttribute('src', './image/pepsi001.png');
});

whiteProduct.addEventListener('click', () => {
    document.body.style.background = '#b7b6ba';

    product.setAttribute('src', './image/pepsi002.png');
});

blackProduct.addEventListener('click', () => {
    document.body.style.background = '#000000';

    product.setAttribute('src', './image/pepsi003.png');
});