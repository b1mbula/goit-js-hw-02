function getShippingCost(country) {
  const China = 100;
  const Chile = 250;
  const Australia = 170;
  const Jamaica = 120;
  switch (country) {
    case "China":
      return `Shipping to ${country} will cost ${China} credits`;
    case "Chile":
      return `Shipping to ${country} will cost ${Chile} credits`;
    case "Australia":
      return `Shipping to ${country} will cost ${Australia} credits`;
    case "Jamaica":
      return `Shipping to ${country} will cost ${Jamaica} credits`;
    default:
      return "Sorry, there is no delivery to your country";
  }
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
