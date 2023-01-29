import { useParams } from 'react-router';

export default function ShowMsgWithColors() {
	const { msg, fgcolor, bgcolor } = useParams();
	const isNumber = !isNaN(+msg);
	const inputType = isNumber ? "number" : "word";

	return (
		<p style={
			{backgroundColor: bgcolor,
			color: fgcolor}}>
		  {`The ${inputType} is: ${msg}`}
		</p>
	);
}
