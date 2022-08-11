// import pictureTemp from '@/temp/pictureTemp'
export const state = () => ({
    //객체 반환(공통 데이터)
    cartItems : [], 
})

//state값을 변경할 수 있는 속성  
export const mutations = {
    //this.$store.commit();으로 접근가능 
    addCartItem(state, cartItem){
        const newCartItem = {
              ...cartItem, 
              imageUrl : `${cartItem.imageUrl}?random=${Math.random()}`
          }
        //변경된 카트아이템 넘김 newCartItem은 랜덤함수를 거친거! 
        state.cartItems.push(newCartItem)
    }
}