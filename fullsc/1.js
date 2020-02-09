
// Взема „модула“
var modal = document.getElementById('myModal');

// Взема снимката и я праща на „модула“
var img = document.getElementById('1');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Получава спана който затваря елемента
var span = document.getElementsByClassName("close")[0];

// кагато човека кликне на „спана“ то сe затваря
span.onclick = function() { 
  modal.style.display = "none";
}
