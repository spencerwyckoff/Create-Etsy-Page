//DECLARE VARIABLES
var image;
var title;
var shopName;
var price;
var currency;
var listing;

//DECLARE JQUERY SELECTOR FOR WHERE ITEMS WILL END UP ON THE DOM
var listingsContainer = $('.container');

//FOR EACH ITEM IN THE ARRAY, RUN THIS FUNCTION
etsy.results.forEach( function (item) {

//SET THE VARIABLES TO THEIR CORRESPONDING ITEMS
image = item.Images[0].url_170x135;
title = item.title;
shopName = item.Shop.shop_name;
price = item.price;
currency = item.currency_code;

console.log(image);

//SET THE CONTENT OF THE ITEM BY CONCATENATING THEM TOGETHER
listing = "<div class='listing'>"; 
listing += "<a href='#'><img src='" + image;
listing += "' title='" + title + "'/></a>";
listing += "<h4 class='l_title'><a href='#'>" + title + "</a></h4>";
listing += "<span class='l_shop_name'><a href='#'>" + shopName + "</a></span>";


listing += "<span class='l_price'>" + "$" + price + " " + currency + "</span>";
listing += "</div>";

//Select the HTML listings container and append listing to it over and over again, 25 times.
listingsContainer.append(listing);

//CLOSE THE FUNCTION
});









