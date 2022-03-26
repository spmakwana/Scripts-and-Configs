// ==UserScript==
// @name        Highlight watched videos Modified
// @author      ibtisam midlet
// @namespace   youtube-watched-videos-hider-userscript-bystorebitid@gmail.com
// @icon        https://github.com/ibtisammidlet/youtube-watched-videos-hider/raw/master/screenshot.png
// @include     *.youtube.com/*
// @description like the name and it's simple stable and effective
// @version     2.4
// @supportURL  https://justinmidlet.blogspot.com/2019/05/youtube-watched-videos-hider.html
// @date        2020-03-24
// @homepage    https://justinmidlet.blogspot.com/2019/05/youtube-watched-videos-hider.html
// @license     All Rights Reserved
// @require     https://code.jquery.com/jquery-3.4.0.min.js
// @grant       GM_addStyle
// ==/UserScript==

//** the interval for the all script
 setInterval(function(){

if (window.location.href.indexOf('www.youtube.com/playlist?list=') != -1) {
        $('#overlays.ytd-thumbnail #progress').parent().parent().parent().parent().parent().parent().parent().css("background", "#bbb");
} else {

if (window.location.href.indexOf('www.youtube.com') != -1) {


function channel(){
if (window.location.href.indexOf('channel/') != -1) {
$('#overlays.ytd-thumbnail #progress').parent().parent().parent().parent().parent().parent().css("background", "#bbb");
}
};

function userpg(){
if (window.location.href.indexOf('/user/') != -1 || window.location.href.indexOf('/c/') != -1) {
$('#overlays.ytd-thumbnail #progress').parent().parent().parent().parent().parent().parent().css("background", "#bbb");
}
};

function results(){
if (window.location.href.indexOf('results?search_query=') != -1) {
$('#overlays.ytd-thumbnail #progress').parent().parent().parent().parent().parent().parent().css("background", "#bbb");
}
};


function subscriptions(){
if (window.location.href.indexOf('www.youtube.com/feed/subscriptions') != -1) {
$('#overlays.ytd-thumbnail #progress').parent().parent().parent().parent().parent().parent().css("background", "#bbb");
}
};

function watch(){
if (window.location.href.indexOf('www.youtube.com/watch?v=') != -1) {

var playlisttxtcntnt = $("#playlist").text();
//* checking if the side playlist length is less then 11 otherwise the same user content will be checked
if (playlisttxtcntnt.length < "15") {
$('#overlays.ytd-thumbnail #progress').parent().parent().parent().parent().parent().parent().css("background", "#bbb");
} else {
//* hiding the related + playlist
$('#overlays.ytd-thumbnail #progress').parent().parent().parent().parent().parent().parent().css("background", "#bbb");
$("#playlist #overlays.ytd-thumbnail #progress").parent().parent().parent().parent().parent().parent().parent().parent().css("background", "#bbb");
}


}
};



function general(){
if (window.location.href.indexOf('results?search_query=') <= 0 && window.location.href.indexOf('channel/') <= 0 && window.location.href.indexOf('www.youtube.com/feed/subscriptions') <= 0 && window.location.href.indexOf('www.youtube.com/watch?v=') <= 0 && window.location.href.indexOf('www.youtube.com/feed/history') <= 0 && window.location.href.indexOf('www.youtube.com/user/') <= 0 && window.location.href.indexOf('www.youtube.com/c/') <= 0) {
$('#overlays.ytd-thumbnail #progress').parent().parent().parent().parent().parent().parent().parent().parent().css("background", "#bbb");
}
};


channel();
userpg();
results();
subscriptions();
watch();
general();



}
};


if (window.location.href.indexOf('m.youtube.com') != -1 && window.location.href.indexOf('youtube.com/feed/history') <= 0 ) {
        $('ytm-thumbnail-overlay-resume-playback-renderer .thumbnail-overlay-resume-playback-progress').parent().parent().parent().parent().parent().parent().css("background", "#bbb");
}


 }, 1500);
