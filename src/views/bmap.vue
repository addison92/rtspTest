<template>
  <div>
    <div id="allmap"></div>
  </div>
</template>
<script>

export default {
  data() {
    return {};
  },
  mounted() {
    this.initBmap();
    var _this = this
    window.onImageClick = function(ev) {
      _this.handleImageClick()
    }
  },
  methods: {
    initBmap() {
      // 百度地图API功能
      var sContent =
        "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>天安门</h4>" +
        "<img style='float:right;margin:4px' id='imgDemo' src='../../favicon.ico' width='139' height='104' title='天安门' onclick='onImageClick(this)'/>" +
        "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>天安门坐落在中国北京市中心,故宫的南侧,与天安门广场隔长安街相望,是清朝皇城的大门...</p>" +
        "</div>";
      var map = new BMap.Map("allmap");
      var point = new BMap.Point(116.404, 39.915);
      var marker = new BMap.Marker(point);
      var infoWindow = new BMap.InfoWindow(sContent); // 创建信息窗口对象
      map.centerAndZoom(point, 15);
      map.addOverlay(marker);
      marker.addEventListener("click", function() {
        this.openInfoWindow(infoWindow);
        //图片加载完毕重绘infowindow
        document.getElementById("imgDemo").onload = function() {
          infoWindow.redraw(); //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
        };
      });
    },
    handleImageClick(){
      alert('image clicked')
    }
  }
};
</script>
<style scoped>
#allmap {
  width: 800px;
  height: 800px;
}
</style>
