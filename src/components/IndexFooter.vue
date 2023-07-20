<template>
  <div class="footer absolute bottom-0 w-full flex">
    <p class="marquee-style justify-center items-center whitespace-nowrap text-bold first">{{ state.marquee }}</p>
    <p class="marquee-style justify-center items-center whitespace-nowrap text-bold second">{{ state.marquee }}</p>
  </div>

</template>

<style scoped lang="scss">
  .footer {
    background-color: #FF7938;
    height: 50px;
  }

  .marquee-style {
    color: #FFF5E3;
    animation: slidein 40s linear infinite;
    &:nth-child(2){
      animation: slidein2 40s linear infinite;
      animation-delay: -20s;
    }
  }

  @keyframes slidein {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(-100%);
    }
  }
  @keyframes slidein2 {
    from {
      transform: translateX(0%);
    }

    to {
      transform: translateX(-200%);
    }
  }
</style>

<script setup>
import { reactive } from "vue";

const state = reactive({
  marquee: []
})

state.marquee = 'THIS IS LUCIA THIS IS LUCIA  THIS IS LUCIA  THIS IS LUCIA  THIS IS LUCIA  THIS IS LUCIA THIS IS LUCIA  THIS IS LUCIA THIS IS LUCIA THIS IS LUCIA  THIS IS LUCIA  THIS IS LUCIA  THIS IS LUCIA  THIS IS LUCIA THIS IS LUCIA  THIS IS LUCIA ' 
</script>
