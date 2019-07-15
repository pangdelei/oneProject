<template>
  <div class="container">
    <header class="headerI">
      <van-nav-bar
        left-arrow
        @click-left="infoLeft"
      />
      <img src="//bookcover.yuewen.com/qdbimg/349573/1012237441/300" alt="">
      <div class="bookInfo">
        <h3>诡秘之主</h3>
        <p>
          <span>爱潜水的乌贼</span><i class="iconfont icon-dian"></i>
          <span>玄幻</span><i class="iconfont icon-dian"></i>
          <span>异世大陆</span>
        </p>
      </div>
    </header>
    <div class="content">
      <div class="infotext">
        <ul>
          <li>
            <p><span>290</span>万字</p>
            <span>连载</span>
          </li>
          <li>
            <p><span>1459</span>万</p>
            <span>推荐票</span>
          </li>
          <li>
            <p><span>3</span>万</p>
            <span>月票</span>
          </li>
        </ul>
      </div>
      <div class="introduce">
        <p>地窟入侵，武道崛起。小人物也有大情怀，为生存而战，为物也有大情怀，为生存而战，为
        </p>
      </div>
      <div class="mulu">
        <span>目录</span>
        <div class="lianzai">
          <span>连载至917章</span>·
          <span>19小时前更新</span>
        </div>
      </div>
      <div class="author">
        <div class="authors">
          <div class="authorinfo">
            <h3>爱潜水的乌贼</h3>
            <span>著有5部作品</span>
          </div>
          <img src="" alt="">
        </div>
        <div class="rongyu">
          <div class="authorinfo">
            <h3>作品荣誉</h3>
            <span>85项</span>
          </div>
          <img src="" alt="">
        </div>
      </div>
    </div>
    <div class="bookinfo-last">
      <span>加入书架</span>
      <span>批量订阅</span>
      <router-link to="/booktext" tag="span">立即阅读</router-link>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { NavBar } from 'vant'
Vue.use(NavBar)
export default {
  methods: {
    infoLeft () {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.content{
  @include background-color(#F5F7FA);
}
.infotext, .introduce, .mulu, .author{
  @include background-color(#fff);
}
.headerI{
  @include rect(100%, 2.3rem);
  @include background-color(red);
  img{
    @include rect(1rem, 1.2rem);
    @include margin(0 35%);
  }
  h3{
    @include flexbox();
    @include justify-content();
    @include font-size(20px);
    @include font-weight(500);
    @include color(#fff);
  }
  p{
    @include flexbox();
    @include justify-content();
    @include align-items();
    @include font-size(12px);
    @include color(#fff);
  }
}
.van-nav-bar{
  @include border(0);
  background:rgba(0,0,0,0);
}
.infotext{
  @include rect(100%, 0.6rem);
  @include flexbox();
  @include justify-content(space-between);
  @include align-items();
}
.infotext ul{
  @include rect(100%, 0.6rem);
  @include flexbox();
  @include justify-content(space-between);
  @include align-items();
  @include margin(0 0.2rem 0 0.2rem);
  @include border(0 0 1px 0,#ededed,solid);
  li{
    @include rect(33%, 0.6rem);
    @include flexbox();
    @include justify-content();
    @include flex-direction(column);
    @include align-items();
    p{
      @include font-size(12px);
      span{
        @include font-size(16px);
        @include font-weight(500);
      }
    }
    >span{
      @include color(#838A96);
      @include font-size(12px);
    }
  }
}
.introduce{
  @include rect(100%, 0.8rem);
  @include padding(0.2rem 0.2rem 0 0.2rem);
  @include font-size(14px);
}
.mulu{
  @include rect(100%, 0.5rem);
  @include flexbox();
  @include justify-content(space-between);
  @include align-items();
  @include margin(0.15rem 0 0 0);
  @include padding(0 0.2rem 0 0.2rem);
  >span{
    @include font-size(14px);
    @include font-weight(400);
  }
  .lianzai{
    @include font-size(12px);
    @include color(#838A96);
  }
}
.author{
  @include rect(100%, 0.6rem);
  @include flexbox();
  @include justify-content();
  @include align-items();
  @include margin(0.15rem 0 0 0);
  @include padding(0 0.2rem 0 0.2rem);
  .authors, .rongyu{
    @include rect(50%, 0.6rem);
    @include flexbox();
    @include align-items();
    h3{
      @include font-size(14px);
      @include font-weight(500);
    }
    span{
      @include font-size(12px);
      @include color(#838A96);
    }
  }
}
.bookinfo-last{
  @include rect(100%, 0.5rem);
  @include flexbox();
  @include flex-direction();
  @include justify-content(space-between);
  span{
    @include rect(33.3%, 0.5rem);
    @include flexbox();
    @include justify-content();
    @include align-items();
  }
  span:nth-child(3){
    @include background-color(#F4504F);
    @include color(#fff);
  }
}
</style>
