'use strict';

console.log('hogehoge');

$(function(){
    $(".shaft-type").on("click", function(){
      var v = $(this).val();
      sessionStorage.setItem('key', v);
      window.location.href = './form-step2.html';
    });
})

$(function(){
    var d = sessionStorage.getItem('key');
    $("#shaft-type-selected").text(d);
  })