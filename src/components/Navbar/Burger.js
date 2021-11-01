import { useState, useRef } from 'react'
import styled from 'styled-components'
import Hamburger from 'hamburger-react'
import useOnClickOutside from 'use-onclickoutside'
import Underlay from './Underlay'
import Menu from './Menu'

const StyledBurger = styled.div.attrs({ className: '-ml-1' })`
`

const Burger = () => {
	const [ open, setOpen ] = useState(false)
	const menuRef = useRef()
	useOnClickOutside(menuRef, () => setOpen(false))
	return (
		<StyledBurger ref={menuRef}>
			<Hamburger toggle={() => setOpen(!open)} />
			<Underlay open={open} />
			<Menu open={open} click={() => setOpen(false)} />
		</StyledBurger>
	)
}
export default Burger
