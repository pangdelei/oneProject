<template>
  <div class="user">
    <div class="users">
      <router-link to="/login" tag="span" class="login">登录</router-link><span>/</span>
      <router-link to="/register" tag="span" class="register">注册</router-link>
    </div>
    <div class="usertu">
      <i class="iconfont icon-weixin"></i>
      <i class="iconfont icon-QQ"></i>
      <i class="iconfont icon-shouji"></i>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.user{
  @include rect(auto, 1rem);
  @include background-color(#fff);
  @include flexbox();
  @include justify-content();
  @include flex-direction(column);
  @include margin(0 0.2rem 0 0.2rem);
  @include padding(0.1rem);
  border-radius: 0.1rem 0.1rem 0 0;
  .users{
    @include rect(100%, 0.4rem);
    @include margin(0 0 0 0.1rem);
    span{
      @include display(inline-block);
      @include text-align();
      // @include rect(50%, 0.4rem);
      @include margin(0 0.02rem 0 0);
      @include font-size(18px);
    }
  }
  .usertu{
    @include rect(100%, 0.3rem);
    // @include margin(0 0 0 0.2rem);
    i{
      @include font-size(30px);
      @include margin(0 0.1rem);
      @include color(#01BC5D);
    }
    i:nth-child(2){
      @include color(#00B1F0);
    }
    i:nth-child(3){
      @include color(#3075F9);
    }
  }
}
</style>
<script>
export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      const { $store: { state: { loginState } } } = vm
      if (loginState === 'ok') {
        next('/user/login')
      } else {
        next()
      }
    })
  }
}
</script>
