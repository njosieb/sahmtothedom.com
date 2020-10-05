<template>
  <nav class="flex w-100 border-box pa3 ph5-l bg-navy items-center">
    <nuxt-link
      class="v-mid white link dim w-100 w-25-l tc tl-l mb2 mb0-l flex items-center"
      to="/"
      title="Home"
    >
      <!-- <img src="~/assets/DSC_0397.NEF.jpg" class="dib w2 h2 br-100" alt="Site Name"> -->
      <span class="pl2 serif i f4"><span class="b">S</span>tay-<span class="b">A</span>t-<span class="b">H</span>ome-<span class="b">M</span>om to the <span class="b">DOM</span></span>
    </nuxt-link>
    <div id="not-small">
      <nuxt-link class="link white f5 f5-l dib mr3 mr4-l hover-light-blue" to="/" title="About Me">
        <i class="fas fa-female"/> About Me
      </nuxt-link>
      <nuxt-link class="link white f5 f5-l dib mr3 mr4-l hover-light-blue" to="resume" title="Nina's Resume">
        <i class="fas fa-file"/> Resume
      </nuxt-link>
      <nuxt-link class="link white f5 f5-l dib mr3 mr4-l hover-light-blue" to="njhcreates" title="NJH Creates">
        <i class="fas fa-magic"/> NJH Creates
      </nuxt-link>
    </div>
    <div id="mobile-menu">
      <div class="dropdown">
        <button class="dropbtn bg-navy">
          <i class="fas fa-bars"/>
        </button>
        <div class="dropdown-content">
          <nuxt-link class="link white f5 nowrap dib hover-light-blue" to="/" title="About Me">
            <i class="fas fa-female"/> About Me
          </nuxt-link>
          <nuxt-link class="link white f5 nowrap dib hover-light-blue" to="resume" title="Nina's Resume">
            <i class="fas fa-file"/> Resume
          </nuxt-link>
          <nuxt-link class="link white f5 f5-l dib mr3 mr4-l hover-light-blue" to="njhcreates" title="NJH Creates">
            <i class="fas fa-magic"/> NJH Creates
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
img {
  object-fit: cover;
}
nav {
  border-bottom: #4c2c92 solid 2px;
  float: right;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
#not-small {
  display: none;
  @media (min-width: 600px) {
    display: inline;
  }
}
#mobile-menu {
  display: inline;
  @media (min-width: 600px) {
    display: none;
  }
}
ul {
  list-style: none;
}
/* Dropdown Button */
.dropbtn {
  color: teal;
  padding: 16px;
  font-size: 28px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  background-color: #f1f1f1;
  min-width: 90px;
  min-height: 30px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: teal;
  padding: 12px 16px;
  text-decoration: bold;
  display: block;
  z-index: 2;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #4c2c92;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: white;
}
</style>