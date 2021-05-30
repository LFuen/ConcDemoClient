import React, {Component} from 'react'
import back from '../images/back.png'
import ColorProd from '../Components/Calculator/ColorProd'
import {Link} from 'react-router-dom'
import {ButtonDiv, CalcForm, ProdChoose} from '../Components/Styled'
import ProdList from '../Components/Calculator/ProdList'
import TokenService from '../services/tokenService'

class Calculate extends Component {
    constructor(props){
        super(props)
        this.state = {
            component: 1,
            prodList: [{color: 'Color 1', product: 'Product 1'}]
        }
    }

    handleLogout = () => {
        TokenService.clearAuthToken();
        this.props.setUserId(null)
    } 

    addComp = event => {
        event.preventDefault();
        this.setState({
            component: this.state.component + 1,
            prodList: [...this.state.prodList, {color: 'Color 1', product: 'Product 1'}]
        })

    }

    genComp = () => {
        let comps = []
        for(let i = 0; i < this.state.component; i++) {
            comps.push(<ColorProd num={i} selector={this.selectorChange}/>)
        }
        return comps
    }

    selectorChange = (num, prod) => {

        let prodlist = this.state.prodList.map((current, index) => {
            if(num === index){
                return prod
            }
            return current
        })
        this.setState({
            prodList: prodlist
        })
    }

    render() {


        return(
            <CalcForm>
                <div className='logStatus'>
                    <button className='logout' onClick={this.handleLogout}>Logout</button>
                </div>
                <div id='backH1'>
                    <Link to='/AppSelect' id='back'>
                        <img src={back} alt='Back' />
                    </Link>
                    <h1>CALCULATOR</h1>
                </div>
                    <Link to='/KiloCalculate' >
                        <button id='kilo'>Switch to Kilo Calculator</button>
                    </Link>
                
                <ProdChoose key={this.state.component}>{this.genComp()}</ProdChoose>
                <ButtonDiv>
                    <button onClick={this.addComp}>Add</button>
                </ButtonDiv>

            <ProdList prodlist={this.state.prodList} />

                    <span id='ledjj'>Powered by L.E.D.J.J. &copy;</span>

            </CalcForm>
        )
    }
}

export default Calculate