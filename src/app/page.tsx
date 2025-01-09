import { CircleCheck } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
	return (
		<>
			<section className="flex items-center justify-center text-balance gap-8 px-4 min-h-screen">
				<div className="card bg-base-200 shadow-xl">
					<div className="card-body">
						<h1 className="card-title text-5xl lg:text-6xl xl:text-7xl tracking-tight my-4">
							Welcome!
						</h1>
						<p className="text-lg lg:text-2xl xl:text-3xl max-w-screen-xl">
							My name is René. I&apos;m a dedicated full-stack developer and
							sysadmin.
							<br />
							I enjoy using my skills to build the logic and functionality
							behind web and mobile applications.
							<br />
							Troubleshooting front and backend issues and crafting elegant
							solutions is what drives me.
							<br />
							I&apos;m highly interested in cloud engineering and am currently
							learning AWS.
						</p>
					</div>
				</div>
			</section>
			<section className="bg-base-200 flex">
				<div className="container py-16 flex flex-col gap-16 px-8 md:px-16">
					<h2 className="text-4xl font-semibold text-center">
						Recent Projects
					</h2>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-16">
						<div>
							<b>
								<u>Project 1</u>
							</b>
							<p className="text-balance">
								Neque porro quisquam est qui dolorem
								<br /> ipsum quia dolor sit amet, consectetur, adipisci velit.
							</p>
							<Link href="#"></Link>
						</div>
						<div>
							<b>
								<u>Project 2</u>
							</b>
							<p className="text-balance">
								Neque porro quisquam est qui dolorem
								<br /> ipsum quia dolor sit amet, consectetur, adipisci velit.
							</p>
							<Link href="#"></Link>
						</div>
						<div>
							<b>
								<u>Project 3</u>
							</b>
							<p className="text-balance">
								Neque porro quisquam est qui dolorem
								<br /> ipsum quia dolor sit amet, consectetur, adipisci velit.
							</p>
							<Link href="#"></Link>
						</div>
						<div className="flex flex-col gap-">
							<b>
								<u>Project 4</u>
							</b>
							<p className="text-balance">
								Neque porro quisquam est qui dolorem
								<br /> ipsum quia dolor sit amet, consectetur, adipisci velit.
							</p>
							<Link href="#">Read more...</Link>
						</div>
						<div>
							<b>
								<u>Project 5</u>
							</b>
							<p className="text-balance">
								Neque porro quisquam est qui dolorem
								<br /> ipsum quia dolor sit amet, consectetur, adipisci velit.
							</p>
							<Link href="#"></Link>
						</div>
						<div>
							<b>
								<u>Project 6</u>
							</b>
							<p className="text-balance">
								Neque porro quisquam est qui dolorem
								<br /> ipsum quia dolor sit amet, consectetur, adipisci velit.
							</p>
							<Link href="#"></Link>
						</div>
					</div>
				</div>
			</section>
			<section id="resume" className="px-8 py-16">
				<h2 className="text-4xl text-center font-semibold mb-8">Resume</h2>
				<div className="flex justify-around">
					<div id="education" className="flex flex-col gap-5">
						<h1 className="font-bold text-2xl text-center">
							<u>Education</u>
						</h1>
						<ul className="timeline timeline-vertical text-primary">
							<li>
								<div className="timeline-end timeline-box bg-primary-content">
									<h2 className="text-sm">February 2021 - Present</h2>
									<h3 className="text-lg">
										<b>Municipality Saerbeck</b> as <b>Sysadmin</b>
									</h3>
								</div>
								<div className="timeline-middle">
									<CircleCheck className="size-6" />
								</div>
								<hr />
							</li>
							<li>
								<hr />
								<div className="timeline-end timeline-box bg-primary-content">
									<h2 className="text-sm">August 2019 - July 2020</h2>
									<h3 className="text-lg">
										<b>High School Diploma</b>
									</h3>
								</div>
								<div className="timeline-middle">
									<CircleCheck className="size-6" />
								</div>
								<hr />
							</li>
							<li>
								<hr />
								<div className="timeline-end timeline-box bg-primary-content">
									<h2 className="text-sm">August 2015 - July 2019</h2>
									<h3 className="text-lg">
										<b>Subject-related entrance qualification</b>
									</h3>
								</div>
								<div className="timeline-middle">
									<CircleCheck className="size-6" />
								</div>
							</li>
						</ul>
					</div>
					<div id="skills" className="flex flex-col gap-5">
						<h1 className="font-bold text-2xl text-center">Skills</h1>
						<ul className="timeline timeline-vertical text-primary">
							<li>
								<div className="timeline-start timeline-box bg-primary-content">
									<h3 className="text-lg">
										<b>JavaScript/TypeScript</b>
									</h3>
								</div>
								<div className="timeline-middle">
									<CircleCheck className="size-6" />
								</div>
								<hr />
							</li>
							<li>
								<hr />
								<div className="timeline-start timeline-box bg-primary-content">
									<h3 className="text-lg">
										<b>NextJS</b>
									</h3>
								</div>
								<div className="timeline-middle">
									<CircleCheck className="size-6" />
								</div>
								<hr />
							</li>
							<li>
								<hr />
								<div className="timeline-start timeline-box bg-primary-content">
									<h3 className="text-lg">
										<b>React</b>
									</h3>
								</div>
								<div className="timeline-middle">
									<CircleCheck className="size-6" />
								</div>
							</li>
							<li>
								<hr />
								<div className="timeline-start timeline-box bg-primary-content">
									<h3 className="text-lg">
										<b>HTML</b>
									</h3>
								</div>
								<div className="timeline-middle">
									<CircleCheck className="size-6" />
								</div>
							</li>
							<li>
								<hr />
								<div className="timeline-start timeline-box bg-primary-content">
									<h3 className="text-lg">
										<b>Tailwind CSS</b>
									</h3>
								</div>
								<div className="timeline-middle">
									<CircleCheck className="size-6" />
								</div>
							</li>
							<li>
								<hr />
								<div className="timeline-start timeline-box bg-primary-content">
									<h3 className="text-lg">
										<b>Git</b>
									</h3>
								</div>
								<div className="timeline-middle">
									<CircleCheck className="size-6" />
								</div>
							</li>
							<li>
								<hr />
								<div className="timeline-start timeline-box bg-primary-content">
									<h3 className="text-lg">
										<b>SQL</b>
									</h3>
								</div>
								<div className="timeline-middle">
									<CircleCheck className="size-6" />
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
