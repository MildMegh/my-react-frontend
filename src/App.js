import logo from './logo.svg';
import './App.css';
import Fetching from './Connectionends/Fetchingdata';
import Register from './Components/RegisterForm';
import SignIn from './Components/SignIn';
import UsersRegistered from './Components/UsersRegistered';

function App() {
  return (
    <>
    <Fetching/>
    <Register/>
    <SignIn/>
    <UsersRegistered/>
    </>
  );
}

export default App;
