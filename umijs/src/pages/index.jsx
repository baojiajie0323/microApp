import styles from './index.less';
import React from 'react';
import { Route, Switch, Link } from 'umi';
import ProLayout, { getMenuData } from '@ant-design/pro-layout';
import * as Icon from '@ant-design/icons';

export default function IndexPage(props) {
  console.log('props', props);
  var settings = {
    navTheme: 'dark',
    // 拂晓蓝
    primaryColor: '#ff90ff',
    layout: 'side',
    contentWidth: 'Fluid',
    fixedHeader: false,
    fixSiderbar: true,
    colorWeak: false,
    title: 'umijs',
    pwa: false,
    iconfontUrl: '',
  }
  const menuDataRender = (menuList) =>
    menuList.map((item) => {
      const localItem = {
        ...item,
        children: item.children ? menuDataRender(item.children) : undefined,
      };
      return localItem;
    });
  return (
    <ProLayout
      {...props}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          breadcrumbName: '首页',
        },
        ...routers,
      ]}
      menuDataRender={menuDataRender}
      menuItemRender={(menuItemProps, defaultDom) => {
        console.log(menuItemProps, defaultDom, 'menuItemRender');
        if (menuItemProps.isUrl || !menuItemProps.path) {
          return defaultDom;
        }

        return <Link to={menuItemProps.path}>
          {
            React.createElement(
              Icon[menuItemProps.icon]
            )
          }
          {menuItemProps.name}
        </Link>;
      }}
      {...settings}
      // settings={{ ...settings }}
      pure={window.__POWERED_BY_QIANKUN__}
    >
      {/* <h1 className={styles.title}>i am umi</h1>
      <Link to="/page1">page1</Link>
      <Link to="/page2">page2</Link>
      <Link to="/prisonerlist">prisonerlist</Link> */}
      {props.children}
    </ProLayout>
  );
}
