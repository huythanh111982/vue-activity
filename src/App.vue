<template>
  <div id="activityApp">
    <!-- Header Compnent -->
    <NavBar
      :app-name="appName"
      :creator="creator" />
    <!-- End Header Component -->
    <section class="container">
      <div class="columns">
        <div class="column is-3">
          <!-- ActivityCreate Component -->
          <ActivityCreate
            :new-activity="newActivity"
            :categories="categories" />
        <!-- End ActivityCreate Component -->
        </div>
        <div class="column is-9">
          <div class="box content">
            <!-- ActivityItem Component -->
            <ActivityItem
              v-for="activity in activities"
              :key="activity.id"
              :activity="activity" />
            <!-- End ActivityItem Component -->
            <div class="activity-length">Currenly {{ activityLength }} activities </div>
            <div class="activity-movation">{{ activityMovation }}</div>
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
import {
  fetchActivities,
  fetchUser,
  fetchCatigories
} from "@/api";
export default {
  name: "App",
  components: {
    ActivityItem,
    NavBar,
    ActivityCreate,
  },
  data() {
    return {
      creator:"HuyKiara",
      appName:"Activity Planner",
      newActivity: {
        title: "",
        notes: "",
        category:""
      },
      user: {},
      activities: {},
      categories: {},
    };
  },
  computed: {
    activityLength(){
      return Object.keys(this.activities).length;
    },
    activityMovation(){
      if(this.activityLength && this.activityLength < 5){
        return "Nice to see some goals";
      }else if(this.activityLength >= 5){
        return "So many activities! Good jobs"
      }else{
        return "No activities, so sad :)"
      }
    }
  },
  created() {
    this.activities = fetchActivities();
    this.user = fetchUser();
    this.categories = fetchCatigories();
    console.log(this.activities);
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
.activity-length{
  display: inline-block;
}
.activity-movation{
  float:right;
}
</style>
