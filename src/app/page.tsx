import Link from "next/link";

export default function AboutPage() {
	return (
		<div className="flex flex-col gap-5 justify-center">
			<div className="card bg-primary text-primary-content m-4 min-w-fit">
				<div className="card-body">
					<h2 className="card-title text-3xl sm:text-2xl xl:text-4xl">
						Welcome!
					</h2>
					<p className="font-medium lg:text-1xl text-balance">
						I&apos;m René, a dedicated full-stack developer and sysadmin. <br />
						I enjoy using my skills to build the logic and functionality behind
						web and mobile applications.
						<br /> Troubleshooting front and backend issues and crafting elegant
						solutions is what drives me.
						<br /> I&apos;m highly interested in cloud engineering and am
						currently learning AWS.
					</p>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<div className="card bg-primary m-2 text-primary-content">
					<div className="card-body">
						<div className="card-title">Project 1</div>
						<p className="text-balance">
							Neque porro quisquam est qui dolorem
							<br /> ipsum quia dolor sit amet, consectetur, adipisci velit.
						</p>
						<Link href="#project-1" className="mt-4">
							Read more...
						</Link>
					</div>
				</div>
				<div className="card bg-primary m-2 text-primary-content">
					<div className="card-body">
						<div className="card-title">Project 2</div>
						<p className="text-balance">
							Neque porro quisquam est qui dolorem
							<br /> ipsum quia dolor sit amet, consectetur, adipisci velit.
						</p>
						<Link href="#project-2" className="mt-4">
							Read more...
						</Link>
					</div>
				</div>
				<div className="card bg-primary m-2 text-primary-content">
					<div className="card-body">
						<div className="card-title">Project 3</div>
						<p className="text-balance">
							Neque porro quisquam est qui dolorem
							<br /> ipsum quia dolor sit amet, consectetur, adipisci velit.
						</p>
						<Link href="#project-3" className="mt-4">
							Read more...
						</Link>
					</div>
				</div>
				<div className="card bg-primary m-2 text-primary-content">
					<div className="card-body">
						<div className="card-title">Project 4</div>
						<p className="text-balance">
							Neque porro quisquam est qui dolorem
							<br /> ipsum quia dolor sit amet, consectetur, adipisci velit.
						</p>
						<Link href="#project-4" className="mt-4">
							Read more...
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
