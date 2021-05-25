<template>
  <section clsas="w-full flex flex-wrap">
    <div class="m-auto text-center">
      <h1 class="p-6 my-5 text-3xl font-bold">
        오늘도 심바로운 심바이오트 오피스에 거주 중인 심바들
      </h1>

      <Modal v-if="isModal1Open" @close="isModal1Open = false">
        <template #title>문수영</template
        ><template #body
          >University of Arizona 졸업 <br />
          Upstage Software Engineer <br />
          먹는 것을 좋아함</template
        >
      </Modal>
      <button
        class="rounded border px-3 py-1 mx-2 text-xl font-bold bg-indigo-600 shadow-md text-white "
        @click="isModal1Open = true"
      >
        문수영
      </button>

      <Modal v-if="isModal2Open" @close="isModal2Open = false">
        <template #title>김태훈</template
        ><template #body
          >ex OpenAI <br />
          Symbiote CEO <br />
          여자친구 괴롭히는게 특기</template
        >
      </Modal>
      <button
        class="rounded border px-3 py-1 mx-2 text-xl font-bold bg-indigo-600 shadow-md text-white "
        @click="isModal2Open = true"
      >
        김태훈
      </button>

      <Modal v-if="isModal3Open" @close="isModal3Open = false">
        <template #title>박승원</template
        ><template #body
          >Seoul National University 재학 중 <br />
          Symbiote co-founder <br />
          ex Minds Lab</template
        >
      </Modal>
      <button
        class="rounded border px-3 py-1 mx-2 text-xl font-bold bg-indigo-600 shadow-md text-white "
        @click="isModal3Open = true"
      >
        박승원
      </button>

      <Modal v-if="isModal4Open" @close="isModal4Open = false">
        <template #title>노영훈</template
        ><template #body
          >MIT 재학 중 <br />
          Symbiote intern <br />
          강아지 좋아함
        </template>
      </Modal>
      <button
        class="rounded border px-3 py-1 mx-2 text-xl font-bold bg-indigo-600 shadow-md text-white "
        @click="isModal4Open = true"
      >
        노영훈
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
