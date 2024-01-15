//VARIABLE DECLARATION
var num = 1;
var str = "hello world";
var bool = true;
var none = null;
var notKnown = undefined;
document.getElementById(
  "variableD"
).innerHTML += ` Number : ${num} <br>  String : ${str} <br> Boolean : ${bool}<br>  Null : ${none} <br> Undefined : ${notKnown}`;
//PRINT HELLO WORLD
var x = "hello world";
document.getElementById("printing").innerHTML = x;
printing.classList.add("text-primary", "fs-5");
// SUM And DIFFERENCE OF 2 NUMBERS

var Calculate = () => {
  let Num1 = parseInt(document.getElementById("num1").value);
  let Num2 = parseInt(document.getElementById("num2").value);
  let operator = document.getElementById("op").value;

  switch (operator) {
    case "+":
      let sum = Num1 + Num2;
      document.getElementById("calculate").innerHTML = `Sum = ${sum}`;
      break;
    case "-":
      let sub = Num1 - Num2;
      document.getElementById("calculate").innerHTML = `Difference = ${sub}`;
  }
};

//CUBE OF A NUMBER
function Cube() {
  let Num3 = document.querySelector("#num3").value;
  let cube = Num3 * Num3 * Num3;
  document.getElementById("cubeofnum").innerHTML = ` Cube Of ${Num3} = ${cube}`;
}

//SWAPING

function Swap() {
  let Num4 = document.getElementById("num4").value;
  let Num5 = document.getElementById("num5").value;

  let temp = Num4;
  Num4 = Num5;
  Num5 = temp;
  document.getElementById("num4").value = Num4;
  document.getElementById("num5").value = Num5;
}
//CONDITIONAL STATEMENTS AND LOOPS

//Create an array then merge these arrays with no repeating values
let array1 = ["php", "javascript", "python"];
let array2 = ["php", "ruby", ".net"];
let array3 = ["angular", "javascript", "typescript"];
let array4 = ["ecmascript", "java", "python"];
let array = [...array1, ...array2, ...array3, ...array4];

// Display arrays before merging downwards
document.getElementById("merge").innerHTML = `<h3>Array Before Merging</h3>`;
for (let i = 0; i < array.length; i++) {
  document.getElementById("merge").innerHTML += `${array[i]}<br>`;
}

let set = new Set(array);
let text = " ";
set.forEach(myFunction);

document.getElementById(
  "unique"
).innerHTML = `<h3>Array After Merging</h3>${text}`;

function myFunction(item) {
  text += item + "<br>";
}

//Factorial Of  A Number

function Factorial() {
  let fact = 1;
  let Num7 = document.getElementById("num7").value;
  for (i = 0; i < Num7; i++) {
    fact = fact * (Num7 - i);
  }
  document.getElementById("fact").innerHTML = `Factorial Of ${Num7} = ${fact} `;
}

//Creating review stars

let stars = [
  {
    key: 1,
    value: "&#9733",
  },
  {
    key: 2,
    value: "&#9733",
  },
  {
    key: 3,
    value: "&#9733",
  },
  {
    key: 4,
    value: "&#9733",
  },
  {
    key: 5,
    value: "&#9733",
  },
];

const starLength = stars.length;

for (i = 0; i < starLength; i++) {
  document.getElementById(
    "review"
  ).innerHTML += `<span id=star${stars[i].key} onclick=(colorStar(${stars[i].key}))> ${stars[i].value}</span>`;
}

function colorStar(count) {
  for (let i = 1; i <= starLength; i++) {
    if (i <= count) {
      document.getElementById(`star${i}`).classList.add("add-color");
      document.getElementById(`star${i}`).classList.remove("remove-color");
    } else {
      document.getElementById(`star${i}`).classList.add("remove-color");
      document.getElementById(`star${i}`).classList.remove("add-color");
    }
  }
  document.getElementById("counts").innerHTML = `${count} Rating`;
}
//Find Largest Of Two Numbers

