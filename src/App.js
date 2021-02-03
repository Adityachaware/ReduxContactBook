import react from "react";
import Contacts from "./components/contacts/Contacts";
import Navbar from "./components/elements/Navbar";
import "./styles/App.scss";
import { Provider } from "react-redux";
import Store from "./Store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from './components/contacts/AddContact'
import EditContact from './components/contacts/EditContact'

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <div className="App">
          <Navbar></Navbar>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}></Route>
              <Route exact path="/contacts/add" component={AddContact}></Route>
              <Route exact path ="/contacts/edit/:id" component={EditContact}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
