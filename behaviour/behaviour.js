var mobileMenu=false;
var mobileMenuDiv=false;

function initialize(){
	console.log("initialize!");
	mobileMenuDiv= document.getElementById("mobilemenu");
	
}

function toggleMenu(){
	
	mobileMenu=!mobileMenu;
	if (mobileMenu){
		document.getElementById("mobilemenu").style.display="inline-block";
		
	}else{
		document.getElementById("mobilemenu").style.display="none";
	}
}

function closeMenu(){
	console.log("closemenu!");
	if (mobileMenu){
		document.getElementById("mobilemenu").style.display="inline-block";
		
	}
	
}
