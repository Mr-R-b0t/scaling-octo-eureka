<template>
  <router-view/>
  <Menu/>
</template>

<script>
import Menu from './components/MenuView.vue'
export default {
  components: {
    Menu
  }
}
</script>
