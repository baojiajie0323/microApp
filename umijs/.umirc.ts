import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes:[
        { path: '/page1', component: '@/pages/page1' },
        { path: '/page2', component: '@/pages/page2' },
      ]
    },
  ],
  fastRefresh: {},
  qiankun: {
    slave: {},
  }
});
