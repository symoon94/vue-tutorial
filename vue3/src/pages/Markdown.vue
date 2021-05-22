<template>
  <h1 class="p-10 text-center text-3xl font-bold">마크다운 변환</h1>
  <div class="flex flex-wrap w-full">
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border">
        <textarea
          class="w-full h-full"
          :value="text"
          @input="update"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
export default {
  data() {
    return { text: "", timeout: "" };
  },
  methods: {
    debounce(func, wait = 1000) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(func, wait);
    },
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    }
  },
  computed: {
    markedText() {
      return marked(this.text);
    }
  }
};
</script>

<style></style>
