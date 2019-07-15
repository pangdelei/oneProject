<template>
  <div class="container">
    <header class="header-found">
      <h1>发现</h1>
      <span class="iconfont icon-sousuo"></span>
    </header>
    <div class="content">发现</div>
  </div>
</template>

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
</style>
