import { createApp } from 'vue'
import App from './App.vue'
import HelloRunoob from './components/HelloRunoob.vue'

const app = createApp(App)
app.component('HelloRunoob',HelloRunoob)
// createApp(App).mount('#app')
app.mount('#app')
