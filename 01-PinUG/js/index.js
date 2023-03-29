//循环精灵图
var lis = document.querySelectorAll("div.lifeservice ul li");
for (var i = 0; i < lis.length; i++) {
  var ind = lis[i].getElementsByTagName("i");
  var x = -20 - (i % 4) * 60;
  var y = -17 - Math.floor(i / 4) * 70;
  ind[0].style.backgroundPosition = x + "px " + y + "px";
}

//悬浮出现详情,如果是按钮那种，实现一组里面给一个添加样式，可以用排他思想，先把所有的都设置成没有，然后设置需要有的
var infDetail = document.querySelectorAll(".dd ul li");
//另一种写法 var infDetail=document.querySelector(".dd ul").querySelectorAll("li");
for (var i = 0; i < infDetail.length; i++) {
  infDetail[i].onmouseover = function () {
    console.log("1");
  };
  infDetail[i].onmouseout = function () {
    console.log("0");
  };
}

//获取得到src给页面作为背景图片
// document.body.style.backgroundImage='url('+this.src+')';

//获取属性值
// 1.Element.属性 这里的属性是内置的属性
// 2.Element.getAttribute('属性'); 这里的属性还可以是程序员自己添加的属性

// 设置属性值
// 1.Element.属性='值';
// 2.Element.setAttribute(属性，'值'); 里面class这个比较特殊，直接写class不需要写classname，所以就算elment.setAttribute(class,'footer');

// 移除属性值
// removeAttribute

// 实现tab栏切换
var tablist = document.querySelector(".tab_list");
var lis = tablist.querySelectorAll("li");
var items = document.querySelectorAll(".tab_list_item");
//for循环绑定点击事件
for (var i = 0; i < lis.length; i++) {
  lis[i].setAttribute("index", i);
  // 给五个li设置索引号，方便后续使用
  lis[i].onclick = function () {
    //干掉所有人
    for (var i = 0; i < lis.length; i++) {
      lis[i].className = "";
    }
    //留下我自己
    this.className = "current";
    var index = this.getAttribute("index");
    console.log(index);
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = "none";
    }
    items[index].style.display = "block";
  };
}

//跟随鼠标移动的物体
// var pic = document.querySelector(".mouse");
// document.addEventListener("mousemove", function (e) {
//   //只要鼠标移动，就会触发这个函数
//   //每次鼠标移动，都会获得最新的鼠标坐标
//   //把x和y坐标作为图片的top和left，就可以移动图片
//   var x = e.pageX;
//   var y = e.pageY;
//   pic.style.left = x - 5 + "px";
//   pic.style.top = y - 5 + "px";
// });

//设置不能右键菜单和选中文字
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("selectstart", function (e) {
  e.preventDefault();
});

//按下s键，自动定位到搜索框；
var search = document.querySelector("input");
//给document注册keyup事件
document.addEventListener("keyup", function (e) {
  // console.log(e.key);
  if (e.key == "s") {
    search.focus();
  }
});

//当我们在文本框中输入内容时，文本框上面自动显示大字号的内容。
var conn = document.querySelector(".con");
var jd_text = document.querySelector(".jd");
jd_text.addEventListener("keyup", function () {
  if (this.value != "") {
    conn.style.display = "block";
    conn.innerText = this.value;
  } else {
    conn.style.display = "none";
  }
});

jd_text.addEventListener("blur", function () {
  conn.style.display = "none";
});

jd_text.addEventListener("focus", function () {
  if (this.value != "") {
    conn.style.display = "block";
  }
});

//30秒后关闭今日推荐
var recom = document.querySelector(".recom");
setTimeout(function () {
  recom.style.display = "none";
}, 30000);

//秒杀的倒计时效果
// 倒计时不断变化，需要定时器来自动变化；
// 三个盒子存放时、分、秒
// 利用innerHTML放入计算的时分秒
// 第一次执行也是间隔毫秒数，刚刷新页面会有空白
// 采用封装函数的方式，可以先调用一次函数，防止一开始刷新页面会有空白的问题
var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
var second = document.querySelector(".second");
var InputTime = +new Date("2023-3-21 18:00:00"); // 返回的是用户输入时间总的毫秒数

//先执行一次，防止一开始刷新页面的时候首先是空白
countTime();

setInterval(countTime, 1000);

//下面的计算是限制在一天内的那种，如果要用还是要进一步加工
function countTime() {
  var NowTime = +new Date(); // 返回的是当前时间总的毫秒数
  var Time = (InputTime - NowTime) / 1000; //得到剩余时间的秒数
  // console.log(Time);
  var h = parseInt((Time / 60 / 60) % 24);
  h = h < 10 ? "0" + h : h;
  hour.innerHTML = h;
  var m = parseInt((Time / 60) % 60);
  m = m < 10 ? "0" + m : m;
  minute.innerHTML = m;
  var s = parseInt(Time % 60);
  s = s < 10 ? "0" + s : s;
  second.innerHTML = s;
}
