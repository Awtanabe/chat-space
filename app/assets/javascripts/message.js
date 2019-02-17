$(function() {

    function buildHTML(message) {
        var image = `${message.image}` != "null" ?
            `<img src="${message.image}">` : ``
        var html = `<div class="main-message-box clearfix" data-id="${message.id}">
                <div class="main-message-box__user-name">
                  ${ message.name }
                </div>
                <div class="main-message-box__date">
                  ${ message.created_at }
                </div>
                <div class="main-message-box__comment">
                  ${ message.content}<br>` +
            image +
            `</div>
              </div>`
        return html;
    }
    $("#new_message").on("submit", function(e) {
        e.preventDefault();
        var formData = new FormData(this);
        console.log(formData)
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
                console.log(data)
                var html = buildHTML(data);
                $(".main-message-container").append(html);
                $(".footer-box__text-field").val('')
                $(".upload-icon").val('');
                $(".footer-btn__send").prop("disabled", false);
                $('.main-message').animate({ scrollTop: $('.main-message')[0].scrollHeight }, 'fast');
            //    console.log($('.main-message-container')[0].scrollHeigh)
            })
            .fail(function(a, b, c) {
                alert('error');
            })
    });

    window.location.href.match(/\/groups\/\d+\/messages/) ? setInterval(update, 100000) : clearInterval(setInterval(update, 2000))

    function update() {
        var message_id = $('.main-message-box').last().data('id');
        $.ajax({
                url: location.href,
                dataType: 'json',
                type: 'GET',
                data: { message_id: message_id },
            })
            .done(function(data) {
                data.forEach(function(message) {
                    $('.main-message-container').append(buildHTML(message));
                });
            })
            .fail(function(data) {
                alert('自動更新に失敗しました');
            });
    }
});