function largestOfTwo() {
  let Num8 = parseInt(document.getElementById("num8").value);
  let Num9 = parseInt(document.getElementById("num9").value);
  if (Num8 < Num9) {
    document.getElementById("Largest").innerHTML = `${Num9} Is Largest`;
  } else {
    document.getElementById("Largest").innerHTML = `${Num8} Is Largest`;
  }
}

//Find Largest Of Three Numbers
function largestOfThree() {
  let Num10 = parseInt(document.getElementById("num10").value);
  let Num11 = parseInt(document.getElementById("num11").value);
  let Num12 = parseInt(document.getElementById("num12").value);
  let display = document.getElementById("thirdLarge");
  if (Num10 > Num11) {
    if (Num10 > Num12) {
      display.innerHTML = `${Num10} Is Largest`;
    } else {
      display.innerHTML = `${Num12} Is Largest`;
    }
  } else {
    if (Num11 > Num12) {
      display.innerHTML = `${Num11} Is Largest`;
    } else {
      display.innerHTML = `${Num12} Is Largest`;
    }
  }
}
//Armstrong or not

function findArmstrong() {
  let sum = 0;
  let Num13 = parseInt(document.getElementById("num13").value);
  let temp = Num13;
  while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10);
  }
  if (sum == Num13) {
    document.getElementById(
      "armstrong"
    ).innerHTML = `${Num13} is an Armstrong Number`;
  } else {
    document.getElementById(
      "armstrong"
    ).innerHTML = `${Num13} is not an Armstrong Number.`;
  }
}
//Even  Or Odd Number
function Odd_Even() {
  let Num14 = document.getElementById("num14").value;
  if (Num14 % 2 == 0) {
    document.getElementById(
      "oddoreven"
    ).innerHTML = `${Num14} is an even number`;
  } else {
    document.getElementById(
      "oddoreven"
    ).innerHTML = `${Num14} is an odd number`;
  }
}
//Divide By Two And Five
function Divisible() {
  let Num15 = parseInt(document.getElementById("num15").value);
  if (Num15 % 2 == 0) {
    if (Num15 % 5 == 0) {
      document.getElementById(
        "divisible"
      ).innerHTML = `${Num15} Is Divisible By Both 5 And 2`;
    } else {
      document.getElementById(
        "divisible"
      ).innerHTML = `${Num15} Is Divisible By 2 <br> Not Divisible By 5`;
    }
  } else {
    if (Num15 % 5 == 0) {
      document.getElementById(
        "divisible"
      ).innerHTML = `${Num15} Is Divisible By 5 <br> Not Divisible By 2`;
    } else {
      document.getElementById(
        "divisible"
      ).innerHTML = `${Num15} Is Not Divisible By Both 5 And 2`;
    }
  }
}
//Reverse A String
function reverseString() {
  let Str1 = document.querySelector("#str1").value;
  let splitString = Str1.split("");
  let reversed = splitString.reverse();
  let joinString = reversed.join("");
  document.getElementById("reverse").innerHTML = `${joinString}`;
}
//Day Of A Week
function daysOfWeek() {
  let Num16 = parseInt(document.querySelector("#num16").value);
  let dayprint = document.getElementById("days");
  switch (Num16) {
    case 1:
      dayprint.innerHTML = "SUNDAY";
      break;
    case 2:
      dayprint.innerHTML = "MONDAY";
      break;
    case 3:
      dayprint.innerHTML = "TUESDAY";
      break;
    case 4:
      dayprint.innerHTML = "WEDNESDAY";
      break;
    case 5:
      dayprint.innerHTML = "THURSDAY";
      break;
    case 6:
      dayprint.innerHTML = "FRIDAY";
      break;
    case 7:
      dayprint.innerHTML = "SATURDAY";
      break;
    default:
      dayprint.innerHTML = "Wrong Input!!!";
  }
}
//Multiplication Table
function Multiplication() {
  let Num17 = document.getElementById("num17").value;
  for (let i = 1; i <= 10; i++) {
    document.getElementById("multi").innerHTML += `${Num17} * ${i} = ${
      Num17 * i
    } <br>`;
  }
}
function Clear() {
  document.getElementById("multi").innerHTML = " ";
  document.getElementById("num17").value = " ";
}
//Sum Of Given  Numbers
function sumOfNumbers() {
  let Num18 = parseInt(document.getElementById("num18").value);
  let Sum = 0;
  for (i = 1; i <= Num18; i++) {
    Sum = Sum + i;
  }
  document.getElementById("sum").innerHTML = `${Sum}`;
}
function ClearSum() {
  document.getElementById("sum").innerHTML = " ";
  document.getElementById("num18").value = " ";
}
//Fibinocii Series
function Series() {
  let Num19 = parseInt(document.getElementById("num19").value);
  let n1 = 0,
    n2 = 1,
    nextTerm;

  for (let i = 1; i <= Num19; i++) {
    document.getElementById("fseries").innerHTML += `${n1}  &nbsp;`;
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}
function ClearSeries() {
  document.getElementById("fseries").innerHTML = " ";
  document.getElementById("num19").value = " ";
}
//String Palindrome
function stringPalindrome() {
  let display2 = document.getElementById("strPalindrome");
  let Str2 = document.getElementById("str2").value;
  let temp = Str2;
  let stringValue = temp.split("");
  let reverseValue = stringValue.reverse();
  let joined = reverseValue.join("");
  if (Str2 == joined) {
    display2.innerHTML = `${Str2} Is Palindrome`;
  } else {
    display2.innerHTML = `${Str2} Is Not Palindrome`;
  }
}
function ClearPalindrome() {
  document.getElementById("strPalindrome").innerHTML = " ";
  document.getElementById("str2").value = " ";
}
//Number Palindrome
let display3 = document.getElementById("numPalindrome");
function numberPalindrome() {
  let Num20 = document.getElementById("num20").value;
  let temp2 = Num20;
  var rev = 0;
  while (temp2 > 0) {
    let rem = temp2 % 10;
    rev = rev * 10 + rem;
    temp2 = parseInt(temp2 / 10);
  }
  if (rev == Num20) {
    display3.innerHTML = `${Num20} Is Palindrome`;
  } else {
    display3.innerHTML = `${Num20} Is Not Palindrome`;
  }
}
function ClearNumPalindrome() {
  display3.innerHTML = " ";
  document.getElementById("num20").value = " ";
}
//Prime Or Not
let display4 = document.getElementById("prime");
function checkPrime() {
  let Num21 = parseInt(document.getElementById("num21").value);
  let isPrime = 1;
  for (i = 2; i <= Num21 / 2; i++) {
    if (Num21 % i == 0) {
      isPrime = 0;
      break;
    }
  }
  if (isPrime == 1) {
    display4.innerHTML = `${Num21} Is Prime`;
  } else {
    display4.innerHTML = `${Num21} Is Not Prime`;
  }
}
function ClearPrime() {
  display4.innerHTML = " ";
  document.getElementById("num21").value = " ";
}
//Prime Up To Limit
let display5 = document.getElementById("primelimit");
function checkPrimeLimit() {
  let Num22 = parseInt(document.getElementById("num22").value);
  for (i = 2; i <= Num22; i++) {
    let isPrime = 0;
    for (j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime++;
      }
    }
    if (isPrime == 0) {
      display5.innerHTML += `${i} &nbsp;`;
    }
  }
}
function ClearPrimeLimit() {
  display5.innerHTML = " ";
  document.getElementById("num22").value = " ";
}

