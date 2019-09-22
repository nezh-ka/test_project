// Валидация формы с помощью jQuery Validation
$(function(){

  $('.form form').validate({
    rules: {
      name: {
      required: true,
      minlength: 2,
      },
    },
    messages: {
      name: {
      required: "Поле обязательно к заполнению",
      minlength: "Введите не менее 2-х символов"
      },
      phone: {
      required: "Поле обязательно к заполнению",
      pattern: "Укажите правильный телефон",
      },
      company: "Поле обязательно к заполнению"
    }
    
  });

  $.validator.methods.pattern = function(value, element) {
    return (this.optional(element) || new RegExp(element.pattern).test(value));
  };
     
});