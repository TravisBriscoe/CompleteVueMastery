const vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotatex: 0,
      rotatey: 0,
      rotatez: 0,
    };
  },
  computed: {
    change_style() {
      return {
        transform: `
                    perspective(${this.perspective}px)
                    rotateX(${this.rotatex}deg)
                    rotateY(${this.rotatey}deg)
                    rotateZ(${this.rotatez}deg)
                  `,
      };
    },
  },
  methods: {
    btnReset() {
      this.perspective = 100;
      this.rotatex = this.rotatey = this.rotatez = 0;
    },
    btnCopy() {
      const el = document.createElement('textarea');

      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      el.value = `transform: ${this.change_style.transform}`;

      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    },
  },
}).mount('#app');
