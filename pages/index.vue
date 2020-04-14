<template>
  <v-layout>
      Index
  </v-layout>
</template>

<script>
  export default {
    created: function() {
      this.$router.replace({ path: '/social-trading' })
    }
  }
</script>
