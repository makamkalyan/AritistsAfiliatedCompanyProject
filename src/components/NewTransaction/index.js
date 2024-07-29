import { Component } from "react";
import {Link} from "react-router-dom"
import "./index.css"

class NewTransaction extends Component{
    state={Amount:"",TransactionType:"credit",Description:"",newObjectList:[]}

    addTransactionType=(event)=>{
        this.setState({TransactionType:event.target.value})
    }

    addAmount=(event)=>{
        this.setState({Amount:event.target.value})
    }
    addDescription=(event)=>{
        this.setState({Description:event.target.value})
    }

    submit=(event)=>{
        event.preventDefault()
        const{Amount,TransactionType,Description}=this.state
        const newObject={Amount,TransactionType,Description}
        this.setState(prev=>({Amount:"",TransactionType:"credit",Description:"",newObjectList:[...prev.newObjectList,newObject]}))
    }

    render(){
        const{Amount,TransactionType,Description}=this.state
        console.log(this.state.newObjectList,TransactionType)
        
        return(
            <form className="form" onSubmit={this.submit}>
                <h1>NewTransaction</h1>
                <div className="style">
                    <label htmlFor="select">TransactionType</label>
                    <select className="input_style" id="select" value={TransactionType} onChange={this.addTransactionType}>
                        <option value="credit">CREDIT</option>
                        <option value="debit">DEBIT</option>
                    </select>
                </div>
                <div className="style">
                    <label htmlFor="amount">Amount</label>
                    <input className="input_style" id="amount" value={Amount} type="text" onChange={this.addAmount}/>
                </div>
                <div className="style">
                    <label htmlFor="description">Description</label>
                    <textarea className="input_style" id="description" value={Description} type="text" onChange={this.addDescription}></textarea>
                </div>
                <div className="butonsBg">
                <div>
                    <button className="button" type="submit">Save</button>
                </div>
                <div>
                    <button className="button2"><Link className="linkStyle2" to="/">Cancel</Link></button>
                    
                </div>
                </div>
            </form>
        )
    }

}
export default NewTransaction