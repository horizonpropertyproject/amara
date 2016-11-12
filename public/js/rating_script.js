// JavaScript Document

  (function() {
    'use strict';
    var shop = document.querySelector('#shop');
    var data = [
       {
        title: "Rating",
        rating: 5
      }
    ];
    (function init() {
      for (var i = 0; i < data.length; i++) {
        addRatingWidget(buildShopItem(data[i]), data[i]);
      }
    })();
    function buildShopItem(data) {
      var shopItem = document.createElement('div');
      var html = '<div class="c-shop-item__img"></div>' +
     '<div class="c-shop-item__details">' +
          '<h6 class="c-shop-item__title">' + data.title + '</h6>' +
          '<ul class="c-rating"></ul>' +
        '</div>';
      shopItem.classList.add('c-shop-item');
      shopItem.innerHTML = html;
      shop.appendChild(shopItem);
      return shopItem;
    }
    function addRatingWidget(shopItem, data) {
      var ratingElement = shopItem.querySelector('.c-rating');
      var currentRating = data.rating;
      var maxRating = 5;
      var callback = function(rating) { alert(rating); };
      var r = rating(ratingElement, currentRating, maxRating, callback);
    }
  })();
