window.onload = function () {
  getSize();
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
