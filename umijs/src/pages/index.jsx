import styles from './index.less';
import { Route, Switch, Link } from 'umi';
import ProLayout from '@ant-design/pro-layout';

export default function IndexPage(props) {
  return (
    <ProLayout
      {...props}
      // route={[
      //   {
      //     path: '/',
      //     icon: 'AccountBookOutlined',
      //     name: '主页',
      //     component: '@/pages/index',
      //     routes: [
      //       { path: '/page1', name: '路由1', icon: 'AccountBookOutlined', component: '@/pages/page1' },
      //       { path: '/page2', name: '路由2', icon: 'AccountBookOutlined', component: '@/pages/page2' },
      //       { path: '/prisonerlist', name: '在押人员', icon: 'AccountBookOutlined', component: '@/pages/PrisonerList' },
      //     ]
      //   },
      // ]}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          breadcrumbName: '首页',
        },
        ...routers,
      ]}
      settings={{
        navTheme: 'dark',
        // 拂晓蓝
        primaryColor: '#1890ff',
        layout: 'side',
        contentWidth: 'Fluid',
        fixedHeader: false,
        fixSiderbar: true,
        colorWeak: false,
        title: 'zzba管理平台',
        pwa: false,
        iconfontUrl: '',
      }}
      pure={window.__POWERED_BY_QIANKUN__}
    >

      <h1 className={styles.title}>i am umi</h1>
      <Link to="/page1">page1</Link>
      <Link to="/page2">page2</Link>
      <Link to="/prisonerlist">prisonerlist</Link>
      {props.children}
    </ProLayout>
  );
}
