/*
style.css
Qiuli Han
301167000
2020-09-29
*/

$(document).ready(function(){
    var element = $('meta[name="active-menu"]').attr('content');
    $('#' + element).addClass('active');
});
