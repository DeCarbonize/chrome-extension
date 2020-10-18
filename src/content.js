const parsePrice = (price) => {
  return price.replace(/^\D+/g, "");
};

const computeFootprint = (price) => {
  const co2PerDollar = 122.8;
  return (price * co2PerDollar).toFixed(2);
};

const getAmazonPrice = () => {
  var rawPrice = document.getElementById("priceblock_ourprice").innerHTML;
  var price = parsePrice(rawPrice);
  return price;
};

const getEbayPrice = () => {
  // TODO: In the future, to compute the footprint for other popular e-commercesi
  var rawPrice = document.getElementById("mm-saleDscPrc").innerHTML;
  var price = parsePrice(rawPrice);
  return price;
};

const injectAmazonFootprint = (footprint) => {
  const price = document.getElementById("priceblock_ourprice");
  const title = `Estimated 👣 = ${footprint}g`;
  const titleBlock = document.createElement("span");
  const icon = document.createElement("img");
  icon.src = "https://i.ibb.co/LRNV941/40.png";
  icon.setAttribute("style", "height: 30px");
  titleBlock.textContent = title;
  titleBlock.setAttribute("style", "font-size: 14px; color: black");
  price.appendChild(document.createElement("br"));
  price.appendChild(icon);
  price.appendChild(titleBlock);
  price.appendChild(document.createElement("br"));
};

const fetchPriceFromVendor = () => {
  const amazonPrice = getAmazonPrice();
  const result = computeFootprint(amazonPrice);
  injectAmazonFootprint(result);
};

fetchPriceFromVendor();
