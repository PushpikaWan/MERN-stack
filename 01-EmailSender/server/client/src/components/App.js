
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>;
const landing = () => <h2>Landing page</h2>;
const dashboard = () => <h2> Dashboard </h2>;
const surveys = () => <h2> Surveys </h2>;

const App = () => {
  return(
    <div>
     <BrowserRouter>
      <div>
        <Header />
        <Route path="/" component={landing} exact></Route>
        <Route path="/surveys" component={dashboard}></Route>
        <Route path="/surveys/new" component={surveys}></Route>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;