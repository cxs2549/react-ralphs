import styled from 'styled-components'
import { AiOutlineClose, AiOutlineUser } from 'react-icons/ai'

const StyledMenu = styled.div.attrs({ className: 'shadow-xl pt-16 pb-8 px-6 flex flex-col gap-8' })`
        position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 85%;
        overflow-y: scroll;
		background-color: #fff;
		z-index: 10;
		left: ${({ open }) => (open ? 0 : '-100%')};
        transition: all 0.3s ease-in-out;
        pointer-events: ${({ open }) => (open ? 'all' : 'none')};
`

const links1 = [ 'popular', 'digital coupons', 'weekly ad', 'COVID-19 vaccine availibility' ]

const links2 = [
	'departments',
	'favorites for fall',
	'thanksgiving meal prep',
	'meat',
	'bakery',
	'beverages',
	'home',
	'cleaning',
	'baby',
	'floral',
	'candy'
]

const links3 = [ 'savings', 'planning', 'our brands', 'my lists', 'find a store', 'gift cards' ]

const Menu = ({ open, click }) => {
	return (
		<StyledMenu open={open}>
			<div onClick={click} className="absolute top-3 left-4 opacity-75 hover:opacity-90">
				<AiOutlineClose size={40} />
			</div>
			<div className="flex flex-col items-center py-3 gap-2 border-b-2 border-red-500">
				<div className="bg-red-400 hover:bg-red-500 transition-colors duration-300 rounded-full w-16 text-white flex items-center justify-center h-16 shadow">
					<AiOutlineUser size={48} />
				</div>
				<h4 className="font-medium text-lg">Hi! Want to sign in?</h4>
			</div>
			<div className="flex flex-col py-2 gap-4">
				{links1.map((link, index) => (
					<span key={index} className="font-medium text-lg capitalize">
						{link}
					</span>
				))}
			</div>
			<div className="flex flex-col py-2 gap-4">
				{links2.map((link, index) => (
					<span key={index} className="font-medium text-lg capitalize">
						{link}
					</span>
				))}
			</div>
			<div className="flex flex-col py-2 gap-4">
				{links3.map((link, index) => (
					<span key={index} className="font-medium text-lg capitalize">
						{link}
					</span>
				))}
			</div>
		</StyledMenu>
	)
}
export default Menu
