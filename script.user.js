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
    $.getScript('https://cdn.rawgit.com/LoucasseRG/politesse/master/script.js');
});
