window.onload = function () {
  let link = document.getElementsByClassName("news-nav-link");
  for (let key in link) {
    let src = '';
    link[key].onmouseover = function () {
      let img = link[key].getElementsByTagName("img")[0];
      src = img.src.split('.')[0];
      img.src = src + "-sh.png";
    };
    link[key].onmouseout = function () {
      let img = link[key].getElementsByTagName("img")[0];
      img.src = src + ".png";
    }
  }
};
