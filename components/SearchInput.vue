<template>
    <div>
        <input type="text" :value="value"
        @input="$emit('input', $event.target.value)"/>
        <button>search</button>
    </div>
</template>

<script>
export default {
    //props로  :value="searchKeyword"로 묶인 상태 
    props : {
        searchKeyword : {
            type : String, 
            default : () => '', //기본 문자열로 
        },
    },
}
</script>

<style>

</style>