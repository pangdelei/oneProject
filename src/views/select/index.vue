<template>
  <div class="container">
    <header class="headerS">
      <div class="header-left">
        <h1>起点中文网</h1>
      </div>
      <div class="header-cen">
        <a href="" ><span class="sex">男生</span></a>
        <a href=""><span>女生</span></a>
      </div>
      <div class="header-right">
        <i class="iconfont icon-sousuo"></i>
      </div>
    </header>
    <div class="content">
      <!-- <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="https://image1.suning.cn/uimg/cms/img/156289811797623760.jpg?format=_is_1242w_610h" alt=""></van-swipe-item>
        <van-swipe-item><img src="https://image1.suning.cn/uimg/cms/img/156289811797623760.jpg?format=_is_1242w_610h" alt=""></van-swipe-item>
        <van-swipe-item><img src="https://image1.suning.cn/uimg/cms/img/156289811797623760.jpg?format=_is_1242w_610h" alt=""></van-swipe-item>
        <van-swipe-item><img src="https://image1.suning.cn/uimg/cms/img/156289811797623760.jpg?format=_is_1242w_610h" alt=""></van-swipe-item>
      </van-swipe> -->
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) of bannerlist" :key="index">
          <img :src="item" alt="">
        </van-swipe-item>
      </van-swipe>
      <div class="nav">
        <ul>
          <li>
            <i class="iconfont icon-leimupinleifenleileibie"></i>
            <span>分类</span>
          </li>
          <router-link to="/booklist" tag="li">
            <i class="iconfont icon-iconfontpaihangbang"></i>
            <span>排行</span>
          </router-link>
          <li>
            <i class="iconfont icon-biaoqian"></i>
            <span>三江</span>
          </li>
          <li>
            <i class="iconfont icon-biaoqian"></i>
            <span>免费</span>
          </li>
          <li>
            <i class="iconfont icon-shu"></i>
            <span>完本</span>
          </li>
        </ul>
      </div>
      <div class="jx">
        <h3>畅销精选</h3>
        <span>更多<i class="iconfont icon-right"></i></span>
      </div>
      <div class="jxbook">
        <img src="//bookcover.yuewen.com/qdbimg/349573/1012237441/300" alt="">
        <div class="jxbook1">
          <h3>我能回档不死</h3>
          <div>
            <span>夜行狗</span><i class="iconfont icon-dian"></i>
            <span>悬疑</span><i class="iconfont icon-dian"></i>
            <span>连载</span><i class="iconfont icon-dian"></i>
            <span>52万字</span>
          </div>
          <p>
            重生平行世界，这里重生平行世界，这里
          </p>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe).use(SwipeItem)
export default {
  data () {
    return {
      bannerlist: []
    }
  },
  mounted () {
    fetch('https://www.daxunxun.com/banner').then(res => res.json()).then(data => {
      // console.log(data)
      var arr = []
      data.map(item => {
        item = 'https://www.daxunxun.com' + item
        arr.push(item)
      })
      this.bannerlist = arr
    })
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.headerS{
  @include flexbox();
  @include padding(0.1rem 0);
}
.header-left{
  @include rect(1.2rem, 0.44rem);
  @include padding(0 0 0 0.16rem);
  h1{
   @include font-size(16px);
  }
}
.header-cen{
  @include rect(1.1rem, 0.26rem);
  @include flexbox();
  @include justify-content();
  a{
    // @include display(block);
    @include rect(0.52rem, 0.26rem);
    @include text-align();
    @include line-height(0.26rem);
    @include border(1px,#ed424b,solid);
    // @include border-radius(10%);
    border-radius: 5px 0 0 5px;
    span{
      @include display(block);
      @include rect(0.52rem, 0.26rem);
      @include color(#ed424b)
    }
  }
  .sex{
    @include background-color(#ed424b);
    @include color(#fff);
  }
}
.header-right{
  i{
    @include margin(0 0 0 0.5rem);
  }
}
.van-swipe {
  @include rect(100%, 1.5rem);
  img {
    @include rect(100%, 1.5rem);
  }
}
.nav {
  @include rect(100%, 0.7rem);
  @include background-color(#fff);
  ul {
    @include rect(100%, 100%);
    @include flexbox();
    li {
      @include flex();
      @include rect(auto, 100%);
      @include flexbox();
      @include flex-direction(column);
      @include justify-content();
      @include align-items();
      i {
        @include font-size(24px);
      }
      span {
        @include font-size(12px);
      }
    }
  }
}
.jx{
  @include padding(0 0.16rem);
  @include flexbox();
  @include align-items();
  @include justify-content(space-between);
  h3{
    @include font-size(18px);
  }
}
.jxbook{
  @include rect(100%, 1rem);
  @include flexbox();
  @include padding(0.1rem 0.2rem 0 0.2rem);
  img{
  @include rect(0.6, 0.8rem);
  }
  .jxbook1{
    @include padding(0 0 0 0.1rem);
    h3{
      @include font-size(14px);
      @include font-weight(400);
    }
    div{
      @include font-size(12px);
      @include color(#838A96);
    }
    p{
      @include font-size(12px);
    }
  }
}
</style>
