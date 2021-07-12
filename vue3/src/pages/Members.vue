<template>
  <section clsas="w-full flex flex-wrap">
    <div class="m-auto text-center">
      <h1 class="p-6 my-5 text-3xl font-bold">
        업스테이지 짱짱맨
      </h1>

      <Modal v-if="isModal1Open" @close="isModal1Open = false">
        <template #title>루나</template
        ><template #body
          >
          Upstage Software Engineer <br />
          먹는 것을 좋아함</template
        >
      </Modal>
      <button
        class="rounded border px-3 py-1 mx-2 text-xl font-bold bg-indigo-600 shadow-md text-white "
        @click="isModal1Open = true"
      >
        루나
      </button>
      <Modal v-if="isModal2Open" @close="isModal2Open = false">
        <template #title>라일라</template
        ><template #body
          >Upstage Software Engineer <br />
          리액션 요정</template
        >
      </Modal>
      <button
        class="rounded border px-3 py-1 mx-2 text-xl font-bold bg-indigo-600 shadow-md text-white "
        @click="isModal2Open = true"
      >
      라일라
      </button>

    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import Modal from "../components/Modal";

export default {
  components: { Modal },
  setup() {
    const isModal1Open = ref(false);
    const isModal2Open = ref(false);
    const isModal3Open = ref(false);
    const isModal4Open = ref(false);

    return { isModal1Open, isModal2Open, isModal3Open, isModal4Open };
  }
};
</script>

<style></style>
