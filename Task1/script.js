let str ="2016/05/20-12:00:35+0300";

let arrDate = str.match(/\d+\/\d+\/\d+/);

var dateQuery = new Date(arrDate[0]);

let arrTime = str.match(/-(\d+)?:(\d+)?:(\d+)?\+(\d+)/);

console.log(arrTime);

dateQuery.setHours(arrTime[1],arrTime[2],arrTime[3]);

console.log(dateQuery);

let dateTimestamp = dateQuery.getTime();

console.log(dateTimestamp);



// Так тоже работает
var today = new Date(str).getTime();
console.log(today);


// Так работает
var newDate = new Date(2016,04,20, 12, 00, 35).getTime();
console.log(newDate);

//
strTest = "2016,05,20";
var newDate1 = new Date(strTest);
console.log(newDate1);

// А так не работает
strTest1 = "2016,05,20, 12, 00, 35";
var newDate2 = new Date(strTest1);
console.log(newDate2);


