import React from 'react'
import {Link} from 'react-router-dom'
import { Selector } from '../Components/Styled'
import TokenService from '../services/tokenService'

function AppSelect (props){
    const handleLogout = () => {
        TokenService.clearAuthToken();
        props.setUserId(null);
    };

    return(
        <Selector>

                <div className='articles'>
                    <article>
                        <Link to='/Inventory'>
                        <button className='prod'>Production</button>
                        </Link>
                    </article>

                    <article>
                        <Link to='/Calculate'>
                        <button className='calc'>Calculator</button>
                        </Link>
                    </article>
                </div>

                <div>
                    <button className='logout' onClick={handleLogout}>Logout</button>
                </div>

                <div className='powered'>
                    <span id='ledjj'>Powered by L.E.D.J.J. &copy;</span>     
                </div>

        </Selector>
    )
}

export default AppSelect