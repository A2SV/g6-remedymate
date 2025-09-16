import Link from "next/link";

const Footer = () => {
	return (
		<footer className="">
			<div className="container mx-auto flex flex-col md:flex-row my-10 py-9 px-7 gap-12 justify-between text-primary">
				{/* Brand */}
				<div className="">
					<div className="flex items-center gap-2 mb-2">
						{" "}
						<Link href="/">
							<p className=" bg-[hsl(212,70%,24%)] p-2 text-white font-bold text-2xl rounded-2xl">RM</p>{" "}
						</Link>
						<h1 className="text-3xl text-primary font-bold md:mb-0 dark:text-white">RemedyMate</h1>
					</div>
					<p className="dark:text-white">AI-powered home remedy advisor for safer self-care.</p>
				</div>

				{/* Product */}
				<div className="dark:text-white">
					<h3 className="mb-2 font-bold">Product</h3>
					<p>Features</p>
					<p>About</p>
					<p>Download</p>
				</div>

				{/* Company */}
				<div className="dark:text-white">
					<h3 className="mb-2 font-bold">Company</h3>
					<p>Contact</p>
					<p>Privacy</p>
					<p>Terms</p>
				</div>

				{/* Disclaimer */}
				<div className="dark:text-white">
					<h3 className="mb-2 font-bold">Medical Disclaimer</h3>
					<p className="break-after-auto">
						RemedyMate does not replace professional medical advice, diagnosis, or treatment. If you think
						you may have a medical emergency, call your local emergency number immediately.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
