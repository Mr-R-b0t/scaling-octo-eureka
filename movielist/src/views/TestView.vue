<template>
  <router-view />
  <Menu />
  <Friends />
  <div class="container">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import Menu from '../components/MenuView.vue'
import Friends from '../components/FriendsView.vue'
import EventCard from '../components/EventCard.vue'
import MovieDataService from '../services/EventService.js'
export default {
  components: {
    Menu,
    Friends,
    EventCard
  },
  name: 'EventCardList',
  data() {
    return {
      events: null,
      page: 1
    }
  },
  created() {
    MovieDataService.getAll()
      .then((response) => {
        console.log('events:', response.data.results)
        this.events = response.data.results
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
