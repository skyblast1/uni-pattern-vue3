<template>
  <div class="wrapper">
    <MyHeader />
    <div class="wrapper-content">
      <div class="container">
        <img alt="Vue logo" src="./assets/logo.png">
        <router-view />
      </div>
    </div>
    <MyFooter />
  </div>
</template>

<script>

import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";

export default {
  components: {
    MyHeader,
    MyFooter
  },
  data(){
    return{

    }
  }
}

</script>




