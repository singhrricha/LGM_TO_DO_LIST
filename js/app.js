
var tagList = document.getElementsByTagName('LI');
for (var i = 0; i < tagList.length; i++) {
	
	var span = document.createElement("span");
	var cross = document.createTextNode("\u00D7");
	span.appendChild(cross);
	span.className = "pull-right close"
	tagList[i].appendChild(span);
	

}


var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
	close[i].onclick = function () {
		var div = this.parentElement;
		div.style.display = "none";
	}
}


var pencil = document.getElementsByClassName("pencil");
for(var i = 0; i < pencil.length; i++){
	pencil[i].onclick = function(){
		var div = this.parentElement;
		var textOfFirstChild = div.firstChild.textContent;
		var createInputTag = document.createElement('input');
		var b = createInputTag.value = textOfFirstChild;
		console.log(b);
	}
}

var list =document.querySelector('ul');
list.addEventListener('click', function(ev){
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
},false)


function btnAddItem(){
	var createList = document.createElement("li");
	var inputText = document.getElementById("inputItem").value;
	var createTextNode = document.createTextNode(inputText);
	var listCreatedWithText = createList.appendChild(createTextNode);
	createList.className = "list-group-item";
	document.getElementById("inputItem").value = '';
	if (inputText === '') {
		alert("Please enter the item")
	}
	else{
		document.getElementById("unorderList").appendChild(createList);
	}

	var span = document.createElement("SPAN");
  	var txt = document.createTextNode("\u00D7");
  	span.className = "close";
  	span.appendChild(txt);
  	createList.appendChild(span);

  	
  	var close = document.getElementsByClassName("close");
	for (var i = 0; i < close.length; i++) {
	close[i].onclick = function () {
		var div = this.parentElement;
		div.style.display = "none";
	}
}
}



