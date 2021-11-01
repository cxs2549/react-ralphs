import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

const StyledSearch = styled.div.attrs({ className: 'relative w-full' })`
`
const Search = () => {
	return (
		<StyledSearch>
			<input
				type="search"
				placeholder="Search products"
				className="border border-brandDark border-opacity-70 w-full px-5 py-2 rounded-full focus:outline-none"
			/>
			<AiOutlineSearch
				size={26}
				className="absolute top-1/2 transform -translate-y-1/2 right-5"
			/>
		</StyledSearch>
	)
}
export default Search
