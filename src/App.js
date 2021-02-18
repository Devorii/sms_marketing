import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts'
import Message from './pages/Message'
import SendMessage from './pages/SendMessage';
import ContactsProvider from './context/ContactsCtxt';
import Signup from './pages/Sign-up';
import Dashboard from './pages/Dashboard';
import SettingsPanel from './components/SettingsPanel/SettingsPanel';
import Iframe from './pages/Iframe';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <ContactsProvider>
        <Route path="/" exact strict component={Home}></Route>
        <Route path="/contacts" exact strict component={Contacts}></Route>
        <Route path="/messages" exact strict component={Message}></Route>
        <Route path="/send-message" exact strict component={SendMessage}></Route>
        <Route path="/sign-up" exact strict component={Signup}></Route>
        <Route path="/dashboard" exact strict component={Dashboard}></Route>
        <Route path="/settings" exact strict component={SettingsPanel}></Route>
        <Route path="/iframe" exact strict component={Iframe}></Route>
        </ContactsProvider>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
