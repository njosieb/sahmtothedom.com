<template>
  <div class="relative z-1 bg-light-gray browser-height">
    <div id="circle1" class="circle" />
    <div id="circle2" class="circle" />
    <div id="circle3" class="circle" />
    <div id="circle4" class="circle" />
    <div id="circle5" class="circle" />
    <div id="circle6" class="circle" />
    <div id="circle7" class="circle" />
    <div id="circle8" class="circle" />
    <div id="circle9" class="circle" />
    <div class="name lh-copy pt3">
      <h1 class="full-name">Nina J. Harris</h1>
      <h3 class="navy normal">ninaharris121@gmail.com</h3>
      <h3 class="navy normal">(314) 973-9570</h3>
    </div>
    <div id="resume-button" class="center">
      <a
        class="f5 grow no-underline br-pill ph3 pv2 mb2 dib white bg-purple"
        href="/nina_harris_resume.pdf"
        target="_blank"
      >Download Full Resume</a>
    </div>
    <div class="main-sections-holder pt4">
      <div>
        <div class="w-50 pt2 center tc z-2 relative">
          <h1 class="grow exp pointer" @click="toggle()" ><a class="grow navy no-underline hover-blue fw3">DEVELOPER EXPERIENCE<br><i :class="!seen ? 'fas fa-chevron-down' : 'fas fa-chevron-up'" class="f4 mt1" /></a></h1>
          
        </div>
        <div>
          <!-- <div class="w-50 pt2 center tc z-2 relative">
          <h1 class="exp" @click="toggle()" ><a class="navy no-underline hover-blue pointer">DEVELOPER EXPERIENCE</a></h1>
        </div> -->
          <div v-show="seen" class="z-2 relative">
            <div class="container">
              <div class="column">
                <h2 class="tr navy company">
                  <a
                    class="no-underline hover-light-purple purple"
                    href="https://www.vatterottfoundation.org"
                    target="_blank"
                  >Vatterott Foundation</a>
                  <p class="normal f4 fw3 lh-copy">2019-2020</p>
                </h2>
              </div>
              <div class="column mb4 mt4 navy job pt1">
                <!-- <h2 class="f4 fw3 lh-copy">
            <strong>Current Side Project</strong>
          </h2>
          <br> -->
                <ul class="f4">
                  <li>
                    Website for the Vatterott Foundation, Grant Application app built in Vue and Firebase for non-profits to request funding online.  
                  </li>
                  <li>
                    Responsible for converting app from AngularJS to Nuxt.js/Firestore.
                  </li>
                  <li>
                    Migrating content from hardcoded HTML to Netlify CMS.
                  </li>
                </ul>
              </div>
            </div>
            <!-- <div class="container">
        <div class="column">
          <h2 class="tr purple company"><a>ROLO</a>
            <p class="navy normal f4 fw3 lh-copy">2018-2020</p>
          </h2>
          
        </div>
        <div class="column mb4 mt4 navy job pt1">
          <!-- <h2 class="f4 fw3 lh-copy">
            <strong>Current Side Project</strong>
          </h2> -->
            <!-- <ul>
            <li>
              React web app that compiles contact information based on
              families to be easily integrated into mailing lists, spread
              sheets etc.
            </li>
          </ul>
        </div>--> 
          </div> 
          <!-- <hr /> -->
          <div v-show="seen" class="container">
            <div class="column">
              <h2 class="tr company">
                <a
                  class="no-underline hover-light-purple purple"
                  href="https://ecocentrixco.netlify.com/"
                  target="_blank"
                >ECOCentrix CO.</a>
                <p class="normal f4 fw3 lh-copy">March - November 2018</p>
              </h2>
            </div>
            <div class="column mb4 mt4 navy job pt1">
              <!-- <h2 class="f4 fw3 lh-copy">
            <strong>Associate Developer</strong>
          </h2>
          <br> -->
              <ul>
                <li>Company brochure & portfolio built with Gatsby & Netlify CMS.</li>
                <li>Enabled site to be mobile-ready with responsive CSS.</li>
                <li>Improved UI design of site fixing legacy flaws.</li>
              </ul>
            </div>
          </div>

          <!-- pjm-contracting -->
          <div v-show="seen" class="container">
            <div class="column tr">
              <h2 class="company">
                <a
                  class="purple no-underline tr hover-light-purple"
                  href="http://pjm-contracting.com/"
                  target="_blank"
                >PJM Contracting LLC.</a>
                <p class="normal f4 fw3 lh-copy">January - April 2018</p>
              </h2>
            </div>
            <div class="column mr6 mb4 mt4 navy job pt1">
              <!-- <h2 class="f4 fw3 lh-copy">
            <strong>Associate Developer</strong>
          </h2>
          <br> -->
              <ul>
                <li>Netlify</li>
                <li>Gatsby</li>
                <li>
                  Added Project Portforlio with picture modal and slideshow
                  effects.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- <hr /> -->
      
    
      <div class="w-50 pt1 navy center tc z-2 relative">
        <h1 class="grow exp pointer" @click="toggle2()"><a class="navy no-underline hover-blue fw3">PROJECTS<br><i :class="!seen2 ? 'fas fa-chevron-down' : 'fas fa-chevron-up'" class="f4 mt1" /></a></h1>
      </div> 
      <div v-show="seen2" class="container">
        <div class="column">  
          <h2 class="tr purple company"><a class="purple no-underline tr hover-light-purple"
                                           href="http://pickingupthebill.com/"
                                           target="_blank">Picking Up The Bill</a>
            <p class="normal f4 fw3 lh-copy navy">April - December 2019</p>
          </h2>
        </div>
        <div class="column mr6 mb4 mt4 navy job">
          <!-- <h2 class="f4 fw3 lh-copy">
              <strong>Director Of Religious Education</strong>
            </h2> -->
          <ul>
            <li>
              Wedding website for friends built in NuxtJS with password protection.
            </li>
            <li>
              Designed UI layout and components with responsive CSS.
            </li>
            <li>Added 'Suggest a Song' form with Firestore backend.</li>
          </ul>
        </div>
      </div>
      <div v-show="seen2" class="container">
        <div class="column">  
          <h2 class="tr purple company"><a class="purple no-underline tr hover-light-purple"
                                           href="http://sahmtothedom.com/"
                                           target="_blank">SAHMtotheDOM.com</a>
            <p class="normal f4 fw3 lh-copy navy">November 2018 - March 2019</p>
          </h2>
        </div>
        <div class="column mr6 mb4 mt4 navy job">
          <!-- <h2 class="f4 fw3 lh-copy">
              <strong>Director Of Religious Education</strong>
            </h2> -->
          <ul>
            <li>
              Resume site built with NuxtJS. "Stay-At-Home-Mom" to the DOM, that's me!
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div >
          <div class="w-50 pt1 navy center tc z-2 relative">
            <h1 class="grow exp pointer" @click="toggle3()"><a class="navy no-underline hover-blue fw3">ADDITIONAL EXPERIENCE<br><i :class="!seen3 ? 'fas fa-chevron-down' : 'fas fa-chevron-up'" class="f4 mt1" /></a></h1>
          </div> 
          <div v-show="seen3" class="container">
            <div class="column">  
              <h2 class="tr purple company"><a>St. Clare of Assisi Parish</a>
                <p class="normal f4 fw3 lh-copy navy">Director of Religious Education</p>
                <p class="normal f4 fw3 lh-copy navy">August - July 2017</p>
              </h2>
            </div>
            <div class="column mr6 mb4 mt4 navy job">
              <!-- <h2 class="f4 fw3 lh-copy">
              <strong>Director Of Religious Education</strong>
            </h2> -->
              <ul>
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
    </div>
    <div class="sub-section-holder flex justify-center justify-around pt5">
        <div class="education">
        <h1 class="grow pointer" @click="eduToggle()"><a class="purple fw3 hover-navy">
          education<br><i :class="!education ? 'fas fa-dot-circle' : 'far fa-dot-circle'" class="mt1 f3"/></a>
        </h1>
        <div v-show="education">
          <p>Loyola University Chicago</p>
        </div>
      </div>
      <div class="skills mb1">
        <h1 class="grow pointer purple fw3" @click="skillsToggle()"><a class="purple fw3 hover-navy">skills<br><i :class="!skills ? 'fas fa-dot-circle' : 'far fa-dot-circle'" class="mt1 f3"/></a></h1>
        <div v-show="skills">
          <p>Frontend Web Dev</p>
          <p>CMS Development</p>
          <p>Facilitation</p>
          <p>UI Design</p>
          <p>Team Leadership</p>
        </div>
      </div>
      <div class="tech-prof">
        <h1 class="grow pointer purple fw3" @click="techToggle()"><a class="purple fw3 hover-navy">tech proficiency<br><i :class="!tech ? 'fas fa-dot-circle' : 'far fa-dot-circle'" class="mt2 f3"/></a></h1>
        <div v-show="tech">
          <p>HTML / CSS / JS</p>
          <p>Vue & React </p>
          <p>Nuxt & Gatsby </p>
          <p>Git & Github</p>
          <p>SCSS & Less CSS</p>
          <p>Firebase & Firestore</p>
          <p>CLI / Terminal</p>
          <p>Vuex & Redux</p>
          <p>GraphyQL</p>
        </div>
      </div>
       <div class="interests">
        <h1 class="grow pointer purple fw3" @click="interestsToggle()"><a class="purple fw3 hover-navy">interests<br><i :class="!interests ? 'fas fa-dot-circle' : 'far fa-dot-circle'" class="mt2 f3"/></a></h1>
        <div v-show="interests">
          <p>Design</p>
          <p>Web Dev</p>
          <p>Painting</p>
          <p>Yoga</p>
          <p>Celebrity memoirs</p>
          <p>Comedians</p>
          <p>Cooking</p>
        </div>
      </div>
      <div class="languages">
        <h1 class="grow pointer purple fw3" @click="langToggle()"><a class="purple fw3 hover-navy">languages<br><i :class="!lang ? 'fas fa-dot-circle' : 'far fa-dot-circle'" class="mt2 f3"/></a></h1>
        <div v-show="lang">
          <p>English</p>
          <p>Spanish</p>
          <p>Italian</p>
        </div>
      </div>
     
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    seen: false,
    seen2: false,
    seen3: false,
    skills: false,
    tech: false,
    lang: false,
      interests: false,
      education: false,
    }
  },
  methods: {
    toggle: function() {
      this.seen = !this.seen
    },
     toggle2: function() {
      this.seen2 = !this.seen2
    },
     toggle3: function() {
      this.seen3 = !this.seen3
    },
    skillsToggle: function() {
      this.skills = !this.skills
    },
    eduToggle: function() {
      this.education = !this.education
    },
    techToggle: function() {
      this.tech = !this.tech
    },
    langToggle: function() {
      this.lang = !this.lang
    },
    interestsToggle: function() {
      this.interests = !this.interests
    }
  }
}
</script>

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
  margin-left: 15%;
  margin-right: 15%;
  line-height: 25px;
  @media (min-width: 600px) {
    display: flex;
    flex-wrap: nowrap;
  }
  /* or inline-flex */
}
// .row {
// }

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
    // padding-left: 4rem;
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
  padding-top: 0px;
  @media (min-width: 600px) {
    // margin-left: 72px;
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
    // margin-left: 80px;
    margin-bottom: 1rem;
    color: teal;
    line-height: 1.25;
  }
}
.full-name {
  line-height: 2px;
}
#resume-button {
  display: flex;
  justify-content: center;
  padding-top: 10px;
  @media (min-width: 600px) {
    // padding-left: 75px;
  }
}
.main-sections-holder {
 margin-top: 3%;
}
.sub-section-holder {
  margin: 5%;
  text-align: center;
}
// .skills {
  
// }
div h1 p {
  color: navy;
}
.browser-height {
  min-height: 100vh;
}
</style>
