<template>
    <div class="app">
        <main>
            <!-- <SearchInput :search-keyword="searchKeyword"
            @input="updateSearchKeyword"></SearchInput> -->
             <SearchInput v-model="searchKeyword" @search="searchProducts"></SearchInput>
            <ul>
                <li class="item flex" 
                v-for="product in products" 
                :key="product.id"
                @click="moveToDetailPage(product.id)">
                    <img class="product-image" :src="product.imageUrl" :alt="product.name">
                    <p>{{product.name}}</p>
                    <span>{{product.price}}</span>
                </li>
            </ul>
            <div class="cart-wrapper">
              <button class="btn" @click="moveToCartPage">장바구니 바로가기</button>
            </div>
        </main>
    </div> 
</template>

<script>
import axios from 'axios'
import SearchInput from '@/components/SearchInput.vue'
import {fetchProductsByKeyword} from '@/api/index'


export default {
    components : {SearchInput},
    async asyncData(){
        const response = await axios.get('http://localhost:3000/products')
        const products = response.data.map((item) => ({
            ...item, 
            imageUrl : `${item.imageUrl}?random=${Math.random()}`
        }))
        return { products }
    },
    data(){
        return {
            searchKeyword : '',
        }
    },
    methods :{
        //상세 페이지 이동 
        moveToDetailPage(id){
            console.log(id) //상세페이지를 클릭했을때 product.id를 확인할 수 있음 
            this.$router.push(`detail/${id}`) //URL정의, 폴더 페이지 만들어줘야함 
        },
        async searchProducts(){
          //searchProducts 올라올때 값이 무엇인지 암 검색하고자하는 입력된 값 
          //this.searchKeyword 원하는 값이므로 보낸다. 
          const response = await fetchProductsByKeyword(this.searchKeyword)
          //console.log(response) 콘솔에 값 담긴거 볼 수 있음 

          //this.products 현재 값이 있지않지만 return 값이 속성으로 정의
          //인스턴스의 데이터 속성으로 존재 
          console.log(response)
          this.products = response.data.map((item) => ({
              ...item, 
              imageUrl : `${item.imageUrl}?random=${Math.random()}`
          }))
        },
        moveToCartPage(){
          this.$router.push('/cart')
        }, 
    }
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
.list header{
  height: 50px;
}
</style>