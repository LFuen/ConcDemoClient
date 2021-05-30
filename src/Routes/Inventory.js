import React, {Component} from 'react'
import back from '../images/back.png'
import {InventorySect, 
        InProdLink, 
        Stock,
        Produced} from '../Components/Styled'
import TokenService from '../services/tokenService'
import OrderService from '../services/orderService'
import {Link} from 'react-router-dom'

class Inventory extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            inProd: 0,
            produced: 0,
            stock: 0,
        }
    }

    handleLogout = () => {
        TokenService.clearAuthToken();
        this.props.setUserId(null)
    } 

    getAllProds = () => {
        let inProd = 0
        let produced = 0
        let stock = 0
        OrderService.getOrders().then(orders => {
            
            for(let order of orders){
                if(order.phase === 'In Production' && order.amount > 0) {
                    inProd += order.amount
                } else if (order.phase === 'Produced' && order.amount > 0) {
                    produced += order.amount
                } else if (order.phase === 'In Stock' && order.amount > 0) {
                    stock += order.amount
                }
            }

            this.setState({
                inProd,
                produced,
                stock
            })
        })
    }

    componentDidMount() {
        this.getAllProds()
    }

    render(){
        return(
            <InventorySect>
                <div className='logStatus'>
                    <button className='logout' onClick={this.handleLogout}>Logout</button>
                </div>
                <div id='backH1'>
                    <Link to='/AppSelect' id='back'>
                        <img src={back} alt='Back' />
                    </Link>
                    <h1>PRODUCTION</h1>
                </div>
                <br/>
                <div className='inventory'>
                    <article className='inProd'>
                        <InProdLink to="/Inventory/In%20Production">
                            <span>In Production</span>
                        </InProdLink>
                        <h2>{this.state.inProd}</h2>                 {/*IN PRODUCTION */}
                    </article>

                    <article className='produced'>
                        <Produced to="/Inventory/Produced">
                            <span>Produced</span>
                        </Produced>
                        <h2>{this.state.produced}</h2>                 {/*PRODUCED */}
                    </article>

                    <article className='stock'>
                        <Stock to="/Inventory/In%20Stock">
                            <span>In Stock</span>
                        </Stock>
                        <h2>{this.state.stock}</h2>                 {/*IN STOCK */}
                    </article>
                </div>

                <div className='add'>
                    <Link to={`/AddProd/0`}>
                        <button id='new'>New</button>
                    </Link>
                </div>

                <div className='powered'>
                    <span id='ledjj'>Powered by L.E.D.J.J. &copy;</span>     
                </div>
            </InventorySect>
        )
    }
}

export default Inventory