$(document).ready(function(){
        var val = 25;
        $('.prev').click(function(){

            var dom = $('.item.active');
            var index = $('.item').index(dom);
            console.log(index);
            if(index == $('.item').length - 1) return;

            console.log(val);
            val -= 50;
            $('.mover').css('transform', 'translateX('+ (val) +'%)');

            dom.removeClass('active');
            $('.item').eq(index + 1).addClass('active');
        })

        $('.next').click(function(){

            var dom = $('.item.active');
            var index = $('.item').index(dom);
            console.log(index);
            if(index == 0) return;

            console.log(val);
            val += 50;
            $('.mover').css('transform', 'translateX('+ (val) +'%)');

            dom.removeClass('active');
            console.log(index);
            $('.item').eq(index - 1).addClass('active');
        })
    })