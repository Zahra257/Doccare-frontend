
import Dash from './Dashboard/Dash'
import ForgottenPass from './ForgottenPass/ForgottenPass'
import Resetpass from './Resetpass/Resetpass'
import AppRoutes from './Routes/AppRoutes'
import SignIn from './Signin/Signin'
import { Provider } from "react-redux";
import store from './Redux/Store/index';




const App = ()=> {

  return (
   <div>

<Provider store={store}>
  
  <AppRoutes/>

  </Provider>
   
 
 </div>
 )
}

export default App
