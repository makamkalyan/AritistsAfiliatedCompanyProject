import {Component} from "react"
import {BrowserRouter,Route,Routes} from "react-router-dom";
import NewTransaction from "./components/NewTransaction";
import TransactionDetailsPage from "./components/TransactonDetailsPage"
import './App.css';

class App extends Component {
/*state={List:[]}

componentDidMount(){
  this.getDetails()
}

getDetails=async()=>{
  this.setState()

}
  
*/
render(){
  return(
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<TransactionDetailsPage/>}/>
      <Route exact path="/Newtransaction" element={<NewTransaction/>}/>
    </Routes>
    </BrowserRouter>
  )
}

}


export default App;
