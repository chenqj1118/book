var app = require("webpack-dev-web-test");

app.start({
    /** The default configuration parameters
     httpPort: 8080,
     wdsPort: 8081,
     wdsPubPath: "web-test",
     webpackCfg: require("./webpack.web-test-config.js")
     */
    target: "vue"
}, function (app){
    /** The response for ajax post testing */
	
    var searchResultData = JSON.stringify(     //模拟搜索结果 (仓库名称、日期作为搜索条件)
        {
            storeName: "合肥仓",     //仓库名
			date: "2016/7/15",       //日期
			workingTime: "8:00-17:00", //时间段
            data: [
					{
						platName:"月台1",
						platId:"234",
						dataDtl: [
							{	
								bookId: 1,
								companyName: "中通物流",   //物流公司名
								bookType: "收货预约",      //预约类型
								bookStatus: "未审核",      //预约状态
								bookTime: "9:00-11:00",    //预约时间
								carInfo: "XXX车-沪A68888", //车辆信息
								driverInfo: "张三-15623585255",//司机信息
							},
							{
								bookId: 2,
								companyName: "圆通物流",
								bookType: "发货预约",
								bookStatus: "已审核",
								bookTime: "11:30-14:00",
								carInfo: "XXX车-沪A68889",
								driverInfo: "李四-15623585255",
							},	
							{
								bookId: 3,
								companyName: "韵达物流",
								bookType: "收货预约",
								bookStatus: "已审核",
								bookTime: "14:00-16:30",
								carInfo: "XXX车-沪A68880",
								driverInfo: "王五-15623585255",
							},					
						]
					},
					{
						platName:"月台2",
						platId:"2343",
						dataDtl: [
							{	
								bookId: 1,
								companyName: "中通物流",   //物流公司名
								bookType: "收货预约",      //预约类型
								bookStatus: "已审核",
								bookTime: "9:00-11:00",    //预约时间
								carInfo: "XXX车-沪A68888", //车辆信息
								driverInfo: "张三-15623585255",//司机信息
							},
							{
								bookId: 2,
								companyName: "圆通物流",
								bookType: "发货预约",
								bookStatus: "未审核",
								bookTime: "11:00-12:00",
								carInfo: "XXX车-沪A68889",
								driverInfo: "李四-15623585255",
							},	
							{
								bookId: 3,
								companyName: "韵达物流",
								bookType: "收货预约",
								bookStatus: "已审核",
								bookTime: "13:00-15:00",
								carInfo: "XXX车-沪A68880",
								driverInfo: "王五-15623585255",
							},					
						]
					}												
            ]
        }
    );	
    app.post('/searchResultData.json', function (req, resp){
        resp.send(searchResultData);
    });
	
    var searchResultData2 = JSON.stringify(     //模拟搜索结果 (仓库名称、日期作为搜索条件)
        {
            storeName: "合肥仓",     //仓库名
			date: "2016/7/15",       //日期
			workingTime: "9:00-16:00", //时间段
            data: [
					{
						platName:"月台1",
						platId:"234",
						dataDtl: [
							{	
								bookId: 1,
								companyName: "中通物流",   //物流公司名
								bookType: "收货预约",      //预约类型
								bookStatus: "已审核",
								bookTime: "9:00-11:00",    //预约时间
								carInfo: "XXX车-沪A68888", //车辆信息
								driverInfo: "张三-15623585255",//司机信息
							},
							{
								bookId: 2,
								companyName: "圆通物流",
								bookType: "发货预约",
								bookStatus: "未审核",
								bookTime: "11:00-12:00",
								carInfo: "XXX车-沪A68889",
								driverInfo: "李四-15623585255",
							},	
							{
								bookId: 3,
								companyName: "韵达物流",
								bookType: "收货预约",
								bookStatus: "已审核",
								bookTime: "13:00-15:00",
								carInfo: "XXX车-沪A68880",
								driverInfo: "王五-15623585255",
							},					
						]
					},
					{
						platName:"月台2",
						platId:"2343",
						dataDtl: [
							{	
								bookId: 1,
								companyName: "中通物流",   //物流公司名
								bookType: "收货预约",      //预约类型
								bookStatus: "已审核",
								bookTime: "9:30-11:00",    //预约时间
								carInfo: "XXX车-沪A68888", //车辆信息
								driverInfo: "张三-15623585255",//司机信息
							},
							{
								bookId: 2,
								companyName: "圆通物流",
								bookType: "发货预约",
								bookStatus: "已审核",
								bookTime: "12:30-14:00",
								carInfo: "XXX车-沪A68889",
								driverInfo: "李四-15623585255",
							},	
							{
								bookId: 3,
								companyName: "韵达物流",
								bookType: "收货预约",
								bookStatus: "未审核",
								bookTime: "14:30-15:00",
								carInfo: "XXX车-沪A68880",
								driverInfo: "王五-15623585255",
							},					
						]
					}												
            ]
        }
    );	
    app.post('/searchResultData2.json', function (req, resp){
        resp.send(searchResultData2);
    });	

});