<template>
  <div class="forum-page">
    <div class="forum-head">
      <div class="img">
        <img :src="forumImg" style="height: 100px; width: 100px">
      </div>
      <div class="head-left">
        <div class="forum-name">
          {{forumName}}
        </div>
        <div class="introduce">
          {{introduce}}
        </div>
      </div>
      <div class="head-right">
        关联课程：
        <div class="course">
          {{course}}
        </div>
        <div class="add-post">
          <el-button type="primary">+创建帖子</el-button>
        </div>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
    export default {
        name: "forum",
        data(){
            return{
                //forumImg: "../assets/forum.jpg
                forumImg: require("@/assets/forum.jpg"),
                forumName: "软件工程实践（二）讨论区",
                introduce: "欢迎大家来到讨论区！本讨论区供各位同学就课程" +
                    "问题进行交流学习。请同学们认真阅读下面的【讨论区使用规则】，然后再进行相关发表，谢谢！",
                course: "软件工程实践（二）"
            }
        }
    }
</script>

<style scoped>
  .forum-page{
    /*border: black 1px solid;*/
    display:flex;
    justify-content:center;
  }
  .forum-head{
    /*border: black 1px solid;*/
    margin:0 auto;
    width: 70%;
  }
  .img{
    float: left;
    /*border: black 1px solid;*/
  }
  .forum-name{
    float: left;
    /*border: black 1px solid;*/
    font-weight: bold;
    font-size: 30px;
    height: 40px;
    width: 600px;
  }
  .introduce{
    /*border: black 1px solid;*/
    font-size: 15px;
    float: left;
    text-align: left;
    /*clear: both;*/
    padding-top: 10px;
    height: 50px;
    width: 600px;
  }
  .add-post{
    /*float: bottom;*/
    padding-top: 20px;
  }
  /*.line{*/
  /*  width: 80%;*/
  /*  height: 10px;*/
  /*  background-color: dodgerblue;*/
  /*  float: left;*/
  /*}*/
</style>
