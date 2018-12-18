<template>
  <nav class="flex w-100 border-box pa3 ph5-l bg-navy items-center">
    <nuxt-link
      class="v-mid white link dim w-100 w-25-l tc tl-l mb2 mb0-l flex items-center"
      to="/"
      title="Home"
    >
      <img src="~/assets/DSC_0397.NEF.jpg" class="dib w2 h2 br-100" alt="Site Name">
      <span class="pl2">Nina J. Harris</span>
    </nuxt-link>
    <div id="menuOptions" class="v-mid w-100 w-75-l tc tr-l">
      <nuxt-link class="link dim white f6 f5-l dib mr3 mr4-l" to="/" title="About Me">
        <i class="fas fa-female"/> About Me
      </nuxt-link>
      <nuxt-link class="link dim white f6 f5-l dib mr3 mr4-l" to="resume" title="Nina's Resume">
        <i class="fas fa-file"/> Resume
      </nuxt-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
img {
  object-fit: cover;
}
nav {
  border-bottom: #4c2c92 solid 2px;
}
#menuOptions {
  display: unset;
  @media (min-width: 600px) {
    display: inline-block;
  }
}
</style>