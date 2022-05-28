export const state = () => ({
    //공통 데이터 
    cartItems : [], 
})

export const mutations = {
    //this.$store.commit();으로 접근가능 
    addCartItem(state, cartItem){
        state.cartItems.push(cartItem)
    }
}