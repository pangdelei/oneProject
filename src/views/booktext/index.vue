<template>
  <div :class = "[ flags ? container : containers]">
    <div class="shuming">

    </div>
    <div class="content">
      <div class="biaoti">
        {{ text.chapterName }}
      </div>
      <div class="zhengwen" v-html="text.content" @click="tcyincang">
        {{ text.content }}
      </div>
      <div class="jiazai" @click="jiazai">
        加载下一章
      </div>
    </div>
    <div class="tanchuang">
      <div class="tc-top" v-show="flag">
        <i class="iconfont icon-iconfontjiantou1" @click="textback"></i>
        <i class="iconfont icon-shezhi"></i>
      </div>
      <div class="tc-last" v-show="flag">
        <div class="mulu" @click="showPopup">
          <i class="iconfont icon-mulu-"></i>
          <span>目录</span>
        </div>
        <div class="mulu" @click="yejian">
          <i class="iconfont icon-yueliang"></i>
          <span>夜间</span>
        </div>
        <div class="mulu" @click="szyincang">
          <i class="iconfont icon-A"></i>
          <span>设置</span>
        </div>
      </div>
    </div>
    <!-- 目录弹出 -->
    <van-popup v-model="show" position="right" :style="{ height: '100%',width: '80%'}">
      <div class="ml-top">
        <span>目录</span>
      </div>
      <div class="ml-cen">
        <div class="ml-cent">
          <span>共875章</span>
        </div>
        <div class="ml-zw">
          <ul>
            <li v-for="(item, index) of pro" :key="index" @click="mulu(item.chapterId)" >{{ item.chapterName }}</li>
          </ul>
        </div>
      </div>
    </van-popup>
    <!-- 字体大小 -->
    <!-- <div class="shezhi" v-show="szzt">
      <span>字体大小</span>
      <van-stepper
        v-model="value"
        input-width="40px"
        button-size="32px"
        @plus="plus"
        @minus="minus"
      />
    </div> -->
  </div>
</template>

