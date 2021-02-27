import React from 'react';
import { connect } from 'dva';
import { Route, Switch, Link } from 'dva/router';
import Page1 from '../components/Page1';
import Page2 from '../components/Page2';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <div className={styles.header}>
        <span>I am dva</span>
        <Link style={{margin: '0 5px'}} to="/page1">page1</Link>
        <Link style={{margin: '0 5px'}} to="/page2">page2</Link>
      </div>
      <Switch>
        <Route path="/page1" exact component={Page1} />
        <Route path="/page2" exact component={Page2} />
      </Switch>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