//Reverse  Of Number

let display6 = document.getElementById("reversenum");
function reverseNumber() {
  let Num23 = document.getElementById("num23").value;
  var rev = 0;
  while (Num23 > 0) {
    let rem = Num23 % 10;
    rev = rev * 10 + rem;
    Num23 = parseInt(Num23 / 10);
  }
  display6.innerHTML = `${rev} `;
}
function ClearReverse() {
  display6.innerHTML = " ";
  document.getElementById("num23").value = " ";
}
// Print Number In To Words

//ARRAYS
//ARRAY With Out Loop
let display7 = document.getElementById("acceptArray");
function AcceptArray() {
  let Num24 = document.getElementById("num24").value;
  let array1 = Num24.split(" ");
  display7.innerHTML = `<span class="text-primary fs-6 fw-bolder">0 : ${array1[0]} <br> 1 : ${array1[1]} <br> 2 : ${array1[2]} <br> 3 : ${array1[3]} <br> 4 : ${array1[4]} </span>`;
}
function ClearAcceptArray() {
  display7.innerHTML = " ";
  document.getElementById("num24").value = " ";
}
//Array With Loop
let display8 = document.getElementById("acceptArrayLoop");
function AcceptArrayLoop() {
  let Num25 = document.getElementById("num25").value;
  let array2 = Num25.split(" ");
  array2.map((item, index) => {
    display8.innerHTML += `<span class="text-danger fs-6 fw-bold ">${index}</span> : ${item} <br>`;
  });
}
function ClearAcceptArrayLoop() {
  display8.innerHTML = " ";
  document.getElementById("num25").value = " ";
}

