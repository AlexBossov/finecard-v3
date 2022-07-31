<template>
  <div>
    <LoginForm/>
    <RegisterForm/>
    <RecoveryForm/>
  </div>
</template>

<script>
import LoginForm from "@/components/loginForm/LoginForm";
import RegisterForm from "@/components/registerForm/RegisterForm";
import RecoveryForm from "@/components/recoveryFrom/RecoveryForm";

export default {
  name: "StartPage",
  components: {RegisterForm, LoginForm, RecoveryForm}
}
</script>

<style scoped>

</style>