// JavaScript Document
/*------------------------------------------
 * ハンバーガーメニュー
-------------------------------------------*/
$(".btn-trigger").on("click",function(){
	$(this).toggleClass("active");
	$(".header-nav").fadeToggle(500);
});

/*------------------------------------------
 * ページトップボタン
-------------------------------------------*/
$(".btn-pagetop").on("click",function(){
	$("html,body").animate({scrollTop:0},1000);
});


/*------------------------------------------
 * フェイドイン
-------------------------------------------*/

$(window).on('load scroll', function (){

  var box = $('.fadeIn');
  var animated = 'animated';
  
  box.each(function(){
  
    var boxOffset = $(this).offset().top;
    var scrollPos = $(window).scrollTop();
    var wh = $(window).height();

    //画面内のどの位置で処理を実行するかで「100」の値を変更
    if(scrollPos > boxOffset - wh + 100 ){
      $(this).addClass(animated);
    }
  });

});














