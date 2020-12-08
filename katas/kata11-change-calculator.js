const calculateChange = function(total, cash) {

  const change = {};
  let difference = cash - total;

  while (difference > 0) {

    if (difference >= 2000) {
      change.twentyDollar = change.twentyDollar +1 || 1;
      difference -= 2000;
    } else if (difference >= 1000) {
      change.tenDollar = change.tenDollar +1 || 1;
      difference -= 1000;
    } else if (difference >= 500) {
      change.fiveDollar = change.fiveDollar +1 || 1;
      difference -= 500;
    } else if (difference >= 200) {
      change.twoDollar = change.twoDollar +1 || 1;
      difference -= 200;
    } else if (difference >= 100) {
      change.oneDollar = change.oneDollar +1 || 1;
      difference -= 100;
    } else if (difference >= 25) {
      change.quarter = change.quarter +1 || 1;
      difference -= 25;
    } else if (difference >= 10) {
      change.dime = change.dime +1 || 1;
      difference -= 10;
    } else if (difference >= 5) {
      change.nickel = change.nickel +1 || 1;
      difference -= 5;
    } else if (difference >= 1) {
      change.penny = change.penny +1 || 1;
      difference -= 1;
    }
  }
  return change;
};


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));