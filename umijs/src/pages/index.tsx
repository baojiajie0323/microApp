import styles from './index.less';
import Page1 from './page1';
import Page2 from './page2';
import { Route, Switch, Link } from 'umi';

export default function IndexPage(props:any) {
  return (
    <div>
      <h1 className={styles.title}>i am umi</h1>
      <Link to="/page1">page1</Link>
      <Link to="/page2">page2</Link>
      {props.children}
    </div>
  );
}
