// @ts-nocheck
import { defineConfig } from 'umi';
export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [
        {
            path: '/',
            icon: 'AccountBookOutlined',
            name: '主页',
            component: '@/pages/index',
            routes: [
                { path: '/', redirect: '/page1' },
                { path: '/page1', name: '路由1', icon: 'AimOutlined', component: '@/pages/page1' },
                { path: '/page2', name: '路由2', icon: 'BugOutlined', component: '@/pages/page2' },
                { path: '/prisonerlist', name: '在押人员', icon: 'AccountBookOutlined', component: '@/pages/PrisonerList' },
            ]
        },
    ],
    fastRefresh: {},
    qiankun: {
        slave: {},
    },
    // layout:{}
    // layout: {
    //     // menuRender: !window.__POWERED_BY_QIANKUN__,
    //     // headerRender: !window.__POWERED_BY_QIANKUN__,
    //     // menuRender: true,
    //     // headerRender: false
    // },
})