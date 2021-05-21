import React, {Component} from 'react'
import back from '../../images/back.png'
import {Link} from 'react-router-dom'
import OrderService from '../../services/orderService'
import {InventorySec} from '../Styled'
import { colors } from '../Calculator/store'
import ProdInfoColor from './ProdInfoColor'


class InventoryPhase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    getAllProds = () => {
        OrderService.getOrders().then(orders => {
            this.setState({
                orders: orders.filter(order => {
                    return order.phase === decodeURI(this.props.match.params.phase) && order.amount > 0
                })
            })
        })
    }

    componentDidMount() {
        this.getAllProds()
    }

    phaseMap = {
        'In Production': 0, 
        Produced: 1, 
        'In Stock': 2

    }

    render(){
        // console.log(this.props.match.params)
        const colorMap = Object.keys(colors).map((color, index) => {
            return <ProdInfoColor key={index} color={color} phase={decodeURI(this.props.match.params.phase)} orders={this.state.orders} />
        })
        return(
            <InventorySec>
                <div id='backH1'>
                    <Link to='/Inventory' id='back'>
                        <img src={back} alt='Back'/>
                    </Link>
                    <h1>{decodeURI(this.props.match.params.phase).toUpperCase()}</h1>
                </div>
                <section className='products'>
                     {colorMap} {/*This is where we inject the product info */}
                </section>
                <br/>
                <div className='add'>
                    <Link to={`/AddProd/${this.phaseMap[this.props.match.params.phase]}`}>
                        <button id='new'>New</button>
                    </Link>
                </div>
                <div className='powered'>
                    <span id='ledjj'>Powered by L.E.D.J.J. &copy;</span>     
                </div>
            </InventorySec>
        )
    }
}

export default InventoryPhase