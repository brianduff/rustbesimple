import { createApp } from 'vue'
import Hello from './Hello.vue'

const Main = {
  template: `<Hello />`,
  components: { Hello }
}

const app = createApp(Main)
app.mount("#content")
