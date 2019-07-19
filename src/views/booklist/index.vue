<template>
  <div class="container">
    <header class="headerb">
      <van-nav-bar
        title="排行·全部"
        left-text=""
        right-text=""
        left-arrow
        @click-left="listLeft"
      />
    </header>
    <div class="content">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="月票榜" @click="getbang('ticket')"/>
        <van-sidebar-item title="畅销榜" @click="getbang('bestseller')"/>
        <van-sidebar-item title="粉丝榜" @click="getbang('fans')"/>
        <van-sidebar-item title="推荐榜" @click="getbang('recommend')"/>
        <van-sidebar-item title="打赏榜" @click="getbang('give')"/>
        <van-sidebar-item title="更新榜" @click="getbang('update')"/>
        <van-sidebar-item title="签约榜" @click="getbang('sign')"/>
        <van-sidebar-item title="新书榜" @click="getbang('newbook')"/>
        <van-sidebar-item title="新人榜" @click="getbang('rookie')"/>
        <van-sidebar-item title="红包榜" @click="getbang('redpacket')"/>
        <van-sidebar-item title="书单榜" @click="getbang('booklist')"/>
        <van-sidebar-item title="角色榜" @click="getbang('role')"/>
        <van-sidebar-item title="名作堂" @click="getbang('masterwork')"/>
      </van-sidebar>
      <div class="listbook">
        <ul>
          <li v-for="(item, index) of props" @click="getBookinfo(item.bookInfo.bookId)" :key="index">
            <img :src="item.bookInfo.img" alt="">
            <div class="bookinfo">
              <h1>{{ item.bookInfo.bookName }}</h1>
              <div class="binfo">
                <div class="binfo-left">
                  <span>{{ item.bookInfo.authorName }}</span>·
                  <span>{{ item.bookInfo.chanName }}</span>·
                  <span>{{ item.bookInfo.showWordsCnt }}</span>
                </div>
                <!-- <span>{{ item.bookInfo.collect }}</span> -->
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { NavBar, Sidebar, SidebarItem, List, PullRefresh } from 'vant'
Vue.use(NavBar)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(List)
Vue.use(PullRefresh)
export default {
  data () {
    return {
      activeKey: 0,
      props: [ { bookInfo: '' } ],
      all: []
    }
  },
  methods: {
    listLeft () {
      this.$router.push({ path: '/select' })
    },
    getBookinfo (id) {
      this.$router.push({ path: '/bookinfo/' + id })
    },
    getbang (bang) {
      fetch('http://localhost:3000/api/books/' + bang).then(res => res.json()).then(data => {
      // this.all = data[0].bookInfo
      // console.log(this.all)
        this.props = data
        console.log(this.props)
      })
    }
  },
  mounted () {
    fetch('http://localhost:3000/api/books/ticket').then(res => res.json()).then(data => {
      // console.log(data)
      this.props = data
    })
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.content{
  @include background-color(#fff);
  @include flexbox();
}
.van-sidebar{
  @include rect(25%, 100%);
  @include border(0);
  @include background-color(#fff);
  @include overflow();
}
.van-sidebar-item{
  @include rect(100%, 0.39rem);
  @include flexbox();
  @include justify-content();
  @include align-items();
  @include color(#333);
  @include font-size(12px);
  &.van-van-sidebar-item--select{
    @include color(#ED424B);
  }
}
.listbook{
  @include flexbox();
  @include rect(100%, 100%);
  @include overflow();
  ul{
    @include rect(100%, 100%);
    // @include margin(0.2rem 0 0 0);
    @include margin(0 0 0.1rem 0.1rem);
    // @include border(1px 0 0 0,#ededed,solid);
    li{
      @include rect(100%, 0.8rem);
      @include flexbox();
      @include margin(0.1rem 0 0 0);
      @include justify-content();
      @include align-items();
      img{
        @include display(block);
        @include rect(0.6rem, 0.8rem);
      }
      .bookinfo{
        @include rect(100%, 0.8rem);
        @include padding(0.1rem 0 0 0);
        @include margin(0.2rem 0.1rem 0.2rem 0.1rem);
        @include border(0 0 1px 0,#ededed,solid);
        h1{
          @include font-size(16px);
          @include font-weight(400);
        }
        .binfo{
          @include color(#838A96);
          @include font-size(12px);
          @include flexbox();
          @include justify-content(space-between);
          @include align-items();
          // @include line-height(0.2rem);
          .binfo-left{
            span:nth-child(1){
              @include display(inline-block);
              // text-overflow :ellipsis;
              @include rect(0.24rem,0.14rem);
              @include overflow(hidden);
            }
          }
        }
      }
    }
  }
}
</style>
