<template>
  <div>
    <Header class="header" /> 
    <div class="middle">
      <Navigation class="navigation" />
      <NuxtPage class="main"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  // プラグインで実装した処理を呼び出し (プログラムから)
  const nuxtApp = useNuxtApp();
  console.log(nuxtApp.$appUrl.siteUrl());
</script>

<style>
.header{
    position: fixed;
    width: 100%;
    height: 50px;
    z-index: 1;
}

.middle{
    position:absolute;
    top:50px;
    display:flex
}

.navigation{
    position: fixed;
    height: 100%;
    width:150px;
}

.main{
    position: relative;
    left:150px
}
</style>
