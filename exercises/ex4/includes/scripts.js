window.onload = function(){
	var formObj = document.getElementById("form");
	
	formObj.onsubmit = function(){
		var nameVal = document.forms["form"]["fullName"].value;
		if((nameVal.includes("a") || nameVal.includes("A")) && (nameVal.includes("d") || nameVal.includes("D")) && !nameVal.includes(" ")){
			return true;
		}
		else{
			var h3Obj = document.createElement("h3");
			h3Obj.innerHTML = "Name must contain the letters 'a' and 'd' and no spaces";
			formObj.appendChild(h3Obj);
			return false;
		}
	};
};
