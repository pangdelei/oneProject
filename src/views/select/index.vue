<template>
  <div class="container">
    <header class="headerS">
      <div class="header-left">
        <h1>起点中文网</h1>
      </div>
      <div class="header-cen">
        <a href="javascript:;" @click="man"><span :class="[flag ? sex : sexs]">男生</span></a>
        <a href="javascript:;" @click="girl"><span :class="[flag ? sexs : sex]">女生</span></a>
      </div>
      <div class="header-right">
        <i class="iconfont icon-sousuo"></i>
      </div>
    </header>
    <div class="content" id="content">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) of bannerlist" :key="index">
          <img :src= "item.bookInfo.carousel" alt="">
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
      <div class="jxbook" v-for="(itm,idx) of select" :key="idx" @click="getinfo(itm.bookInfo.bookId)">
        <img :src= "itm.bookInfo.img" alt="">
        <div class="jxbook1" >
          <h3>{{ itm.bookInfo.bookName }}</h3>
          <div>
            <span>{{ itm.bookInfo.authorName }}</span><i class="iconfont icon-dian"></i>
            <span>{{ itm.bookInfo.chanName }}</span><i class="iconfont icon-dian"></i>
            <span>{{ itm.bookInfo.bookStatus }}</span><i class="iconfont icon-dian"></i>
            <span>{{ itm.bookInfo.wordsCnt }}</span>
          </div>
          <p>
            {{ itm.bookInfo.intro}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe).use(SwipeItem)
export default {
  data () {
    return {
      bannerlist: [],
      select: [],
      flag: true,
      sex: 'sex',
      sexs: 'sexs'
      // getId: []
    }
  },
  methods: {
    getinfo (id) {
      this.$router.push('/bookinfo/' + id)
    },
    man () {
      fetch('http://localhost:3000/api/books/man').then(res => res.json()).then(data => {
        this.select = data
      })
      // fetch('http://10.11.56.181:3000/api/books/imgboy').then(res => res.json()).then(data => {
      //   this.bannerlist = data
      // }),
      this.flag = !this.flag
    },
    girl () {
      fetch('http://localhost:3000/api/books/girl').then(res => res.json()).then(data => {
        this.select = data
      })
      // fetch('http://10.11.56.181:3000/api/books/imggirl').then(res => res.json()).then(data => {
      //   this.bannerlist = data
      // })
      this.flag = !this.flag
    }
  },
  mounted () {
    fetch('http://localhost:3000/api/books/imggirl').then(res => res.json()).then(data => {
      this.bannerlist = data
    })
    fetch('http://localhost:3000/api/books/man').then(res => res.json()).then(data => {
      this.select = data
      // this.getId = data[0].bookInfo.bookId
      // console.log(this.select)
    })
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.headerS{
  @include flexbox();
  @include justify-content(space-between);
  @include align-items(center);
  @include padding(0.09rem 0);
}
.header-left{
  @include rect(1rem, 0.26rem);
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
  @include rect(1rem,auto);
  i{
    // @include float(right);
    float: right;
    @include margin(0 0.2rem 0 0);
  }
}
.content{
  @include overflow(auto);
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
      @include rect(100%, 0.2rem);
      @include overflow(hidden);
    }
    p{
      @include margin(0.05rem 0 0 0 );
      @include font-size(12px);
      @include rect(100%, 0.35rem);
      @include overflow(hidden);
    }
  }
}
</style>
