import { useParams } from 'react-router';

export default function ShowMsg() {
	const { msg } = useParams();
	const isNumber = !isNaN(+msg);
	const inputType = isNumber ? "number" : "word";

	return (
		<p style={
			{backgroundColor:"red",
			color:"white"}}>
		  {`The ${inputType} is: ${msg}`}
		</p>
	);
}
