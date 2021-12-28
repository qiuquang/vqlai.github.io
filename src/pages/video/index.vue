<template>
  <div class="videoPlay">
    <video-player :class="{ xuanzhuan: isJJB }" :options="videoOptions" />
  </div>
</template>
<script>
import VideoPlayer from "@/components/VideoPlayer.vue";
export default {
  name: "VideoExample",
  components: {
    VideoPlayer
  },
  props: {
    videoSrc: {
      type: String,
      default: "yunwei.mp4"
    }
  },
  computed: {
    // 是交接班的视频
    isJJB() {
      return this.videoSrc === "jiaojieban.mp4";
    }
  },
  data() {
    return {
      videoOptions: {
        //自动播放属性,muted:静音播放
        autoplay: "muted",
        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        //设置视频播放器的显示宽度（以像素为单位）
        width: "1100px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "560px",
        sources: [
          {
            src: "",
            type: "video/mp4"
          }
        ]
      }
    };
  },
  created() {
    this.videoOptions.sources[0].src = `../../../static/video/${this.videoSrc}`;
    if (this.isJJB) {
      this.videoOptions.width = "560px";
      this.videoOptions.height = "1100px";
    }
  }
};
</script>
<style>
.videoPlay {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.xuanzhuan {
  transform: rotate(270deg);
}
</style>
