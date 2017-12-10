$(document).ready(function() {
        var val = 3;
        $('.side-nav-container-right').click(function(){

            var dom = $('.slider-item.slider-active');
            var index = $('.slider-item').index(dom);
            console.log(index);
            if(index == $('.slider-item').length - 1) return;

            console.log(val);
            val -= 50;
            $('.mover').css('transform', 'translateX('+ (val) +'%)');

            dom.removeClass('slider-active');
            $('.slider-item').eq(index + 1).addClass('slider-active');
        })

        $('.side-nav-container-left').click(function(){

            var dom = $('.slider-item.slider-active');
            var index = $('.slider-item').index(dom);
            console.log(index);
            if(index == 0) return;

            console.log(val);
            val += 50;
            $('.mover').css('transform', 'translateX('+ (val) +'%)');

            dom.removeClass('slider-active');
            console.log(index);
            $('.slider-item').eq(index - 1).addClass('slider-active');
        })
    })