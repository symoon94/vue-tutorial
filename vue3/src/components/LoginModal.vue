<template>
  <section
    @click="$emit('close-login-modal')"
    class="h-screen w-screen bg-gray-500 fixed top-0 opacity-50 z-20"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="m-auto w-1/3 h-3/6 bg-white p-2 rounded shadow-md z-30">
        <div class="m-1 text-2xl text-center font-bold"><h1>Login</h1></div>
        <form @submit.prevent="submit">
          <div class="p-2">
            <label>Email</label>
            <input
              class="my-1 p-2  w-full rounded border"
              type="email"
              placeholder="email"
              v-model="email"
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
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "user@gmail.com",
        password: "password"
      }
    };
  }
};
</script>

<style></style>
