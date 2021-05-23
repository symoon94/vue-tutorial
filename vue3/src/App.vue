<template>
  <Header @open-login-modal="isLoginOpen = true" />
  <div class=""><router-view></router-view></div>

  <LoginModal v-if="isLoginOpen" @close-login-modal="isLoginOpen = false" />
</template>

<script>
import Header from "./components/AppHeader";
import LoginModal from "./components/LoginModal";

export default {
  data() {
    return { isLoginOpen: false };
  },
  components: { Header, LoginModal }
};
</script>

<style></style>
