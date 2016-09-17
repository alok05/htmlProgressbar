function move(amount) {
  var e = document.getElementById("selectedProgress");
  var strUser = e.options[e.selectedIndex].text;
  var element = document.getElementById(strUser);
  var width = 0; 
  
  var value = element.getAttribute("value");  
  var addvalue = parseInt(value)+parseInt(amount);
  if(addvalue >= 0){
	 element.setAttribute("value",""+addvalue);
	 width=addvalue/230*100;
  }else {
    element.setAttribute("value",""+0);
  }  
  width = Math.ceil(width);
  if (width >= 100) {
     element.style.backgroundColor ="red";
	 element.style.width = 100 + '%';
	 document.getElementById(strUser+"demo").innerHTML = width * 1  + '%';
  } else {
      element.style.backgroundColor ="green";
      element.style.width = width + '%';
      document.getElementById(strUser+"demo").innerHTML = width * 1  + '%';
  }
  
}
function preload(){
document.getElementById("progress1").style.width = 27 + '%';
document.getElementById("progress2").style.width = 20 + '%';
document.getElementById("progress3").style.width = 27 + '%';
}