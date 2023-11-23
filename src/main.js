import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'

let app = createApp(App).mount('#app')
app.component(HelloWorld, 'HelloWorld')
