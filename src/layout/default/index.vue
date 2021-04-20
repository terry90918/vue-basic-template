<template>
  <div>
    <v-header />
    <v-main />
    <v-footer />
  </div>
</template>

<script>
import VFooter from './components/v-footer'
import VHeader from './components/v-header'
import VMain from './components/v-main'

export default {
  name: 'Default',
  components: {
    VFooter,
    VHeader,
    VMain,
  },
}
</script>
