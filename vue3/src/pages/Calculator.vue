<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="mt-10 text-3xl font-bold text-center">Calculator</h1>
      <p
        class="text-2xl text-right border mt-10 mb-2 w-56 h-12 overflow-x-scroll"
        style="direction:rtl"
      >
        {{ renderNum }}
      </p>
      <div class="h-10">
        <small v-if="selectedOperation">
          {{ prevNum }} {{ selectedOperation }} {{ currentNum }}</small
        >
      </div>

      <div class="grid grid-cols-4 gap-1">
        <button
          @click="pressed('1')"
          class="p-2 w-10 h-10 border rounded shawdow"
        >
          1
        </button>
        <button
          @click="pressed('2')"
          class="p-2 w-10 h-10 border rounded shawdow"
        >
          2
        </button>
        <button
          @click="pressed('3')"
          class="p-2 w-10 h-10 border rounded shawdow"
        >
          3
        </button>
        <button
          @click="pressed('+')"
          class="p-2 w-10 h-10 border rounded shawdow"
        >
          +
        </button>
        <button
          @click="pressed('4')"
          class="p-2 w-10 h-10 border rounded shawdow"
        >
          4
        </button>
        <button
          @click="pressed('5')"
          class="p-2 w-10 h-10 border rounded shawdow"
        >
          5
        </button>
        <button
          @click="pressed('6')"
          class="p-2 w-10 h-10 border rounded shawdow"
        >
          6
        </button>
        <button
          @click="pressed('-')"
          class="p-2 w-10 h-10 border rounded shawdow"
        >
          -
        </button>
        <button
          @click="pressed('7')"
          class="p-2 w-10 h-10 border rounded shawdow"
        >
          7
        </button>
        <button
          @click="pressed('8')"
          class="p-2 w-10 h-10 border rounded shawdow"
        >
          8
        </button>
        <button
          @click="pressed('9')"
          class="p-2 w-10 h-10 border rounded shawdow"
        >
          9
        </button>
        <button
          @click="pressed('*')"
          class="p-2 w-10 h-10 border rounded shawdow"
        >
          *
        </button>
        <button
          @click="pressed('C')"
          class="p-2 w-10 h-10 border rounded shawdow"
        >
          C
        </button>
        <button
          @click="pressed('0')"
          class="p-2 w-10 h-10 border rounded shawdow"
        >
          0
        </button>
        <button
          @click="pressed('=')"
          class="p-2 w-10 h-10 border rounded shawdow"
        >
          =
        </button>
        <button
          @click="pressed('/')"
          class="p-2 w-10 h-10 border rounded shawdow"
        >
          /
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import useWindowEvent from "../utilities/composition/useWindowEvent";
export default {
  setup() {
    const prevNum = ref("");
    const currentNum = ref("");
    const renderNum = ref("");
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const operations = ["+", "-", "*", "/"];
    const selectedOperation = ref("");

    function pressed(value) {
      if (value === "=" || value === "Enter") calculate();
      else if (value === "C" || value === "c") {
        clear();
      } else if (operations.includes(value)) applyOperation(value);
      else if (numbers.includes(value)) appendNumber(value);
    }

    function appendNumber(value) {
      currentNum.value = currentNum.value + value;
      renderNum.value = currentNum.value;
    }

    function calculate() {
      if (selectedOperation.value === "+") {
        sum();
      } else if (selectedOperation.value === "-") {
        subtract();
      } else if (selectedOperation.value === "*") {
        multiply();
      } else if (selectedOperation.value === "/") {
        divide();
      }
      prevNum.value = "";
      selectedOperation.value = "";
      renderNum.value = currentNum.value;
      if (currentNum.value < 0) {
        renderNum.value = currentNum.value.toString().slice(1) + "-";
      }
    }

    function sum() {
      currentNum.value = +prevNum.value + +currentNum.value;
    }

    function subtract() {
      currentNum.value = prevNum.value - currentNum.value;
    }

    function multiply() {
      currentNum.value = prevNum.value * currentNum.value;
    }
    function divide() {
      currentNum.value = prevNum.value / currentNum.value;
    }

    function applyOperation(value) {
      calculate();
      prevNum.value = currentNum.value;
      currentNum.value = "";
      renderNum.value = "";
      selectedOperation.value = value;
    }
    function clear() {
      currentNum.value = "";
      renderNum.value = "";
    }

    const handleKeydown = e => pressed(e.key);
    useWindowEvent("keydown", handleKeydown);

    return { renderNum, currentNum, pressed, selectedOperation, prevNum };
  }
};
</script>

<style></style>
