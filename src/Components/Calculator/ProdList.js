import React, {Component} from 'react'
import { Products, ProdUl, ListSect } from '../Styled'
import { makeMix, pigment, colors } from './store'


class ProdList extends Component {

    newProduct = (totalMix, totalPig) => {
        return this.props.prodlist.map(prod => {
        let pig = pigment(prod.product, prod.color)
        let mix = makeMix(prod.product)
        for (let i = 0; i < mix.length; i++){
            totalMix[i] += mix[i]
        }
        for (let i = 0; i < pig.length; i++){
            totalPig[i] += pig[i]
        }

        return  <ProdUl>
                    <div className='listing'>
                        <section className='colProd'>
                            <p className='pColor'>{prod.color}</p>
                            <br/>
                            <p className='pProduct'>{prod.product}</p>
                        </section>
                        <section className='mix'>
                                <ol className='olMix'>Mix:
                                    <li>{mix[0]}</li>
                                    <li>{mix[1]}</li>
                                    <li>{mix[2]}</li>
                                    <li>{mix[3]}</li>
                                    <li>{mix[4]}</li>
                                    <li>{mix[5]}</li>
                                    <li>{mix[6]}</li>
                                    <li>{mix[7]}</li>
                                    <li>{mix[8]}</li>
                                </ol>
                            </section>
                        <section className='pigment'>
                            {!!pig[0] && <p>{colors[prod.color].pigment1}: {pig[0]}g</p>}
                            <br/>
                            {!!pig[1] && <p>{colors[prod.color].pigment2}: {pig[1]}g</p>}
                            <br/>
                            {!!pig[2] && <p>{colors[prod.color].pigment3}: {pig[2]}g</p>}
                        </section>
                    </div>
                </ProdUl>
        })
    }

    totalProduct = (totalMix, totalPig) => {
            // console.log(totalMix)
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
        let totalMix = [0,0,0,0,0,0,0,0,0]
        let totalPig = [0, 0, 0]
        return(
            <Products>
                <h1>Product List</h1>
                <ListSect>
                    {this.newProduct(totalMix, totalPig)}
                    <h2>TOTAL</h2>
                    {this.totalProduct(totalMix, totalPig)}
                </ListSect>
            </Products>
        )
    }

}

export default ProdList