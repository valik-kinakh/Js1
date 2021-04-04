////////////Task1///////////
let width = 3,
  length = 4;
function calcRectangle(length, width) {
  if (Number(length) && Number(width) && length > 0 && width > 0) {
    let square = length * width;
    console.log("Square of rectangle=" + square);
  } else {
    throw error;
  }
}
try {
  calcRectangle(length, width);
} catch (exception) {
  console.log(exception.name);
  console.log(exception.message);
  console.log(exception.stack);
}

////////////Task2///////////
function checkAge() {
  let age = prompt("Enter your age:");
  if (age.length == 0) {
    throw new Error("Field is empty!");
  } else {
    let age1 = parseInt(age);
    if (age1 < 14) {
      throw new Error("You are not old enough!");
    } else if (typeof age1 == "number" && age1 >= 14) {
      console.log("You can watch this film)");
    } else {
      throw new Error("Not a number!");
    }
  }
}
try {
  checkAge();
} catch (exception) {
  console.log(exception.name);
  console.log(exception.message);
  console.log(exception.stack);
}

////////////Task3///////////
class MonthException {
  message = "MonthException";
  monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  constructor(pos) {
    this.message;
    this.monthArr[pos];
  }
}
function showMonthName(month) {
  let m = new MonthException();
  if (month < 1 || month > 12) {
    throw new Error(m.message + " Incorect month number");
  } else {
    console.log(m.monthArr[month - 1]);
  }
}
try {
  showMonthName(2);
} catch (exception) {
  //console.log(exception.name);
  console.log(exception.message);
  //console.log(exception.stack);
}

////////////Task4///////////
function showUser(id) {
  if (id < 0) {
    throw error;
  } else {
    return id;
  }
}
let ids = [23, -12, 34, -56, 100];
function showUsers(ids) {
  let correctId = [];
  console.log(ids);
  for (let i = 0; i < ids.length; i++) {
    try {
      showUser(ids[i]);
      correctId.push("id:" + ids[i]);
    } catch (error) {
      console.log("Error: ID must not be negetive: " + ids[i]);
    }
  }
  console.log(correctId);
}
showUsers(ids);

