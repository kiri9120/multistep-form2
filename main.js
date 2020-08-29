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


// ラジオボタンを選択後、テキスト入力可
$(function() {
  $("[name='bat-name']").click(function(){
      var num = $(this).val();
      console.log(num);
      if ( num == 0 ){
          $("#input-bat-name").removeAttr("disabled");
      } else {
          $("#input-bat-name").attr("disabled", "disabled");
      }
  });
});

// tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})