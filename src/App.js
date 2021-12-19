import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Routes from './routes';
import { Provider } from "react-redux";
import store from "./reducers/store";

function App() {
  return (
    <Provider store = {store}>
      <Routes />
    </Provider>
  );
}

export default App;