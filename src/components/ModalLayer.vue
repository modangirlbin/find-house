<template>
   <div class="wrap_layer" v-if="modalState">
    <dialog class="layer" aria-modal="true" open="">
      <header class="layer_head">
        <h2 class="tit_layer">{{datas[selectedId].title}}</h2>
      </header>
      <div class="layer_body">
        <div class="img_card">
          <img :src="datas[selectedId].image" class="img">
        </div>
        <div class="info_card">
          <dl class="cont_card">
            <dt class="offscreen">상세스펙</dt>
            <dd>{{datas[selectedId].feature}}</dd>
            <dt class="offscreen">매물특징</dt>
            <dd>{{datas[selectedId].desc}}</dd>
            <dt class="offscreen">가격</dt>
            <dd class="txt_price">{{datas[selectedId].price}}만원{{idx}}</dd>
          </dl>
        </div>
      </div>
      <button type="button" class="btn_close" v-on:click="$emit('closeLayer')">닫기</button>
    </dialog>
  </div> 
</template>

<script>
export default {
  name : 'ModalLayer',
  data(){
    return{
      month : 1
    }
  },
  props : {
    datas : Array,
    selectedId : Number,
    modalState : Boolean,
    idx : Number
  }
}
</script>