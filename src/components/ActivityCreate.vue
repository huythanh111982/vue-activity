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
          <label class="label">Category</label>
          <div class="control">
            <select
              v-model="newActivity.category"
              class="select">
              <option
                value=""
                disabled>
                Please select one
              </option>
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id">
                {{ category.text }}
              </option>
            </select>
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
              @click.prevent="createActivity">
              Create Activity
            </button>
          </div>
          <div class="control">
            <button
              class="button is-text"
              @click.prevent="cancelFrom">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { createActivityAPI } from "@/api";
export default {
  props: {
    categories:{
      type:Object,
      required:true
    }
  },
  data() {
    return {
      isFromDisplay: false,
      newActivity: {
        title: "",
        notes: "",
        category:""
      },
    };
  },
  computed: {
    checkisForm(){
      return this.newActivity.title && this.newActivity.notes;
    }
  },
  methods: {
    toggleDisplayForm() {
      this.isFromDisplay = !this.isFromDisplay;
    },
    createActivity() {
      createActivityAPI({...this.newActivity})
      .then(activity => {
        this.resetForm();
        this.isFromDisplay = false;
        this.$emit('createActivity', {...activity});
      });
      
    },
    cancelFrom() {
      this.isFromDisplay = false;
    },
    resetForm(){
      this.newActivity.title = "";
      this.newActivity.category = "";
      this.newActivity.notes = "";
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
