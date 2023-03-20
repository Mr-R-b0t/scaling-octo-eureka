<template>
  <div class="card">
    <h4>{{ event.name }}</h4>
    <img :src="event.image" />
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      status: this.event.status
    }
  }
}
</script>

<style>
.card {
  width: 100px;
  margin-right: 30px;
}

.card img {
  width: 100px;
  height: 150px;
  border-radius: 10px;
}
</style>
