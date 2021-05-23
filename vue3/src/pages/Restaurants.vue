<template>
  <div class="text-center">
    <h1 class="p-6 text-2xl"><span class="font-bold">양시숲 </span>맛집</h1>
    <div class="pb-6">
      <form @submit.prevent="addRestaurant">
        <input
          class="border px-1 mx-2 rounded-md"
          v-model="newRestaurant"
          placeholder="맛집을 입력하쇼."
        />
        <button
          class="rounded-md bg-gradient-to-b from-yellow-500 to-red-500 text-white px-2"
          :disabled="isActive"
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
export default {
  data() {
    return {
      isShowing: true,
      newRestaurant: "",
      isActive: false,
      count: 3,
      restaurants: [
        { id: 0, name: "백종원 쌈밥집", numRating: 3, rating: 3.5 },
        { id: 1, name: "두찜", numRating: 2, rating: 4.2 },
        { id: 2, name: "이차돌", numRating: 3, rating: 2 }
      ]
    };
  },
  computed: {},
  methods: {
    sortFunc() {
      return this.restaurants.slice().sort(function(a, b) {
        return a.rating < b.rating ? 1 : -1;
      });
    },
    addRestaurant() {
      this.count += 1;
      this.restaurants.push({
        id: this.count,
        name: this.newRestaurant.trim(),
        numRating: 0,
        rating: 0
      });
      this.newRestaurant = "";
    },
    editRating(id) {
      for (var i = 0; i < this.restaurants.length; i++) {
        if (this.restaurants[i].id == id) {
          this.restaurants[i].numRating += 1;
        }
      }
    },
    remove(id) {
      this.restaurants = this.restaurants.filter(
        restaurant => restaurant.id != id
      );
    }
  }
};
</script>

<style></style>
