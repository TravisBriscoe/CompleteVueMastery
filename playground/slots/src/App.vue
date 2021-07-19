<template>
  <div id="app">
    <hello-world #default="{ user, favorites }">
      <p>Hello {{ user.name }}. {{ user.age }}yrs old.
        My favorites are <span  v-for="favorite in favorites" :key="favorite">{{ favorite }} &nbsp;</span>
      </p>
    </hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
