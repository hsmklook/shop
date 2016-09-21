var dateContext = (function(){
/* 日历 css美化 */
var strCss = "";
  strCss += "<style type=\"text/css\">#dateBox{width:250px;}ul{list-style:none}.title li{float:left;line-height:30px;text-align:center;height:30px}.title .arrows{width:30px;font-size:18px;font-weight:700;background:#d0d0d0}.title .arrl{border-radius:5px 0 0 0}.title .arrr{border-radius:0 5px 0 0}.title .arrows a{display:block}.title .main{width:190px;font-size:14px;background:#e0e0e0}.title .main a{display:block}em{font-style:normal}.title .main span{margin-right:10px}.title .main em{margin-right:10px}#days{box-sizing:border-box;width:250px;height:auto;border:1px solid #aaa}#days .day li{float:left;width:34.55px;border-bottom:1px solid #aaa;border-right:1px solid #aaa;text-align:center;height:34px;line-height:34px}#days .day li:last-child{border-right:0}.select{background:linear-gradient(45deg,#c6c6c6,#c3c3c3,#c0c0c0,#c3c3c3,#c6c6c6)}</style>";
/* 日历 html代码 */
var strVar = "";
strVar += "<div id=\"dateBox\">";
strVar += "<ul class=\"title clearfix\">";
strVar += "<li class=\"arrows arrl\"><a id=\"larrow\" href=\"javascript:void(0);\">&lt;<\/a><\/li>";
strVar += "<li class=\"main\"><a href=\"javascript:void(0);\"><span id=\"dateBox-year\"><em>1990<\/em>年<\/span><span id=\"dateBox-month\"><em>1<\/em>月<\/span><\/a><\/li>";
strVar += "<li class=\"arrows arrr\"><a id=\"rarrow\" href=\"javascript:void(0);\">&gt;<\/a><\/li>";
strVar += "<\/ul>";
strVar += "<div id=\"days\">";
strVar += "<ul class=\"day clearfix\">";
strVar += "<li date-week=\"7\">日<\/li>";
strVar += "<li date-week=\"1\">一<\/li>";
strVar += "<li date-week=\"2\">二<\/li>";
strVar += "<li date-week=\"3\">三<\/li>";
strVar += "<li date-week=\"4\">四<\/li>";
strVar += "<li date-week=\"5\">五<\/li>";
strVar += "<li date-week=\"6\">六<\/li>";
strVar += "<\/ul>";
strVar += "<ul class=\"day clearfix\">";
strVar += "<li date-week=\"7\"><\/li>";
strVar += "<li date-week=\"1\"><\/li>";
strVar += "<li date-week=\"2\"><\/li>";
strVar += "<li date-week=\"3\"><\/li>";
strVar += "<li date-week=\"4\"><\/li>";
strVar += "<li date-week=\"5\"><\/li>";
strVar += "<li date-week=\"6\"><\/li>";
strVar += "<\/ul>";
strVar += "<ul class=\"day clearfix\">";
strVar += "<li date-week=\"7\"><\/li>";
strVar += "<li date-week=\"1\"><\/li>";
strVar += "<li date-week=\"2\"><\/li>";
strVar += "<li date-week=\"3\"><\/li>";
strVar += "<li date-week=\"4\"><\/li>";
strVar += "<li date-week=\"5\"><\/li>";
strVar += "<li date-week=\"6\"><\/li>";
strVar += "<\/ul>";
strVar += "<ul class=\"day clearfix\">";
strVar += "<li date-week=\"7\"><\/li>";
strVar += "<li date-week=\"1\"><\/li>";
strVar += "<li date-week=\"2\"><\/li>";
strVar += "<li date-week=\"3\"><\/li>";
strVar += "<li date-week=\"4\"><\/li>";
strVar += "<li date-week=\"5\"><\/li>";
strVar += "<li date-week=\"6\"><\/li>";
strVar += "<\/ul>";
strVar += "<ul class=\"day clearfix\">";
strVar += "<li date-week=\"7\"><\/li>";
strVar += "<li date-week=\"1\"><\/li>";
strVar += "<li date-week=\"2\"><\/li>";
strVar += "<li date-week=\"3\"><\/li>";
strVar += "<li date-week=\"4\"><\/li>";
strVar += "<li date-week=\"5\"><\/li>";
strVar += "<li date-week=\"6\"><\/li>";
strVar += "<\/ul>";
strVar += "<ul class=\"day clearfix\">";
strVar += "<li date-week=\"7\"><\/li>";
strVar += "<li date-week=\"1\"><\/li>";
strVar += "<li date-week=\"2\"><\/li>";
strVar += "<li date-week=\"3\"><\/li>";
strVar += "<li date-week=\"4\"><\/li>";
strVar += "<li date-week=\"5\"><\/li>";
strVar += "<li date-week=\"6\"><\/li>";
strVar += "<\/ul>";
strVar += "<ul class=\"day clearfix\">";
strVar += "<li date-week=\"7\"><\/li>";
strVar += "<li date-week=\"1\"><\/li>";
strVar += "<li date-week=\"2\"><\/li>";
strVar += "<li date-week=\"3\"><\/li>";
strVar += "<li date-week=\"4\"><\/li>";
strVar += "<li date-week=\"5\"><\/li>";
strVar += "<li date-week=\"6\"><\/li>";
strVar += "<\/ul>";
strVar += "<\/div>";
strVar += "<i class=\"clearfix\"><\/i>";
strVar += "<\/div>";
var nowyear ;
var nowmonth ;
var nowday;
var nowdate;
var firstDate ;
var dateNed;
/*
*Date 1.星期几 2.月份 3.天数 4.年份
*
*/
var dayBoxs,length;
var run = function (pushDom){
  this.pushDom = pushDom
}
var dom1,dom2;
var YearBoard, MonthBoard;
run.prototype = {
  init:function(){
	$.append(document.head,strCss);
	$.append(this.pushDom,strVar);
	nowdate = new Date;
	nowyear = nowdate.getFullYear();
	nowmonth = nowdate.getMonth();
	nowday = nowdate.getDate();
	dateNed = nowdate.toString().split(" ");
	firstDate = new Date(nowyear,nowmonth,1);
	dayBoxs = $.Class('day');
	length = dayBoxs.length;
	dom1 = $.id('dateBox-year');
	dom2 = $.id('dateBox-month');
	YearBoard = $.tag({source:dom1,target:'em'});
	MonthBoard = $.tag({source:dom2,target:'em'});
	YearBoard.innerHTML = nowyear;
	MonthBoard.innerHTML = nowmonth+1;
	createDate(firstDate);
	this.events();
  },
  events:function(){
	/* 切换月份 */
	/* 上个月 */
	var nowYear = YearBoard.innerHTML;
	var nowMonth = MonthBoard.innerHTML;
	var btn1 = $.id('larrow');
	var btn2 = $.id('rarrow');
	$.on(btn1,'click',function(){
		--nowMonth;
		if(nowMonth < 1){
		  nowMonth = 12;
		  --nowYear;
		}
		 YearBoard.innerHTML = nowYear;
		 MonthBoard.innerHTML = nowMonth;
		 createDate(new Date(nowYear,nowMonth-1,1))
	});
	/* 下个月 */
	$.on(btn2,'click',function(){
		 ++nowMonth;
		 if(nowMonth > 12){
			nowMonth = 1;
			 ++nowYear; 
		 }
		 YearBoard.innerHTML = nowYear;
		 MonthBoard.innerHTML = nowMonth;
		 createDate(new Date(nowYear,nowMonth-1,1));
	 });
  }
}

function splitDate(date){
  var str = date.toString().split(' ');
  var cache = {
	get:function(num){
	  return this[num]
	},
	length:(function(){
	  return 4;
	}),
	getDate:function(){
	  return date;
	}
  };
  for(var i = 0 ; i < 4 ; i++){
	cache[i] = str[i];
  }
  cache.last= function(){
	var month = date.getMonth()+1;
	return splitDate(new Date(nowyear,month,0));
  }
  return cache;
}
function clearBoard(){
  for(var i = 1 ; i < length ; i++){
	obj1 = dayBoxs[i].children;
	for(var j = 0 ; j < obj1.length; j++){
	  obj1[j].innerHTML = "";
	}
  }
}
function createDate(date){
  clearBoard();
  var fobj = splitDate(date);
  var col = 0;
  var obj1;
  var _month = MonthBoard.innerHTML;
  var index = 0,i = 0;
  var t_day = 1,mark1 = false,mark2 = true;
  for(var firstC = dayBoxs[1].children;i < firstC.length;i++){
	var week = firstC[i].getAttribute("date-week");
	if(mark2 && week == getWeekNum(fobj[0])){
	  index = i;
	  mark1 = true;
	  mark2 = false;
	}
	if(i >= index && mark1){
	  firstC[i].innerHTML = t_day++;
	}else{
	  
	}
  }
  for(i = 2 ; i < length ; i++){
	obj1 = dayBoxs[i].children;
	for(var j = 0 ; j < obj1.length; j++){
		if(t_day <= fobj.last()[2]){
		  obj1[j].innerHTML = t_day++;
		}
	}
  }
}
function getWeekNum(num){
  var s_week;
  switch(num){
	case 'Mon' :s_week = 1; break;
	case 'Tue' :s_week = 2; break;
	case 'Wed' :s_week = 3; break;
	case 'Thu' :s_week = 4; break;
	case 'Fri' :s_week = 5; break;
	case 'Sat' :s_week = 6; break;
	case 'Sun' :s_week = 7; break;
  }
  return s_week;
}
var dateRunState = false;
return {
  create:function(pushDom){
	  if(!dateRunState){
		dateRunState = new run(pushDom).init();
	  }
  }
}
}());