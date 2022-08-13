<template>
    <div class="main_page_img_outter">
        <!-- 장소 카테고리 영역 -->
        <div class="places_cate_wrap">
            <div class="list" v-for="(spot , i) in placesList" :key="i">
                <div class="text">
                    {{ spot.name }}
                </div>
            </div>
        </div>
        <!-- 카테고리별 사진 영역  -->
        <div class="img_wrap">
            <!-- <div class="listCont" v-for="(item, i) in plcesList" :key="i"> -->
            <div class="cate_ls">
                <ul class="ImgList">
                    <li class="ImgList_ls" v-for="(img, idx) in mainPageImg" :key="idx">
                        <img :src="img.url" :key="img.id" />
                    </li>
                </ul>
            </div>
            <!-- <div class="btn">
                    <span>'{{item.name}}'</span>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
data() {
    return {
        placesList: [
            { id: 0, name: 'Melbourne' },
            { id: 1, name: 'Tokyo' },
            { id: 2, name: 'Taiwan' },
            { id: 3, name: 'Italy' },
            { id: 4, name: 'HongKong' },
        ],
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
.ImgList_ls img {
    width: 30%;
}

.main_page_img_outter {
    text-align: center;
}

.places_cate_wrap .list {
    display: inline-block;
    padding: 10px 20px;
}
</style>