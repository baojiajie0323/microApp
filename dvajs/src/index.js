import './public-path';
import dva from 'dva';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
// import createHistory from 'history/createBrowserHistory';
import './index.css';

// var createHistory = require("history").createHashHistory

// console.log('createBrowserHistory',createHistory);

// // 1. Initialize
// const app = dva({
//     history: createHistory(),
// });

// // 2. Plugins
// // app.use({});

// // 3. Model
// // app.model(require('./models/example').default);

// // 4. Router
// app.router(require('./router').default);

// // 5. Start
// app.start('#root');
let app;
if (!window.__POWERED_BY_QIANKUN__) {
    app = dva({
        history: createBrowserHistory(),
    });
    app.router(require('./router').default);
    app.start('#root');
}

export async function bootstrap() {
    console.log('[react16] react app bootstraped');
}
export async function mount(props) {
    const { container } = props;
    console.log('[react16] props from main framework', props);
    app = dva({
        history: createBrowserHistory({ basename: window.__POWERED_BY_QIANKUN__ ? '/dva' : '/' }),
    });
    app.router(require('./router').default);
    app.start(container.querySelector('#root'));
}
export async function unmount(props) {
    const { container } = props;
    ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
    app._models.forEach(model => {
        app.unmodel(model.namespace);
    });
}