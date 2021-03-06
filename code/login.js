"use strict";

(function()
{
	window.addEventListener("load", main);
}());



function main()
{
	var mainWindow = window.parent;
	//Limpar os usernames que tem scores a 0
	for (var key in localStorage)  {
   		var score=localStorage.getItem(key);
   		if (score == 0){
   			localStorage.removeItem(key);
   		}
	}

	var login = document.getElementsByTagName("button")[0];
	var sair = document.getElementsByTagName("button")[1];


	var but=function(ev){
		loginClickHandler(ev, mainWindow);
	}

	var sairClick=function(ev){
		sairClickHandler(ev, mainWindow);
	}


	login.addEventListener("click", but);  //intersecta evento na capture phase (i.e., na descida) e não na bubbling phase (i.e., subida, por omissão)
	sair.addEventListener("click", sairClick);
}

function loginClickHandler(ev, mainWindow)
{
	var name =  window.document.getElementById("nome").value;
	var user="";
	if (name == ""){
		alert("Invalid username!");
	}
	else{
		for (var key in localStorage){
   			if (key == name){
   				user = name;
   			}
				var keys = key.split("-")
				if (keys[0] == name){
   				user = name;
   			}
   	}
		if(user!="" && user!="musica" && user!="sons"){
			localStorage.setItem(name, 0);
			mainWindow.postMessage("botaologin", "*");
			alert("Hello again!");
		}
		else if(user=="" && user!="musica" && user!="sons"){
			localStorage.setItem(name, 0);
			mainWindow.postMessage("botaologin", "*");

		}
		else{
			alert("Invalid username!");
		}
	}
}

function sairClickHandler(ev, mainWindow)
{
	mainWindow.postMessage("botaosair", "*");
}