<script>
import Vue from 'vue'
import { Popup, Button, Stepper } from 'vant'
Vue.use(Popup)
Vue.use(Button)
Vue.use(Stepper)
export default {
  data () {
    return {
      flag: false,
      container: 'container',
      containers: 'containers',
      flags: true,
      show: false,
      value: 1,
      text: [],
      pro: [],
      bid: [],
      next: []
    }
  },
  inject: ['reload'],
  methods: {
    tcyincang () {
      this.flag = !this.flag
    },
    szyincang () {
      this.szzt = !this.szzt
    },
    textback () {
      // this.$router.replace({ path: '/bookinfo/' + this.bid })
      this.$router.back()
    },
    yejian () {
      this.flags = !this.flags
    },
    showPopup () {
      this.show = true
    },
    mulu (id) {
      this.$router.replace({ path: '/booktext/' + this.bid + '/' + id })
      this.reload()
    },
    jiazai () {
      this.$router.replace({ path: '/booktext/' + this.bid + '/' + this.nextid })
      this.reload()
      // fetch('http://10.11.56.181:3000/api/books/find?chapterId=' + this.nextid).then(res => res.json()).then(data => {
      //   this.text = data[0].chapterInfo[0]
      //   // this.nextid = data[0].chapterInfo[0].next
      //   // console.log(this.nextid)
      // })
    }
  },
  mounted () {
    const { $route: { params: { id } } } = this
    // console.log(id)
    fetch('http://39.100.152.70:3000/api/books/find?chapterId=' + id).then(res => res.json()).then(data => {
      this.text = data[0].chapterInfo[0]
      this.nextid = data[0].chapterInfo[0].next
      // console.log(this.nextid)
    })
    fetch('http://39.100.152.70:3000/api/books/list?chapterInfo.chapterId=' + id).then(res => res.json()).then(data => {
      this.pro = data[0].chapterInfo
      this.bid = data[0].bookInfo.bookId
      // console.log(this.pro)
    })
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.jiazai{
  @include rect(100%, 0.4rem);
  @include background-color(#ED424B);
  border-radius: 1rem;
  @include flexbox();
  @include justify-content();
  @include align-items();
  @include color(#fff);
}
.content{
  // overflow: auto;
  @include rect(100%, auto);
}

.container{
  overflow: auto;
  @include background-color(#D5C19C);
  @include rect(100%, 100%);
  .shuming{
    @include color(#907F5E);
    @include margin(0.1rem 0.2rem);
  }
  .biaoti{
    @include font-size(20px);
    @include color(#302303);
    @include margin(0 0.2rem);
  }
  .zhengwen{
    @include padding(0.2rem);
    @include rect(100%, auto);
    @include font-size(16px);
    // p{
    //   // @include font-size(16px);
    // }
  }
  .tc-top{
    position:absolute;
    top:0;
    @include flexbox();
    @include justify-content(space-between);
    @include align-items();
    @include rect(100%, 0.44rem);
    @include padding(0 0.1rem);
    @include background-color(#CCB992);
  }
  .tc-last{
    position:absolute;
    bottom:0;
    @include flexbox();
    @include justify-content(space-between);
    @include align-items();
    @include rect(100%, 0.44rem);
    @include padding(0 0.2rem);
    @include background-color(#CCB992);
    .mulu{
      @include flexbox();
      @include flex-direction(column);
      @include justify-content();
      @include align-items();
    }
  }
  .dianji{
    @include rect(1.5rem, 3rem);
    // @include background-color(#000);
    position:absolute;
    bottom:20%;
    left:30%;
    z-index: 100;
  }
}
// 夜间模式
.containers{
  @include background-color(#0D0C0D);
  @include rect(100%, 100%);
  .shuming{
    @include color(#666);
    @include margin(0.1rem 0.2rem);
  }
  .biaoti{
    @include font-size(20px);
    @include color(#666);
    @include margin(0 0.2rem);
  }
  .zhengwen{
    @include padding(0.2rem);
    @include rect(100%, 100%);
  }
  .tc-top{
    position:absolute;
    top:0;
    @include flexbox();
    @include justify-content(space-between);
    @include align-items();
    @include rect(100%, 0.44rem);
    @include padding(0 0.1rem);
    @include background-color(#131313);
  }
  .tc-last{
    position:absolute;
    bottom:0;
    @include flexbox();
    @include justify-content(space-between);
    @include align-items();
    @include rect(100%, 0.44rem);
    @include padding(0 0.2rem);
    @include background-color(#131313);
    .mulu{
      @include flexbox();
      @include flex-direction(column);
      @include justify-content();
      @include align-items();
    }
  }
  .dianji{
    @include rect(1.5rem, 3rem);
    // @include background-color(#000);
    position:absolute;
    bottom:20%;
    left:30%;
    z-index: 100;
  }
}
// 目录
.van-popup{
  @include background-color(#F6F7F9);
}
.ml-top{
  @include rect(100%, 0.44rem);
  @include flexbox();
  @include justify-content();
  @include align-items();
  @include border(0 0 1px 0,#ed424b,solid);
  @include background-color(#fff);
}
.ml-cen{
  @include rect(100%, 100%);
  @include overflow();
  @include background-color(#fff);
  .ml-cent{
    @include rect(100%, 0.42rem);
    @include flexbox();
    @include align-items();
    @include padding(0 0 0 0.16rem);
  }
  ul{
    // @include margin(0.1rem 0 0 0);
    li{
      @include rect(100%, 0.42rem);
      @include flexbox();
      @include align-items();
      @include margin(0 0 0 0.16rem);
      @include border(0 0 1px 0,#969ba3,solid);
    }
  }
}

// 设置
.shezhi{
  @include rect(100%, 0.44rem);
  position:absolute;
  bottom:0.44rem;
  @include flexbox();
  @include align-items();
  span{
    @include margin(0 0.1rem 0 0.1rem);
  }
}
</style>
