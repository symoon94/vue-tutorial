<template>
  <div class="text-center">
    <h1 class="p-6 text-2xl"><span class="font-bold">양시숲 </span>맛집</h1>
    <div class="pb-6">
      <form @submit.prevent="addRestaurant">
        <input
          class="border px-1 mx-2 rounded-md"
          v-model="newRestaurant"
          placeholder="맛집을 입력하쇼."
          ref="restaurantInput"
        />
        <button
          class="rounded-md bg-gradient-to-b from-yellow-500 to-red-500 text-white px-2"
          type="submit"
        >
          추가
        </button>
      </form>
    </div>
    <div class="">
      <ul>
        <li class="justify-between" v-for="h in sortFunc()" :key="h.name">
          <p @click="editRating(h.id)">
            {{ h.name }} ★{{ h.rating }} ({{ h.numRating }})
            <span
              ><button class="text-gray-400" @click="remove(h.id)">
                x
              </button></span
            >
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const restaurantInput = ref("");
    const newRestaurant = ref("");
    const restaurants = ref([
      { id: 0, name: "백종원 쌈밥집", numRating: 3, rating: 3.5 },
      { id: 1, name: "두찜", numRating: 2, rating: 4.2 },
      { id: 2, name: "이차돌", numRating: 3, rating: 2 }
    ]);
    const count = ref(3);

    onMounted(() => {
      restaurantInput.value.focus();
    });

    function sortFunc() {
      return restaurants.value.slice().sort(function(a, b) {
        return a.rating < b.rating ? 1 : -1;
      });
    }

    function addRestaurant() {
      count.value += 1;
      restaurants.value.push({
        id: count.value,
        name: newRestaurant.value.trim(),
        numRating: 0,
        rating: 0
      });
      newRestaurant.value = "";
    }

    function editRating(id) {
      for (var i = 0; i < restaurants.value.length; i++) {
        if (restaurants.value[i].id == id) {
          restaurants.value[i].numRating += 1;
        }
      }
    }

    function remove(id) {
      restaurants.value = restaurants.value.filter(
        restaurant => restaurant.id != id
      );
    }

    return {
      restaurantInput,
      newRestaurant,
      restaurants,
      count,
      sortFunc,
      addRestaurant,
      editRating,
      remove
    };
  }
};
</script>

<style></style>
