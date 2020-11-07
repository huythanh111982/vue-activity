<template>
  <div class="activityCreateForm">
    <a
      @click="toggleDisplayForm"
      class="button is-primary is-block is-alt is-large"
      href="#"
      >New Activity</a
    >
    <div v-if="isFromDisplay" class="create-form">
      <h2>Create Activity</h2>
      <form>
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input
              v-model="newActivity.title"
              class="input"
              type="text"
              placeholder="Read a Book"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Notes</label>
          <div class="control">
            <textarea
              v-model="newActivity.notes"
              class="textarea"
              placeholder="Write some notes here"
            ></textarea>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button @click="createForm" class="button is-link">
              Create Activity
            </button>
          </div>
          <div class="control">
            <button @click="cancelFrom" class="button is-text">Cancel</button>
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
  methods: {
    toggleDisplayForm() {
      this.isFromDisplay = !this.isFromDisplay;
    },
    createForm() {
      // eslint-disable-next-line no-console
      console.log(this.newActivity);
    },
    cancelFrom() {
      this.isFromDisplay = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>