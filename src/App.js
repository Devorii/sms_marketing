import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts'
import Message from './pages/Message'
import ContactsProvider from './context/ContactsCtxt';
import Signup from './pages/Sign-up';
import Dashboard from './pages/Dashboard';
import SettingsPanel from './components/SettingsPanel/SettingsPanel';
import Iframe from './pages/Iframe';
import Feedback from './pages/Feedback';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <ContactsProvider>
        <Route path="/" exact strict component={Home}></Route>
        <Route path="/contacts" exact strict component={Contacts}></Route>
        <Route path="/feedback" exact strict component={Feedback}></Route>
        <Route path="/messages" exact strict component={Message}></Route>
        <Route path="/sign-up" exact strict component={Signup}></Route>
        <Route path="/dashboard" exact strict component={Dashboard}></Route>
        <Route path="/settings" exact strict component={SettingsPanel}></Route>
        <Route path="/link-to/:hash" exact strict component={Iframe}></Route>
        </ContactsProvider>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
