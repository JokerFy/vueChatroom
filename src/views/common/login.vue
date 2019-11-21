<template>
    <div style="display: flex;flex-direction: column;">
        <div style="display: flex;justify-content: center;margin-top: 50px">
            <div style="width: 80%">
                <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
                <mt-field label="邮箱" placeholder="请输入邮箱" type="email" ></mt-field>
                <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
            </div>
        </div>
        <div style="display: flex;justify-content: center;margin-top: 20px">
            <mt-button style="width: 80%" type="primary">登录</mt-button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>

</style>
