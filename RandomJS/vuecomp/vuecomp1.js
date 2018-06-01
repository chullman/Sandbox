Vue.component('button-counter', {
  // or use data in a hash to make all instances share the same data (like static)
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    //addOne: () => { this.count++ }
    addOne() { this.count++ }
  },
  // double brace to output a variable
  template: '<button v-on:click="addOne">You clicked me {{count}} times</button>'
})

Vue.component('blog-post', {
  // prop is like custom attributes for html element
  props: ['title', 'foo'],
  template: '<h3>{{ title }}</h3>'
})


const app = new Vue({
  // the element with id components-demo that our app will be rendered in
  el: '#components-demo'
})