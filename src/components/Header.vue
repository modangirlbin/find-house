<template>
  <header class="header">
    <div class="nav_header">
      <h1 class="logo_main">
        <a href="#none" class="link_home">
          <span class="offscreen">방방 홈</span>      
        </a>
      </h1>
      <a href="#none" class="btn_gift"><span class="offscreen">선물함</span></a>
      <button type="button" class="btn_menu" v-on:click="$emit('openSnb')"  :aria-haspopup="sideState" :aria-expanded="sideState" aria-controls="wrap_snb"><span class="offscreen">마이페이지 메뉴</span></button>
    </div>
    <nav class="gnb sticky" :aria-hidden="modalState||sideState">
      <h2 class="offscreen">주 메뉴</h2>
      <ul class="list_gnb">
        <li v-for="(item, i) in gnb" :key="i"><a href="#none" class="link_gnb">{{item}}</a></li>
      </ul>
    </nav>
    <div id="wrap_snb" class="wrap_snb" v-if="sideState">
      <div class="area_profile">
        <span class="thumb_profile">
          <img src="@/assets/img/profile.jpg" alt="" />
        </span>
        <span class="info_profile">
          <strong class="txt_name">이혜빈</strong>
          <span class="txt_email">inarainbow@naver.com inarainbow@naver.com</span>
        </span>
      </div>
      <nav class="snb">
        <h2 class="offscreen">개인메뉴</h2>
        <ul class="list_snb">
          <li v-for="(item, i) in snb" :key="i"><a href="#none" class="link_snb">{{item}}</a></li>
        </ul>
      </nav>
      <span class="area_copy">
        <span class="copy">@bangbang</span>
      </span>
      <button class="btn_close" v-on:click="$emit('closeSnb')"><span class="offscreen">개인메뉴 닫기</span></button>
    </div>
    <div class="dimmed" v-if="sideState" v-on:click="$emit('closeSnb')"></div>
  </header>
</template>
  
<script>
export default {
  name: 'HeaderComp',
  data(){
    return{
      snb : ['나의 활동', '개인정보 수정', '개인정보 이용내역', '설정'],
      gnb : ['home', 'shop', 'about'],
    }
  },
  props : {
    sideState : Boolean
  },
  methods : {
    increase(){
      this.like ++;
    }
  },
  components: {
  }
}
</script>