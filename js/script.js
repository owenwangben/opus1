$(function(){
    /* 啟用smoove */
    $('.smoove').smoove();

    // 按鈕滑動置指定位置
    $('.menu a').click(function(){

        var btn = $(this).attr('href');
        var pos = $(btn).offset();
        $('html,body').animate({scrollTop:pos.top},1000);
    
    });

    // 按鈕滑動置頂
    $('#gotop').click(function(){
        $('html,body').animate({scrollTop:0},1000);
    });

    // 控制按鈕淡出淡入
    $(window).scroll(function(){

        if( $(this).scrollTop() > 200 ){
            $('#gotop').stop().fadeTo('', .6);
        } else {
            $('#gotop').stop().fadeOut();
        }
    });

});