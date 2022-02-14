<template>
  <div class="project">
    <div class="container">
      <span class="tip">WHAT I DO</span>
      <h1 class="title">{{ title }}</h1>
      <span class="border"></span>
      <div class="projectLi" v-for="(item, index) in projectList" :key="index">
        <div class="imgUrl"> 
        <img
          class="imgUrlImg"
          :src="require(`../common/images/${item.imgSrc}`)"
          alt="适航司"
        />
        </div>
        <div style="flex: 1;text-align:left">
          <a v-if="item.url" class="title" :href="item.url" target="_blank">
            {{ item.title }}
          </a>
          <span class="title" v-else-if="item.videoSrc">
            {{ item.title }}
            <i @click="goVideoPage(item, index)" class="play"></i>
          </span>
          <span class="title" v-else>
            {{ item.title }}
            <el-image style="width: 16px; height: 16px" 
            :src="require(`../common/images/imgicon.png`)" :preview-src-list="item.srcList"></el-image>
          </span>
          <div style="margin: 10px 0;font-size: 18px;">
            涉及技术：
            <span style="font-size: 16px;">{{ item.techs }}</span>
          </div>
          <div>
            {{ item.desc }}
          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "project",
  data() {
    return {
      showImgFlag: false,
      title: "我的项目",
      projectList: [
        {
          url: "https://amos.caac.gov.cn/#/home",
          title: "适航审定运行管理系统",
          imgSrc: "feiji.jpg",
          techs: "vue、element-ui、vuex、axios、pdfjs、rem.js、pageoffice、weboffice",
          desc: "作为该项目前端负责人，最多时候带领20个前端进行协同开发，时间紧，开发了一套vue本项目及iframe嵌入项目的框架"
        },
        {
          url: "",
          title: "运维监控系统",
          imgSrc: "yanshi.png",
          videoSrc: "yunwei.mp4",
          techs: "vue、element-ui、vuex、echarts",
          desc: "后台实时监控各服务器的使用情况，监控交换机网口的状态是否正常，前端用echarts折线图进行实时展示服务器使用情况"
        },
        {
          url: "",
          title: "跑道容量",
          imgSrc: "paodao.jpg",
          videoSrc: "paodao.mp4",
          techs: "vue、element-ui、vuex、echarts",
          desc: "基于vue.js class动态绑定实现的样式"
        },
        {
          url: "",
          title: "公务机系统",
          imgSrc: "gongwuji.png",
          srcList: [
            '../../static/images/gwj/1.png',
            '../../static/images/gwj/2.png',
            '../../static/images/gwj/3.jpg',
            '../../static/images/gwj/5.jpg',
            '../../static/images/gwj/6.jpg',
            '../../static/images/gwj/7.jpg',
            '../../static/images/gwj/8.jpg',
          ],
          techs: "vue、element-ui、vuex、echarts、websocket",
        },
        {
          url: "",
          title: "贵宾系统",
          imgSrc: "guibin.png",
          srcList: [
            '../../static/images/gb/1.png',
            '../../static/images/gb/2.png',
            '../../static/images/gb/3.jpg',
            '../../static/images/gb/4.jpg',
            '../../static/images/gb/5.jpg',
            '../../static/images/gb/13.jpg',
            '../../static/images/gb/6.jpg',
            '../../static/images/gb/7.jpg',
            '../../static/images/gb/8.jpg',
            '../../static/images/gb/9.jpg',
            '../../static/images/gb/10.jpg',
            '../../static/images/gb/11.jpg',
            '../../static/images/gb/12.jpg',
          ],
          techs: "vue、element-ui、vuex、echarts、websocket",
        },
        {
          url: "",
          title: "流亭机场交接班系统",
          imgSrc: "jiaojieban.png",
          videoSrc: "jiaojieban.mp4",
          techs: "vue、element-ui、vuex、echarts",
        },
        {
          url: "",
          title: "颂康泰订票系统PC端",
          imgSrc: "dppc.jpg",
          srcList: [
            '../../static/images/dppc/1.jpg',
            '../../static/images/dppc/2.jpg',
            '../../static/images/dppc/3.jpg',
            '../../static/images/dppc/4.jpg',
            '../../static/images/dppc/5.jpg',
            '../../static/images/dppc/6.jpg',
            '../../static/images/dppc/7.jpg',
          ],
          techs: "vue、element-ui、vuex、echarts",
        },
        {
          url: "",
          title: "颂康泰订票系统APP端",
          imgSrc: "dpapp.jpg",
          videoSrc: "dpapp.mp4",
          techs: "vue、uniapp、vuex、uView",
        }
      ]
    };
  },
  methods: {
    goVideoPage(item, index) {
      console.log(item, index);
      let routeUrl = this.$router.resolve({
        path: "/video",
        query: { videoSrc: item.videoSrc }
      });
      window.open(routeUrl.href, "_blank");
    },
    showImg(item, index) {
      console.log(item, index)
      this.showImgFlag = true
      this.srcList = item.srcList

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project {
  height: auto;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  text-align: center;
}
.container {
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4% 0;
}
.tip {
  display: inline-block;
  position: relative;
  padding: 6px 20px;
  margin: 0 auto 10px;
  font-size: 20px;
  background: #03a9f4;
  color: #fff;
}
.tip:after {
  position: absolute;
  width: 0;
  height: 0;
  left: 42%;
  bottom: -10px;
  content: "";
  border-style: solid;
  border-width: 10px 10px 0 10px;
  border-color: #03a9f4 transparent;
}
.title {
  padding: 6px 0 10px;
  font-family: "Overlock", cursive;
  color: #2f2c06;
  font-size: 36px;
}
.border {
  display: block;
  width: 20%;
  height: 1px;
  position: relative;
  margin: 0 auto 30px;
  background: #8c8989;
}
.border:after {
  position: absolute;
  top: 0;
  left: 30%;
  content: " ";
  width: 40%;
  height: 5px;
  margin-top: -2px;
  background: #03a9f4;
}
.projectLi {
  display: flex;
  border-radius: 15px;
  height: 270px;
  margin-bottom: 20px;
}
.projectLi .imgUrl {
  width: 40%;
  height: 100%;
  margin-right: 20px;
  display: flex;
  justify-content: center;
}
.projectLi .imgUrl .imgUrlImg{
  max-width: 100%;
  border-radius: 15px;
  max-height: 100%;
}
ul {
  width: 100%;
  padding: 4% 0;
}
.projectLi {
  transition: transform 0.25s ease;
}
ul li img {
  width: 100%;
  display: block;
}
.projectLi:hover {
  z-index: 100;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.play {
  display: inline-block;
  height: 16px;
  width: 16px;
  background-image: url("../common/images/play.png");
  cursor: pointer;
}
</style>
