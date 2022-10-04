<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAppStore } from "../stores/main"

const mapDiv = ref<HTMLDivElement>()
const app = useAppStore()
onMounted(() => {
    app.createMap(mapDiv.value!)
})


</script>

<template>
  <div ref="mapDiv" class="map__wrapper" />
</template>


<style scoped lang="scss">

  .map__wrapper{
    height:100%;
    width: 100%;
  }

</style>