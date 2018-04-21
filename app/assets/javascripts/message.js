$(function() {

    function buildHTML(message) {
        var img = ""
        if (message.image) {
            img = `<img src="${message.image}">`
        }
        let html = `<div class="main-message-box clearfix" data-id="${message.id}">
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

    $("#new_message").on("submit", function(e) {
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
            .done(function(data) {
                var html = buildHTML(data);
                $(".main-message-container").append(html);
                $(".footer-box__text-field").val('')
                $(".upload-icon").val('');
                $(".footer-btn__send").prop("disabled", false);
                $('.main-message').animate({ scrollTop: $('.main-message')[0].scrollHeight }, 'fast');
            })
            .fail(function(a, b, c) {
                alert('error');
                console.log(a);
                console.log(b);
                console.log(c);
            })
    });

    $(function() {
        setInterval(update, 15000);
    });

    function update() {
        var message_id = $('.main-message-box').last().data('id');
        $.ajax({
                url: location.href,
                dataType: 'json',
                type: 'GET',
                data: { message_id: message_id },
            })
            .done(function(data) {
                data.messages.forEach(function(message) {
                    $('.main-message-container').append(buildHTML(message));
                });
            })
            .fail(function(data) {
                alert('自動更新に失敗しました');
            });
    }
});
