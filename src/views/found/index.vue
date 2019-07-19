<template>
  <div class="container">
    <header class="header-found">
      <h1>发现</h1>
      <span class="iconfont icon-sousuo"></span>
    </header>
    <div class="content">
      <div class="search">
        <van-search
          v-model="search"
          placeholder="请输入搜索关键词"
          show-action
          shape="round"
          @search="onSearch"
        >
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
      <div class="jxbook" v-for="(itm,idx) of sear" :key="idx" @click="getinfo(itm.bookInfo.bookId)">
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
import { Search } from 'vant';
Vue.use(Search);
export default {
  data() {
    return {
      search: '',
      sear: []
    }
  },
  methods: {
    onSearch () {
      var search = this.search
      console.log(search)
      fetch('http://localhost:3000/api/books/cname?bookName=' + search).then(res => res.json()).then(data => {
        this.sear = data
        console.log(this.sear)
      })
    } 
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.header-found{
  @include rect(100%, 0.444rem);
  @include flexbox();
  @include justify-content();
  @include align-items();
  @include background-color(#F14B4E);
  h1{
    @include color(#fff);
    @include font-size(16px);
    @include font-weight(normal);
  }
  span{
    position: absolute;
    top:0.05rem;
    right:0.1rem;
    @include font-size(20px);
    @include color(#fff);
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
