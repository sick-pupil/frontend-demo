<!-- <script setup> -->
// import HelloWorld from './components/HelloWorld.vue'
<script>
  export default {
      data() {
          return {
              num: 0,
              uname: 'a.b.c.d',
              msg: '<p>aaaaa</p>',
              imgUrl: 'https://i1.hdslb.com/bfs/archive/c201957d5aa4e2cdef4449f4e4018288f4655897.png',
              attrName: '',
              id: 'abc',
              json: {
                prop1: 'aaa',
                prop2: 'bbb'
              },
              message: 'a,b,c,d,e,f,g'
          }
      },
      methods: {
        changeName: function() {
          this.uname = '李四'
        }
      },
      computed: {
        reverseMsg: function() {
          return this.message.split(',').reverse().join(':')
        }
      }
  }
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <div>
    <p>{{ num }}</p>
    <p>{{ uname }}</p>
    <p v-once>{{ uname }}</p>
    <p v-html='msg'></p>
    <button @click="changeName">改变名字</button>
    <br/>
    <img v-bind:src='imgUrl' />
    <p>{{ num+1 }}</p>
    <p>{{ uname.split('.').reverse().join(',') }}</p>
    <p v-bind:[attrName]='id'>aaaaa</p>
    <button @click="attrName = 'prop'"></button>
    <p v-bind='json'>hhhh</p>
    <p>{{ reverseMsg }}</p>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
