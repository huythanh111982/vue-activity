<template>
  <div id="activityApp">
    <!-- Header Compnent -->
    <NavBar />
    <!-- End Header Component -->
    <section class="container">
      <div class="columns">
        <div class="column is-3">
          <!-- ActivityCreate Component -->
          <ActivityCreate :newActivity="newActivity"></ActivityCreate>
          <!-- End ActivityCreate Component -->
        </div>
        <div class="column is-9">
          <div class="box content">
            <!-- ActivityItem Component -->
            <ActivityItem
              v-for="activity in activities"
              :key="activity.id"
              :activity="activity"
            ></ActivityItem>
            <!-- End ActivityItem Component -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ActivityItem from "./components/ActivityItem.vue";
import NavBar from "@/components/NavBar.vue";
import ActivityCreate from "@/components/ActivityCreate.vue";
export default {
  name: "app",
  components: {
    ActivityItem,
    NavBar,
    ActivityCreate,
  },
  data() {
    return {
      newActivity: {
        title: "",
        notes: "",
      },
      user: {
        name: "Filip Jerga",
        id: "-Aj34jknvncx98812",
      },
      activities: {
        1546968934: {
          id: "1546968934",
          title: "Learn Vue.js",
          notes: "I started today and it was not good.",
          progress: 0,
          category: "1546969049",
          createdAt: 1546969144391,
          updatedAt: 1546969144391,
        },
        1546969212: {
          id: "1546969212",
          title: "Read Witcher Books",
          notes: "These books are super nice",
          progress: 0,
          category: "1546969049",
          createdAt: 1546969144391,
          updatedAt: 1546969144391,
        },
      },
      categories: {
        1546969049: {
          text: "books",
        },
        1546969225: {
          text: "movies",
        },
      },
    };
  },
};
</script>

<style>
#activityApp {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html,
body {
  font-family: "Open Sans", serif;
  background: #f2f6fa;
}
footer {
  background-color: #f2f6fa !important;
}
.example-wrapper {
  margin-left: 30px;
}

.container .columns {
  margin: 3rem 0;
}

.button.is-primary.is-alt {
  background: #00c6ff;
  background: -webkit-linear-gradient(to bottom, #0072ff, #00c6ff);
  background: linear-gradient(to bottom, #0072ff, #00c6ff);
  font-weight: 700;
  font-size: 14px;
  height: 3rem;
  line-height: 2.8;
}
.media-left img {
  border-radius: 50%;
}
.media-content p {
  font-size: 14px;
  line-height: 2.3;
  font-weight: 700;
  color: #8f99a3;
}
article.post {
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e6eaee;
}
article.post:last-child {
  padding-bottom: 0;
  border-bottom: none;
}
.content {
  text-align: left;
}
.create-form {
  padding: 15px;
  border: 1px solid #ddd;
  background-color: #fafafa;
  text-align: left;
}
</style>
