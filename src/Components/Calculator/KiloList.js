import React, {Component} from 'react'
import { Products, ProdUl, KiloSect } from '../Styled'
import {kiloMake, pigmentKilo } from './store'


class KiloList extends Component {

    totalProduct = (totalMix, totalPig, kilos) => {
        let kMake = kiloMake(kilos)
        for (let i = 0; i < kMake.length; i++){
            totalMix[i] += kMake[i]
        }
        // console.log(kMake)
            return  <ProdUl>
                        <div className='total'>
                            <section className='totalMix'>
                                    <ol className='olMix'>Mix:
                                        {totalMix.map(mix => {
                                            return <li>{mix}</li> 
                                        })}
                                    </ol>
                                </section>
                                <section className='pigment'>
                                {<p>{totalPig[0]}g</p>}
                                <br/>
                                {<p>{totalPig[1]}g</p>}
                                <br/>
                                {<p>{totalPig[2]}g</p>}
                            </section>
                        </div>
                    </ProdUl>
    }

    render() {
        let totalMix = [0,0,0,0,0,0,0,0,0];
        let totalPig = pigmentKilo(this.props.color, this.props.kilos)

        return(
            <Products>
                <br /> <br />
                <KiloSect>
                    <h2>TOTAL</h2>
                    {this.totalProduct(totalMix, totalPig, this.props.kilos)}
                </KiloSect>
            </Products>
        )
    }

}

export default KiloList