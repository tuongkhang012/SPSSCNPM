<template>
    <body>
    <div id="page-container">
      <div id="content-container">
        <component :is="navbarComponent" />
        <RouterView />
      </div>
      <appFooter id="footer"/>
    </div>
  </body>
</template>

<script setup>
import appNavbarStudent from './components/NavbarStudent.vue'
import appNavbarAdmin from './components/NavbarAdmin.vue'
import appNavbarAnon from './components/NavbarAnon.vue'
import appFooter from './components/Footer.vue'

import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const navbarComponent = computed(() => {
  if (store.state.isStudent) {
    return appNavbarStudent
  } else if (store.state.isAdmin) {
    return appNavbarAdmin
  } else {
    return appNavbarAnon
  }
})

</script>

<style>
html, body {
  margin: 0;
  width: 100%;
  padding: 0;
  min-height: 100%;
}

#page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#content-container {
  flex: 1;
  padding-bottom: 10px; 
}

#footer {
  flex-shrink: 0; 
}
</style>