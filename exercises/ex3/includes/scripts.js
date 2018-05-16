var mainArticleNum = 0;
var articleOpacity = 0;

function onOver() {
	articleOpacity = this.style.opacity;
	this.style.backgroundColor = "#fce100";
	this.style.opacity = 1;
};

function onOut() {
	this.style.backgroundColor = "#000000";
	this.style.opacity = articleOpacity;
};

function onClick() {
	if (mainArticleNum++ < 8){
		var articleObj = document.createElement("article");
		articleObj.style.opacity = Math.random();
		articleObj.addEventListener("mouseover", onOver);
		articleObj.addEventListener("mouseout", onOut);
		document.getElementsByTagName("main")[0].appendChild(articleObj);
	}
};

function Initialize() {
	var articleArr = document.getElementsByTagName("article");
	var imgObj = document.getElementsByTagName("header")[0].getElementsByTagName("section")[0];
	for (var i = 0; i < 4; i++) {
		articleArr[i].style.opacity = Math.random();
		articleArr[i].addEventListener("mouseover", onOver);
		articleArr[i].addEventListener("mouseout", onOut);
	}
	imgObj.addEventListener("click", onClick);
};
