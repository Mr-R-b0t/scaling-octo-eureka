<template>
  <router-view />
  <Menu />
  <Friends />
</template>

<script>
import Menu from './components/MenuView.vue'
import Friends from './components/FriendsView.vue'
export default {
  components: {
    Menu,
    Friends
  }
}
</script>
