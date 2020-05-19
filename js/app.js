document.addEventListener("DOMContentLoaded", function() {

	// Custom JS
  $("#navToggle").click(function () {
    $(".navBurger-line").toggleClass("active");
  });
  
  $(".time-group>label>span").click(function () {
    $(this).parent(".time-group>label").toggleClass("active");
  });

  //-----------------------------------------------------------------
  // Фильтрация символов на цифры для поля воода оценки ============================
  $(function(){
    $("input[name='grades']").on('input', function (e) {
      $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });
  });
  //====================================================================
  // Добавление нумерации для чекбокосов ============================
  $('table').each(function(){
    $('.chbx', this).each(function(i){
      $(this).find('input').attr('id','chbx--' + (i+1));
      $(this).find('label').attr('for','chbx--' + (i+1));
    })
  })
  //====================================================================
  // Добавление нумерации для групп в .panel__list =====================
  $('.admin__panel--groups').each(function(){
    $('li', this).each(function(i){
      $(this).find('a').append('<span id="number"></span>');
      $(this).find('#number').text('' + (i+1));
    })
  })
  //=====================================================================
});



(function (document, window, index){
  'use strict';
  var inputs = document.querySelectorAll('.file');
  Array.prototype.forEach.call(inputs, function (input) {
    var label = input.nextElementSibling,
      labelVal = label.innerHTML;
    
    input.addEventListener('change', function (e) {
      var fileName = '';
      if (this.files && this.files.length > 1)
        fileName = ( this.getAttribute('data-multiple-caption') || '' ).replace('{count}', this.files.length);
      else
        fileName = e.target.value.split('\\').pop();
      
      if (fileName)
        label.querySelector('span').innerHTML = fileName;
      else
        label.innerHTML = labelVal;
    });
    
    // Firefox bug fix
    input.addEventListener('focus', function () {
      input.classList.add('has-focus');
    });
    input.addEventListener('blur', function () {
      input.classList.remove('has-focus');
    });
  });
}(document, window, 0));



