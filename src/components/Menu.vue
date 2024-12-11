<template>
    <aside class="menu">
      <ul>
        <li><router-link to="/page1/section1" class="link">Section 1</router-link></li>
        <li><router-link to="/page1/section2" class="link">Section 2</router-link></li>
        <li><router-link to="/page1/section3" class="link">Section 3</router-link></li>
        <li><router-link to="/page1/section4" class="link">Section 4</router-link></li>  
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    name: "Menu",
  };
  </script>
  
  <style scoped>
  .menu {
    background-color: #eaeaea;
    padding: 10px;
    width: 200px;
    border-right: 1px solid #ccc;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
    cursor: pointer;
    color: black;
  }
</style>
  