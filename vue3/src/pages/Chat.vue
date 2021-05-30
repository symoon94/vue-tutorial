<template>
  <section class="flex w-full">
    <div class="m-auto w-full flex flex-wrap justify-center">
      <h1 class="text-center text-3xl my-4 w-full">실시간 채팅</h1>
      <div class="border rounded-lg w-10/12 md:w-4/12">
        <div class="h-64 p-2 flex overflow-auto flex-col-reverse ">
          <div class="flex-col-reverse">
            <div
              v-for="chat in state.chats"
              :key="chat.message"
              class="w-full"
              :class="chat.userId === state.userId ? 'text-right' : ''"
            >
              {{ chat.message }}
            </div>
          </div>
        </div>
        <div class="h-8 p-2">
          <input
            v-model="state.message"
            placeholder="텍스트를 입력하쇼."
            class="p-1 border rounded shadow w-full"
            @keyup.enter="addMessage"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";
import firebase, { chatsRef } from "../utilities/firebase";

export default {
  setup() {
    const state = reactive({
      chats: [],
      message: "",
      userId: null
    });
    onMounted(async () => {
      console.log("onMounted!");
      chatsRef.on("child_added", snapshot => {
        state.userId = firebase.auth().currentUser.uid;
        console.log("state.userId is ");
        console.log(state.userId);
        state.chats.push({
          key: snapshot.key,
          ...snapshot.val()
        });
      });
    });

    function addMessage() {
      console.log("add");
      const newChat = chatsRef.push();
      newChat.set({ userId: state.userId, message: state.message });
      state.message = "";
    }

    return { state, addMessage };
  }
};
</script>

<style></style>
