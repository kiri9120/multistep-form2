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

  function changeDisabled() {
    if ( document.Form1["number"][1].checked ) { // 「その他」のラジオボタンをクリックしたとき
        document . Form1["inputNumber"] . disabled = false; // 「その他」のラジオボタンの横のテキスト入力欄を有効化
    } else { // 「その他」のラジオボタン以外をクリックしたとき
        document . Form1["inputNumber"] . disabled = true; // 「その他」のラジオボタンの横のテキスト入力欄を無効化
    }
}
window.onload = changeDisabled; // ページを表示したとき、changeDisabled() を呼び出す

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})