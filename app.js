const payRateUSD = 35;
const projectHours = 40;
const availableHours = (14 - 4) * 5;

console.log('Смогу ли я работать? '  + (availableHours > projectHours));
console.log('Стоимость работ ' + (projectHours * payRateUSD) + '$');
