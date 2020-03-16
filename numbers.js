const num1 = 15;
const num2 = 88;
let value; 


value = num1 + num2;

value = value + 100;
value += 100;

value = 4 % 2; // 0. остаток от делания 

value++; // изменение будут на следующей строке
value--;
++value;  // изменение будут на этой же строке
--value;


value = 0.6 + 0.7; // 1.29999998 (из за работы с памятью и работы с дробью) для решения 

value = parseFloat(value.toFixed(1));
value = (0.6 * 10 + 0.7 * 10) / 10; // 1.3


Console.log(value);