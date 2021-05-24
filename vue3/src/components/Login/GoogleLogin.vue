<template>
  <section class="text-center m-2 p-2">
    <button class="px-2 py-1 rounded border" @click="loginWithGoogle()">
      Login with Google
    </button>
  </section>
</template>

<script>
import firebase from "../../utilities/firebase";

export default {
  methods: {
    loginWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$emit("close-login-modal-from-google");
        });
    }
  }
};
</script>

<style></style>
