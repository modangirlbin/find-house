<template>
  <Header 
    @closeSnb = "sideState = false" 
    @openSnb = "sideState = true"
    :class = "{'open' :sideState}"
    :sideState="sideState" 
    :aria-hidden="modalState"
  />
  <main id="main" :aria-hidden="modalState||sideState">
    <div class="area_sort" :aria-hidden="modalState||sideState">
      <button type="button" class="btn" :class="sortState ? 'on' : ''" v-on:click="sortPrice()" :aria-pressed="sortState">낮은 가격순</button>
      <button type="button" class="btn" :class="sortReverseState ? 'on' : ''" v-on:click="sortPriceReverse()" :aria-pressed="!sortState">높은 가격순</button>
      <!-- <button type="button" class="btn" v-on:click="sortName()">이름순</button> -->
    </div>
    <div class="area_cards">
      <h2 class="offscreen">매물 목록</h2>
      <ul class="list_cards">
        <CardItem 
          :item = "datas[i]"
          :key  = "item" 
          :data = "datas"
          :class= "{'sale': datas[i].sale}"
          v-for = "(item, i) in datas" 
          @openLayer = "openLayer"
        />
      </ul>
    </div>
  </main>
  <button type="button" :class="['btn_top', {go_top: isTop}]" @click="scrollToTop()" :aria-hidden="modalState||sideState"><span class="offscreen">처음으로</span></button>
  <footer class="footer" :aria-hidden="modalState||sideState">
    <p class="copyright">© BANGBANB Co.,Ltd. All Rights Reserved.</p>
    <a class="policy" href="#none">개인정보 처리방침</a>
    <p class="caution">일부 상품의 경우 주식회사 방방 통신판매의 당사자가 아닌 통신판매중개자로서 매물, 매물정보, 거래에 대한 책임이 제한될 수 있으므로, 각 매물 페이지에서 구체적인 내용을 확인하시기 바랍니다.</p>
  </footer>
  <ModalLayer 
    :datas = "datas" 
    :selectedId = "selectedId" 
    :modalState = "modalState" 
    @closeLayer = "modalState = false"
  />
</template>

<script>
import data from './assets/data';
import Header from './components/Header.vue';
import ModalLayer from './components/ModalLayer.vue';
import CardItem from './components/CardItem.vue';


export default {
  name: 'App',
  data(){
    return{
      datas : data,
      menu : ['home', 'shop', 'about'],
      like : [0, 0, 0],
      modalState : false,
      sideState : false,
      sortState : false,
      sortReverseState : false,
      selectedId : 0,
      isTop : false
    }
  },
  methods : {
    increase(){
      this.like ++;
    },
    sortPrice(){
      this.datas.sort(function(a,b){
        return a.price - b.price;
      });
      this.sortState = true;
      this.sortReverseState = false;
    },
    sortPriceReverse(){
      this.datas.sort(function(a,b){
        return b.price - a.price;
      });
      this.sortState = false;
      this.sortReverseState = true;
      console.log(this.datas, this.selectedId)
    },
    openLayer(idx){
      this.modalState = true;
      this.selectedId = idx;
      // this.$refs.modalFocus.focus();
    },
    scrollToTop(){
      window.scrollTo(0,0);
    }
    // sortName(){
    //   this.datas.sort(function(a,b){
    //     return a.title -b.title;
    //   });
    // }
  },
  mounted(){
    const that = this;
    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;
        if(scrollPos >= 100){
            that.isTop = true;
        } else {
            that.isTop = false;
        }
    })
  },
  components: {
    Header,
    ModalLayer,
    CardItem
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/import.scss";
</style>
