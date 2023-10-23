$(function () {
    //main visual slider
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });//slider 

    // 헤더 메뉴 싱글 드롭다운
    $('.pc_gnb > ul > li').mouseenter(function () {
        $(this).children('ul').stop().slideDown();
    });
    $('.pc_gnb > ul > li').mouseleave(function () {
        $(this).children('ul').stop().slideUp();
    });

    //스크롤 시 헤더 스타일 변경
    let headerTop = $('header').offset().top;
    $(window).scroll(function () {
        let scrollBar = $(window).scrollTop();
        if (headerTop < scrollBar) {
            $('header').addClass('on');
        } else {
            $('header').removeClass('on');
        }

    });

    //스크롤 시 컨텐츠 나타나기 cont02
    $(window).scroll(function () {
        $('.cont02 .list .item').each(function (index) {
            //each()메서드를 이용하여 figure에게 효과 지정(animate)

            //브라우저 시작점에서 부터 떨어진 높이값 + 컨텐츠의 높이값
            var bottomImg = $(this).offset().top + $(this).outerHeight();
            //outerHeight() => 패딩/테두리 포함, 마진 불포함.

            //스크롤했을 때의 총 길이값 + 보여지는 화면의 높이값
            var windowHeight = $(window).scrollTop() + $(window).height();
            var scrollTop = $(window).scrollTop(); //스크롤바 길이값



            if (bottomImg < windowHeight) {
                $(this).addClass('list' + index);
            } else if (scrollTop == 0) {
                $(this).removeClass('list' + index);
            }
        });//each
    });//scroll   




    //모바일 : 메뉴 아이콘 클릭 시 gnb 나타나기

    $('.menu_close').click(function () {
        $('.mobile_gnb').css({
            'left': '-100%',
            'transition': '0.8s'
        });
    });
    $('.menu_open').click(function () {
        $('.mobile_gnb').css({
            'left': '0',
            'transition': '0.8s'
        });
    });

    //모바일 : 아코디언 메뉴
    $('.mobile_gnb>ul>li>a').click(function () {
        if ($(this).next().css('display') == 'none') {
            $('.mobile_gnb>ul>li>ul').slideUp();
            $(this).next().slideDown();
            $('.mobile_gnb>ul>li>a').removeClass('on');
            $(this).addClass('on');

        } else {
            //조건이 맞지 않을 때
            //next()가 열려있을 때 == block
            $(this).next().slideUp();
            $(this).removeClass('on');

        }
    });




});//jquery end