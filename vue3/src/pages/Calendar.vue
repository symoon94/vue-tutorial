<template>
  <div>
    <h1 class="mt-8 my-6 text-2xl text-center font-bold">달력</h1>
    <section class="text-center">
      <p class="p-2 text-center font-bold" style="width: 14.28%">
        {{ currentMonthName }} {{ currentYear }}
      </p>
    </section>
    <section class="flex my-2">
      <p
        class="p-2 text-center"
        style="width: 14.28%"
        v-for="day in days"
        :key="day"
      >
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap">
      <p
        class="text-center"
        style="width: 14.28%"
        v-for="num in startDay()"
        :key="num"
      ></p>
      <div
        class="text-center"
        style="width: 14.28%"
        v-for="num in daysInMonth()"
        :key="num"
      >
        <p :class="currentDateClass(num)">{{ num }}</p>
      </div>
    </section>
    <section class="flex absolute bottom-48 px-14 w-full justify-between">
      <button class=" px-2 text-center font-bold" @click="prev()">
        Prev</button
      ><button class=" px-2 text-center font-bold " @click="today()">
        Today
      </button>
      <button class=" px-2 text-center font-bold " @click="next()">
        Next
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    };
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentYear++;
        this.currentMonth = 0;
      } else {
        this.currentMonth++;
      }
    },
    prev() {
      if (this.currentMonth === 0) {
        this.currentYear--;
        this.currentMonth = 11;
      } else {
        this.currentMonth--;
      }
    },
    today() {
      this.currentYear = new Date().getFullYear();
      this.currentMonth = new Date().getMonth();
    },
    currentDateClass(num) {
      const calendarFullDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();
      return calendarFullDate === currentFullDate
        ? "m-auto w-1/6 rounded-full bg-red-500 text-white"
        : "";
    }
  },
  computed: {
    currentMonthName() {
      return new Date(
        this.currentYear,
        this.currentMonth
      ).toLocaleString("default", { month: "long" });
    }
  }
};
</script>

<style></style>
