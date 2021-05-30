<template>
  <section
    @click="close"
    class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50 z-20"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="m-auto w-1/3 h-4/6 bg-white p-2 rounded shadow-md z-30">
        <div class="m-1 text-2xl text-center font-bold"><h1>Login</h1></div>
        <GoogleLogin @close-login-modal-from-google="close" />
        <p class="text-center">Or</p>
        <form @submit.prevent="submit">
          <div class="p-2">
            <label>Email</label>
            <input
              class="my-1 p-2  w-full rounded border"
              type="email"
              placeholder="email"
              v-model="email"
              ref="emailInput"
            />
          </div>

          <div class="p-2">
            <label>Password</label>
            <input
              class="my-1 p-2  w-full rounded border"
              type="password"
              placeholder="password"
              v-model="password"
            />
          </div>

          <div class="mx-1">
            <button
              type="submit"
              class="my-3 w-full rounded shadow-md bg-blue-600 text-white p-2"
            >
              <span v-if="!isLoading">Login</span> <span v-else>⌛</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
import GoogleLogin from "../components/Login/GoogleLogin";

export default {
  components: { GoogleLogin },
  computed: {
    isLoginOpen() {
      return this.$store.state.isLoginOpen;
    }
  },
  data() {
    return {
      email: "user@gmail.com",
      password: "password",
      isLoading: false
    };
  },
  mounted() {
    this.$refs.emailInput.focus();
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.email = "";
          this.password = "";
          this.isLoading = false;
          this.close();
        })
        .catch(e => {
          console.log(e);
          this.isLoading = false;
        });
    },
    close() {
      this.$emit("close-login-modal");
    }
  }
};
</script>

<style></style>
