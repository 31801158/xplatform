<template>
    <div class="login" style="">
        <van-nav-bar title="登录" color="#f00" :fixed="true"/>

        <van-icon name="user-circle-o" size="50px" style="margin: 150px 0 30px 0"/>
        <van-form @submit="onSubmit">
            <van-field
                    v-model="username"
                    name="username"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">登录</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
    import {Toast} from "vant";
    import store from "../store";

    export default {
        name: "Login",
        data() {
            return {
                username:'',
                password:''
            };
        },

        methods: {
            onSubmit(values) {
                var _this=this;
                axios.post('http://192.168.43.23:9785/posts/login', {
                        user_name:values.username,
                        user_pwd:values.password
                    }
                ).then(function(resp){
                    Toast(resp.data.message);
                    if(resp.data.message==='登陆成功'){
                        localStorage.logged_in=true;
                        localStorage.username=_this.username;

                        _this.$store.commit('change');
                        // _this.$store.commit('setUserName',_this.username);
                        _this.$router.replace({path:'/home',params: {username:_this.userName}});
                    }
                    console.log(_this.username);
                })

            },
      },
    }
</script>

<style scoped>

</style>
