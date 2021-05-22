<template>
<Header />

  <div class="w-full flex"></div>
<!-- <Restaurants /> -->
<Calendar />

</template>

<script>
import Restaurants from "./pages/Restaurants";
import Header from "./components/AppHeader"; import Calendar from
"./pages/Calendar";


export default {
components: { Restaurants, Header, Calendar }

};
</script>

<style></style>
