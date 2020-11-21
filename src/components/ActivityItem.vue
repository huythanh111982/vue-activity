<template>
  <article class="post">
    <div class="activity-title-wrapper">
      <h4 class="activity-title">{{ activity.title }}</h4>
      <i
        class="fas fa-cog activity-settings"
        @click="isMenuPlayed =!isMenuPlayed" />
    </div>
    <p>{{ capitilize(categories[activity.category].text) }}</p>
    <p>{{ activity.notes }}</p>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <img src="../assets/user.png">
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">Filip Jerga</a> updated {{ activity.createdAt | prettyTime }}
          </p>
        </div>
      </div>
      <div class="media-right">
        <span><span :class="'color-' + activityProgress">{{ activity.progress }} %</span></span>
      <!-- <span><span :style="{'color':activityProgress}">{{ activity.progress }} %</span></span> -->
      </div>
    </div>
    <div
      v-if="isMenuPlayed" 
      class="activity-controll">
      <a class="button is-warning">Edit</a>
      <a
        class="button is-danger"
        @click="deleteActivity">Delete</a>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    activity: {
      type: Object,
      required: true,
    },
    categories: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isMenuPlayed: false 
    }
  },
  computed: {
    activityProgress() {
      const progress = this.activity.progress;
      if (progress <= 0) {
        return 'red'
      } else if (progress <= 50) {
        return 'orange'
      } else {
        return 'green'
      }
    }
  },
  methods: {
    capitilize(word) {
      if (word && typeof word === 'string') {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    },
    deleteActivity(){
      this.$emit('activityDeleted', this.activity)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.color-red {
  color: red;
}

.color-orange {
  color: orange
}

.color-green {
  color: green
}

.activity-title {
  margin-bottom: 5px;
  display: inline-block;
}

.activity-settings {
  float: right;
  font-size: 22px;

}

.activity-settings:hover {
  cursor: pointer;
}

.activity-controll {
  margin: 20px 0 0 0;

}

.activity-controll a {
  margin-right: 5px;
}

.post .title {
  margin-bottom: 5px;
}
</style>
