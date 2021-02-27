import { defineConfig } from 'umi';

export default defineConfig({
  layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { exact: true, path: '/', redirect: '/main' },
    { path: '/main', name: 'main', icon: 'HomeOutlined', component: '@/pages/index' },
    { path: '/dva', icon: 'Html5Outlined', name: 'dva', microApp: 'dva' },
    { path: '/umi', icon: 'GithubOutlined', name: 'umi', microApp: 'umi' },
    { path: '/vue3', microApp: 'vue3' },
    { path: '/vue2', microApp: 'vue2' },
    {
      name: 'vue3', icon: 'FacebookOutlined', routes: [
        {
          path: '/vue3/home', exact: true, name: 'vue3-home',
        },
        {
          path: '/vue3/about', exact: true, name: 'vue3-about',
        },
      ]
    },
    {
      name: 'vue2', icon: 'TwitterOutlined', routes: [
        {
          path: '/vue2/home', exact: true, name: 'vue2-home',
        },
        {
          path: '/vue2/about', exact: true, name: 'vue2-about',
        },
      ]
    },


    // { path: '/', name: 'main', icon: 'HomeOutlined', component: '@/pages/index' },
    // {
    //   name: 'react', icon: 'Html5Outlined',
    //   routes: [
    //     { path: '/dva', name: 'dva', microApp: 'dva' },
    //     { path: '/umi', name: 'umi', microApp: 'umi' },
    //   ]
    // },
    // {
    //   name: 'vue', icon: 'GithubOutlined',
    //   routes: [
    //     { path: '/vue2', name: 'vue2', microApp: 'vue2' },
    //     { path: '/vue3', name: 'vue3', microApp: 'vue3' },
    //   ]
    // }

  ],
  fastRefresh: {},
  devServer: {
    port: 3000,
    host: '0.0.0.0'
  },
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'dva', // 唯一 id
          entry: '//localhost:8000', // html entry
        },
        {
          name: 'umi', // 唯一 id
          entry: '//localhost:8001', // html entry
        },
        {
          name: 'vue2', // 唯一 id
          entry: '//localhost:8002', // html entry
        },
        {
          name: 'vue3', // 唯一 id
          entry: '//localhost:8003', // html entry
        },
      ],
      sandbox: true
    },
  },
});
