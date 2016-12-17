str = "apple:2016/5/27__bid_203.38-ask_203.43|2016/5/28__bid_203.35-ask_203.42|2016/5/28__bid_203.39-ask_203.45";

let indBegin = str.match(/\w+/);
let indString = str.match(/:/);
//console.log(indString);

obj = {
	stockName: indBegin[0],
	rates:  []
}

let arrayObj = str.match(/(\d.+?(\||$))/g);
let currentStr = "";
let dateStr = "";
let bidStr  = "";
let askStr = "";
	
for (let i = 0; i < arrayObj.length; i++){
	currentStr = arrayObj[i];

	dateStr = currentStr.match(/\d+\/\d+\/\d+/);
	bidStr = currentStr.match(/(bid_)(\d+\.\d+)/);
	askStr = currentStr.match(/(ask_)(\d+\.\d+)/);

	obj.rates.push({date:dateStr[0], bid:bidStr[2], ask:askStr[2]});

}

console.log(obj);