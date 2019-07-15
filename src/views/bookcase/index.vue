<template>
  <div class="container">
    <header class="headerS">
      <h1>书架</h1>
      <span class="iconfont icon-sousuo"></span>
    </header>
    <div class="content">
      <ul class="shu">
        <li>
          <img src="http://bookcover.yuewen.com/qdbimg/349573/1012237441/150" alt="">
          <div class="jies">
            <h2>全球高武</h2>
            <span>作者</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.headerS{
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
.shu{
  li{
    @include flexbox();
    @include rect(100%, 1.3rem);
    @include padding(0.2rem 0 0.2rem 0.2rem);
    img{
      @include rect(0.6rem, 0.8rem);
    }
    .jies{
      @include rect(100%, 0.9rem);
      @include padding(0.05rem 0 0.2rem 0.1rem);
      h2{
        @include font-size(16px);

      }
      span{
        @include color(#838A96);
      }
    }
  }
}
</style>
