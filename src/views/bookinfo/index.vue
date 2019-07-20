<template>
  <div class="container">
    <header class="headerI">
      <van-nav-bar
        left-arrow
        @click-left="infoLeft"
      />
      <img :src="img" alt="">
      <div class="bookInfo">
        <h3>{{ bookName }}</h3>
        <p>
          <span>{{ authorName }}</span><i class="iconfont icon-dian"></i>
          <span>{{ chanName }}</span><i class="iconfont icon-dian"></i>
          <span>{{ subCateName }}</span>
        </p>
      </div>
    </header>
    <div class="content">
      <div class="infotext">
        <ul>
          <li>
            <p><span>{{ wordsCnt }}</span></p>
            <span>连载</span>
          </li>
          <li>
            <p><span>{{ recomAll }}</span></p>
            <span>推荐票</span>
          </li>
          <li>
            <p><span>{{ collect }}</span></p>
            <span>月票</span>
          </li>
        </ul>
      </div>
      <div :class = "[ flags ? introduce : introduces]"  @click="jieshao">
        <p>
          {{ intro }}
        </p>
      </div>
      <div class="mulu">
        <span>目录</span>
        <div class="lianzai">
          <span>{{ updChapterName }}</span>·
          <span>{{ updTime }}</span>
        </div>
      </div>
      <div class="author">
        <div class="authors">
          <div class="authorinfo">
            <h3>{{ authorName }}</h3>
            <span>著有3部作品</span>
          </div>
          <img src="" alt="">
        </div>
        <div class="rongyu">
          <div class="authorinfo">
            <h3>作品荣誉</h3>
            <span>5项</span>
          </div>
          <img src="" alt="">
        </div>
      </div>
    </div>
    <div class="bookinfo-last">
      <span @click="add(id)"> {{ jrcase }} </span>
      <span>批量订阅</span>
      <span @click="reader(id)">立即阅读</span>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { NavBar } from 'vant'
Vue.use(NavBar)
export default {
  data () {
    return {
      bookName: '',
      authorName: '',
      chanName: '',
      subCateName: '',
      wordsCnt: '',
      recomAll: '',
      collect: '',
      updTime: '',
      updChapterName: '',
      img: '',
      id: '',
      intro: '',
      props: [ { bookInfo: '' } ],
      flags: true,
      introduce: 'introduce',
      introduces: 'introduces',
      pro: [],
      prolist: {},
      pp: [],
      jrcase: '加入书架'
    }
  },
  methods: {
    infoLeft () {
      // this.$router.push({ path: '/booklist' })
      this.$router.back()
    },
    reader (id) {
      this.$router.push({ path: '/booktext/' + id + '/' + this.cid })
    },
    jieshao () {
      this.flags = !this.flags
      console.log('222')
    },
    add (id) {
      this.prolist = {
        bookName: this.bookName,
        authorName: this.authorName,
        bookId: id,
        intro: this.intro,
        img: this.img
      }
      // console.log(this.prolist)
      this.jrcase = '已在书架'
      this.$store.commit('bookCase', this.prolist)
    }
  },
  mounted () {
    const { $route: { params: { id } } } = this
    // console.log(id)
    fetch('http://39.100.152.70:3000/api/books/list?bookInfo.bookId=' + id).then(res => res.json()).then(data => {
      console.log(data[0])
      this.props = data[0]
      // console.log(props)
      this.id = data[0].bookInfo.bookId
      this.cid = data[0].chapterInfo[0].chapterId
      // console.log(this.cid)
      this.bookName = data[0].bookInfo.bookName
      this.authorName = data[0].bookInfo.authorName
      this.chanName = data[0].bookInfo.chanName
      this.subCateName = data[0].bookInfo.subCateName
      this.wordsCnt = data[0].bookInfo.wordsCnt
      this.recomAll = data[0].bookInfo.recomAll
      this.collect = data[0].bookInfo.collect
      this.updTime = data[0].bookInfo.updTime
      this.updChapterName = data[0].bookInfo.updChapterName
      this.intro = data[0].bookInfo.intro
      this.img = data[0].bookInfo.img
    })
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.content{
  @include background-color(#F5F7FA);
  @include overflow(auto);
}
.infotext, .introduce, .mulu, .author{
  @include background-color(#fff);
}
.headerI{
  @include rect(100%, 2.3rem);
  // @include background-color(red);
  background-color: rgba(0,0,0,0.1);
  background:url("../../assets/3.png");
  img{
    @include display(block);
    @include rect(1rem, 1.2rem);
    @include margin(0 auto);
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
        @include font-size(14px);
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
  p{
    @include overflow(hidden);
    @include rect(100%, 0.4rem);
  }
}
.introduces{
  @include background-color(#fff);
  @include rect(100%, auto);
  @include padding(0.2rem);
  @include font-size(14px);
  p{
    // @include overflow(hidden);
    @include rect(100%, auto);
  }
}
.mulu{
  @include rect(100%, 0.5rem);
  @include flexbox();
  @include justify-content(space-between);
  @include align-items();
  @include margin(0.14rem 0 0 0);
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
