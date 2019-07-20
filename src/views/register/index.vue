<template>
  <div class="container">
    <div class="bg">
      <a href="javascript:;"><img src="https://sta.gtimg.com/mobile/static/images/top_red_13.png" alt=""></a>
    </div>
    <van-nav-bar
        title="注册"
        left-text=""
        right-text="登录"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    <div class="content">
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="手机号"
          placeholder="请输入手机号"
          :error-message="usernameState"
          :right-icon="usernameIcon"
        />
        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
          clearable
          :error-message="passwordState"
          :right-icon="passwordIcon"
        />
        <van-field
          v-model="sms"
          center
          clearable
          required
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <van-button @click="sendCode" slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
      </van-cell-group>
      <van-button style="color:#fff;" type="primary" size="normal" @click="register" :block="true">注册</van-button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Field, Cell, CellGroup, Button, NavBar, Toast, Dialog } from 'vant'
Vue.use(Field)
Vue.use(Cell).use(CellGroup)
Vue.use(Button)
Vue.use(NavBar)
Vue.use(Toast)
Vue.use(Dialog)
export default {
  data () {
    return {
      username: '15921347161',
      password: '123456',
      sms: '',
      code: 'aa'
    }
  },
  computed: {
    usernameState () {
      if (this.username === '') {
        return ''
      } else if (!(/^1[3456789]\d{9}$/.test(this.username))) {
        return '手机号格式错误'
      } else {
        return ''
      }
    },
    usernameIcon () {
      if (this.username === '') {
        return ''
      } else if ((/^1[3456789]\d{9}$/.test(this.username))) {
        return 'checked'
      } else {
        return ''
      }
    },
    passwordState () {
      if (this.password === '') {
        return ''
      } else if (this.password.length < 5) {
        return '密码格式错误'
      } else {
        return ''
      }
    },
    passwordIcon () {
      if (this.password === '') {
        return ''
      } else if (this.password.length >= 5) {
        return 'checked'
      } else {
        return ''
      }
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
      this.$router.replace('/login')
    },
    sendCode () {
      fetch('https://www.daxunxun.com/users/sendCode?tel=' + this.username)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data === 1) {
            Toast('该手机号已经注册')
          } else if (data === 0) {
            Toast('获取验证码失败')
          } else {
            this.code = data.code
          }
        })
    },
    register () {
      if (this.sms !== this.code) {
        Toast('验证码错误')
        return null
      }
      if (this.usernameIcon !== 'checked') {
        Toast('手机号格式错误')
        return null
      }
      if (this.passwordIcon !== 'checked') {
        Toast('密码格式错误')
        return null
      }
      fetch('https://www.daxunxun.com/users/register', {
        method: 'post',
        headers: { // 看后端的接口
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'username=' + this.username + '&password=' + this.password
      }).then(res => res.json()).then(data => {
        console.log(data)
        if (data === 1) {
          Toast('注册成功')
          this.$router.push('/login')
        } else if (data === 2) {
          Dialog.confirm({
            title: '提示',
            message: '该用户已经注册，是否直接登录'
          }).then(() => {
            // on confirm
            this.$router.push('/login')
          }).catch(() => {
            // on cancel
          })
        } else {
          Toast('注册失败')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/lib/reset.scss';
.bg{
  @include rect(100%, 0.68rem);
  img{
    @include rect(100%, 0.68rem);
  }
}
.van-button{
  @include background-color(#D3E6FE);
  border-color:#D3E6FE;
  border-radius: 0.2rem;
}
</style>
