$(function () {
    const swiper = new Swiper('.mySwiper', {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".paging",
            type: "fraction",
        },
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },
    });
    $('.btn-pause').click(function () {
        $('.btn-pause').css('display', 'none');
        $('.btn-play').css('display', 'block');
        swiper.autoplay.stop();
    });
    $('.btn-play').click(function () {
        $('.btn-play').css('display', 'none');
        $('.btn-pause').css('display', 'block');
        swiper.autoplay.start();
    });
});
$(function () {
    var popSwiper = new Swiper(".popSwiper", {
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        slidesPerView: 3,
        spaceBetween: 43,
        pagination: {
            el: ".pagination",
            type: "fraction",
            clickable: true,
        },
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        },
    });
    $('.button-pause').click(function () {
        $('.button-pause').css('display', 'none');
        $('.button-play').css('display', 'block');
        popSwiper.autoplay.stop();
    });
    $('.button-play').click(function () {
        $('.button-play').css('display', 'none');
        $('.button-pause').css('display', 'block');
        popSwiper.autoplay.start();
    });
})
// 연관사이트
$(function () {
    $('button').click(function () {
        $(this).toggleClass('on').siblings().toggleClass('on');
        // 다른 버튼에 있는 on 클래스를 제거합니다.
        $('button').not($(this)).removeClass("on");
        // 다른 .site_wrap 요소에 있는 on 클래스를 제거합니다.
        $(".site_wrap").not($(this).next(".site_wrap")).removeClass("on");
    })
})