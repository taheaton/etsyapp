'use strict';

(function () {

  var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=panerai&includes=Images,Shop';
  var templateString = $('#itemTemplate').text();

  var templateFunction = _.template(templateString);

  $.ajax({
    url: etsyURL,
    dataType: 'jsonp',
    method: 'get'
  }).then(function (etsy) {

    _.each(etsy.results, function (item) {
      console.log(item);
      var itemHTML = templateFunction(item);

      $('.container').append(itemHTML);
    });
  });

  // mine

  // end mine
  // console.log(etsy.results);
})();