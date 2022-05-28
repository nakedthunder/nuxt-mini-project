<template>
<div>
      <h1>카트 페이지</h1>
      <div>
        <ul>
          <!--store > index.js 접근 -->
          <li v-for="cartItem in $store.state.cartItems"
          :key="cartItem.id">
          <img :src="cartItem.imageUrl" :alt="cartItem.name"/>
          <p>{{cartItem.name}}</p>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>