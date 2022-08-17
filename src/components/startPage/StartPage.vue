<template>
  <div>
    <div class="split left">
      <div class="centered">
      </div>
    </div>

    <div class="split right">
      <div style="margin-top: 20%">
        <LoginForm v-if="formType === 'login'" v-on:changeFormType="changeFormType"/>
        <RegisterForm v-if="formType === 'register'" v-on:changeFormType="changeFormType"/>
        <RecoveryForm v-if="formType === 'recovery'"/>
      </div>
    </div>

  </div>
</template>

<script>
import LoginForm from "@/components/loginForm/LoginForm";
import RegisterForm from "@/components/registerForm/RegisterForm";
import RecoveryForm from "@/components/recoveryFrom/RecoveryForm";

export default {
  name: "StartPage",
  components: {RegisterForm, LoginForm, RecoveryForm},
  data() {
    return {
      formType: 'login'
    }
  },
  methods: {
    changeFormType(formType) {
      this.formType = formType
    }
  }
}
</script>

<style scoped>
/* Split the screen in half */
.split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

/* Control the left side */
.left {
  left: 0;
  background-size: cover;
  background-image: url("../../assets/cool-background.png");

}

/* Control the right side */
.right {
  right: 0;
}

/* If you want the content centered horizontally and vertically */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>