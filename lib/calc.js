'use strict';
module.exports.computeResult = function(people, data) {
    var result = 0;
    if (people < 2) {
        return result;
    }

    var sum = 0;
    data.forEach(function (item) {
        sum = sum + item;
    });

    var average = sum / people;

    var difference = [];
    data.forEach(function (item) {
        var itemDifference = average - item;
        difference.push(itemDifference);
        //sum = sum + item;
    });

    var amountOwed=0;
    difference.forEach(function (item) {
      if(item < 0)
        {
             amountOwed = amountOwed + (item * -1);
        }
       
    });

    result = round(amountOwed,2);
     return result;
};

function round(value, exp) {
  if (typeof exp === 'undefined' || +exp === 0)
    return Math.round(value);

  value = +value;
  exp = +exp;

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
    return NaN;

  // Shift
  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

  // Shift back
  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}