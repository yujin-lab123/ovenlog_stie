//===================header========================

    $(function(){
      $(window).scroll(function(){
        if($(window).scrollTop() >= 10){
          $('.header_box').slideUp(100);
          $('.quick_menu').fadeIn(300);
          $('.top_btn').fadeIn(300);
        }else{
          $('.header_box').slideDown(100);
          $('.quick_menu').fadeOut(300);
          $('.top_btn').fadeOut(300);
        }
      }); //헤더 줄이기

      $('.top_btn').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({
          scrollTop: 0
        }, 300);
      });

    });

    //-------------------------------

    $(function(){
      const searchBox = $('.header .search_box');

      $(window).scroll(function(){
        if($(window).scrollTop() >= 10){
          searchBox.addClass('on');
        }else{
          searchBox.removeClass('on');
        }
      });
    });


//--------/header_box---------

$(function(){

  const hamImg = $('.gnb_box .ham_bar .ham_bar_on');

  $('.ham_bar').click(function(){
    if($('.all_menu_box').css('display')==='none'){
      $('.all_menu_box').css('display', 'flex').hide().slideDown(200);
      hamImg.attr('src', './images/icon/close.png');
    }else{
      $('.all_menu_box').slideUp(200);
      hamImg.attr('src', './images/icon/main_bar.png');
    }
  });

  $('.all_menu_box').mouseleave(function(){
    $(this).slideUp(200);
    hamImg.attr('src', './images/icon/main_bar.png');
  });


});//gnb 클릭이랑 호버이벤트

//-------/gnb_box--------------
//===================/header========================



//==================get_box===================

$(function(){
  
  const allLabel = $('.like_box label');

  $('.heart').mouseover(function(){
      if(!$(this).hasClass('active')){
        $(this).removeClass('jelly_active');
        $(this).addClass('jelly_active');
      }
  });
  $('.heart').mouseout(function(){
      if(!$(this).hasClass('active')){
        $(this).removeClass('jelly_active');
      }
  });

  $('.heart').click(function(){
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      allLabel.removeClass('jelly_active_click');
      $(this).addClass('jelly_active_click');
    }
  });
  // -------------------------------------
  $('.cart').mouseover(function(){
      if(!$(this).hasClass('active')){
        $(this).removeClass('jelly_active');
        $(this).addClass('jelly_active');
      }
  });
  $('.cart').mouseout(function(){
      if(!$(this).hasClass('active')){
        $(this).removeClass('jelly_active');
      }
  });

  $('.cart').click(function(){
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      allLabel.removeClass('jelly_active_click');
      $(this).addClass('jelly_active_click');
    }
  });

});//all_like_box이벤트

//===============================================

$(function(){

  const getHeart = $('.get_menu_box .get_like_box .get_heart');
  const getCart = $('.get_menu_box .get_like_box .get_cart');

  getHeart.mouseover(function(){
    if(!$(this).hasClass('active')){
      $(this).find('.get_like_off').attr('src', './images/icon/heart_gethover.png');
    }
  });
  getHeart.mouseout(function(){
    if(!$(this).hasClass('active')){
      $(this).find('.get_like_off').attr('src', './images/icon/heart_black.png');
    }
  });

  getHeart.click(function(){
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      $(this).find('.get_like_off').attr('src', './images/icon/heart_click.png');
      $(this).removeClass('jelly_active');
      $(this).addClass('jelly_active_get');
    }else{
      $(this).find('.get_like_off').attr('src', './images/icon/heart_black.png');
    }
  }); //get_heart_호버,클릭 이벤트
// -------------------------------------
getCart.mouseover(function(){
  if(!$(this).hasClass('active')){
    $(this).find('.get_cart_off').attr('src', './images/icon/cart_gethover.png');
  }
});
getCart.mouseout(function(){
  if(!$(this).hasClass('active')){
    $(this).find('.get_cart_off').attr('src', './images/icon/cart.png');
  }
});

getCart.click(function(){
  $(this).toggleClass('active');
  if($(this).hasClass('active')){
    $(this).find('.get_cart_off').attr('src', './images/icon/cart_click.png');
    $(this).addClass('jelly_active_get');
  }else{
    $(this).find('.get_cart_off').attr('src', './images/icon/cart.png');
  }
});//get_cart_호버,클릭 이벤트

});

//==================/get_box===================


//----------------best_box----------------------

$(function(){
  const bestTab = $('.best_product_box .best_btn_box label');
  const sheet = $('.best_product_box .best_sheet');
  let index = 0;

  bestTab.click(function(){
    bestTab.removeClass('on');
    $(this).addClass('on');

    index = $(this).index();

    sheet.removeClass('best_sheet_on');
    sheet.eq(index).addClass('best_sheet_on');

  });

});//best_box 탭버튼 이동 이벤트



//=======================/main======================

//===============장바구니======================

$(function(){
  const shoppingCart = $('.bottom_cart .bt_cart_content .bt_cart_content_box');
  const i = $('.bt_cart_text span i');

  $('.bt_cart_text').click(function(){
    if(shoppingCart.css('display')==='none'){
      shoppingCart.slideDown(300);
    }else{
      shoppingCart.slideUp(300);
    }

    if(i.hasClass('fa-solid fa-angle-down')){
      i.removeClass('fa-solid fa-angle-down');
      i.addClass('fa-solid fa-angle-up');
    }else{
      i.removeClass('fa-solid fa-angle-up');
      i.addClass('fa-solid fa-angle-down')
    }
  });

});//장바구니


