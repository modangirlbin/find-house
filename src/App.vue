<template>
  <Header 
    @closeSnb = "sideState = false" 
    @openSnb = "sideState = true"
    :class = "{'open' :sideState}"
    :sideState="sideState" 
    />
  <div class="box_sort">
    <button type="button" class="btn" v-on:click="sortPrice()">낮은 가격순</button>
    <!-- <button type="button" class="btn" v-on:click="sortPrice($event)">낮은 가격순</button> -->
    <button type="button" class="btn" v-on:click="sortPriceReverse()">높은 가격순</button>
    <!-- <button type="button" class="btn" v-on:click="sortName()">이름순</button> -->
  </div>
  <ul class="list_cards">
    <CardItem 
      :item = "datas[i]"
      :key  = "item" 
      :data = "datas"
      :class= "{'sale': datas[i].sale}"
      v-for = "(item, i) in datas" 
      @openLayer = "modalState = true; selectedId = $event"
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
      like : [0, 0, 0],
      modalState : false,
      sideState : false,
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
    },
    sortPriceReverse(){
      this.datas.sort(function(a,b){
        return b.price - a.price;
      });
      console.log(this.datas, this.selectedId)
    },
    openSide(){
      
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
// @import "@/assets/scss/popup.scss";
</style>
