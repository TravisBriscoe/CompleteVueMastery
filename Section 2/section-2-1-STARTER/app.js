const vm = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      middleName: '',
      lastName: 'Doe',
      url: 'http://www.google.ca',
      raw_url: '<a href="http://www.google.ca" target="_blank">Google</a>',
      age: 20,
    };
  },
  computed: {
    combineName() {
      console.log('Fullname computed property was called!');

      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    },
  },
  methods: {
    updateLastName(msg, e) {
      // console.log(msg);

      this.lastName = e.target.value;
    },
    updateMiddleName(e) {
      this.middleName = e.target.value;
    },
  },
  watch: {
    age(newValue, oldValue) {
      setTimeout(() => {
        this.age = 20;
      }, 3000);
    },
  },
}).mount('#app');

// setTimeout(() => {
//   vm.firstName = 'Bob';
// }, 2000);

// Vue.createApp({
//   data() {
//     return {
//       firstName: 'Jane',
//       lastName: 'Doe',
//     };
//   },
// }).mount('#app2');
