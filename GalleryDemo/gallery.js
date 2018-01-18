function prepareGallery() {

	if (!document.getElementById || !document.getElementByTagName) {
		return false;
	}
	var imagegallery =  document.getElementById("imagegallery");
	if (!imagegallery) {
		return false;
	}
	var links = imagegallery.getElementByTagName("a");
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function {
			return showPic(this) ? false : true;
		}
	}
}

function showPic(whichpic) {
	var placeholder = document.getElementById("placeholder");
	if (!placeholder) {
		return false;
	}
	var source = whichpic.getAttribute("href");
	if (placeholder.nodeName != "IMG") {
		return false
	}
	placeholder.setAttribute("src", source);
	var description = document.getElementById("description");
	if (description) {
		var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
		if (description.first-child.nodeType == 3) {
			description.first-child.nodeValue = text;
		}
	}
	return true;
}

window.onload = function() {
	addLoadEvent(prepareGallery);
}


//用于添加onLoad的函数
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	} else {
		window.onload = function {
			oldonload();
			func();
		}
	}
}