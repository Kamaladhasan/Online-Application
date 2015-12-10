function login(){
	var uname=document.getElementById("username").value;
	var pwd=document.getElementById("password").value;
	if(uname== "test" && pwd == "test")
	{
	return true;
	}
	else
	{
	alert("Incorrect Username/Password");
	return false;
	}
}
function bookletno(){
	var booklet_no = document.getElementById("form_no").value;
	document.getElementById("booklet_sr_no").value = booklet_no;
}
function timer(){
	var d = new Date();
	document.getElementById("timer").innerHTML = d;

}
function formfeed(){
	var form_no = Math.random() * 100000000000000000;
	document.getElementById("form_no").value=form_no;
	document.getElementById("booklet_sr_no").value=form_no;
}
function answer(){
	
	for(i=0;i<n;i++)
	{
	var ans = ducument.getElementById("question").value;
	var ans1 = ducument.getElementById("key");
	if(ans === "checked")
	{
	ans1.style.backgroundcolor = "rgb(17, 254, 4)";
	ans1.style.color = "#fff";
	}
	}
}
function next_question(){
	
	var id = document.getElementById("question_id").innerHTML.trim(); // alert(id); return 0;
	var questions = document.getElementById("questions").value;
	var option1 = document.getElementById("option1").value;
	var option2 = document.getElementById("option2").value;
	var option3 = document.getElementById("option3").value;
	var option4 = document.getElementById("option4").value;
	var option5 = document.getElementById("option5").value;
	var answer = document.getElementById("answer").innerHTML;
	var data = "id :" + id + "," + "questions :" + questions + "," + "option1 :" + option1 + "," + "option2 :" + option2 + "," + "option3 :" + option3 + "," + "option4 :" + option4 + "," + "option5 :" + option5 + "," + "answer :" + answer ;
	localStorage.setItem(id,data);	
	// document.getElementById("question_id").innerHTML = localStorage.length;
	loadFunction();
	clearFunction();
	btnGenerate();
	//document.getElementById("key_id").innerHTML = id;
		
}
function btnGenerate(id){
	var parent = document.getElementById("key_id");
	var node = '<li><a href="javascript:;"></a></li>';
	parent.appendChild(node);
}
function clearFunction(){
	document.getElementById("questions").value="";
	document.getElementById("option1").value="";
	document.getElementById("option2").value="";
	document.getElementById("option3").value="";
	document.getElementById("option4").value="";
	document.getElementById("option5").value="";
	document.getElementById("answer").value="";
}
function loadFunction(){
document.getElementById("question_id").innerHTML = localStorage.length + 1;
}
function clearStorage(){
localStorage.clear();
}
				/*Local Server Script*/
function question_feed()
{ 
	var question = document.getElementById("question").innerHTML;
	question = localStorage.getItem(questions);
	
}

