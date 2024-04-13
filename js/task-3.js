function checkForSpam(message) {
  const banWord1 = "spam";
  const banWord2 = "sale";
  const includesBW1 = message.toLowerCase().includes(banWord1);
  const includesBW2 = message.toLowerCase().includes(banWord2);
  const includesBWS = includesBW1 || includesBW2;
  return includesBWS;
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
