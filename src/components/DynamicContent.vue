<template>
    <div class="sections">
      <h1>Welcome to Page {{ id }}</h1>
      <hr />
      <p>This is  {{ sectionLabel }} of Page {{ id }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "DynamicContent",
    props: ["id", "sectionLabel"],
  };
  </script>
  
  <style scoped>
  .sections{
    color: black;
  }
  h1 {
    text-align: center;

  }
  p {
    text-align: center;
  }
  </style>
  