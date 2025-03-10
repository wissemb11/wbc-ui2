<template>
  <div class="home">
    <h1>Welcome to the Home Page</h1>
    <p>This is the home page of your Vuetify application.</p>

    <!-- Add a link to the About page -->
    <v-btn color="primary" to="/about" tag="router-link">
      Go to About Page
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
</style>