<template>
  <div class="panelWrap">
    <!--      실시간 검색어 리스트 영역 -->
    <div class="rankWrap">
      <div v-for="(rank, i) in rankList" :key="i" class="list" @click="toggleRank(rank.id)">
        <div class="text">
          {{ i+1 }}. <span :class="{up: rank.upYn}">{{ rank.name }}</span>
        </div>
        <div :class="['rank', rank.upYn ? 'up' : rank.rank ? 'down' : 'default']">
          {{ rank.rank }}
        </div>
      </div>
    </div>
    <!--       상품 리스트 영역 -->
    <div class="pdrWrap">
      <div v-for="(item, i) in rankList" :id="`rank${item.id}`" :key="i">
        <div class="title">
          {{ i + 1 }}위 #{{ item.name }}
        </div>
        <div class="listCont">
          <div>
            <div class="listCont">
              <ul class="goodsList">
                <li v-for="n in 10" :key="n" class="goodsList__category">
                  <a class="goodsList__category__link">
                    <div class="imgBox">
                      <p class="rankingNumber">{{ n }}</p>
                      <div class="imagesWrap"><img src="/welstory/images/sample/img_product02.png" alt="샘플이미지"></div>
                      <div class="btnWrap"><button type="button" class="wishButton">클립</button></div>
                    </div>
                    <div class="productInfo__wrap">
                      <div class="productInfo">
                        <p class="productName">로고 숏 슬리브 티셔츠 2841MDM225 207298 99 숏 슬리브 티셔츠 2841MDM225 207298 99</p>
                        <div class="commodityPrice"><del class="money">58,000</del></div>
                        <div class="finalPaymentPrice">
                          <div class="discountRate"><span class="number">5</span>%</div>
                          <div class="amountPayment"><span class="money">55,100</span>원</div>
                        </div>
                      </div>
                      <div class="builtinInfo">
                        <span class="grade">4.0</span>(<span class="totalNumber">98</span>)
                        <span class="commentTitle">구매</span>
                        <span class="commentNumber">3,342</span>
                      </div>
                      <div class="flagWrap">
                        <span class="flagsStyle type01">무료배송</span>
                        <span class="flagsStyle type02">NEW</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="btn">
          <span>'{{ item.name }}'</span> 검색결과 전체보기
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/**
 * 베스트 실시간 탭 판넬 컴포넌트
 *
 * created by ejii.lee
 * created date 2022-08-09
 */
export default {
  name: 'MoBestRealTimeTabPanel',
  data () {
    return {
      rankList: [
        { id: 1, name: '노트북', rank: 5, upYn: true },
        { id: 2, name: '비스포크', upYn: false },
        { id: 3, name: '냉장고', upYn: false },
        { id: 4, name: '패밀리세일', rank: 5, upYn: false },
        { id: 5, name: '갤럭시 북', upYn: false },
        { id: 6, name: '설 선물세트', upYn: false },
        { id: 7, name: '갤럭시 워치', rank: 5, upYn: true },
        { id: 8, name: '가전제품', rank: 10, upYn: true },
        { id: 9, name: '김치냉장고', rank: 5, upYn: false },
        { id: 10, name: '그랑데시', rank: 5, upYn: true },
      ],
    }
  },
  activated () {
    // 데이터 리로드가 필요하다면 여기서 작업
  },
  methods: {
    toggleRank (id) {
    //this.$scrollTo 이거쓰면 오류
      window.scrollTo(`#rank${id}`, 1000, { lazy: false, offset: -80 })
    },
  },
}
</script>
<style  lang="scss" scoped>
.panelWrap {
  padding: 0 20px;
  .rankWrap {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0 40px 0;
    .list {
      width: calc(100% / 2);
      height: 50px;
      border: 1px solid #DFDFDF;
      align-items: center;
      display: flex;
      justify-content: space-between;
      font-weight: 500;
      padding: 0 14px;

      &:not(:nth-last-child(-n+2)) {
        border-bottom: none;
      }
      &:nth-child(odd) {border-right: none;}
      .text {
        width: 80%;
        span {font-weight: 350;}
      }
      .rank {
        width: 20%;
        &.default {
          background: url(/welstory/images/common/icon/bg_rankdefault.png) no-repeat 0 8px/10px;
          height: inherit;
          background-position: center;
        }
        &.up {
          background: url(/welstory/images/common/icon/bg_rankup.png) no-repeat 0 8px/10px;
          padding-left: 18px;
        }
        &.down {
          background: url(/welstory/images/common/icon/bg_rankdown.png) no-repeat 0 8px/10px;
          padding-left: 18px;
        }
      }
      .up {
        color: #6C60FF;
        font-weight: 500 !important;
      }
    }
  }
  .pdrWrap {
    .title {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .listCont {
      display: flex;
      flex-wrap: wrap;
      border-bottom: 1px solid #EAEAEA;
      .goodsList {
        margin: 0;
        padding: 0;
      }
    }
    .btn {
      font-size: 13px;
      font-weight: 500;
      text-align: center;
      margin: 10px 0 50px 0;
      span {
        color: #6C60FF;
      }
      &:after {
        background: url(/welstory/images/common/button/btn_arrow_right.png) no-repeat 0 0;
        display: inline-block;
        content: '';
        width: 5px;
        height: 8px;
        margin-left: 6px;
      }
    }
  }
}
</style>
