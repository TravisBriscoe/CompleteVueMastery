let vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
      selectedColor: '',
      size: 150,
    };
  },
  computed: {
    circle_classes() {
      return { purple: this.isPurple };
    },
    circle_changes() {
      return [
        {
          width: this.size + 'px',
          height: this.size + 'px',
          'line-height': this.size + 'px',
        },
        {
          transform: 'rotate(30deg)',
        },
      ];
    },
  },
}).mount('#app');
