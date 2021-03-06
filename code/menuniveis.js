"use strict";

(function()
{
	window.addEventListener("load", main);
}());

function main()
{
	var mainWindow = window.parent;
	var voltar = document.getElementById("buttonVoltar");
	var jogar = document.getElementById("buttonJogo");
	var buttonNivel1 = document.getElementById("buttonNivel1");
	var buttonNivel2 = document.getElementById("buttonNivel2");
	var buttonNivel3 = document.getElementById("buttonNivel3");
	var buttonNivel4 = document.getElementById("buttonNivel4");
	var buttonNivel5 = document.getElementById("buttonNivel5");
	var buttonNivel6 = document.getElementById("buttonNivel6");
	var buttonNivel7 = document.getElementById("buttonNivel7");
	var buttonNivel8 = document.getElementById("buttonNivel8");
	var buttonNivel9 = document.getElementById("buttonNivel9");
	var buttonNivel10 = document.getElementById("buttonNivel10");
	var music = document.getElementById("musica");

	var ativado = localStorage.getItem("musica");
	if (ativado=="on"){
		music.play();
		music.loop = true;
	}

	var buttonAtivado="null";

	var voltarClick = function(ev){
		voltarClickHandler(ev, mainWindow);
	}

	voltar.addEventListener("click", voltarClick, true);  //intersecta evento na capture phase (i.e., na descida) e não na bubbling phase (i.e., subida, por omissão)

	var botoes = [jogar]
	var but = [buttonNivel1, buttonNivel2, buttonNivel3, buttonNivel4, buttonNivel5, buttonNivel6, buttonNivel7, buttonNivel8, buttonNivel9, buttonNivel10]

	for (var key in localStorage){
		var bloqueado = localStorage.getItem(key);
		if (bloqueado==0){
			for (var i=1; i<10; i++){
				var result = localStorage.getItem(key+"-nivel"+i);
				if (result==null){
					but[i].disabled = true;
					but[i].style.filter="grayscale(100%)";
					but[i].style.cursor="auto";
				}
			}

		}
	}
	for(let i=0; i<botoes.length; i++){
		botoes[i].disabled = true;
		botoes[i].style.filter="grayscale(100%)";
		botoes[i].style.cursor="auto";
	}

	var but=function(ev){
			buttonAtivado=buttonNivel1ClickHandler(ev, buttonAtivado);
	}

	var but2=function(ev){
			buttonAtivado=buttonNivel2ClickHandler(ev, buttonAtivado);
	}

	var but3=function(ev){
			buttonAtivado=buttonNivel3ClickHandler(ev, buttonAtivado);
	}

	var but4=function(ev){
			buttonAtivado=buttonNivel4ClickHandler(ev, buttonAtivado);
	}

	var but5=function(ev){
			buttonAtivado=buttonNivel5ClickHandler(ev, buttonAtivado);
	}

	var but6=function(ev){
			buttonAtivado=buttonNivel6ClickHandler(ev, buttonAtivado);
	}

	var but7=function(ev){
			buttonAtivado=buttonNivel7ClickHandler(ev, buttonAtivado);
	}

	var but8=function(ev){
			buttonAtivado=buttonNivel8ClickHandler(ev, buttonAtivado);
	}

	var but9=function(ev){
			buttonAtivado=buttonNivel9ClickHandler(ev, buttonAtivado);
	}

	var but10=function(ev){
			buttonAtivado=buttonNivel10ClickHandler(ev, buttonAtivado);
	}

	var jogarNivel = function(ev){
		jogarClickHandler(ev, mainWindow, buttonAtivado);
	}

	buttonNivel1.addEventListener("click", but);
	buttonNivel2.addEventListener("click", but2);
	buttonNivel3.addEventListener("click", but3);
	buttonNivel4.addEventListener("click", but4);
	buttonNivel5.addEventListener("click", but5);
	buttonNivel6.addEventListener("click", but6);
	buttonNivel7.addEventListener("click", but7);
	buttonNivel8.addEventListener("click", but8);
	buttonNivel9.addEventListener("click", but9);
	buttonNivel10.addEventListener("click", but10);
	jogar.addEventListener("click", jogarNivel)
}


function buttonNivel1ClickHandler(ev, buttonAtivado)
{
	if(buttonAtivado=="null"){
		buttonNivel1.style.border="double";
		buttonJogo.disabled = false;
		buttonJogo.style.filter="none";
		buttonJogo.style.cursor="pointer";
		buttonAtivado="buttonNivel1";
	}

	else if(buttonAtivado=="buttonNivel1"){
		buttonNivel1.style.border="none";
		buttonJogo.disabled = true;
		buttonJogo.style.filter="grayscale(100%)";
		buttonJogo.style.cursor="auto";
		buttonAtivado="null";
	}

	return buttonAtivado;

}

function buttonNivel2ClickHandler(ev, buttonAtivado)
{
	if(buttonAtivado=="null"){
		buttonNivel2.style.border="double";
		buttonJogo.disabled = false;
		buttonJogo.style.filter="none";
		buttonJogo.style.cursor="pointer";
		buttonAtivado="buttonNivel2";
	}

	else if(buttonAtivado=="buttonNivel2"){
		buttonNivel2.style.border="none";
		buttonJogo.disabled = true;
		buttonJogo.style.filter="grayscale(100%)";
		buttonJogo.style.cursor="auto";
		buttonAtivado="null";
	}

	return buttonAtivado;

}

