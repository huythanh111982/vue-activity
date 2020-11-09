<template>
  <div>
    <nav class="navbar is-white topNav">
      <div class="container">
        <div class="navbar-brand">
          <h1>{{ fullName }}</h1>
        </div>
      </div>
    </nav>
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-menu">
          <div class="navbar-start">
            <a
              class="navbar-item is-active"
              href="#"
            >Newest</a>
            <a
              class="navbar-item"
              href="#"
            >In Progress</a>
            <a
              class="navbar-item"
              href="#"
            >Finished</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    appName: {
      type: String,
      required:true 
    },
    creator:{
      type:String,
      required:true
    }
  },
  computed: {
    fullName() {
      return this.appName + 'by' + this.creator 
    }
  },
};
</script>

<style lang="css">
.topNav {
  border-top: 5px solid #3498db;
}
.topNav .container {
  border-bottom: 1px solid #e6eaee;
}
.navbar-menu .navbar-item {
  padding: 0 2rem;
}
aside.menu {
  padding-top: 3rem;
}
aside.menu .menu-list {
  line-height: 1.5;
}
aside.menu .menu-label {
  padding-left: 10px;
  font-weight: 700;
}
.menu-list li {
  padding: 5px;
}
.navbar-brand > h1 {
  font-size: 31px;
  padding: 20px;
}
</style>