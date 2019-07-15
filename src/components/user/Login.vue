<template>
  <div class="user">
    <div class="user-top">
      <img src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1563178678&di=0382de188d14ba4bf3407ce47437b629&src=http://hbimg.b0.upaiyun.com/69ad7a731f43d4b8729f1a2fbe65c43801ca0f033250-EV1vMf_fw658" alt="">
      <div class="username">
        <span>用户名</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.user{
  @include rect(auto, 1rem);
  @include background-color(#fff);
  @include flexbox();
  @include flex-direction(column);
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
