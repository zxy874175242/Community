import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from "../components/index";
import login from "../components/login";
import signup from "../components/signup";
import search from "../components/search";
import manageCourse from "../components/course/manageCourse";
import manageForum from "../components/forum/manageForum";
import manageTeacher from "../components/manageTeacher";
import home from "../components/home";
import course from "../components/course/course";
import learn from "../components/course/learn";
import courseCreate from "../components/course/courseCreate";
import uploadPost from "../components/forum/uploadPost";
import uploadVideo from "../components/course/uploadVideo";
import forum from "../components/forum/forum";
import forumCreate from "../components/forum/forumCreate";
import post from "../components/forum/post";
import user from "../components/user";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/manage/teacher',
      name: 'manageTeacher',
      component: manageTeacher
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: user
    },
    {
      path: '/course/:courseId',
      name: 'course',
      component: course
    },
    {
      path: '/learn',
      name: 'learn',
      component: learn
    },
    {
      path: '/create/course',
      name: 'courseCreate',
      component: courseCreate
    },
    {
      path: '/upload/video',
      name: 'uploadVideo',
      component: uploadVideo
    },
    {
      path: '/manage/course',
      name: 'manageCourse',
      component: manageCourse
    },
    {
      path: '/f/:forumId',
      name: 'forum',
      component:  forum
    },
    {
      path: '/create/forum',
      name: 'forumCreate',
      component: forumCreate
    },
    {
      path: '/upload/post',
      name: 'uploadPost',
      component: uploadPost
    },
    {
      path: '/p/:postId',
      name: 'post',
      component: post
    },
    {
      path: '/manage/forum',
      name: 'manageForum',
      component: manageForum
    }
  ]
})
