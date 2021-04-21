javascript:(function runTrack() {
  if(!window.ShopifyAnalytics) {
    alert('Tente novamente. Se não funcionar provavelmente esta loja não usa Shopify');
    return false;
  } else {
    console.log('Shopify Pixel Trigger: Started');
    var currency = window.ShopifyAnalytics.meta.currency;
    var contentId = window.ShopifyAnalytics.meta.product.id;
    var contentType = 'product_group';
    var contentCategory = window.ShopifyAnalytics.meta.product.type;
    var contentName = window.ShopifyAnalytics.meta.product.variants[0].name;
    var price = window.ShopifyAnalytics.meta.product.variants[0].price;
    var value = Number((price).toString().slice(0, (price).toString().length-2) + '.' + (price).toString().slice((price).toString().length-2));

    fbq('track', 'AddToCart', { content_type: contentType, content_ids: [contentId], content_category: contentCategory, content_name: contentName, value: value, currency: currency });
    console.log('|OK| AddToCart => value: ' + value + ', currency: ' + currency + ', content_id: ' + contentId + ', content_category: ' + contentCategory + ', content_name: ' + contentName);
  
    setTimeout(() => {
      fbq('track', 'InitiateCheckout', { content_type: contentType, content_ids: [contentId], content_category: contentCategory, content_name: contentName, value: value, currency: currency });
      console.log('|OK| InitiateCheckout => value: ' + value + ', currency: ' + currency + ', content_id: ' + contentId + ', content_category: ' + contentCategory + ', content_name: ' + contentName);
  
      setTimeout(() => {
        fbq('track', 'AddPaymentInfo', { content_type: contentType, content_ids: [contentId], content_category: contentCategory, content_name: contentName, value: value, currency: currency });
        console.log('|OK| AddPaymentInfo => value: ' + value + ', currency: ' + currency + ', content_id: ' + contentId + ', content_category: ' + contentCategory + ', content_name: ' + contentName);
  
        setTimeout(() => {
          fbq('track', 'Purchase', { content_type: contentType, content_ids: [contentId], content_category: contentCategory, content_name: contentName, value: value, currency: currency });
          console.log('|OK| Purchase => value: ' + value + ', currency: ' + currency + ', content_id: ' + contentId + ', content_category: ' + contentCategory + ', content_name: ' + contentName);
          setTimeout(() => {
            console.log('Shopify Pixel Trigger: Trackeamento Finalizado!');
          }, 200);
        }, 200);
      }, 200);
    }, 200);
  }
})()
