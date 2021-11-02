import styled from 'styled-components'
import { AiOutlineClose, AiOutlineUser } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const StyledMenu = styled.div.attrs({ className: 'shadow-xl pt-8 flex flex-col xl:hidden' })`
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

const firstLinks = 
	{title: 'popular', links: ['digital coupons',
	'weekly ad',
	'pizza night savings',
	"this week's hottest coupons",
	'COVID-19 vaccine availibility']}

const secondLinks = 
	{title: 'departments', links: [
		['favorites for fall', ['shop all favorites for fall', 'roasts for fall', 'fall kitchen appliances']],
	'thanksgiving meal prep',
	['meat', ['item 1', 'item 2', 'item 3', 'item 4' ]],
	['bakery', ['item 1', 'item 2', 'item 3', 'item 4' ]],
	['beverages', ['item 1', 'item 2', 'item 3', 'item 4' ]],
	['candy', ['item 1', 'item 2', 'item 3', 'item 4' ]],
	['dairy', ['item 1', 'item 2', 'item 3', 'item 4' ]],
	['deli', ['item 1', 'item 2', 'item 3', 'item 4' ]],
	['frozen', ['item 1', 'item 2', 'item 3', 'item 4' ]],
	['grocery', ['item 1', 'item 2', 'item 3', 'item 4' ]],
	['household', ['item 1', 'item 2', 'item 3', 'item 4' ]],
	['international', ['item 1', 'item 2', 'item 3', 'item 4' ]],
	['meat', ['item 1', 'item 2', 'item 3', 'item 4' ]],
	['pantry', ['item 1', 'item 2', 'item 3', 'item 4' ]],
	['produce', ['item 1', 'item 2', 'item 3', 'item 4' ]],
	['seafood', ['item 1', 'item 2', 'item 3', 'item 4' ]],
	['snacks', ['item 1', 'item 2', 'item 3', 'item 4' ]],
	['wine', ['item 1', 'item 2', 'item 3', 'item 4' ]],
	'all departments'
	]}

const thirdLinks = {
	links: [

		['savings'],
		['planning'],
		['our brands'],
		['discover'],
		['pharmacy & health'],
		['payment & services'],
		['diwali meal faves']
	]
}

const fourthLinks = {links: ['purchase history', 'my lists', 'find a store', 'payment cards', 'gift cards'] }

const CloseMenu = ({ click }) => (
	<div onClick={click} className="absolute top-3 left-4 opacity-75 hover:opacity-90">
		<AiOutlineClose size={40} />
	</div>
)
const Welcome = () => (
	<div className="flex flex-col items-center py-3 gap-2 border-b-2 border-red-500">
		<div className="bg-red-400 hover:bg-red-500 transition-colors duration-300 rounded-full w-16 text-white flex items-center justify-center h-16 shadow">
			<AiOutlineUser size={48} />
		</div>
		<h4 className="font-medium hover:underline cursor-pointer">Hi! Want to sign in?</h4>
	</div>
)
const LinkItem = ({link}) => (
	<li className="font-medium text-lg capitalize">
		<a href="/" className="hover:underline opacity-80 hover:opacity-100">
			{link}
		</a>
	</li>
)

const LinkItemExtra = ({link, more}) => {
	const [open, setOpen] = useState(false)
	return (
		<li onClick={() => setOpen(!open)} className="font-medium text-lg capitalize flex flex-col items-center justify-between cursor-pointer w-full">
		<div className="flex w-full items-center justify-between">
			<Link to="/" className="hover:underline opacity-80 hover:opacity-100">
				{link[0]}
			</Link>
			<BsChevronDown size={20} />
		</div>
		{open && (
		<div className=" pl-6 bg-white   w-full z-10">
			<LinkList links={link[1]} />
		</div>
		)}
	</li>
	)
}

const LinkList = ({ links, title }) => (
	<ul className="flex flex-col py-8 gap-4 pr-6">
		{title && <h4 className="uppercase font-semibold">{title}</h4>}
		{links.map((link, index) => (
			<>
				{Array.isArray(link) ? (
					<LinkItemExtra link={link} />
				) : (
					<LinkItem link={link} />
				)}
				
			</>
		))}
	</ul>
)

const Menu = ({ open, click }) => {
	return (
		<StyledMenu open={open}>
			<CloseMenu click={click} />
			<Welcome />
			<div id="lists" className="pl-12">
				<LinkList links={firstLinks.links} title={firstLinks.title} />
				<LinkList links={secondLinks.links} title={secondLinks.title} />
				<LinkList links={thirdLinks.links} />
				<LinkList links={fourthLinks.links} />
			</div>
		</StyledMenu>
	)
}
export default Menu