//Reverse Array
let display9 = document.getElementById("reverseArray");
function ReverseArray() {
  let Num26 = document.getElementById("num26").value;
  let array3 = Num26.split(" ");
  array3.reverse();
  array3.map((item, index) => {
    display9.innerHTML += `<span class="text-danger fs-6 fw-bold ">${index}</span> : ${item} &nbsp;`;
  });
}
function ClearReverseArray() {
  display9.innerHTML = " ";
  document.getElementById("num26").value = " ";
}
// Sum Of Two Arrays
let display10 = document.getElementById("sumarray");
function sumArray() {
  let Num27 = document.getElementById("num27").value;
  let Num28 = document.getElementById("num28").value;
  let array4 = Num27.split(" ");
  let array5 = Num28.split(" ");
  let array_sum1;
  for (i = 0; i < array4.length; i++) {
    for (j = 0; j <= i; j++) {
      array_sum1 = parseInt(array4[i]) + parseInt(array5[j]);
    }
    display10.innerHTML += `${i} : ${array_sum1} <br>`;
  }
}
function ClearSumArray() {
  display10.innerHTML = " ";
  document.getElementById("num27").value = "";
  document.getElementById("num28").value = "";
}
//Sum Of Elements Of Array
let display11 = document.getElementById("sumelements");
function sumElements() {
  let Num29 = document.getElementById("num29").value;
  let array6 = Num29.split(" ");
  let array_sum2 = 0;
  array6.map((item) => {
    array_sum2 = array_sum2 + Number(item);
  });
  display11.innerHTML = `Sum Of Elements Of Array = ${array_sum2}`;
}
function ClearSumElements() {
  display11.innerHTML = " ";
  document.getElementById("num29").value = " ";
}
//Search Array
let display12 = document.getElementById("searcharray");
function searchArray() {
  let Num30 = document.getElementById("num30").value;
  let Num31 = document.getElementById("num31").value;
  let array7 = Num30.split(" ");
  let isFound = 0;
  for (i = 0; i < array7.length; i++) {
    if (array7[i] == Num31) {
      isFound = 1;
      break;
    }
  }
  if (isFound == 1) {
    display12.innerHTML += `${Num31} Found At Index ${i} `;
  } else {
    display12.innerHTML += `${Num31} Not Found`;
  }
}

function ClearSearch() {
  display12.innerHTML = " ";
  document.getElementById("num30").value = " ";
  document.getElementById("num31").value = " ";
}

