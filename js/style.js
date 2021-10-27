// 菜单展开点击事件
window.onload = function () {
  var iconMeun = document.getElementById("icon-meun1");
  var nav_close = document.getElementById("nav_close");
  var iconClose = document.getElementsByName("icon-close");

  iconMeun.onclick = function () {
    nav_close.style.display = "block";
    
    }
    iconClose.onclick = function () {
        nav_close.style.display = "none";
      }
  }
  
