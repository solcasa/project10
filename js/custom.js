$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');

    });

    var memberCountConTxt = 97277249;

    $({ val: 91277249 }).animate({ val: memberCountConTxt }, {
        duration: 3000,
        step: function () {
            var num = numberWithCommas(Math.floor(this.val));
            $(".memberCountCon").text(num);
        },
        complete: function () {
            var num = numberWithCommas(Math.floor(this.val));
            $(".memberCountCon").text(num);
        }
    });

    //3자리마다 , 찍기
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

});