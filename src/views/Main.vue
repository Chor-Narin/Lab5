<template>
    <div>
      <header class="header">
        <nav>
          <router-link to="/page1" class="link">Page 1</router-link>
          <router-link to="/page2" class="link">Page 2</router-link>
          <router-link to="/page3" class="link">Page 3</router-link>
        </nav>
      </header>
      <section class="section">
        <aside class="menu">
          <h2>Menu</h2>
          <ul>
            <li class="section-list"><router-link to="/page1/section1" class="link">Section 1</router-link></li>
            <li class="section-list"><router-link to="/page1/section2" class="link">Section 2</router-link></li>
            <li class="section-list"><router-link to="/page1/section3" class="link">Section 3</router-link></li>
            <li class="section-list"><router-link to="/page1/section4" class="link">Section 4</router-link></li>  
          </ul>
        </aside>
        <router-view />
      </section>
      <Footer />
    </div>
  </template>
  
  <script>
  import Menu from '../components/Menu.vue'
  import Footer from '../components/Footer.vue'
  export default {
    name: "Header",
    components: {
        Menu,
        Footer

    }
  };
  </script>
  
  <style scoped>
  .header {
    background-color: #f4f4f4;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #ccc;
  }
  .link {
    margin-left: 15px;
    text-decoration: none;
    color: black;
  }
  .link.router-link-active {
    color: red;
  }
  .menu {
    background-color: #eaeaea;
    padding: 10px;
    width: 200px;
    border-right: 1px solid #ccc;
    border: 1px solid black;
    color: black;
    font: bold;
    
    
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
  .section{
    display: flex;
    align-items: center;
    gap: 100px;
  }


  </style>
  