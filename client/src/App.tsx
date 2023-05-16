import React, {Suspense} from 'react'
import Router from "./components/Router/Router";
import store from "./store/store";
import {Provider} from "react-redux";


function App() {
  return (
      <Suspense fallback={<h1>Loading</h1>}>
        <Provider store={store} >
          <Router/>
        </Provider>
      </Suspense>
  );
}

export default App;
