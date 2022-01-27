<template>
  <div class="container">
    <SearchForm />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface Head {
  title: string;
}

export default Vue.extend({
  name: "Default",
  head(): Head {
    return {
      title: "Home - MktPlace",
    };
  },
});
</script>