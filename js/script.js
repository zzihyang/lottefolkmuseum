$(document).ready(function () {


    // ==============헤더 스크립트==============
    let header = $('#header');
    let gnbWrap= header.find('.gnbArea');
    let oneDepth = $('#header .gnb > li');
    let twoDepth = oneDepth.children('.twoD');
    let thrBt = twoDepth.find('.thrBt');
    let gnbBg = $('#header .gnbBg');
    let leftArea = $('#header .leftArea');
    let gnbBgLth = $('.gnbBg').outerHeight()

    //oneDepth에 hover시 클래스 on(li 하단 삼각형)
    oneDepth.each(function(i){
        $(this).on('mouseenter',function(){
            oneDepth.eq(i).addClass('on')
        })
        $(this).on('mouseleave',function(){
            oneDepth.eq(i).removeClass('on')
        })
    })

    $(gnbWrap).add(gnbBg).mouseenter(function(){
        gnbBg.stop().slideDown(300);
        leftArea.stop().fadeIn(300);
        twoDepth.stop().fadeIn(500);
    })

    $(gnbWrap).add(gnbBg).mouseleave(function(){
        gnbBg.stop().slideUp(100);
        leftArea.stop().fadeOut(100);
        twoDepth.stop().fadeOut(0);
    })



    //thrBt를 클릭하면
    thrBt.each(function(){
        $(this).click(function(){
            // 클래스 on이 있을 때
            if($(this).hasClass('on')){
                $(this).removeClass('on');
                $(this).next('.thrD').stop().slideUp();
            }else{
                $(this).addClass('on')
                $(this).next('.thrD').stop().slideDown();
            }

            //
            let twoDLth = $(this).parent().parent()
            
            console.log(twoDLth)
            console.log(gnbBgLth)
            $(this).parent().parent().css('background','red')
            if(twoDLth>325){
                gnbBg.css('height','427px')
            }else{
                gnbBg.css('height','325px')
            }

            //여기부터 한번 해보기
            $("#header .gnb > li .twoD").each(function(q){
				longH = $(this).height() + 70;
				if(maxH < longH) maxH = longH;
			});
			$("#header .gnbBg").css("height",maxH + 15)
			$("#header .gnbArea .leftArea").css("height",maxH - 120)
			maxH = 0
            //여기까지
        })
    })






    // ==============모바일 스크립트==============
    let openBt = $('.mHeader .openBt'),
        mMArea = $('.mMenuArea'),
        closeBt = mMArea.find('.closeBt'),
        gnbArea = $('.gnbArea'),
        oneD = gnbArea.children('.oneD'),
        twoD = gnbArea.children('.twoD'),
        mthrBt = twoD.children('.thrBt'),
        thrD = twoD.children('.thrD');

    //mMArea의 openBt 클릭하면
    openBt.click(function () {
        mMArea.animate({ 'left': '0' }, 600)
    });

    //mMArea의 closeBt 클릭하면
    closeBt.click(function () {
        mMArea.animate({ 'left': '-100%' }, 600)
    });


    //mMArea의 oneD 누르면
    oneD.click(function () {
        twoD.slideUp();
        oneD.removeClass('on')

        if (!$(this).next('.twoD').is(':visible')) {
            $(this).next('.twoD').slideDown()
            //twoD.slideDown 하게되면 모두가 열리므로 this.next를 넣어준다.
            $(this).addClass('on')
        }
    })
    mthrBt.click(function () {
        $(this).next().slideToggle()
        $(this).toggleClass('on')
    })

    

    // topBtn버튼 스크립트
    $('.topBtn').click(function () {
        $('html').animate({ scrollTop: 0 }, 600)
    })


    //==============스크롤 스크립트=============
    $(window).scroll(function () {


        //스크롤 된 값 구하기
        let winScrollT = $(window).scrollTop();
        let winScrollT2 = $(window).scrollTop()+ $('#footer').outerHeight(true)+200;
        let winScrollT3 = $(window).scrollTop()+ $(window).height();
        let mCon1T = $('.mainCon1').offset().top;
        let mCon2T = $('.mainCon2').offset().top;
        let mCon3T = $('.mainCon3').offset().top;
        let footT = $('#footer').offset().top;



        //스크롤 애니메이션
        if (winScrollT >= mCon1T - 300 && winScrollT <= mCon2T - 300) {
            $('.mainCon1 .mainTit').animate({ top: 0, opacity: 1 }, 600, 'swing')
            $('.mainCon1 .mainTxt').delay(200).animate({ top: 0, opacity: 1 }, 600, 'swing')
            $('.mainCon1 .mainCon1List').delay(400).animate({ top: 0, opacity: 1 }, 600, 'swing')

        } else if (winScrollT >= mCon2T - 300 && winScrollT <= mCon3T - 300) {
            $('.mainCon2 .mainTit').animate({ top: 0, opacity: 1 }, 600, 'swing')
            $('.mainCon2 .mainTxt').delay(200).animate({ top: 0, opacity: 1 }, 600, 'swing')
            $('.mainCon2 .mainCon2List').delay(400).animate({ top: 0, opacity: 1 }, 600, 'swing')

        } else if (winScrollT >= mCon3T - 300 && winScrollT <= footT - 300) {
            $('.mainCon3 .mainTit').animate({ top: 0, opacity: 1 }, 600, 'swing')
            $('.mainCon3 .mainTxt').delay(200).animate({ top: 0, opacity: 1 }, 600, 'swing')
            $('.mainCon3 .mainNews').delay(400).animate({ top: 0, opacity: 1 }, 600, 'swing')

        }

        //헤더 고정시키기
        if (winScrollT > 26) {
            $('#header').addClass('fixed')
        } else {
            $('#header').removeClass('fixed')
        }

        //윈도우가 스크롤된 값이 푸터 위치값보다 크거나 같을 경우
        if(winScrollT3>=footT){
            $('.topBtn').fadeIn(500)
            $('.topBtn').css('bottom',$('#footer').outerHeight())
        }else{
            $('.topBtn').fadeOut(500)
        }
    })


    //mainCon1 리스트 hover 시 배경 변경
    let  mainConLI = $('.mainCon1List li')
    let  mainCon1Bg = $('.mainCon1Bg >div')

    mainConLI.each(function(idx,item){
    //     mainCon1Bg.eq(0).addClass('test0')
    //     mainCon1Bg.eq(1).addClass('test1')

        $(this).hover(function(){
            mainCon1Bg.eq(idx).stop().fadeIn(600)
        },function(){
            mainCon1Bg.eq(idx).stop().fadeOut(600)
        
        })

    })
    


    
    //메인 슬라이드 js
    const swiper = new Swiper('#mainSlide', {
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });
})