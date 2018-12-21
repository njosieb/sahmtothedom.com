<template>
  <div class="relative z-1 bg-light-gray">
    <div id="circle1" class="circle"/>
    <div id="circle2" class="circle"/>
    <div id="circle3" class="circle"/>
    <div id="circle4" class="circle"/>
    <div id="circle5" class="circle"/>
    <div id="circle6" class="circle"/>
    <div id="circle7" class="circle"/>
    <div id="circle8" class="circle"/>
    <div id="circle9" class="circle"/>
    <div class="name lh-copy">
      <h1 class="full-name">Nina Harris</h1>
      <h3 class="navy normal">ninaharris121@gmail.com</h3>
      <h3 class="navy normal">(314) 973-9570</h3>
    </div>
    <div class="w-50 pt2 purple center tc z-2 relative">
      <h1 class="exp i">EXPERIENCE</h1>
    </div>
    <div class="z-2 relative">
      <div class="container">
        <div class="column">
          <h2 class="tr navy company">ROLO</h2>
        </div>
        <div class="column mb4 mt4 navy job">
          <h2 class="f4 fw3 lh-copy">
            <strong>Current Side Project</strong>
          </h2>
          <ul>
            <li>
              React web app that compiles contact information based on
              families to be easily integrated into mailing lists, spread
              sheets etc.
            </li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="container">
        <div class="column">
          <h2 class="tr company">
            <a
              class="no-underline hover-purple navy"
              href="https://ecocentrixco.netlify.com/"
              target="_blank"
            >ECOCENTRIX CO.</a>
          </h2>
        </div>
        <div class="column mb4 mt4 navy job">
          <h2 class="f4 fw3 lh-copy">
            <strong>Associate Developer</strong>
          </h2>
          <ul>
            <li>Netlify</li>
            <li>Gatsy</li>
            <li>Revamped Image Messaging</li>
            <li>Improved coherency and theme of site</li>
          </ul>
        </div>
      </div>

      <hr>
      <div class="container">
        <div class="column tr">
          <h2 class="company">
            <a
              class="navy no-underline tr hover-purple"
              href="http://pjm-contracting.com/"
              target="_blank"
            >PJM CONTRACTING LLC.</a>
          </h2>
        </div>
        <div class="column mr6 mb4 mt4 navy job">
          <h2 class="f4 fw3 lh-copy">
            <strong>Associate Developer</strong>
          </h2>
          <ul>
            <li>Netlify</li>
            <li>Gatsy</li>
            <li>
              Added Project Portforlio with picture modal and slideshow
              effects.
            </li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="container">
        <div class="column">
          <h2 class="tr navy company">ST. CLARE OF ASSISI</h2>
        </div>
        <div class="column mr6 mb4 mt4 navy job">
          <h2 class="f4 fw3 lh-copy">
            <strong>Director Of Religious Education</strong>
          </h2>
          <ul>
            <li>August 2011 - July 2017, Ellisville, MO</li>
            <li>
              In charge of parish-wide religious formation programs for
              students & adults.
            </li>
            <li>
              Wore many hats & led multiple programs
              involving faculty, staff, volunteers to educate over 400
              students grades K-8.
            </li>
            <li>Directed organizations for a parish of 2,300 families.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
.container {
  display: flex;
  flex-wrap: wrap;
  margin-left: 25px;
  line-height: 25px;
  @media (min-width: 600px) {
    display: flex;
    flex-wrap: nowrap;
  }
  /* or inline-flex */
}
.row {
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
    padding-left: 4rem;
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

.exp {
  padding-top: 24px;
  @media (min-width: 600px) {
    margin-left: 72px;
    margin-top: 35px;
  }
}
.name {
  margin-left: -2px;
  margin-top: 33px;
  color: teal;
  line-height: 1.25;
  text-align: center;
  @media (min-width: 600px) {
    text-align: center;
    margin-top: 50px;
    margin-left: 80px;
    margin-bottom: 1rem;
    color: teal;
    line-height: 1.25;
  }
}
.full-name {
  line-height: 2px;
}
</style>

