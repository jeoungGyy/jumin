$(document).ready(function () {

  mwui = {
	
    init: function () {
    	mwui.lnb();
      mwui.dateLayer();
      mwui.alertLayer();
    },
    /* LNB 메뉴 */
    lnb: function () {
      var $jmBtns = $(".jm-n-btns");
      var $jmNav = $(".jm-nav");
      var $jmBlind = $(".jm-blind");
      var $jmSub = $(".jm-sub");
      var $jmNavStep1 = $('.jm-nav-step1');

      $jmBtns.prepend('<p>메뉴열기</p>')
      $jmBtns.on("click", function(e){
        $(this).toggleClass("jm-nav-toggle");
        if($(this).hasClass('jm-nav-toggle')) {
          $(this).find('p').text('메뉴닫기');
          $jmNav.toggleClass("jm-nav-block");
          setTimeout(function() {
            $jmNav.toggleClass("jm-nav-active");
          }, 1);
        } else {
          $(this).find('p').text('메뉴열기');
          $jmBtns.removeClass("jm-nav-toggle");
          $jmNav.removeClass("jm-nav-active");
          setTimeout(function() {
            $jmNav.removeClass("jm-nav-block");
          }, 100);
        }
      });
      $jmBlind.on("click", function(e){
        $jmBtns.removeClass("jm-nav-toggle");
        $jmNav.removeClass("jm-nav-active");
        setTimeout(function() {
          $jmNav.removeClass("jm-nav-block");
        }, 100);
      });
      $jmSub.find(">a").on("click", function(e){
        $(this).siblings().slideToggle(150, function() {
          $jmSub.find(">a").toggleClass("jm-s-active");
        })
      });
      $jmNavStep1.find('li').last().find('a').on("keydown", function(e){
        var _keyCode = e.keyCode || e.which;
        if(_keyCode === 9) {
          if(!e.shiftKey) {
            e.preventDefault();
            $jmBtns.focus();
          }
        }
      });
    },
    /* 이용기간 선택 레이어 */
    dateLayer: function () {
      var $jmFilterBtns = $(".jm-filter-btn");
      var $jmFullClose = $(".jm-full-close");
      var refFocusEl = null;

      $jmFilterBtns.on("click", function(e){
        var _currnt_name = $(this).attr("area-controls");
        refFocusEl = this;

        $("#"+_currnt_name).addClass("open").attr({"tabindex": "0", "aria-hidden": false}).focus();
      });
      $jmFullClose.on("click", function(e){
        if(refFocusEl) {
          $(".jm-layer").removeClass("open").attr({"tabindex": "", "aria-hidden": true});
          refFocusEl.focus();
        }
        refFocusEl = null;
      });
    },
    /* 알럿 레이어 */
    alertLayer: function () {
      var $jmLbcBtn = $(".jm-lbc-btn");

      $jmLbcBtn.find('button').last().on("keydown", function(e){
        var _keyCode = e.keyCode || e.which;
        if(_keyCode === 9) {
          if(!e.shiftKey) {
            e.preventDefault();
            $jmLbcBtn.find('button').first().focus();
          }
        }
      });
    },
  }
  mwui.init();
});