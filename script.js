// ==UserScript==
// @name        Politesse
// @namespace   politesse
// @description Script qui permet d'ajouter un bouton pour mettre un message de politesse dans une réponse topic !
// @include     https://realitygaming.fr/threads/*
// @include     https://realitygaming.fr/conversations/*
// @version     1.0
// @grant       none
// ==/UserScript==
// cdt by wayz

$(document).ready(function(){
	var d = new Date();
	var heure = d.getHours();

	$('#QuickReply').find('.submitUnit').children('input').eq(1).after('<input class="button primary" id="cdtjs" value="Cordialement" accesskey="c" type="button">');
	var rl = '<br/>\n';

	// heure by JB ou Fabien :^)
	var signature = "";
	if (heure >= 0 && heure < 5) {
		signature = 'Bonne fin de nuit,' + rl + '<i>{username}</i>';
	}
	else if (heure >= 5 && heure < 12) {
		signature = 'Bonne journée,' + rl + '<i>{username}</i>';
	}
	else if (heure >= 12 && heure < 15) {
		signature = 'Bon après-midi,' + rl + '<i>{username}</i>';
	
	else if (heure >= 15 && heure < 18) {
        signature = 'Bonne fin d\'après-midi,' + rl + '<i>{username}</i>';
	}
	else if (heure >= 18 && heure < 21) {
		signature = 'Bonne soirée,' + rl + '<i>{username}</i>';
	}
	else if (heure >= 21 && heure < 24) {
		signature = 'Bonne fin de soirée,' + rl + '<i>{username}</i>';
	}
	else {
		signature = 'A bientôt !' + rl + '<i>{username}</i>';
	}

	$('#cdtjs').on('click', function(){
		var actual_txt = $('iframe.redactor_textCtrl').contents().find('body').html();
		var username = $('.accountUsername').text();
		$('iframe.redactor_textCtrl').contents().find('body').html(actual_txt + rl + signature.replace('{username}', username));
		$('iframe.redactor_textCtrl').contents().find('body').select();
		$('iframe.redactor_textCtrl').contents().find('body').focus();
	});
});
