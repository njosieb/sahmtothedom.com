<template>
  <div class="relative z-1 bg-light-gray browser-height">
    <div class="container">
      <div>
        <h1 class="i center">NJH Creates</h1>
      </div>
      <!-- Eventually put in a v-for for all of the pictures -->
      <div >
        <label class="b">Sign Of Love</label>
        <br>
        <img src="/love.jpeg" alt="Hand-painted love sign" class="image"/>
      </div>
      <div >
        <label class="b">Charlie</label>
        <br>
        <img src="/charlie.jpeg" alt="Charlie" class="image"/>
      </div>
      <div>
        <label class="b">Josephina Please No Leana on the Bell</label>
        <br>
        <img src="/josephina.jpeg" alt="Josephina Please No Leana" class="image"/>
      </div>
      <div >
        <label class="b">Miranda Panda</label>
        <br>
        <img src="/miranda.jpeg" alt="Miranda" class="image"/>
      </div>
      <div >
        <label class="b">Joy To The World</label>
        <br>
        <img src="/joy.jpeg" alt="Joy" class="image"/>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.circle {
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  background-color: white;
  border: #f1f1f1 solid 2px;
}
#circle2 {
  top: 25%;
  left: 18%;
  height: 40px;
  width: 40px;
}
#circle3 {
  top: 2%;
  left: 36%;
  height: 60px;
  width: 60px;
}
#circle4 {
  top: 6%;
  left: 72%;
  height: 90px;
  width: 90px;
}
#circle5 {
  top: 11%;
  left: 4%;
  height: 68px;
  width: 68px;
}
#circle6 {
  top: 59%;
  left: 8%;
  height: 95px;
  width: 95px;
}
#circle7 {
  top: 85%;
  left: 34%;
  height: 55px;
  width: 55px;
}
#circle8 {
  top: 39%;
  left: 82%;
  height: 50px;
  width: 50px;
}
#circle9 {
  top: 84%;
  left: 81%;
  height: 65px;
  width: 65px;
}
a {
  text-decoration: none;
}
hr {
  width: 80%;
  margin: 0 auto;
}
.image {
    height: auto;
    width: auto;
    border: grey solid 2px;
    margin-bottom: 50px;
    /* background-image: url(~assets/images/love.jpeg); */
}
/* .display-box {
    display: flex;

} */
.container {
  /* display: flex; */
  /* flex-wrap: wrap; */
  margin-left: 15%;
  margin-right: 15%;
  line-height: 25px;
  padding-top: 5%;
  justify-content: center;
  @media (min-width: 600px) {
    display: flex;
    flex-wrap: nowrap;
  }
  /* or inline-flex */
}

.column {
  flex: 50%;
  justify-content: relative;
  padding-right: 32px;
}
strong {
  padding-left: 21px;
}
.job {
  padding-left: 0rem;
  margin-right: 2rem;
  @media (min-width: 600px) {
    margin-right: 2rem;
  }
}
.company {
  text-align: center;
  margin-bottom: -0.75rem;
  margin-top: 1.5rem;
  @media (min-width: 600px) {
    text-align: right;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
}
.f4 {
  font-size: 1.13rem;
}
h2 {
  line-height: 1.25;
}
</style>