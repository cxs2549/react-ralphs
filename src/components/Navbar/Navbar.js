import styled from 'styled-components'
import tw from 'twin.macro'

import Burger from './Burger'
import Logo from './Logo'
import Icons from './Icons'
import Search from './Search'

const StyledNavbar = styled.header.attrs({ className: 'border-b' })`
    #container {
        ${tw`max-w-5xl mx-auto flex items-center justify-between h-full px-4 pt-2 pb-3`}
    }
`


const Navbar = () => {
	return (
		<StyledNavbar>
			<div id="container">
                <Burger />
				<Logo />
                <Icons />
			</div>
            <div id="container">
                <Search />
            </div>
		</StyledNavbar>
	)
}
export default Navbar
