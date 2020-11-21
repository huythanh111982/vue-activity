<template>
  <article class="post">
    <h4>{{ activity.title | uppercase }}</h4>
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
  computed: {
    activityProgress() {
      const progress = this.activity.progress;
      if(progress <=0){
        return 'red'
      }else if (progress <=50){
        return 'orange'
      }else{
        return 'green'
      }
    }
  },
  methods: {
    capitilize(word) {
      if(word && typeof word === 'string'){
        return word.charAt(0).toUpperCase() + word.slice(1) ;
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.color-red{
  color: red;
}
.color-orange{
  color:orange
}
.color-green{
  color:green
}
</style>
