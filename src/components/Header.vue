<template>
  <header class="header">
    <div class="nav_header">
      <a href="#none" class="logo_main">
        <h1 class="offscreen">방방</h1>
      </a>
      <a href="#none" class="btn_gift"><span class="offscreen">선물함</span></a>
      <button type="button" class="btn_menu" v-on:click="$emit('openSnb')"  :aria-haspopup="sideState" :aria-expanded="sideState" aria-controls='gnb'><span class="offscreen">마이페이지 메뉴</span></button>
    </div>
    <nav class="gnb">
      <h2 class="offscreen">방방 메인 메뉴</h2>
      <a href="#none" v-for="(item, i) in gnb" :key="i">{{item}}</a>
    </nav>
    <div class="wrap_snb" v-if="sideState">
      <div class="profile">
        <span class="thumb">
          <img src="@/assets/img/profile.jpg" alt="" />
        </span>
        <span class="info">
          <strong class="txt_name">이혜빈</strong>
          <span class="txt_email">inarainbow@naver.com</span>
        </span>
      </div>
      <h2 class="offscreen">개인메뉴</h2>
      <ul class="snb">
        <li><a href="#none">나의 활동</a></li>
        <li><a href="#none">개인정보 수정</a></li>
        <li><a href="#none">개인정보 이용내역</a></li>
        <li><a href="#none">설정</a></li>
      </ul>
      <span class="wrap_copy">
        <span class="copy">@bangbang</span>
      </span>
      <button class="btn_close" v-on:click="$emit('closeSnb')"><span class="offscreen">개인메뉴 닫기</span></button>
    </div>
    <div class="dimmed" v-if="sideState" v-on:click="$emit('closeSnb')"></div>
  </header>
</template>
  
<script>
export default {
  name: 'Header',
  data(){
    return{
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