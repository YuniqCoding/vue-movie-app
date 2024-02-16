<template>
  <Headerr />
  <RouterView />
  <Footerr />
</template>

<script>
import Headerr from '~/components/Header'
import Footerr from '~/components/Footer'

export default {
  components:{
    Headerr,
    Footerr
  }
}
</script>


<style lang="scss">
@import "~/scss/main";
</style>