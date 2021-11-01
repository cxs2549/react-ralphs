import styled from 'styled-components'
const StyledUnderlay = styled.div`
        position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.65);
		pointer-events: none;
		z-index: 10;
		opacity: ${(props) => (props.open ? 1 : 0)};
        transition: opacity 0.3s ease-in-out;
`
const Underlay = ({open}) => {
	return <StyledUnderlay open={open} />
}
export default Underlay
