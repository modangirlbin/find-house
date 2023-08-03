<template>
  <Header 
    @closeSnb = "sideState = false" 
    @openSnb = "sideState = true"
    :class = "{'open' :sideState}"
    :sideState="sideState" 
    :aria-hidden="modalState"
  />
  <nav class="gnb">
    <ul class="list_gnb">
      <li v-for="(item, i) in gnb" :key="i"><a href="#none" class="item_gnb">{{item}}</a></li>
    </ul>
  </nav>
  <div class="box_sort" :aria-hidden="modalState||sideState">
    <button type="button" class="btn" :class="sortState ? 'on' : ''" v-on:click="sortPrice()" :aria-pressed="sortState">낮은 가격순</button>
    <button type="button" class="btn" :class="sortReverseState ? 'on' : ''" v-on:click="sortPriceReverse()" :aria-pressed="!sortState">높은 가격순</button>
    <!-- <button type="button" class="btn" v-on:click="sortName()">이름순</button> -->
  </div>
  <ul class="list_cards" :aria-hidden="modalState||sideState">
    <CardItem 
      :item = "datas[i]"
      :key  = "item" 
      :data = "datas"
      :class= "{'sale': datas[i].sale}"
      v-for = "(item, i) in datas" 
      @openLayer = "openLayer"
    />
  </ul>
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
      gnb : ['home', 'shop', 'about'],
      like : [0, 0, 0],
      modalState : false,
      sideState : false,
      sortState : false,
      sortReverseState : false,
      selectedId : 0
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
    }
    // sortName(){
    //   this.datas.sort(function(a,b){
    //     return a.title -b.title;
    //   });
    // }
  },
  components: {
    Header,
    ModalLayer,
    CardItem
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/popup.scss";
</style>
