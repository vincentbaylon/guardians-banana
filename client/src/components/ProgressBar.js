import Filler from './Filler'

const divStyle = {
	marginTop: '10vh',
	// position: 'relative',
	height: '50px',
	width: '500px',
	borderRadius: '0px',
	border: '1px solid #333',
}

function ProgressBar({ percentage }) {
	return (
		<div style={divStyle}>
			<Filler percentage={percentage} />
		</div>
	)
}

export default ProgressBar
