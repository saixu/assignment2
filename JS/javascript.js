function test(){
	var firstname= document.getElementById("firstname");
	var lastname= document.getElementById("lastname");
	var form= document.getElementById("form");
    var show= document.getElementById("show");
	if(firstname.value== ""){
		show.innerHTML= firstname.name+ " is necessary";
	}else if(lastname.value== ""){
		show.innerHTML= lastname.name+ " is necessary";
	}else{
		show.innerHTML= "You have successfully submit the form";
		form.style.display= "none";
	}
}