<template>
  <div class="layer">
    <div class="left"></div>
    <div class="center">
      <div class="searchbar">
        <div>LOGO</div>
        <el-input class="searchbox"></el-input>
        <el-button type="primary">搜素</el-button>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane name="first">
          <span slot="label"><i class="el-icon-data-analysis"></i> 课程 <span style="font-size: 10px">{{courseLen}}</span></span>
          <div class="filter">
            <div>筛选</div>
            <button @click="isSquared = !isSquared">aaa</button>
          </div>
          <div class="resultBoxSquare" v-if="isSquared">
            <div v-for="item in result" :key="item.message">
              <div class="resultItemSquare">
                <div class="coursePic"></div>
                <div class="courseName">2020计算机组成原理</div>
                <div class="courseTeac"><i class="el-icon-s-custom"></i> 张三老师</div>
              </div>
            </div>
          </div>
          <div class="resultBoxBanner" v-if="!isSquared">
            <div v-for="item in result" :key="item.message">
              <div class="resultItemBanner">
                <div class="coursePicBan"></div>
                <div class="courseBannerRight">
                  <div class="courseNameBan">2020计算机组成原理</div>
                  <div class="courseInfoBan"> 在这张图中，我们发现我们设置的300*400出现在了最里面的那个蓝框中，与此同时我们可以发现在这个盒模型中除了我们设置的内容（content），还有margin（外边距）、border（边框）、padding（内边框）</div>
                  <div class="courseTeacBan"><i class="el-icon-s-custom"></i> 张三老师</div>
                </div>
                </div>
              <div style="width: 100%;height: 1px;background-color: #e1e1e1"></div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="圈子" name="second">
          <span slot="label"><i class="el-icon-chat-line-square"></i> 圈子 <span style="font-size: 10px">{{forumLen}}</span></span>
        </el-tab-pane>
        <el-tab-pane label="教师" name="third">
          <span slot="label"><i class="el-icon-s-custom"></i> 教师 <span style="font-size: 10px">{{teacherLen}}</span></span>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
    export default {
        name: "search",
        data() {
            return {
                isSquared: true,
                activeName: 'first',
                courseLen: 5,
                forumLen: 5,
                teacherLen: 10,
                result: [1,2,3,4,5,6,7,8],
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>
 .layer {
   width: 100%;
   height: calc(100vh - 100px);
   margin-top: 15px;
   display: flex;

 }
  .left, .right {
    flex: auto;
  }
  .center {
    flex: 0 0 1200px;
    background-color: white;
    box-shadow: 3px 5px 30px #fafafa;
    padding: 20px 30px;
  }

  .searchbar {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 15px 0px;
  }
  .searchbox {
    width: 300px;
    margin-right: 15px;
    margin-left: 15px;
  }
  .resultBoxSquare {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0px 50px;
  }
  .resultItemSquare {
    flex: none;
    width: 200px;
    height: 180px;
    background-color: white;
    margin: 10px 10px;
    border-radius: 5px;
    border: #cccccc 1px solid;
    box-sizing: border-box;
  }
  .courseName, .courseTeac  {
    text-align: left;
    margin-left: 15px;
    line-height: 25px;
    vertical-align: center;
  }
  .courseName {
    font-size: 15px;
    margin-top: 2px;
  }
  .courseTeac {
    font-size: 12px;
  }
 .coursePic{
   height: 70%;
   width: 100%;
   background-color: #cccccc;
   transition: filter 0.3s ease;
 }
 .coursePic:hover {
   filter: brightness(80%);
 }
 .coursePic, .courseName, .courseTeac {
   transition: color 0.3s ease;
 }
 .coursePic:hover, .courseName:hover, .courseTeac:hover {
   color: #409eff;
   cursor: pointer;
 }
 .filter {
   height: 40px;
   display: flex;
   align-items: center;
   box-sizing: border-box;
   padding: 0px 60px;
 }
 .resultBoxBanner {
   display: flex;
   width: 100%;
   flex-wrap: wrap;
   box-sizing: border-box;
   padding: 0px 50px;
 }
 .resultItemBanner {
   flex: none;
   width: 1100px;
   height: 180px;
   background-color: white;
   padding: 10px 10px;
   border-radius: 5px;
   box-sizing: border-box;
   display: flex;
 }
 .coursePicBan {
   flex:0 0 240px;
   width: 240px;
   height: 140px;
   background-color: #cccccc;
   margin-top: 10px;
   border-radius: 5px;
 }
 .courseBannerRight {
   box-sizing: border-box;
   padding: 15px 30px;
   text-align: left;
 }
 .courseNameBan {
   font-size: 20px;
   margin-bottom: 10px;
 }
 .courseInfoBan {
   font-size: 14px;
   line-height: 28px;
   vertical-align: center;
   margin-bottom: 12px;
 }

 /deep/ .el-tabs__nav-scroll {
   display:flex;
   justify-content: center;
   align-items: center;
 }

  /deep/ .el-tabs__item{
    font-size: 18px;
    padding: 0px 50px;
    margin-top: 20px;
    margin-bottom: 5px;
  }
</style>
