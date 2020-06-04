<template>
  <section class="container bg-light-gray z-1 relative">
    <header class="sans-serif">
      <div id="headerBackground" class="cover bg-left bg-center-l">
        <div class="bg-black-60 pb5 pb6-m pb7-l">
          <nav class="dt w-100 mw8 center"/>
          <div class="tc-l mt4 mt5-m mt6-l ph3">
            <h1 id="slogan" class="f1 f1-l fw2 white-90 lh-title tc">
              <span id="text-title">
                SAHM To The DOM
                <span class="hot-mic">Stay-At-Home-Mom</span>
              </span>
            </h1>
            <h2 id="subtitle" class="fw3 white-80 mb4 tc">Hacking My Way Into Programming</h2>
          </div>
        </div>
      </div>
    </header>
    <div id="intro" class="center pr4 pl4 pv4 navy relative z-2">
      <div id="circle1" class="circle"/>
      <div id="circle2" class="circle"/>
      <div id="circle3" class="circle"/>
      <div id="circle4" class="circle"/>
      <div id="circle5" class="circle"/>
      <h1 id="greeting" class="center">Hi There!</h1>
      <p class="tj">
        I am a Stay-At-Home-Mom (SAHM) of 2.5 year old twins and a 5 month old baby girl hacking my way into the world of
        web-development one project at a time. Over the past few years, I have been
        growing & fine-tuning my knowledge of various programming languages. I
        have worked on a few projects during that time and would love to work
        with you on a web-development project!
      </p>
    </div>
  </section>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss">
header {
  border-bottom: #001b44 solid 20px;
}
#headerBackground {
  background-image: url(~assets/IMG_1478.jpg);
}
#greeting {
  color: teal;
}
#intro {
  width: 90%;
  @media (min-width: 600px) {
    width: 50%;
  }
}
#slogan {
  font-size: 2rem;
  @media (min-width: 600px) {
    font-size: 4rem;
  }
}
#subtitle {
  font-size: 0.75rem;
  @media (min-width: 600px) {
    font-size: 1.7rem;
  }
}
.circle {
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  background-color: white;
  border: #f1f1f1 solid 2px;
}
#circle1 {
  top: 60%;
  left: -3%;
  height: 35px;
  width: 35px;
  @media (min-width: 600px) {
    top: 60%;
    left: -7%;
    height: 35px;
    width: 35px;
  }
}
#circle2 {
  top: 76%;
  left: 93%;
  height: 40px;
  width: 40px;
}
#circle3 {
  top: 1%;
  left: -5%;
  height: 60px;
  width: 60px;
  @media (min-width: 600px) {
    top: 2%;
    left: 50%;
    height: 50px;
    width: 50px;
  }
}
#circle4 {
  top: 13%;
  left: 77%;
  height: 55px;
  width: 55px;
  @media (min-width: 600px) {
    top: 16%;
    left: 115%;
    height: 60px;
    width: 60px;
  }
}
#circle5 {
  top: 15%;
  left: -38%;
  height: 55px;
  width: 55px;
}
.center {
  text-align: center;
}
#text-title {
  position: relative;
}
.hot-mic {
  position: absolute;
  font-size: 16px;
  bottom: -13px;
  left: 0;
  transform: rotate(-7deg);
}
</style>
