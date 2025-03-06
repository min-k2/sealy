// 문서준비이벤트 작성 : js를 head영역에 선언할 때 필요

/*
$(document).ready(function () {

}); 
이것보다 더 짧게 하려면 아래와 같이 작성
*/

$(function () { // 시작
  // 내가 작성하는 코드가 들어갈 부분

  //.depth2에 flex를 선언했을 때 사용 > $(".depth2").hide();
  $(".gnb > li").hover(function () {
    $(this).find(".depth2").stop().fadeToggle();
  });

  //banner
  const banner_list = new Swiper(".banner_list", {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
  });

  // about_txt
  const about_txt_list = new Swiper(".about_txt_list", {
    effect: "fade", // 페이드 효과
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000, // 슬라이드 동작 속도
  });

  // about_img
  const about_img_list = new Swiper(".about_img_list", {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true, // 버튼 클릭 여부
    },
  });

  about_txt_list.controller.control = about_img_list
  about_img_list.controller.control = about_txt_list

  // prd
  const prd_list = new Swiper(".prd_list", {
    slidesPerView: 1, // 한 슬라이드에 보여줄 갯수
    centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
    loop: true,
    navigation: {
      nextEl: '.prd_next', // 다음 버튼
      prevEl: '.prd_prev', // 이전 버튼
    },
  });

  // collection 아콘디언 배너
  $(".collection ul li").mouseenter(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  })

  // search
  $(".btn_search").click(function () {
    $(".search").fadeIn();
  });
  $(".search_close").click(function () {
    $(".search").fadeOut();
  });

  // mgnb
  $(".ham").click(function () {
    $(".mgnb_wrap , .dim").fadeIn();
    $(".mgnb_box").animate({
      "right": "0"
    });
  });

  $(".mgnb_close").click(function () {
    $(".mgnb_wrap , .dim").fadeOut();
    $(".mgnb_box").animate({
      "right": "-100%"
    });
  });

}); // 종료