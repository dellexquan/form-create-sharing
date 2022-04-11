import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import formCreate from '@form-create/ant-design-vue'

const app = createApp(App);

app.use(Antd).use(formCreate).mount('#app');