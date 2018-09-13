window.onload = function () {
  let link = document.getElementsByClassName("second-link");
  for (let key in link){
    let src = '';
    link[key].onmouseover = function (){
      src = link[key].getElementsByTagName("img")[0].src.split('.')[0];
      link[key].getElementsByTagName("img")[0].src = src + '-sh.png';
    };
    link[key].onmouseout = function () {
      link[key].getElementsByTagName("img")[0].src = src + '.png';
    }
  }
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
