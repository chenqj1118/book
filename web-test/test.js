var book = require("..");
var tpl = require("./book-tpl.html");

var ajax = require("boke-cms-ajax");

//是否是整数
function isInteger(obj) {
 return obj%1 === 0
}

//通过仓库上班时间 获取时间片段，例如：getworkingTimeArr("8:00-17:00")得出的结果是["8:00","9:00",...,"17:00"]
var getworkingTimeArr = function(str){   
	var workingTimeArr = str.split('-');
	var newworkingTimeArr = [];
	for(var i in workingTimeArr){
		var time = workingTimeArr[i];
		var m = parseInt(time.substring(0,time.indexOf(":"))); //获取整点数
		var n = (time.substr(time.length-2))=="30" ? m + 0.5 : m;
		newworkingTimeArr.push(n);
	};
	var myNewworkingTimeArr = [];
	for(var i = newworkingTimeArr[0]; i<= newworkingTimeArr[1]; i = i+0.5){
		var n = isInteger(i) ? Math.floor(i) + ":00" : Math.floor(i) + ":30";
		myNewworkingTimeArr.push(n);
	};
	return myNewworkingTimeArr;
}

//给json对象添加时间单元的总倍数timeTotalNum，获取新的json
var getNewJson = function(json){
	for(var i in json.data){
		for(var j in json.data[i].dataDtl){
			var bookTime = json.data[i].dataDtl[j].bookTime;
			json.data[i].dataDtl[j].timeTotalNum = getworkingTimeArr(bookTime).length-1;
		}
	};
	return json;
}

var searchBtn1 = document.getElementById("searchBtn1");  
//按钮点击事件
searchBtn1.onclick=function(){  
	ajax.post('/searchResultData.json',{},function (json){
		var workingTimeArr = getworkingTimeArr(json.workingTime);
		var newJson = getNewJson(json);		
		book.init({
			el: '#app1',
			template: tpl,    //可以是$(".xx").html()
			data: {
				bookData: newJson,
				workingTimeArr: workingTimeArr
			},
			handleClick: function (bookObj){  //点击其中一个预约单触发的事件，参数为预约单对象，如：bookObj.bookId; bookObj.companyName
				//debugger
				alert("您点击了"+ bookObj.companyName);
				var bookStatus = bookObj.bookStatus;
				if(bookStatus=="未审核"){
					bookObj.bookStatus = "已审核";
					alert("原来的订单状态是'"+ bookStatus+"';现在的订单状态是'" + bookObj.bookStatus+"'；请看界面小圆点颜色的变化");
				};
				console.log(bookObj);
			},			
		});
		
	});
} 




var searchBtn2 = document.getElementById("searchBtn2");  
//按钮点击事件
searchBtn2.onclick=function(){  
	ajax.post('/searchResultData2.json',{},function (json){
		var workingTimeArr = getworkingTimeArr(json.workingTime);
		var newJson = getNewJson(json);
		book.init({
			el: '#app2',
			template: tpl,    //可以是$(".xx").html()
			data: {
				bookData: newJson,
				workingTimeArr: workingTimeArr
			},
			handleClick: function (bookObj){  //点击其中一个预约单触发的事件，参数为预约单对象，如：bookObj.bookId; bookObj.companyName
				//debugger
				alert("您点击了"+ bookObj.companyName);
				var bookStatus = bookObj.bookStatus;
				if(bookStatus=="未审核"){
					bookObj.bookStatus = "已审核";
					alert("原来的订单状态是'"+ bookStatus+"';现在的订单状态是'" + bookObj.bookStatus+"'；请看界面小圆点颜色的变化");
				};
				console.log(bookObj);
			},				
		});
		
	});
} 


