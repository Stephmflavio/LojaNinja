import React from 'react'
import { HeaderContainer } from './styled'

const Header = (props) => {
    return(
        <HeaderContainer>
            <h2>Ninja</h2>
            <div>
                <button onClick={() => props.changePage("home")}>Home</button>
                <button onClick={() => props.changePage("cart")}>Carrinho</button>
            </div>
        </HeaderContainer>
            
    )
}

export default Header