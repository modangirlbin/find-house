<template>
   <div class="layer_backdrop" v-if="modalState" v-on:click="outModal($event)">
    <dialog class="layer" aria-modal="true" open="" @blur="$emit('closeLayer')">
      <article>
        <header class="layer_head">
          <h2 class="tit_layer" ref="title">{{datas[selectedId].title}}</h2>
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
      </article>
      <button type="button" class="btn_close" v-on:click="$emit('closeLayer')">닫기</button>
      <!-- <a href="#" class="pop_loop" v-on:focus="popLoop">포커스이동</a> -->
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
  },
  methods : {
    popLoop : function(){
      this.$refs.title.focus();
   },
   outModal : function(event){
     console.log(event.target);
     if(event.target.classList.contains('wrap_layer')){
       this.$emit('closeLayer');
     }
   }
  }
}
</script>