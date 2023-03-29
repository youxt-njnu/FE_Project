// 关闭二维码
var btn = document.querySelector(".closeBtn");
var box = document.querySelector(".help_close");
btn.onclick = function () {
  box.style.display = "none";
};

// 显示隐藏文本框内容
var text = document.querySelector("input");
text.onfocus = function () {
  if (this.value == "语言开发") {
    this.value = "";
  }
  this.style.color = "#333";
};
text.onblur = function () {
  if (this.value == "") {
    this.value = "语言开发";
  }
  this.style.color = "#ccc";
};

//针对样式修改特别多的或者功能复杂的情况，就可以不用this.style.啥啥啥这种，然后直接新定义个类，然后设置this.className='change';(在css里新写一个需要修改的类的内容)
//如果需要保留原先里面，直接写成: this.className='first change'
