export const state = () => ({
    //객체 반환 cartItems 공통의 데이터 
    cartItems : [], 
})

export const mutations = {
    addCartItem(state, cartItem){
        state.cartItems.push(cartItem)
    }
}