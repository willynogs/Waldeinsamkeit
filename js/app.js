$(document).ready(function () {
  console.log("Document Loaded!");
  var playing = true;

  //ADDING MUSIC PAUSE
  $('.pause').click(function () {
    if (playing) {
      $('.audio').trigger('pause');
      $('.pause i').remove();
      $('.pause').append('<i class="fa fa-play fa-2x"></i>')
      playing = false;
    } else {
      $('.audio').trigger('play');
      $('.pause i').remove();
      $('.pause').append('<i class="fa fa-pause fa-2x"></i>')
      playing = true;
    }
  });

  //MOUSE CHANGES ON HOVER OVER ANFANG
  $('#bt-begin').hover(function () {
    $('#bt-begin').css('cursor', 'pointer');
  }, function () {
    $('#bt-begin').css('cursor', 'default');
  });

  //ANFANG IS CLICKED
  $('#bt-begin').click(function () {
    $('#bt-begin').fadeOut(function () {
      $(this).remove();
    });
    $('#title').delay(1200).fadeOut(function () {
      $(this).remove();

      //LOAD POEM
      $('#page').append('<div class="content"><p style="display:none;">Waldeinsamkeit,</p><p style="display:none;">Wie liegst du weit!</p><p style="display:none;">O dich gereut,</p><p style="display:none;">Einst mit der Zeit</p><p style="display:none;">Ach einzige Freud</p><p style="display:none;">Waldeinsamkeit!</p></div><div class="nxt"><p>WEITER</p></div>');
      $('.content p:eq(0)').delay(100).fadeIn();
      $('.content p:eq(1)').delay(300).fadeIn();
      $('.content p:eq(2)').delay(500).fadeIn();
      $('.content p:eq(3)').delay(700).fadeIn();
      $('.content p:eq(4)').delay(900).fadeIn();
      $('.content p:eq(5)').delay(1100).fadeIn();
      $('.nxt').delay(2000).fadeIn();

      //MOUSE CHANGES ON HOVER OVER NACHSTE
      $('.nxt').hover(function () {
        $('.nxt').css('cursor', 'pointer');
      }, function () {
        $('.nxt').css('cursor', 'default');
      });

      //NACHSTE IS CLICKED
      $('.nxt').click(function () {
        $('.nxt').fadeOut(function () {
          $('.nxt').remove();
        });
        $('.content p:eq(0)').animate({
          marginLeft: "+=100",
          opacity: "0"
        }, 1000, function () {
          $('.content p:eq(0)').remove();
        });
        $('.content p:eq(1)').animate({
          marginRight: "+=100",
          opacity: "0"
        }, 1000, function () {
          $('.content p:eq(0)').remove();
        });
        $('.content p:eq(2)').animate({
          marginLeft: "+=100",
          opacity: "0"
        }, 1000, function () {
          $('.content p:eq(0)').remove();
        });
        $('.content p:eq(3)').animate({
          marginRight: "+=100",
          opacity: "0"
        }, 1000, function () {
          $('.content p:eq(0)').remove();
        });
        $('.content p:eq(4)').animate({
          marginLeft: "+=100",
          opacity: "0"
        }, 1000, function () {
          $('.content p:eq(0)').remove();
        });
        $('.content p:eq(5)').animate({
          marginRight: "+=100",
          opacity: "0"
        }, 1000, function () {
          $('.content p:eq(0)').remove();
          $('.summary').fadeIn();
        });

        //SUMMARY IS PRESENTED
        $('.content').append('<div class="summary"><h2>WALDEINSAMKEIT</h2></div>');
      });
    });
  });
});