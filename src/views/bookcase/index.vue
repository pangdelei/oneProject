<template>
  <div class="container">
    <header class="headerS">
      <h1>书架</h1>
      <span class="iconfont icon-sousuo"></span>
    </header>
    <div class="content" v-if= "bookcase != '' ">
      <ul class="shu">
        <li @click='getcase'>
          <img :src="bookcase.img" alt="">
          <div class="jies">
            <h2>{{bookcase.bookName}}</h2>
            <span>{{bookcase.authorName}}</span>
            <p>{{ bookcase.intro }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="content kong" v-else>
      书架空空如也
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      bookcase (state) {
        return state.bookcase
      }
    })
  },
  methods: {
    getcase () {
      this.$router.push('/bookinfo/' + this.bookcase.bookId)
    }
  },
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.kong{
  @include font-size(16px);
  @include color(#F14B4E);
  @include flexbox();
  @include justify-content();
  @include align-items();
}
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
      @include padding(0.05rem 0.2rem 0 0.1rem);
      h2{
        @include font-size(16px);

      }
      span{
        @include color(#838A96);
      }
      p{
        @include font-size(12px);
        @include rect(100%, 0.35rem);
        @include overflow(hidden);
      }
    }
  }
}
</style>
