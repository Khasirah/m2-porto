import Head from "next/head"
import Image from "next/image"
import Menu from "../components/Menu"

function Home() {
	return (
		<div className="max-w-[390px]">
			<Head>
				<title>KPP Pratama Jakarta Menteng Dua</title>
				<link rel="shortcut icon" href="/djp_no_text.ico" />
			</Head>
			<div className="flex justify-center items-center h-12 backdrop-blur-xl fixed top-0 w-full z-50 max-w-[390px]">
				<h1 className="font-semibold tracking-wider text-base ">Layanan 071</h1>
			</div>
			<div className="mt-12 min-h-fit flex flex-col items-center w-full">
				<div className="mt-5">
					<Image
						src={"/static/djp_no_text.png"}
						width={120}
						height={120}
						alt={"logo_djp"}
					/>
				</div>
				<div className="flex flex-col items-center">
					<h1 className="mt-4 font-bold text-lg">Selamat Datang</h1>
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