function buttonNivel3ClickHandler(ev, buttonAtivado)
{
	if(buttonAtivado=="null"){
		buttonNivel3.style.border="double";
		buttonJogo.disabled = false;
		buttonJogo.style.filter="none";
		buttonJogo.style.cursor="pointer";
		buttonAtivado="buttonNivel3";
	}

	else if(buttonAtivado=="buttonNivel3"){
		buttonNivel3.style.border="none";
		buttonJogo.disabled = true;
		buttonJogo.style.filter="grayscale(100%)";
		buttonJogo.style.cursor="auto";
		buttonAtivado="null";
	}

	return buttonAtivado;
}

function buttonNivel4ClickHandler(ev, buttonAtivado)
{
	if(buttonAtivado=="null"){
		buttonNivel4.style.border="double";
		buttonJogo.disabled = false;
		buttonJogo.style.filter="none";
		buttonJogo.style.cursor="pointer";
		buttonAtivado="buttonNivel4";
	}

	else if(buttonAtivado=="buttonNivel4"){
		buttonNivel4.style.border="none";
		buttonJogo.disabled = true;
		buttonJogo.style.filter="grayscale(100%)";
		buttonJogo.style.cursor="auto";
		buttonAtivado="null";
	}

	return buttonAtivado;

}

function buttonNivel5ClickHandler(ev, buttonAtivado)
{
	if(buttonAtivado=="null"){
		buttonNivel5.style.border="double";
		buttonJogo.disabled = false;
		buttonJogo.style.filter="none";
		buttonJogo.style.cursor="pointer";
		buttonAtivado="buttonNivel5";
	}

	else if(buttonAtivado=="buttonNivel5"){
		buttonNivel5.style.border="none";
		buttonJogo.disabled = true;
		buttonJogo.style.filter="grayscale(100%)";
		buttonJogo.style.cursor="auto";
		buttonAtivado="null";
	}

	return buttonAtivado;

}

function buttonNivel6ClickHandler(ev, buttonAtivado)
{
	if(buttonAtivado=="null"){
		buttonNivel6.style.border="double";
		buttonJogo.disabled = false;
		buttonJogo.style.filter="none";
		buttonJogo.style.cursor="pointer";
		buttonAtivado="buttonNivel6";
	}

	else if(buttonAtivado=="buttonNivel6"){
		buttonNivel6.style.border="none";
		buttonJogo.disabled = true;
		buttonJogo.style.filter="grayscale(100%)";
		buttonJogo.style.cursor="auto";
		buttonAtivado="null";
	}

	return buttonAtivado;

}

function buttonNivel7ClickHandler(ev, buttonAtivado)
{
	if(buttonAtivado=="null"){
		buttonNivel7.style.border="double";
		buttonJogo.disabled = false;
		buttonJogo.style.filter="none";
		buttonJogo.style.cursor="pointer";
		buttonAtivado="buttonNivel7";
	}

	else if(buttonAtivado=="buttonNivel7"){
		buttonNivel7.style.border="none";
		buttonJogo.disabled = true;
		buttonJogo.style.filter="grayscale(100%)";
		buttonJogo.style.cursor="auto";
		buttonAtivado="null";
	}

	return buttonAtivado;

}

function buttonNivel8ClickHandler(ev, buttonAtivado)
{
	if(buttonAtivado=="null"){
		buttonNivel8.style.border="double";
		buttonJogo.disabled = false;
		buttonJogo.style.filter="none";
		buttonJogo.style.cursor="pointer";
		buttonAtivado="buttonNivel8";
	}

	else if(buttonAtivado=="buttonNivel8"){
		buttonNivel8.style.border="none";
		buttonJogo.disabled = true;
		buttonJogo.style.filter="grayscale(100%)";
		buttonJogo.style.cursor="auto";
		buttonAtivado="null";
	}

	return buttonAtivado;

}

function buttonNivel9ClickHandler(ev, buttonAtivado)
{
	if(buttonAtivado=="null"){
		buttonNivel9.style.border="double";
		buttonJogo.disabled = false;
		buttonJogo.style.filter="none";
		buttonJogo.style.cursor="pointer";
		buttonAtivado="buttonNivel9";
	}

	else if(buttonAtivado=="buttonNivel9"){
		buttonNivel9.style.border="none";
		buttonJogo.disabled = true;
		buttonJogo.style.filter="grayscale(100%)";
		buttonJogo.style.cursor="auto";
		buttonAtivado="null";
	}

	return buttonAtivado;

}

function buttonNivel10ClickHandler(ev, buttonAtivado)
{
	if(buttonAtivado=="null"){
		buttonNivel10.style.border="double";
		buttonJogo.disabled = false;
		buttonJogo.style.filter="none";
		buttonJogo.style.cursor="pointer";
		buttonAtivado="buttonNivel10";
	}

	else if(buttonAtivado=="buttonNivel10"){
		buttonNivel10.style.border="none";
		buttonJogo.disabled = true;
		buttonJogo.style.filter="grayscale(100%)";
		buttonJogo.style.cursor="auto";
		buttonAtivado="null";
	}

	return buttonAtivado;

}

function jogarClickHandler(ev, mainWindow, nivelAtivo){
	mainWindow.postMessage(nivelAtivo, "*");
}

function voltarClickHandler(ev, mainWindow)
{
	ev.stopPropagation();
  mainWindow.postMessage("botaovoltar", "*");

}
