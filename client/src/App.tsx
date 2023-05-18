import React, {Suspense} from 'react'
import Router from "./components/Router/Router";
import store from "./store/store";
import {Provider} from "react-redux";
import {  Spin } from 'antd';

function App() {
  return (
      <Suspense fallback={<Spin /> } >
        <Provider store={store} >
          <Router/>
        </Provider>
      </Suspense>
  );
}

export default App;