//Equal Array
let display13 = document.getElementById("equalarray");
function EqualArray() {
  let Num32 = document.getElementById("num32").value;
  let Num33 = document.getElementById("num33").value;
  var array8 = Num32.split(" ");
  var array9 = Num33.split(" ");
  var isEqual = 0;
  for (i = 0; i < array8.length; i++) {
    for (j = 0; j <= i; j++) {
      if (array8[i] === array9[j] && array8.length == array9.length) {
        isEqual = 1;
        break;
      }
    }
  }
  if (isEqual == 1) {
    display13.innerHTML = `They Are Equal`;
  } else {
    display13.innerHTML = `They Are Not Equal`;
  }
}
function ClearEqualArray() {
  display13.innerHTML = " ";
  document.getElementById("num32").value = " ";
  document.getElementById("num33").value = " ";
}
//Largest Element Of An Array
let display14 = document.getElementById("largearray");
function LargeArray() {
  let Num34 = document.getElementById("num34").value;
  let array10 = Num34.split(" ");
  let LargestNumber = Math.max(...array10);
  display14.innerHTML = `${LargestNumber} Is Largest`;
}
function ClearLargeArray() {
  display14.innerHTML = " ";
  document.getElementById("num34").value = " ";
}
//Sorting Array In Ascending Order
let display15 = document.getElementById("sortarray");
function SortArray() {
  let Num35 = document.getElementById("num35").value;
  let array11 = Num35.split(" ");
  array11.sort(function (a, b) {
    return a - b;
  });
  display15.innerHTML = `${array11}`;
}
function ClearSortArray() {
  display15.innerHTML = " ";
  document.getElementById("num35").value = " ";
}
//Remove An Element In an Array
let display16 = document.getElementById("removearray");

function RemoveArray() {
  let Num36 = document.getElementById("num36").value;
  let Num37 = document.getElementById("num37").value;
  let array12 = Num36.split(" ");

  array12.forEach((item, index) => {
    if (item == Num37) {
      array12.splice(index, 1);
    }
  });

  display16.innerHTML = `Removed Element : ${Num37} <br>Resultant Array : ${array12.join(
    " "
  )}`;
}

function ClearRemoveArray() {
  display16.innerHTML = " ";
  document.getElementById("num36").value = " ";
  document.getElementById("num37").value = " ";
}
//STAR PRINTING
//Full Pyramid
let display17 = document.getElementById("fullstar");
function PrintFull() {
  let Num38 = document.getElementById("num38").value;
  for (i = 0; i < Num38; i++) {
    for (j = 0; j <= i; j++) {
      display17.innerHTML += `* &nbsp`;
      display17.classList.add("text-primary", "fs-5");
    }
    display17.innerHTML += `<br>`;
  }
}
function ClearPrintFull() {
  display17.innerHTML = " ";
  document.getElementById("num38").value = " ";
}
//Left Pyramid
let display18 = document.getElementById("leftstar");

function PrintLeft() {
  let Num40 = document.getElementById("num40").value;

  for (let i = 0; i < Num40; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
      row += "* ";
    }
    display18.innerHTML += `${row}<br>`;
    display18.classList.add("text-danger", "fs-5");
  }
}
//right Pyramid
let display19 = document.getElementById("rightstar");

function PrintRight() {
  display19.innerHTML = "";
  let Num39 = document.getElementById("num39").value;
  for (let i = 0; i < Num39; i++) {
    let row = "";
    for (let k = 0; k < Num39 - i - 1; k++) {
      row += "&nbsp;&nbsp;&nbsp;&nbsp;";
    }
    for (let j = 0; j <= i; j++) {
      row += "*&nbsp;&nbsp;&nbsp;";
    }
    display19.innerHTML += `${row}<br>`;
    display19.classList.add("text-danger", "fs-5");
  }
}
function ClearPrintRight() {
  display19.innerHTML = " ";
  document.getElementById("num39").value = " ";
}

function ClearPrintLeft() {
  display18.innerHTML = " ";
  document.getElementById("num40").value = " ";
}
//Class Declaration
class student {
  constructor(id, name, mark) {
    this.id = id;
    this.name = name;
    this.mark = mark;
  }
}
const std1 = new student(1, "Athira", 100);
const std2 = new student(2, "Gayathri", 100);
const std3 = new student(3, "Nihaal", 100);

