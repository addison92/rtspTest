<template>
    <div class="test-page">
        <span> 测试video 视频资源获取与播放</span>
        <div @click="playVideo" class="btn-vis">点击播放视频</div>
        <div class="video-warp" v-show="videoWarpShow">
            <!-- <div @click="closeV" class="close">x</div> -->
            <div class="vxgplayer" id="vxg_media_player1" :url="url" autostart controls avsync nmf-src="/map-demo/pnacl/Release/media_player.nmf" nmf-path="media_player.nmf" width="300" height="300">
            </div>
        </div>
    
    </div>
</template>

<script>
export default {
    name: "testVlcPlay",
    data() {
        return {
            videoWarpShow: false,
            url:"rtsp://218.204.223.237:554/live/1/0547424F573B085C/gsfp90ef4k0a6iap.sdp"
        }
    },
    methods: {
        playVideo() {
            this.videoWarpShow = true;
            // 设置url 播放
            window.vxgplayer('vxg_media_player1').stop();
            window.vxgplayer('vxg_media_player1').src(this.url);
            window.vxgplayer('vxg_media_player1').play();

        },
    },
    destroy() {
        window.vxgplayer.dispose();
    }
}
</script>