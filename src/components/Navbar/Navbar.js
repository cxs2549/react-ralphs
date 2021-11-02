import styled from 'styled-components'
import tw from 'twin.macro'

import Burger from './Burger/Burger'
import Logo from './Logo'
import Icons from './Icons'
import Search from './Search'

import {BsChevronDown} from 'react-icons/bs'

const StyledNavbar = styled.header.attrs({ className: 'border-b' })`
    #container {
        ${tw`max-w-5xl mx-auto flex items-center justify-between h-full px-4 pt-2`}
    }
`
const Delivering = () => (
	<div className="whitespace-nowrap flex items-center gap-2 -mt-1">
		<h4 className="font-semibold leading-4 whitespace-nowrap text-sm opacity-80">
			Delivering from
		</h4>
		<div className="flex items-center gap-1">
            <p className="font-bold underline text-sm cursor-pointer">Wiltern</p>
            <BsChevronDown size={12} />
        </div>
	</div>
)

const Navbar = () => {
	return (
		<StyledNavbar>
			<div id="container" className="pb-1">
				<Burger />
				<Logo />
				<Icons />
			</div>
			<div id="container" className="pb-3 gap-3 flex-col">
                <Delivering />
				<Search />
			</div>
		</StyledNavbar>
	)
}
export default Navbar
