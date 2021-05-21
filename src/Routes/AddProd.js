import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {products, colors, orderMap, phaseArray} from '../Components/Calculator/store'
import {AddForm} from '../Components/Styled'
import OrderService from '../services/orderService'

class AddProd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'Color1', 
            product: 'Product1',
            orderId: 1 + Number(this.props.match.params.phase), 
            amount: 1,
        }
    }
    phase = phaseArray[Number(this.props.match.params.phase)]
    prodChange = (event) => {
        this.setState({
            product: event.target.value,
            orderId: orderMap[`${this.state.color}, ${event.target.value}, ${this.phase}`]
        })
    }

    colChange = (event) => {
        this.setState({
            color: event.target.value, 
            orderId: orderMap[`${event.target.value}, ${this.state.product}, ${this.phase}`]
        })
    }

    amount = (event) => {
        this.setState({
            amount: Number(event.target.value)
        })
    }

    newProd = (e) => {
        e.preventDefault();
        OrderService.addToOrder(this.state.orderId, {amount: this.state.amount})
        .then(order => {
            window.open(`/Inventory/${encodeURI(this.phase)}`, "_self");
        })
    }



    render() {
        console.log(this.state)
        return(
            <AddForm onSubmit={this.newProd}>
                <h1>New Product</h1>
                <div className='choose'>
                    <section>
                        <label htmlFor='color'>Color</label>
                        <select type='text' id='color' onChange={this.colChange} required>
                        {Object.keys(colors).map(col => (
                                <option value={col} key={col}>{col}</option>
                            ))}
                        </select>
                    </section>

                    <section>
                    <label htmlFor='product'>Product </label>
                        <select id='product' onChange={this.prodChange} required>
                        {products.map(prod => (
                                <option value={prod.name} key={prod.name}>{prod.name}</option>
                            ))}
                        </select>
                    </section>

                    <section>
                    <label htmlFor='amount'>Amount</label>
                        <input id='amount' type='number' onChange={this.amount} min="0" required></input>
                    </section>
                </div>
                <div className='prodSubmit'>
                    <button type='submit'>Create</button>
                </div>
                <div className='delete'>
                    <Link to='/Inventory'>
                        <button id='delete'>Cancel</button>
                    </Link>
                </div>
                <div>
                    <span id='ledjj'>Powered by L.E.D.J.J. &copy;</span>
                </div>
            </AddForm>
        )
    }
}

export default AddProd