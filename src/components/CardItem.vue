<template>
  <li class="card">
    <a href="#none" v-on:click="openLayer()">
      <div class="img_card">
        <img :src="item.image" class="img" :alt="item.title">
      </div>
      <div class="info_card">
        <h3 class="tit_card">{{this.item.title}}</h3>
        <dl class="cont_card">
          <dt class="offscreen">매물특징</dt>
          <dd>{{item.desc}}</dd>
          <dt class="offscreen">가격</dt>
          <dd class="txt_price">{{item.price}}만원</dd>
        </dl>
      </div>
    </a>
  </li>
</template>
<script>
export default { 
  name : 'CardItem',
  props : {
    item : Object,
    data : Array
  },
  methods : {
    openLayer(){
      this.$emit('openLayer', this.data.indexOf(this.item));
      console.log(this.data.indexOf(this.item));
    }
  }
}
</script>