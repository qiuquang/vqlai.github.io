<template>
  <div class="experience">
  	<div class="container">
  	 <span class="tip">WHERE I DID</span>
  	  <h1 class="title">{{title}}</h1>
  	  <span class="border"></span>
  	  <ul class="content">
  	  	<li>
  	  		<div class="content_left tx_right">
  	  		  <span class="s1"></span>
  	  		  <h4>2011.09 - 2015.06 </h4>
  	  		</div>
  	  		<div class="content_right tx_left">
  	  		  <h4>中国海洋大学</h4> &nbsp;&nbsp;&nbsp;本科
  	  		  <p>在工程学院进行自动化专业学习</p>
  	  		</div>
  	  		<div class="clearfix"></div>
  	  	</li>
  	  	<li>
  	  		<div class="content_left tx_right">
  	  		  <span class="s2"></span>
  	  		  <h4>2015.08 - 2016.12 </h4>
  	  		</div>
  	  		<div class="content_right tx_left">
  	  		  <h4>青岛海信网络科技股份有限公司</h4>&nbsp;&nbsp;&nbsp;测试工程师
  	  		  <div class="fuze">负责地磁检测器、信号机、实战平台（软）功能测试。</div>
				  <p>（1）地磁和信号机测试，负责测试环境搭建、设备接入及设备的环境测试、功能测试及性能测试，发现bug并记录。</p>
				  <p>
（2）实战平台测试，负责测试环境部署，包括打war包，tomcat配置、数据库安装配置、服务器配置等，功能测试主要从用户使用功能角度上，结合产品规格说明书进行测试，并记录bug。</p>
  	  		</div>
  	  		<div class="clearfix"></div>
  	  	</li>
  	  	<li>
  	  		<div class="content_left tx_right">
  	  		  <span class="s1"></span>
  	  		  <h4>2017.01 - 2018.11 </h4>
  	  		</div>
  	  		<div class="content_right tx_left">
  	  		  <h4>青岛海信网络科技股份有限公司</h4>
  	  		  <div class="fuze">负责可视化指挥系统、涉案视频管理系统的前端开发和后台维护。</div>
				可视化指挥系统

  	  		</div>
  	  		<div class="clearfix"></div>
  	  	</li>
  	  	<li>
  	  		<div class="content_left tx_right">
  	  		  <span class="s2"></span>
  	  		  <h4>2018.12 - 至今 </h4>
  	  		</div>
  	  		<div class="content_right tx_left">
  	  		  <h4>青岛民航凯亚系统集成有限公司</h4>
  	  		  <p>相关项目详细介绍...</p>
  	  		</div>
  	  		<div class="clearfix"></div>
  	  	</li>
  	  </ul>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'experience',
  data () {
    return {
    	title: '学历与工作'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.experience{height: auto;width: 100%;margin: 0 auto;background-color: #fff;text-align: center;}
  .container{height: auto;max-width: 1200px;margin: 0 auto;padding:4% 0;}
  .tip{display:inline-block;position:relative;padding:6px 20px;margin:0 auto 10px;font-size: 20px;background:#03a9f4;color: #fff;}
  .tip:after{position:absolute;width: 0;height: 0;left:42%;bottom:-10px;content: '';border-style: solid;border-width: 10px 10px 0 10px;border-color: #03a9f4 transparent;}
  .title{padding: 6px 0 10px;font-family: 'Overlock', cursive;color: #2F2C06;font-size: 36px;}
  .border{display:block;width: 20%;height: 1px;position:relative;margin:0 auto 30px;background: #8C8989;}
  .border:after{position: absolute;top: 0;left: 30%;content: " ";width: 40%;height: 5px;margin-top:-2px;background: #03a9f4;}
	
	ul.content{padding-top: 20px;}
  ul.content li{font-size: 20px;color:#999;position: relative;}
  .content_left{width: 50%;float: left;padding: 25px 6% 0 0;}
  .content_left h4{display: inline-block;position:relative;padding: 10px 40px;font-size:20px;color: #fff;background-color: #1b242f;}
  /* 绝对定位居中，如果在没有固定高度宽度的盒子里，不要使用百分比定位，使用px，rem，居中用50%+margin负值 */
  .content_left h4:before{width: 0;height: 0;position:absolute;top: 50%;margin-top: -6px;right:-10px;content: '';border-style: solid;border-width: 6px 0 6px 10px;border-color: transparent transparent transparent #1b242f;}
  .content_right{width: 50%;float: left;padding: 20px 0 10px 6%;}
  .content_right h4{display:inline-block;padding: 10px 50px;margin-bottom:6px;font-size: 20px;border: 1px solid #d4d4d4;color: #1b242f;box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);}
  .content_right p{line-height: 20px;font-size: 14px;}
	/*小图标*/
  ul.content li span{position: absolute;top: 30px;right: -19px;z-index:10;width: 36px;height: 36px;border-radius: 50%;background: url('../common/images/icon.png') no-repeat center;background-size: 50%;}
  ul.content li .s1{background-color: #44c7f4;}
  ul.content li .s2{background-color: #eb5424;}

  .tx_left{position:relative;text-align: left;box-sizing: border-box;border-left: 1px solid #999;}
  .tx_right{position:relative;text-align: right;box-sizing: border-box;}
  .fuze{
	  font-size: 16px;
	  margin-bottom: 5px;
  }
</style>
