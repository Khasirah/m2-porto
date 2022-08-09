import dataMenu from "../data/DataMenu"
import LinkButton from "./LinkButton"

const LinkButtons = () => {
	return dataMenu.map((menu) => {
		return (
			<div
				key={menu.id}
				className="w-full border-b flex justify-center pt-4 pb-4"
			>
				<LinkButton data={menu} />
			</div>
		)
	})
}

function Menu() {
	return (
		<div className="mt-4 w-full flex flex-col items-center">
			<LinkButtons />
		</div>
	)
}

export default Menu
