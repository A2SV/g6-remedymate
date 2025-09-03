import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-primary">
			<div className="container mx-auto flex flex-col md:flex-row py-9 px-7 gap-12 justify-between text-white">
				{/* Brand */}
				<div className="">
					<div className="flex gap-2 items-center pb-2">
						{" "}
						<Link href="/">
							<p className=" bg-[hsl(212,70%,24%)] p-2 font-bold text-2xl rounded-2xl">RM</p>{" "}
						</Link>
						<h1 className="text-3xl font-bold mb-4 md:mb-0">RemedyMate</h1>
					</div>
					<p className="text-sm">AI-powered home remedy advisor for safer self-care.</p>
				</div>

				{/* Product */}
				<div className="">
					<h3 className="mb-2 font-bold">Product</h3>
					<p>Features</p>
					<p>About</p>
					<p>Download</p>
				</div>

				{/* Company */}
				<div className="">
					<h3 className="mb-2 font-bold">Company</h3>
					<p>Contact</p>
					<p>Privacy</p>
					<p>Terms</p>
				</div>

				{/* Disclaimer */}
				<div className="">
					<h3 className="mb-2 font-bold">Medical Disclaimer</h3>
					<p className="text-sm text-white/30 break-after-auto">
						RemedyMate does not replace professional medical advice, diagnosis, or treatment. If you think
						you may have a medical emergency, call your local emergency number immediately.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
