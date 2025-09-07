import Link from "next/link";

function VerificationError() {
	return (
		<div className="md:min-h-screen flex relative items-center justify-center">
			<div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md w-full h-full md:w-9/10 max-w-[700px] mx-auto">
				<div className="flex flex-col gap-3 items-center">
					<h3 className="text-2xl font-bold text-red-500">Verification failed</h3>
					<p className="text-gray-600 dark:text-gray-300 text-center mb-4">
						We couldn&apos;t verify your identity. This may be due to an expired session, incorrect
						credentials, or a technical issue.
					</p>
					<p className="text-gray-600 dark:text-gray-300 text-center mb-7">
						Please try signing in again. If the problem persists, contact support for assistance.
					</p>
				</div>
				<Link
					href="/login"
					className=" text-white w-full block bg-primary p-2 rounded-md text-center hover:bg-blue-950"
				>
					Sign In
				</Link>
			</div>
		</div>
	);
}
export default VerificationError;
