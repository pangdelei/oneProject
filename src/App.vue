<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if = "!$route.meta.keepAlive"></router-view> -->
    <router-view name="footer"></router-view>
  </div>
</template>
<script>
export default {
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}
</script>
<style lang="scss">
@import '@/lib/reset.scss';
html, body, #app, .box {
  @include rect(100%, 100%); // width: 100%;height: 100%;
}
#app, .box {
  @include flexbox(); // display: -webkit-box;display: -ms-flexbox;display: flex;
  @include flex-direction(column); //     -webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;
  .container {
    @include flex(); // -webkit-box-flex: 1;-ms-flex: 1;flex: 1;width: .1px;
    @include rect(100%, auto); // 修改上面的width
    @include flexbox();
    @include flex-direction(column);
    .headerV {
      @include rect(100%, 0.44rem);
      @include background-color(#F6F7F9);
    }
    .content {
      @include flex();
      @include rect(100%, auto);
      // @include overflow();
    }
  }
  .footer {
    @include rect(100%, 0.5rem);
    @include background-color(#efefef);
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
        span {
          @include font-size(24px);
        }
        p {
          @include font-size(12px);
        }

        &.router-link-active { // li.router-link-active {}
          @include color(#f66);
        }
      }
    }
  }
}
</style>