//==============sub_page==========================

$(function(){
  const subHeart = $('.sub_menu_content .overlay_btn .heart');
  const subCart = $('.sub_menu_content .overlay_btn .cart');

  subHeart.mouseover(function(){
    if(!$(this).hasClass('active')){
      $(this).find('.like_off').attr('src', './images/icon/sub_heart_hover.png');
    }
  });
  subHeart.mouseout(function(){
    if(!$(this).hasClass('active')){
      $(this).find('.like_off').attr('src', './images/icon/sub_heart.png');
    }
  });

  subHeart.click(function(){
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      subHeart.removeClass('jelly_active_click');
      $(this).addClass('jelly_active_click');
      $(this).find('.like_off').attr('src', './images/icon/sub_heart_click.png')
    }else{
      $(this).find('.like_off').attr('src', './images/icon/sub_heart.png')
    }
  });
//-----------subHeart이벤트---------------------

  subCart.mouseover(function(){
    if(!$(this).hasClass('active')){
      $(this).find('.cart_off').attr('src', './images/icon/sub_cart_hover.png');
    }
  });
  subCart.mouseout(function(){
    if(!$(this).hasClass('active')){
      $(this).find('.cart_off').attr('src', './images/icon/sub_cart.png');
    }
  });

  subCart.click(function(){
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      subCart.removeClass('jelly_active_click');
      $(this).addClass('jelly_active_click');
      $(this).find('.cart_off').attr('src', './images/icon/sub_cart_click.png')
    }else{
      $(this).find('.cart_off').attr('src', './images/icon/sub_cart.png')
    }
  });

});

//==============/sub_page========================



//==============detail_page======================

$(function(){
  $('.bxslider').bxSlider({
    pagerCustom: '#bx-pager'
  });
});


//------------/플러그인---------------------

$(function(){
  const detailLeft = $('.product_detail_tab_box .p_d_t_b_left');
  const detailRight = $('.product_detail_tab_box .p_d_t_b_right');

  $(window).scroll(function(){
    if($(window).scrollTop() > 600){
      detailLeft.addClass('on');
      detailRight.addClass('on');
    }else{
      detailLeft.removeClass('on');
      detailRight.removeClass('on');
    }
  });
});

//-------------/미니 결제창-----------------

$(function(){
  
  const price = 8200;
  const discount = 7626;
  let cnt = 2;
  updatePrice();

  function updatePrice() {
    let totalOld = (price * cnt).toLocaleString() + '원';
    let totalNew = (discount * cnt).toLocaleString() + '원';
    
    $('#count_box span').text(cnt);
    $('.choice_box .price .old_price').text(totalOld);
    $('.choice_box .price .new_price').text(totalNew);
    $('.total_price #new_price').text(totalNew);
  }

  $('.btn_minus').click(function(){
    cnt--;

    if(cnt <= 1){
      cnt = 1;
      alert('최소 수량입니다.');
    }
    updatePrice();
  });

  $('.btn_plus').click(function(){
    cnt++;

    if(cnt >= 100){
      cnt = 100;
      alert('100개 이상 주문 시 대량 주문 기능을 이용해주세요.');
    }
    updatePrice();
  });

});//detail_page 카운트 기능




/////////////////////////////////////////////
//////////////회원가입 JavaScript/////////////
/////////////////////////////////////////////


document.addEventListener('DOMContentLoaded', function(){

const totalTerms = document.getElementById('total_terms');
const termsEls = document.querySelectorAll('.terms_container li .terms_el');
const termsBtn = document.querySelectorAll('.terms_container li .terms_chk i');
const totalTermsIcon = document.querySelector('.terms_container li .total_terms i')
const terms01 = document.getElementById('terms01');
const terms02 = document.getElementById('terms02');
const terms03 = document.getElementById('terms03');
const terms04 = document.getElementById('terms04');
const terms05 = document.getElementById('terms05');
const terms06 = document.getElementById('terms06');
const joinBtn = document.querySelector('.sign_up_box .join_btn');

totalTerms.addEventListener('click', totalCheck);
termsEls.forEach((termsEl) => {
  termsEl.addEventListener('click', termsCheck);
});
joinBtn.addEventListener('click', joinCheck);

function totalCheck(){

  if(totalTerms.checked === true){
    termsEls.forEach((termsEl, index) => {
      termsEl.checked = true;
      termsBtn[index].style.color = '#B94040';
      totalTermsIcon.style.color = '#B94040';
    })
  }else{
    termsEls.forEach((termsEl, index) => {
      termsEl.checked = false;
      termsBtn[index].style.color = '#999';
      totalTermsIcon.style.color = '#999';
    })
  }

}//totalCheck

function termsCheck(){

if(terms01.checked && terms02.checked && terms03.checked && terms04.checked && terms05.checked && terms06.checked){
  totalTerms.checked = true;
  totalTermsIcon.style.color = '#B94040';
}else{
  totalTerms.checked = false;
  totalTermsIcon.style.color = '#999';
}
}//termsCheck


/*
function joinCheck(){

if()

이용약관도 넣기


}//joinCheck
*/











});// DOMContentLoaded end












