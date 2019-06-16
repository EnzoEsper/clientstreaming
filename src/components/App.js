import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return(
    <div>Page one!</div>
  );
};

const PageTwo = () => {
  return(
    <div>
      Page two!
      <button>Click Me!</button>
    </div>
  );
};

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" exact component={PageTwo} />
      </BrowserRouter>
    </div>
  );
};

export default App;