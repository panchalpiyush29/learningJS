let productPrices = [13, 24, 35, 46, 57, 68, 79, 80];
let discountedPrice = productPrices.map((price) => price - (price * 0.10));
console.log('Discounted Prices : ' + discountedPrice)
let affordableProducts = productPrices.filter((price) => price < 50);
console.log('Affordable Products : ' + affordableProducts)
let myProductList = affordableProducts.reduce((prePrice, currentPrice) => prePrice + currentPrice);
console.log('Total Price : ' + myProductList);
