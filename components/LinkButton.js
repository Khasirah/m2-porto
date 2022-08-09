import Link from "next/link"

function LinkButton(props) {
	const target = props.data.link.includes("https") ? "_blank" : "_self"
	return (
		<Link href={`${props.data.link}`}>
			<a
				target={target}
				className="bg-sky-500 w-10/12 h-12 text-white font-semibold text-sm rounded-md tracking-wider cursor-pointer flex justify-center items-center"
			>
				{props.data.nama}
			</a>
		</Link>
	)
}

export default LinkButton
