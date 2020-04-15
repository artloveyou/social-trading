<template>
  <v-row>
    <v-col class="col-12 d-flex justify-center">
      <v-btn fab text>
        <iconFacebook/>
      </v-btn>
      <v-btn fab text>
        <iconInstagram/>
      </v-btn>
      <v-btn fab text>
        <iconTwitter/>
      </v-btn>
      <v-btn fab text>
        <iconVK/>
      </v-btn>
      <v-btn fab text>
        <iconLinkedin/>
      </v-btn>
      <v-btn fab text>
        <iconGooglePlus/>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
  import iconFacebook from '~/assets/icons/iconFacebook.vue'
  import iconInstagram from '~/assets/icons/iconInstagram.vue'
  import iconTwitter from '~/assets/icons/iconTwitter.vue'
  import iconVK from '~/assets/icons/iconVK.vue'
  import iconLinkedin from '~/assets/icons/iconLinkedin.vue'
  import iconGooglePlus from '~/assets/icons/iconGooglePlus.vue'

  export default {
    components: {
      iconFacebook, iconInstagram, iconTwitter, iconVK, iconLinkedin, iconGooglePlus
    }
  }
</script>
