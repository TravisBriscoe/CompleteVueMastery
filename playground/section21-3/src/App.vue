<template>
  <div>
    <p>{{ num }}</p>
    <p>{{ double }}</p>
    <button type="button" @click.prevent="increment">Click Me</button>

    <p>{{ name }}</p>

    <input type="text" v-model="phrase" />
    <p>{{ reversedPhrase }}</p>

    <app-alert :user="user" />

    <button type="button" ref="btn">Button</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs, onBeforeMount, onMounted } from 'vue';
import AppAlert from "@/components/Alert.vue";
import { useNumber } from "@/hooks/number";
import { usePhrase } from '@/hooks/phrase';

export default {
  name: "App",
  components: {
    AppAlert
  },
  setup() {
    const btn = ref(null);

    onBeforeMount(() => {
      console.log('onBeforeMount()')
    })

    onMounted(() => {
      console.log('onMounted()');

      btn.value.addEventListener('click', () => {
        console.log('Button clicked!')
      })
    })

    const user = reactive({
      name: "Travis",
      age: 40,
    });

    setTimeout(() => {
      user.name = "Paul"
    }, 3000);

    
    const { num, increment, double } = useNumber();
    const { phrase, reversedPhrase, num: useNum } = usePhrase();

    return {
      num,
      increment,
      ...toRefs(user),
      phrase,
      reversedPhrase,
      double,
      user,
      btn,
      useNum,
    }
  },
};
</script>
