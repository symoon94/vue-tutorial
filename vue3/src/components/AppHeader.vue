<template>
  <nav
    class="w-full bg-gradient-to-b from-gray-200 to-gray-100 text-black px-4 py-2"
  >
    <router-link class="md:hidden" to="/">Home</router-link>
    <router-link
      v-for="item in navItems"
      :key="item.to"
      class="mx-2 hidden
md:inline-block"
      :to="item.to"
      >{{ item.title }}</router-link
    >
    <button v-if="!isLoggedIn" class="mx-2" @click="$emit('open-login-modal')">
      Login
    </button>
    <button v-else class="mx-2" @click="logout">Logout</button>
  </nav>
</template>

<script>
import firebase from "../utilities/firebase";

export default {
  props: { isLoggedIn: { type: Boolean, required: true } },
  data() {
    return {
      navItems: [
        { title: "멤버들", to: "/members" },
        { title: "맛집", to: "/restaurants" },
        { title: "달력", to: "/calendar" },
        { title: "마크다운", to: "/markdown" },
        { title: "슬라이더", to: "/slider" },
        { title: "계산기", to: "/calculator" }
      ]
    };
  },
  methods: {
    logout() {
      firebase.auth().signOut();
    }
  }
};
</script>

<style></style>
