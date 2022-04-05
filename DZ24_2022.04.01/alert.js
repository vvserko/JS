$(function(){
  $('.alert').on('close.bs.alert', function(){
    $('.result').append('<li>Сейчас будет закрыто сообщение (alert)</li>');
  });
  $('.alert').on('closed.bs.alert', function(){
    $('.result').append('<li>Сообщение (alert) уже закрыто</li>');
  });
});
