function discoverOriginalPrice(discountedPrice, salePercentage){


   return  +(discountedPrice * 100 / ( 100 - salePercentage )).toFixed(2)


}


console.log(  discoverOriginalPrice(458.2, 17.13)  )