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

function createArticle(name) {
	var articleObj = document.createElement("article");
	articleObj.style.width = "250px";
	articleObj.style.height = "250px";
	articleObj.style.opacity = Math.random();
	articleObj.addEventListener("mouseover", onOver);
	articleObj.addEventListener("mouseout", onOut);
	document.getElementsByTagName(name)[0].appendChild(articleObj);
};

function Initialize() {
	var imgObj = document.getElementById("plus");
	imgObj.addEventListener("click", function(){createArticle("main");});
	for (var i = 0; i < 4; i++) {
		createArticle("section");
	}
};
