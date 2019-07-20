<template>
  <div class="user">
    <div class="user-top">
      <img src="../../assets/1.jpg" alt="">
      <div class="username">
        <span>欢迎你{{loginName}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      const { $store: { state: { loginState } } } = vm
      if (loginState === 'ok') {
        next()
      } else {
        next('/user/nologin')
      }
    })
  },
  computed: {
    ...mapState({
      loginName (state) {
        return state.loginName
      }
    })
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.user{
  @include rect(auto, 1rem);
  @include background-color(#fff);
  @include flexbox();
  @include flex-direction(column);
  // @include align-items();
  @include justify-content();
  @include margin(0 0.2rem 0 0.2rem);
  @include padding(0.1rem);
  border-radius: 0.2rem 0.2rem 0 0;
  .user-top{
    @include flexbox();

    img{
      @include rect(0.5rem, 0.5rem);
      border-radius: 50%;
    }
    .username{
      @include padding(0.1rem 0 0 0.2rem);
      }
  }
}
</style>
