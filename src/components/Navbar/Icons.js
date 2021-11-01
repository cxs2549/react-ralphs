import styled from 'styled-components'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'

const StyledIcons = styled.div.attrs({ className: 'flex gap-4'  })`
`
const Icons = () => {
return (
<StyledIcons>
    <AiOutlineUser size={28} />
    <AiOutlineShoppingCart size={28} />
</StyledIcons>
)
}
export default Icons