document.getElementById(
  "class1"
).innerHTML = `<table class="table table-hover table-dark w-50 mx-auto">
<tr>
<th>Id</th>
<th>Name</th>
<th>Mark</th>
</tr>
<tr>
<td>${std1.id}</td>
<td> ${std1.name}</td>
<td> ${std1.mark}</td>
</tr>
<tr>
<td>${std2.id}</td>
<td>${std2.name}</td>
<td>${std2.mark}</td>
</tr>
<tr>
<td>${std3.id}</td>
<td>${std3.name}</td>
<td>${std3.mark}</td>
</tr>
</table>`;
//Divisible By 5 and 6
let display20 = document.getElementById("division");
function Divisible2() {
  let Num41 = parseInt(document.getElementById("num41").value);
  if (Num41 % 5 == 0) {
    if (Num41 % 6 == 0) {
      display20.innerHTML = `${Num41} Is Divisible By Both 6 And 5`;
    } else {
      display20.innerHTML = `${Num41} Is Divisible By 5 <br> Not Divisible By 6`;
    }
  } else {
    if (Num41 % 6 == 0) {
      display20.innerHTML = `${Num41} Is Divisible By 6 <br> Not Divisible By 5`;
    } else {
      display20.innerHTML = `${Num41} Is Not Divisible By Both 6 And 5`;
    }
  }
}
function clearDivision() {
  display20.innerHTML = " ";
  document.getElementById("num41").value = " ";
}
//Student Details
let display21 = document.getElementById("studentDetails");

function View_Results() {
  let Str3 = document.getElementById("str3").value;
  let array14 = Str3.split(" ");

  let Num42 = document.getElementById("num42").value;
  let array13 = Num42.split(" ");

  let sum_marks = 0;
  let avg_marks = 0;

  for (let i = 0; i < array14.length; i++) {
    sum_marks += Number(array13[i]);
  }

  avg_marks = sum_marks / array14.length;

  if (avg_marks > 100) {
    display21.innerHTML = "Maximum Mark Should Be 100";
  } else {
    display21.innerHTML = "";

    display21.innerHTML += "Students With Highest Marks<br>";
    for (let i = 0; i < array14.length; i++) {
      if (Number(array13[i]) >= avg_marks) {
        display21.innerHTML += `<span class="text-success fs-6">Name : ${array14[i]} &nbsp;  Mark : ${array13[i]}<br> </span>`;
      }
    }

    for (let i = 0; i < array14.length; i++) {
      if (Number(array13[i]) < avg_marks) {
        display21.innerHTML += `<span class="text-danger fs-6">  ${array14[i]}   &nbsp; </span>`;
      }
    }
    display21.innerHTML += " are Below Average Students";
  }
}

function ClearResults() {
  display21.innerHTML = " ";
  document.getElementById("num42").value = " ";
  document.getElementById("str3").value = " ";
}
//GENERATE INVOICE
let display22 = document.getElementById("invoice");

function generateInvoice() {
  let Str4 = document.getElementById("str4").value;
  let Num43 = document.getElementById("num43").value;
  let Str5 = document.getElementById("str5").value;
  display22.classList.remove("d-none");
  var array15 = Str4.split(" ");
  var array16 = Num43.split(" ");
  var totalOrderPrice = 0;
  if (Str4 == "" || Num43 == "" || Str5 == "") {
    alert("Please enter values");
  } else {
    if (array15.length == array16.length) {
      let tableHTML = `
        <p class="fw-bolder fs-2 text-primary ">JAVA CAFE</p>
        <table class="table table-light table-hover w-100 ">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Shipping Price</th>
              <th>Total Per Item</th>
            </tr>
          </thead>
          <tbody>`;

      for (let i = 0; i < array15.length; i++) {
        var shipping_charge = 0;
        if (Str5 == "yes") {
          shipping_charge = 5;
        }
        if (array16[i] <= 10) {
          shipping_charge = shipping_charge + 2;
        } else {
          shipping_charge = shipping_charge + 3;
        }

        var total_price = Number(array16[i]) + shipping_charge;
        totalOrderPrice += total_price;

        tableHTML += `
          <tr>
            <td>${array15[i]}</td>
            <td>${array16[i]}</td>
            <td>${shipping_charge}</td>
            <td>${total_price}</td>
          </tr>`;
      }

      tableHTML += ` 
          <tr>
            <th colspan="3">Total Price</th>
            <td>${totalOrderPrice}</td>
          </tr>
          </tbody>
        </table>`;

      display22.innerHTML = tableHTML;
    }
  }
}
function clearInvoice() {
  display22.innerHTML = " ";
  document.getElementById("str4").value = " ";
  document.getElementById("str5").value = " ";
  document.getElementById("num43").value = " ";
}
// Find ASCII

