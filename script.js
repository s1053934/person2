AOS.init();

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close");[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function(){
  modal.style.display = "none";
}
/*點螢幕其他地方可以關閉視窗*/
window.onclick = function(event){
  if(event.target == modal){
    modal.style.display = "none";
  }
   if(event.target == modal1){
    modal1.style.display = "none";
  }
   if(event.target == modal2){
    modal2.style.display = "none";
  }
}

var modal1 = document.getElementById("myModal1");
var btn = document.getElementById("myBtn1");
var span = document.getElementsByClassName("close");[0];
btn.onclick = function() {
  modal1.style.display = "block";
}
span.onclick = function(){
  moda.style.display = "none";
}


var modal2 = document.getElementById("myModal2");
var btn = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close");[0];
btn.onclick = function() {
  modal2.style.display = "block";
}
span.onclick = function(){
  modal.style.display = "none";
}