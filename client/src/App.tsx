import React, {Suspense} from 'react'
import Router from "./components/Router/Router";
import store from "./store/store";
import {Provider} from "react-redux";
import {Spinner} from "./components/Spinner/Spinner";

function App() {
  return (
      <Suspense fallback={<Spinner /> } >
        <Provider store={store} >
          <Router/>
        </Provider>
      </Suspense>
  );
}

export default App;
