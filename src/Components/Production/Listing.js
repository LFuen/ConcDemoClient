import React, {Component} from 'react'
import back from '../../images/back.png'
import OrderService from '../../services/orderService'
import {Link} from 'react-router-dom'
import ProdInfo from '../Production/ProdInfo'
import {ListingSec} from '../Styled'


class Listing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phase: decodeURI(this.props.match.params.phase),
            color: decodeURI(this.props.match.params.color),
            orders: [],
            link: ''
        }
    }

    getAllProds = () => {
        OrderService.getOrders().then(orders => {
            this.setState({
                orders: orders.filter(order => {
                    return order.color === this.state.color && order.phase === this.state.phase && order.amount > 0
                })
            })
        })
    }

    goBack = () => {
        
        if(this.state.phase === "In Production"){
            this.setState({
                link: 'Inventory/In%20Production'
            })
        } else if(this.state.phase === "Produced"){
            this.setState({
                link: 'Inventory/Produced'
            })
        } else if(this.state.phase === "In Stock"){
            this.setState({
                link: 'Inventory/In%20Stock'
            })
        }
    }

    componentDidMount() {
        this.getAllProds()
        this.goBack()
    }

    render(){
        
        const prodMap = this.state.orders.map((order, index) => {
            return <ProdInfo key={order.order_id} order={order} prods={this.getAllProds}/>
        })
        return(
            <ListingSec>
                <div id='backH1'>
                    <Link to={`/${this.state.link}`} id='back'>
                        <img src={back} alt='Back'/>
                    </Link>
                    <h1>{this.state.phase}</h1>
                </div>
                <h2 id='color'>{this.state.color}</h2>

                <section className='products'>
                    {this.state.orders.length > 0 && prodMap}
                </section>

                <div className='powered'>
                    <span id='ledjj'>Powered by L.E.D.J.J. &copy;</span>     
                </div>
            </ListingSec>

        )
    }
}

export default Listing