function prepareGallery() {
   
	if (!document.getElementById || !document.getElementsByTagName) {

		return false;
	}
	var imagegallery =  document.getElementById("imagegallery");
	if (!imagegallery) {
		return false;
	}
	var links = imagegallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		console.log("link"+i+links[i].firstChild.nodeValue);
		links[i].onclick = function() {
			var ret = showPic(this);
			console.log("showPic的返回值:"+ret);
			return ret ? false : true;
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
		if (description.firstChild.nodeType == 3) {
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}

window.onload = function() {
	prepareGallery();
	//console.log("这是一个测试");
}


//用于添加onLoad的函数
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != "function") {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}