let display23 = document.getElementById("ascii");
function findASCII() {
  let Str6 = document.getElementById("str6").value;
  if (Str6.length == 1) {
    var asciiValue = Str6.charCodeAt(0);
    display23.innerHTML = `ASCII Value Of <span class="fw-bolder fs-5 text-dark">${Str6}</span> : ${asciiValue}`;
  } else {
    display23.innerHTML = `<p class="text-danger fs-5">Please enter a single character.</p>`;
  }
}

// 2 X 2 Matrix

let display24 = document.getElementById("matrix");
function displayMatrix() {
  let Num44 = document.getElementById("num44").value;
  let array17 = Num44.split(" ");
  if (array17.length == 4) {
    for (i = 0; i < 2; i++) {
      for (j = 0; j < 2; j++) {
        let matrix = parseInt(array17[i * 2 + j]);
        display24.innerHTML += `${matrix}&nbsp;&nbsp;&nbsp;&nbsp;`;
      }
      display24.innerHTML += `<br>`;
    }
  } else {
    display24.innerHTML = `Please Enter 4 Numbers`;
  }
}
//Transpose Of Matrix
let display25 = document.getElementById("transpose");

function Transpose() {
  let Num45 = document.getElementById("num45").value;
  let array18 = Num45.split(" ");

  if (array18.length == 9) {
    let matrix = new Array(3);
    for (let i = 0; i < 3; i++) {
      matrix[i] = [];
      for (let j = 0; j < 3; j++) {
        matrix[i][j] = parseInt(array18[i * 3 + j]);
      }
    }

    let transposedMatrix = [];

    // Transpose the matrix
    for (let i = 0; i < 3; i++) {
      transposedMatrix[i] = [];
      for (let j = 0; j < 3; j++) {
        transposedMatrix[i][j] = matrix[j][i];
      }
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        display25.innerHTML += `${transposedMatrix[i][j]} &nbsp; `;
      }
      display25.innerHTML += `<br> `;
    }
  } else {
    display25.innerHTML = `Please Enter 9 Values`;
  }
}
// Sum Of 2 X 2 Matrix
let display26 = document.getElementById("summatrix");

function SumMatrix() {
  let Num46 = document.getElementById("num46").value;
  let Num47 = document.getElementById("num47").value;
  let array19 = Num46.split(" ");
  let array20 = Num47.split(" ");
  var matrix1 = [];
  var matrix2 = [];

  if (array19.length == 4 && array20.length == 4) {
    // Reading 1st array
    for (let i = 0; i < 2; i++) {
      matrix1[i] = [];
      for (let j = 0; j < 2; j++) {
        matrix1[i][j] = parseInt(array19[i * 2 + j]);
      }
    }

    // Reading 2nd array
    for (let i = 0; i < 2; i++) {
      matrix2[i] = [];
      for (let j = 0; j < 2; j++) {
        matrix2[i][j] = parseInt(array20[i * 2 + j]);
      }
    }

    // Sum of matrices
    let sumOfMatrix = [];
    for (let i = 0; i < 2; i++) {
      sumOfMatrix[i] = [];
      for (let j = 0; j < 2; j++) {
        sumOfMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
      }
    }

    // Display the result in matrix format

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        display26.innerHTML += `${sumOfMatrix[i][j]} &nbsp;`;
      }
      display26.innerHTML += "<br>";
    }
  } else {
    display26.innerHTML = `Please Enter 4 Numbers`;
  }
}
function clearSumMatrix() {
  display26.innerHTML = " ";
  document.getElementById("num46").value = " ";
  document.getElementById("num47").value = " ";
}

// Multiplication Of 3 X 2 Matrix
let display27 = document.getElementById("productMatrix");

