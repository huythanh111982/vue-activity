<template>
  <div class="activityCreateForm">
    <a
      class="button is-primary is-block is-alt is-large"
      href="#"
      @click="toggleDisplayForm">New Activity</a>
    <div
      v-if="isFromDisplay"
      class="create-form">
      <h2>Create Activity</h2>
      <form>
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input
              v-model="newActivity.title"
              class="input"
              type="text"
              placeholder="Read a Book">
          </div>
        </div>
        <div class="field">
          <label class="label">Notes</label>
          <div class="control">
            <textarea
              v-model="newActivity.notes"
              class="textarea"
              placeholder="Write some notes here" />
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button
              class="button is-link"
              :disabled="!checkisForm"
              @click="createForm">
              Create Activity
            </button>
          </div>
          <div class="control">
            <button
              class="button is-text"
              @click="cancelFrom">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newActivity: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isFromDisplay: false,
    };
  },
  computed: {
    checkisForm(){
      console.log('Calling is form valid !!!')
      return this.newActivity.title && this.newActivity.notes;
    }
  },
  methods: {
    toggleDisplayForm() {
      this.isFromDisplay = !this.isFromDisplay;
    },
    createForm() {
      console.log(this.newActivity);
    },
    cancelFrom() {
      this.isFromDisplay = false;
    },
    // checkisForm(){
    //   console.log('Calling is form valid !!!')
    //   return this.newActivity.title && this.newActivity.notes;
    // }
  },
};
</script>

<style lang="scss" scoped>
</style>
