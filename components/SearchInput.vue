<template>
    <div class="input-wrapper">
        <input type="text" :value="searchKeyword" class="search-input" @input="$emit('input', $event.target.value)">
        <button class="btn" @click="$emit('search')">click me</button>
    </div>
</template>

<script>
export default {
    props: {
        searchKeyword: {
            type: String,
            default: () => '',
        }
    }
}
</script>

<style scoped>
.input-wrapper {
    height: 40px;
    margin: 1rem 0;
    margin-left: 520px;
}

.search-input {
    width: 200px;
    font-size: 1.2rem;
    font-weight: 500;
}

.btn {
    font-size: 1.2rem;
    font-weight: 500;
}
</style>