import Image from "next/image"
import HeadLayout from "../components/HeadLayout"
import Menu from "../components/Menu"

function Home() {
	return (
		<div className="max-w-[390px]">
			<HeadLayout />
			<div className="flex justify-center items-center h-12 backdrop-blur-xl fixed top-0 w-full z-50 max-w-[390px]">
				<h1 className="text-base font-semibold tracking-wider ">Layanan 071</h1>
				<div className="h-8 w-8 rounded-lg bg-slate-200 absolute right-3 cursor-pointer"></div>
			</div>
			<div className="flex flex-col items-center w-full mt-12 min-h-fit">
				<div className="mt-5">
					<Image
						src={"/static/djp_no_text.png"}
						width={120}
						height={120}
						alt={"logo_djp"}
					/>
				</div>
				<div className="flex flex-col items-center">
					<h1 className="mt-4 text-lg font-bold">Selamat Datang</h1>
					<h3>di Layanan Online</h3>
					<h3>KPP Pratama Jakarta Menteng Dua</h3>
				</div>
				<Menu />
			</div>
			<div className=""></div>
		</div>
	)
}

export default Home
