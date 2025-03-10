<template>
  <a :href="link" class="custom-link">
    {{ text }}
  </a>
</template>

<script>
export default {
  name: "CustomLink",
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.custom-link {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.2s;
}

.custom-link:hover {
  background-color: #3aa876;
}
</style>
