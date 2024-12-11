<template>
    <div class="content">
      Welcome to Page 3
      <p>---------------------------------------</p>
    <router-view />
    </div>
  </template>
  
  <script>
  export default {
    name: "Page1",
  };
  </script>
  
  <style scoped>
  .content {
    padding: 20px;
    color: black;
  }
  </style>
  