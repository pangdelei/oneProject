<template>
  <div class="container">
    <van-nav-bar
        title="登录"
        left-text=""
        right-text="注册"
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
      </van-cell-group>
      <van-button type="primary" size="normal" @click="login" :block="true">登录</van-button>
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
      this.$router.replace('/register')
    },
    login () {
      if (this.usernameIcon !== 'checked') {
        Toast('手机号格式错误')
        return null
      }
      if (this.passwordIcon !== 'checked') {
        Toast('密码格式错误')
        return null
      }
      fetch('https://www.daxunxun.com/users/login', {
        method: 'post',
        headers: { // 看后端的接口
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'username=' + this.username + '&password=' + this.password
      }).then(res => res.json()).then(data => {
        console.log(data)
        if (data === 1) {
          Toast('登录成功')
          localStorage.setItem('isLogin', 'ok')
          // this.$store.commit('changeLoginState', 'ok')
          this.$router.back()
        } else if (data === 2) {
          Dialog.confirm({
            title: '提示',
            message: '该用户还未注册，是否注册'
          }).then(() => {
            // on confirm
            this.$router.push('/register')
          }).catch(() => {
            // on cancel
          })
        } else if (data === -1) {
          Toast('密码错误')
        } else {
          Toast('登录失败')
        }
      })
    }
  }
}
</script>
<style lang="scss">
</style>
