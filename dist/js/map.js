function init() {
  var myLatlng = new qq.maps.LatLng(38.876827,121.593854);
  var myOptions = {
    zoom: 18,
    center: myLatlng,
  }
  var map = new qq.maps.Map(document.getElementById("map"), myOptions);
  var marker = new qq.maps.Marker({
    position:myLatlng,
    map:map
  })
}

function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://map.qq.com/api/js?v=2.exp&callback=init";
  document.body.appendChild(script);
}

window.onload = loadScript;
