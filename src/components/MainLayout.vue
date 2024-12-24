<template>
   <div>
    <div class="layout">
        <header>
      <div class="header"><h1>Header</h1></div>
      <nav class="nav-bar">
        <router-link :to="{ path: '/page/1/section1' }" class="link" :class="{ active: currentPage === '1' }">Page 1</router-link>
        <router-link :to="{ path: '/page/2/section1' }" class="link" :class="{ active: currentPage === '2' }">Page 2</router-link>
        <router-link :to="{ path: '/page/3/section1' }" class="link" :class="{ active: currentPage === '3' }">Page 3</router-link>
      </nav>
    </header>
    <div class="section">
        <div class="main-content">
            <h2>Menu</h2>
            <p v-for="section in sections" :key="section.label" class="label">
              <router-link :to="`/page/${currentPage}/${section.label}`" class="link" :class="{ active: currentSection === section.label }">
                {{ section.name }}
              </router-link>
            </p>
        </div>
        <section class="content-area">
            <router-view />
        </section>
    </div>
      <footer>
        Footer
      </footer>
    </div>
   </div>
  </template>
  
  <script>
  export default {
    name: "MainLayout",
    data() {
      return {
        sections: [
          { label: "section1", name: "Section 1" },
          { label: "section2", name: "Section 2" },
          { label: "section3", name: "Section 3" },
          { label: "section4", name: "Section 4" },
        ],
      };
    },
    computed: {
      currentPage() {
        return this.$route.params.id;
      },
      currentSection() {
        return this.$route.params.sectionLabel;
      },
    },
  };
  </script>
  
  <style scoped>
  h2{
    color: black;
    margin-left: 20px;
  }
  .layout {
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 700px;
  }
  header {
  background: #f4f4f4;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
  .label{
    margin-right: 10px;
  }
  .link {
   
    margin: 0 10px;
    text-decoration: none;
    color: black;
  }
  .header{
    color: black;
  }
  .list{
    list-style-type: none;
    font-size: 20px;
    font-weight: bold;
  }

  .active {
    color: red;
    font-weight: bold;
  }
  .main-content {
    display: flex;
    flex-direction: column;
    align-items: start;
    flex: 1;
    gap: 20px;
    font-size: 20px;
    font-weight: bold;
    background-color: #e0e0e0;
    height: 400px;

  }
  .content-area {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    padding: 20px;
  }
  footer {
    background: #f4f4f4;
    text-align: center;
    padding: 10px;
    color: black;
  }
  .nav-bar{
    display: flex;
    flex-direction: row;
  }
  .section{
    display: grid;
    grid-template-columns: 200px 1fr;


  }
  </style>