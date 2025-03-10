<template>
  <div class="about">
    <h1>About Us</h1>
    <p>This is the about page of your Vuetify application.</p>

    <!-- Add a link to the Home page -->
    <v-btn color="secondary" to="/" tag="router-link">
      Back to Home Page
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  text-align: center;
  margin-top: 50px;
}
</style>