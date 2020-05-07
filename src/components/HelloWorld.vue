<template>
  <div id="mapDiv"></div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  created() {
    this.initMap();
  },
  methods: {
    initMap() {
      var center = new T.LngLat(116.63072, 40.054952);
      //初始化地图对象
      var map = new T.Map("mapDiv");
      //设置显示地图的中心点和级别
      map.centerAndZoom(center, 12);
      //创建信息窗口对象

      var marker = new T.Marker(center); // 创建标注
      map.addOverLay(marker);
      var infoWin1 = new T.InfoWindow();
      var sContent =
        "<div style='margin:0px;'>" +
        "<div style='margin:10px 10px; '>" +
        "<img style='float:left;margin:0px 10px' src='http://lbs.tianditu.gov.cn/images/logo.png' width='101' height='49' title='天安门'/>" +
        "<div style='margin:10px 0px 10px 120px;'>电话 : (010)88187700 <br>地址：北京市顺义区机场东路国门商务区地理信息产业园2号楼天地图大厦" +
        "</div>" +
        "<input  id='keyWord' value='机场' type='text' style='border: 1px solid #cccccc;width: 180px;height: 20px;line-height: 20px;padding-left: 10px;display: block;float: left;'>" +
        "<input style='margin-left:195px;  width: 80px;height: 24px; text-align: center; background: #5596de;color: #FFF;border: none;display: block;cursor: pointer;' type='button' value='周边搜索'  onClick=\"localsearch.searchNearby(document.getElementById('keyWord').value,center,radius)\">" +
        "</div>" +
        "</div>";
      infoWin1.setContent(sContent);
      marker.addEventListener("click", function() {
        marker.openInfoWindow(infoWin1);
      }); // 将标注添加到地图中
    }
  }
};
</script>

<style scoped>
#mapDiv {
  width: 600px;
  height: 600px;
}
</style>