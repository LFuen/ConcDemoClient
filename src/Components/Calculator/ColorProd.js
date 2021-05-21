import React, {Component} from 'react'
import {products, colors} from './store'

class ColorProd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'Color1',
            product: 'Product1',
            id: 0
        }
    }

    makeKey  = () => {
        let count = 0
        this.setState({
            id: count++
        })
    }

    prodChange = (event) => {

        this.setState({
            product: event.target.value
        })
        this.props.selector(this.props.num, {color: this.state.color, product: event.target.value})
    }

    colChange = (event) => {

        this.setState({
            color: event.target.value
        })
        this.props.selector(this.props.num, {color: event.target.value, product: this.state.product})
    }
    
    render() {

        return (
            <div className='choose' key={this.state.id}>
                <section>
                    <label htmlFor='color'>Color</label>
                    <select onChange={this.colChange} type='text' id='color' required>
                        {Object.keys(colors).map(col => (
                            <option value={col} key={col}>{col}</option>
                        ))}
                    </select>
                </section>

                <section>
                <label htmlFor='product'>Product </label>
                    <select onChange={this.prodChange} id='product' required>
                        {products.map(prod => (
                            <option value={prod.name} key={prod.name}>{prod.name}</option>
                        ))}
                    </select>
                </section>
            </div>
        )
    }
}


export default ColorProd