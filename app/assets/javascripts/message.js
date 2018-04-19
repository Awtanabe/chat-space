$(function(){
   function buildHTML(message){
    var img = ""
    if (message.image){
     img = `<img src="${message.image}">`
   }
    let html =`<div class="main-message-box clearfix">
                <div class="main-message-box__user-name">
                  ${ message.name }
                </div>
                <div class="main-message-box__date">
                  ${ message.created_at }
                </div>
                <div class="main-message-box__comment">
                  ${ message.content}<br>
                  ${img}
                </div>
              </div>`
    return html;
   }

  $("#new_message").on("submit",function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
       url: url,
       type: 'POST',
       data: formData,
       dataType: 'json',
       processData: false,
       contentType: false
    })
    .done(function(data){
      //console.log(data.get(image));
      var html = buildHTML(data);
      $(".main-message-container").append(html);
      $(".footer-box__text-field").val('')
      $(".upload-icon").val('');
      $(".footer-btn__send").prop("disabled", false);
      $('.main-message').animate({scrollTop: $('.main-message')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error');
    })
  });
});



