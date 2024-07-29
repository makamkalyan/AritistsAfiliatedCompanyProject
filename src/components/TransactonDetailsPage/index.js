import {Component} from "react"
import {Link} from "react-router-dom"
import "./index.css"

class TransactionDetailsPage extends Component{
    /*state={List:[]}

    componentDidMount(){
        this.getDetails()
    }
    getDetails=async()=>{
        const response=await fetch()
        const data=await response()
        if (response.ok==true){
            this.setState({List:})
        }
    }*/

    render(){
        return(
            <div>
                <div><h1>Transaction Details</h1></div>
                <Link className="linkStyle" to="/Newtransaction">+AddTransaction</Link>
            </div>
        )
    }

}
export default TransactionDetailsPage