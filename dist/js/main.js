window.onload = function () {
  getSize();

  // disabledMouseWheel();
  my$("open-news-directory").onclick = function () {
    changeAnimate(my$("news-directory-content"),{"right":"-450"},function () {
      changeAnimate(my$("news-directory-close"),{"left":"450"});
    })
  };
  my$("news-directory-close").onclick = function () {
    changeAnimate(my$("news-directory-close"),{"left":"-60"},function () {
      changeAnimate(my$("news-directory-content"),{"right":"0"});
    })
  };
  let news_details = my$("news-detail").getElementsByClassName("news-details");
  for (let key in news_details) {
    news_details[key].onclick = function () {
      changeAnimate(my$("news-contents-inner"),{"right":"0"},function () {
        changeAnimate(my$("news-contents-close"),{"right":"900"})
      })
    }
  }
  my$("news-contents-close").onclick = function () {
    changeAnimate(my$("news-contents-close"),{"right":"-60"},function () {
      changeAnimate(my$("news-contents-inner"),{"right":"-900"})
    })
  };
  let introduction = $("#introduction").offset().top;
  $("#video_under").click(function () {
    $('html,body').animate({scrollTop:introduction},1000);
  });
  $(document).bind('mousewheel', function(event, delta) {
    return false;
  });
  objEvt = $._data($(document)[0], 'events');
};
let p=0;
let t=0;
var objEvt = null;
window.onscroll = function(){
  p=$(this).scrollTop();
  let height = getViewPortHeight();
  if (p >= height){
    $(document).unbind('mousewheel');
    objEvt = $._data($(document)[0], 'events');
  }
  if(t>p){
    if (p < height) {
      if (!objEvt){
        $(document).bind('mousewheel', function(event, delta) {
          return false;
        });
        objEvt = $._data($(document)[0], 'events');
        $('html,body').animate({scrollTop:0},1000);
      }
    }
  }
  t = p;
};

function getSize() {
  let video = my$("video");
  let mask = my$("video_mask");
  let width = getViewPortWidth();
  let height = getViewPortHeight();
  video.style.width = width + "px";
  video.style.height = height - 136 + "px";
  mask.style.width = width + "px";
  mask.style.height = height - 136 + "px";
  changeSize(my$("introduction"), width, height);
  changeSize(my$("product"), width, height);
  changeSize(my$("news"), width, height);
  changeSize(my$("team"), width, height);
}

function changeSize(dv, width, height) {
  dv.style.width = width + "px";
  dv.style.height = height + "px";
}


function disabledMouseWheel() {
  if(document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
  }//W3C
  window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome
}
function scrollFunc(evt) {
  evt = evt || window.event;
  if (evt.preventDefault) {
    // Firefox
    evt.preventDefault();
    evt.stopPropagation();
  } else {
    // IE
    evt.cancelBubble = true;
    evt.returnValue = false;
  }
  return false;
}
function abledMouseWheel() {
  console.log("hahha");
  if(document.removeEventListener) {
    document.removeEventListener('DOMMouseScroll', scrollFunc, false);
  }//W3C
  window.onmousewheel = document.onmousewheel = scrollStrat;//IE/Opera/Chrome
}
function scrollStrat(evt) {
  evt = evt || window.event;
  evt.cancelBubble = false;
  evt.returnValue = true;
  return true;
}
