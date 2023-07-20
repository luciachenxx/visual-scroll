<template>
  <div class="navbar">
    <div class="flex absolute btn-wrap">
      <button class="primary-btn-style shadow-inset">ABOUT</button>
      <button class="primary-btn-style shadow-inset ml-3">OTHER</button>
    </div>
  </div>

</template>

<style scoped>
.navbar {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
}

.btn-wrap {
  top: 1rem;
  right: 1rem;
}
</style>

<script setup>
import { ref } from 'vue'

</script>
