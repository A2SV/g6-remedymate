import Link from "next/dist/client/link";

export default function Home() {
	return (
		<div className="">
			<p lang="en-US">Home</p>
			<h1 lang="am">ነገ</h1>
			<Link href="/admin/topics">Go to Topics</Link>
		</div>
	);
}
