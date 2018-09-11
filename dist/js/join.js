window.onload = function () {
  let contents = document.getElementsByClassName("join-contents");
  for (let key in contents) {
    contents[key].onmouseover = mouseOverHandle;
    contents[key].onmouseout = mouseOutHandle;
  }
};

function mouseOverHandle() {
  let begin = this.getElementsByClassName("begin")[0];
  changeAnimate(begin, {"border-radius": "50", "width": "100", "height": "100"}, function () {
    changeAnimate(begin, {
      "opacity": "0",
      "width": "0",
      "height": "0"
    })
  });
}

function mouseOutHandle() {
  let begin = this.getElementsByClassName("begin")[0];
  changeAnimate(begin, {
    "opacity": "1",
    "width": "100",
    "height": "100"
  }, function () {
    changeAnimate(begin, {"border-radius": "0", "width": "162", "height": "574"})
  });
}
