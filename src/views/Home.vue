<template>
  <div>
    <div id="mapDiv"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      var zoom = 3;
      var map;
      map = new T.Map("mapDiv", {
        attributionControl: false,
        inertia: false
      });
      map.centerAndZoom(new T.LngLat(116.40969, 37.43997405227057), zoom);

      var arrayObj = new Array();
      for (var i = 0; i < 500; i++) {
        var marker = new T.Marker(
          new T.LngLat(Math.random() * 40 + 85, Math.random() * 30 + 21),
          { title: i }
        );
        arrayObj.push(marker);
      }
      var markers = new T.MarkerClusterer(map, { markers: arrayObj });
    },

    handleImageClick() {
      alert("image clicked");
    }
  }
};
</script>

<style scoped>
#mapDiv {
  width: 800px;
  height: 800px;
}
</style>
