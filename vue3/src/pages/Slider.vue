<template>
<div class="flex flex-wrap w-full relative">
  <div class="absolute w-full" v-for="(color, index) in sliders" :key="color">
    <transition name="fade">
    <div :class="color" style="height:350px" v-if="currentSlide == index">
    </div>
    </transition>
  </div>
  <div class="w-full" style="height:340px">
    <div  class="absolute bottom-0 w-full flex justify-center">
      <div class="w-4 h-4 mx-2 rounded-full cursor-pointer shadow-md" :class="currentSlide == index ? 'bg-gray-700' : 'bg-gray-300'" v-for="(slider, index) in sliders" :key="slider" @click = "makeActive(index)"></div>
    </div>
    
  </div>
</div>

</template>

<script>
export default { data(){ return { currentSlide: 0, interval:"",
sliders:['bg-red-600', 'bg-blue-600','bg-yellow-600']}}, methods: {
makeActive(index){ return this.currentSlide = index; } }, mounted() {
this.interval = setInterval(() => { this.currentSlide = this.currentSlide ===2 ?
0: this.currentSlide + 1;}, 2000); }, beforeUnmount(){
clearInterval(this.interval); } };

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>

