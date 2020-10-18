const parsePrice = (price) => {
  return price.replace(/^\D+/g, "");
};

const getAmazonPrice = () => {
  var rawPrice = document.getElementById("priceblock_ourprice").innerHTML;
  var price = parsePrice(rawPrice);
  return price;
};

const getEbayPrice = () => {
  var rawPrice = document.getElementById("mm-saleDscPrc").innerHTML;
  var price = parsePrice(rawPrice);
  return price;
};

const fetchPriceFromVendor = () => {
  const amazonPrice = getAmazonPrice();
  // Temporary print statement
  console.log("PRICES", amazonPrice);
};

fetchPriceFromVendor();
