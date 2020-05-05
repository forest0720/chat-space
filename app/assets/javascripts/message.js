$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =`
        <div class="contents__chat--main__box">
          <div class="contents__chat--main__box__tag">
            <div class="contents__chat--main__box__tag__name">
              ${message.user_name}
            </div>
            <div class="contents__chat--main__box__tag__day">
              ${message.created_at}
            </div>
            </div>
          <div class="contents__chat--main__box__comment">
            <p class="contents__chat--main__box__comment__content">
              ${message.content}
            <img class="contents__chat--main__box__comment__image"
            <img src=${message.image} ></p>
            </div>
            </div>`

      return html;
    } else {
      var html =
        `<div class="contents__chat--main__box">
        <div class="contents__chat--main__box__tag">
        <div class="contents__chat--main__box__tag__name">
          ${message.user_name}
        </div>
        <div class="contents__chat--main__box__tag__day">
          ${message.created_at}
        </div>
        </div>
        <div class="contents__chat--main__box__comment">
        <p class="contents__chat--main__box__comment__content">
        ${message.content}
        </p>
        </div>
        </div>`
      return html;
    };
  };

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.contents__chat--main').append(html);
      $('form')[0].reset();
      $('.contents__chat--main').animate({ scrollTop: $('.contents__chat--main')[0].scrollHeight});
      $('.contents__chat--form__send').prop('disabled', false);
    })

    .fail(function(){
      alert("メッセージ送信に失敗しました");
    })
  });
});