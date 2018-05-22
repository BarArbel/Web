var articleOpacity = 0;

function onOver() {
	articleOpacity = this.style.opacity;
	this.style.backgroundColor = "#fce100";
	this.style.opacity = 1;
}

function onOut() {
	this.style.backgroundColor = "#000000";
	this.style.opacity = articleOpacity;
}

function createArticle() {
	var clearObj = document.getElementsByTagName("main")[0].getElementsByTagName("div")[0];
	var articleObj = document.createElement("article");
	articleObj.style.float = "left";
	articleObj.style.width = "250px";
	articleObj.style.height = "250px";
	articleObj.style.opacity = Math.random();
	articleObj.addEventListener("mouseover", onOver);
	articleObj.addEventListener("mouseout", onOut);
	document.getElementsByTagName("main")[0].insertBefore(articleObj, clearObj);
}

window.onload = function() {
	var imgObj = document.getElementsByTagName("section")[0];
	imgObj.addEventListener("click", createArticle);
	for (var i = 0; i < 4; i++) {
		createArticle();
	}
};
