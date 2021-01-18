// $("選取器").slick()
$("#card").slick({
    // 自動播放 (布林值)
    autoplay: true,
    // 自動播放速度 (整數)
    autoplaySpeed: 1000,
    // 點點
    dots: true
  });
  
  // {} 物件
  $("#card").slick({
    // 顯示數量
    slidesToShow: 5,
    // 滑動數量
    slidesToScroll: 2
  });