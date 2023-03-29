//显示隐藏密码
// 1.获取对象
var eye = document.getElementById("eye");
var pwd = document.getElementById("pwd");
// 2.注册事件 处理程序
var flag = 0; //设置flag标记
eye.onclick = function () {
  if (flag == 0) {
    pwd.type = "text";
    eye.src = "images/open.png";
    flag = 1;
  } else {
    pwd.type = "password";
    eye.src = "images/close.png";
    flag = 0;
  }
};

//判断密码输入格式
// var infchange = document.querySelector(".info_icon");
var textchange = document.querySelector(".info");
pwd.onblur = function () {
  if (pwd.value.length < 6 || pwd.value.length > 16) {
    // console.log("wrong");
    // infchange.className = "error_icon";
    // console.log(textchange.innerHTML);
    textchange.className = "error";
    textchange.innerHTML =
      '<i class="error_icon"></i> 输入格式不正确，请重新输入';
  } else {
    textchange.className = "success";
    textchange.innerHTML = '<i class="success_icon"></i> 输入格式正确';
  }
};

//实现输入收集验证码效果
var btnSend = document.querySelector(".send");
// 全局变量，定义剩下的秒数
var time = 5;
// 注册单击事件
btnSend.addEventListener("click", function () {
  // 禁用按钮
  btnSend.disabled = true;
  // 开启定时器
  var timer = setInterval(function () {
    // 判断剩余秒数
    if (time == 0) {
      // 清除定时器和复原按钮
      clearInterval(timer);
      btnSend.disabled = false;
      btnSend.innerHTML = "发送";
    } else {
      btnSend.innerHTML = "还剩下" + time + "秒";
      time--;
    }
  }, 1000);
});
