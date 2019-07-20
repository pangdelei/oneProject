<template>
  <div class="container">
    <header class="headerU">
      <div class="headerU-left">
        <span class="iconfont icon-shezhi"></span>
      </div>
      <div class="headerU-right">
        <span class="iconfont icon-yueliang">夜间</span>
        <span class="iconfont icon-youjian"></span>
      </div>
    </header>
    <div class="content">
      <router-view></router-view>
      <div class="vip">
        <span>开通会员</span>
        <span>享免费书库等10项福利</span>
      </div>
      <div class="user-cen">
        <ul>
          <li>
            <i class="iconfont icon-fabu"></i>
            <span>我发布的</span>
          </li>
          <li>
            <i class="iconfont icon-jingxuan"></i>
            <span>关注/收藏</span>
          </li>

          <li>
            <i class="iconfont icon-faxian"></i>
            <span>浏览记录</span>
          </li>
        </ul>
        <ul>
          <li>
            <i class="iconfont icon-tuya"></i>
            <span>我的装扮</span>
          </li>
          <li>
            <i class="iconfont icon-qiapai"></i>
            <span>我的卡牌</span>
          </li>
          <li>
            <i class="iconfont icon-huizhanghuiyuan"></i>
            <span>徽章/称号</span>
          </li>
        </ul>
      </div>
      <div class="user-last">
        <ul>
          <li>
            <div class="userl-left">
              <i class="iconfont icon-shu1"></i>
              <span>新书投资</span>
            </div>
            <i class="iconfont icon-right"></i>
          </li>
          <li>
            <div class="userl-left">
              <i class="iconfont icon-youxi"></i>
              <span>我的游戏</span>
            </div>
            <i class="iconfont icon-right"></i>
          </li>
          <li>
            <div class="userl-left">
              <i class="iconfont icon-jinbi"></i>
              <span>领币</span>
            </div>
            <i class="iconfont icon-right"></i>
          </li>
          <li>
            <div class="userl-left">
              <i class="iconfont icon-jifen"></i>
              <span>积分商城</span>
            </div>
            <i class="iconfont icon-right"></i>
          </li>
          <li>
            <div class="userl-left">
              <i class="iconfont icon-gangbi"></i>
              <span>成为作家</span>
            </div>
            <i class="iconfont icon-right"></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      loginState: (state) => { return state.loginState }
    })
  },
  watch: {
    $route (newVal, oldVal) {
      const { $store: { state: { loginState } } } = this
      if (newVal.name === 'user') {
        if (loginState === 'ok') {
          this.$router.replace('/user/login')
        } else {
          this.$router.replace('/user/nologin')
        }
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    // console.log(to.name)
    // if (to.name === 'user') {
    //   if (localStorage.getItem('isLogin') === 'ok') {
    //     next('/user/login')
    //   } else {
    //     next('/user/nologin')
    //   }
    // } else {
    //   next()
    // }
    next(vm => {
      const { $store: { state: { loginState } } } = vm
      if (to.name === 'user') {
        if (loginState === 'ok') {
          vm.$router.replace('/user/login')
        } else {
          vm.$router.replace('/user/nologin')
        }
      } else {
        next()
      }
    })
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.headerU{
  @include rect(100%, 0.44rem);
  @include flexbox();
  @include padding(0 0.16rem);
  @include justify-content(space-between);
  @include align-items();
  @include background-color(#F7F7FA);
  .headerU-left{
    @include flexbox();
    @include align-items();
    @include rect(80%, 0.44rem);
  }
  .headerU-right{
    @include rect(30%, 0.44rem);
    @include align-items();
    @include flexbox();
    .icon-yueliang{
      @include rect(0.45rem,0.24rem);
      @include margin(0 0.1rem 0 0);
      @include font-size(12px);
      // @include border(1px,#ededed,solid);
      @include text-align();
      @include line-height(0.24rem);
    }
  }
}
.vip{
  @include rect(auto, 0.4rem);
  @include background-color(#F65551);
  @include flexbox();
  @include justify-content(space-between);
  @include align-items();
  @include margin(0 0.2rem 0 0.2rem);
  @include padding(0 0.1rem);
  border-radius: 0.1rem 0.1rem 0 0;
  span{
    @include color(#FFE3B3);
    @include font-size(12px);
  }
}
.content{
  @include background-color(#F7F7FA);
  @include overflow(auto);
}
.user-cen{
  @include rect(100%, 1.4rem);
  @include flexbox();
  @include flex-direction(column);
  @include background-color(#fff);
  // @include margin(0.1rem 0 0 0);
  ul{
    @include rect(100%, 0.7rem);
    @include flexbox();
    li{
      @include rect(33.3%, 0.7rem);
      @include flexbox();
      @include justify-content();
      @include align-items();
      @include flex-direction(column);
      i{
        @include font-size(22px);
      }
    }
  }
}
.user-last{
  @include rect(100%, auto);
  @include margin(0.1rem 0 0 0);
  @include background-color(#fff);
  ul{
    @include rect(100%, auto);
    li{
      @include flexbox();
      @include justify-content(space-between);
      @include align-items();
      @include padding(0 0.2rem);
      @include rect(100%,0.4rem)

    }
  }
}
.userl-left i{
  @include margin(0 0.1rem 0 0);
}
</style>