function ProductMatrix() {
  let Num48 = document.getElementById("num48").value;
  let Num49 = document.getElementById("num49").value;
  let array21 = Num48.split(" ");
  let array22 = Num49.split(" ");

  if (array21.length == 6 && array22.length == 6) {
    let matrix3 = new Array(3);
    let matrix4 = new Array(2);
    let productMatrix = new Array(3);

    for (let i = 0; i < 3; i++) {
      matrix3[i] = [];
      for (let j = 0; j < 2; j++) {
        matrix3[i][j] = parseInt(array21[i * 2 + j]);
      }
    }

    for (let i = 0; i < 2; i++) {
      matrix4[i] = [];
      for (let j = 0; j < 3; j++) {
        matrix4[i][j] = parseInt(array22[i * 3 + j]);
      }
    }

    for (let i = 0; i < 3; i++) {
      productMatrix[i] = [];
      for (let j = 0; j < 3; j++) {
        productMatrix[i][j] = 0;
        for (let k = 0; k < 2; k++) {
          productMatrix[i][j] += matrix3[i][k] * matrix4[k][j];
        }
      }
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        display27.innerHTML += `${productMatrix[i][j]} &nbsp;`;
      }
      display27.innerHTML += "<br>";
    }
  } else {
    display27.innerHTML = `Please Enter 6 Numbers`;
  }
}
function clearProductMatrix() {
  display27.innerHTML = " ";
  document.getElementById("num48").value = " ";
  document.getElementById("num49").value = " ";
}

// Equal Matrices
let display28 = document.getElementById("equalMatrix");

function EqualMatrix() {
  let Num50 = document.getElementById("num50").value;
  let Num51 = document.getElementById("num51").value;
  let array23 = Num50.split(" ");
  let array24 = Num51.split(" ");

  if (array23.length == 4 && array24.length == 4) {
    let matrix5 = new Array(2);
    let matrix6 = new Array(2);

    for (let i = 0; i < 2; i++) {
      matrix5[i] = [];
      for (let j = 0; j < 2; j++) {
        matrix5[i][j] = parseInt(array23[i * 2 + j]);
      }
    }

    for (let i = 0; i < 2; i++) {
      matrix6[i] = [];
      for (let j = 0; j < 2; j++) {
        matrix6[i][j] = parseInt(array24[i * 2 + j]);
      }
    }

    let isEqual = 1; // Assume matrices are equal
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        if (matrix5[i][j] !== matrix6[i][j]) {
          isEqual = 0; // Matrices are not equal
          break;
        }
      }
      if (isEqual === 0) {
        break; // Break out of the outer loop as well
      }
    }

    if (isEqual === 1) {
      display28.innerHTML = `They are Equal`;
    } else {
      display28.innerHTML = `They are not Equal`;
    }
  } else {
    display28.innerHTML = `Please Enter 4 Numbers`;
  }
}
function clearEqualMatrix() {
  display28.innerHTML = " ";
  document.getElementById("num50").value = " ";
  document.getElementById("num51").value = " ";
}

//Wind chill
let display29 = document.getElementById("windchill");
function WindChill() {
  let speed = document.getElementById("num52").value;
  let temparature = document.getElementById("num53").value;
  let wind_chill_index = 0;
  if (0 <= speed && speed <= 4) {
    wind_chill_index = temparature;
  } else if (speed >= 45) {
    wind_chill_index = 1.6 * temparature - 55;
  } else {
    wind_chill_index =
      91.4 +
      (91.4 - temparature) *
        (0.0203 * speed - 0.304 * Math.sqrt(speed) - 0.474);
  }
  display29.innerHTML = `Wind Chill Index = ${wind_chill_index}`;
}
//Diagonal Matrix
let display30 = document.getElementById("diagonal");
function DiagonalMatrix() {
  let Num54 = document.getElementById("num54").value;
  var array25 = Num54.split(" ");
  var matrix = new Array(2);
  let count = 0;

  for (let i = 0; i < 2; i++) {
    matrix[i] = [];
  }

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      matrix[i][j] = array25[count++];
    }
  }

  if (matrix[0][0] < matrix[1][1]) {
    matrix[1][1] = 1;
  } else if (matrix[0][0] > matrix[1][1]) {
    matrix[0][0] = 0;
  }

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      display30.innerHTML += `${matrix[i][j]}&nbsp`;
    }
    display30.innerHTML += `<br>`;
  }
}
