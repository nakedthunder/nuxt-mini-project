<template>
    <div class="main_page_img_outter">
        <div class="img_box" v-for="(img, idx) in mainPageImg" :key="idx">
            <img :src="img.url" :key="img.id"/>
        </div>
    </div>
</template>

<script>
export default {
data() {
    return {
        mainPageImg: [
            { id: 0, url: require('../../assets/image/books.JPG') },
            { id: 1, url: require('../../assets/image/cake.JPG')},
            { id: 2, url: require('../../assets/image/dinnerTable.JPG') },
            { id: 3, url: require('../../assets/image/dad.JPG')},
            { id: 4, url: require('../../assets/image/relationship.jpeg')},
            { id: 5, url: require('../../assets/image/sydney.JPG')},

        ]
    }
}
}
</script>

<style>
.img_box img {
    width: 340px;
    height: 200px;
}
</style>