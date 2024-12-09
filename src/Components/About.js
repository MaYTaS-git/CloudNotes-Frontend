import React from "react";

export default function About() {
	return (
		<>
			<div className="container my-4">
				<h1>About Us</h1>
				<p>
					Here you will find all the information regarding CloudNotes,
					we have to offer.
				</p>
			</div>
			<div
				className="accordion accordion-flush container"
				id="accordionFlushExample"
			>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseOne"
							aria-expanded="false"
							aria-controls="flush-collapseOne"
						>
							Information
						</button>
					</h2>
					<div
						id="flush-collapseOne"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Fugit officia qui quas repudiandae incidunt
							consequatur eum praesentium. Voluptatem ad neque
							tempora corporis, sed dolorum mollitia esse illo
							obcaecati velit assumenda?
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseTwo"
							aria-expanded="false"
							aria-controls="flush-collapseTwo"
						>
							Usage
						</button>
					</h2>
					<div
						id="flush-collapseTwo"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Nam eveniet nemo cum, sit earum laudantium
							repudiandae consequatur cumque laborum quae, quas
							fuga deleniti totam fugiat perspiciatis blanditiis
							minima eaque cupiditate.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseThree"
							aria-expanded="false"
							aria-controls="flush-collapseThree"
						>
							Creator
						</button>
					</h2>
					<div
						id="flush-collapseThree"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Unde fugiat delectus voluptates ullam facilis.
							Dolorum nam nemo iure. Quo repudiandae aut vel
							obcaecati vero maxime. Voluptates magni accusamus
							enim aliquam.
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#flush-collapseFour"
							aria-expanded="false"
							aria-controls="flush-collapseFour"
						>
							Terms & Conditions
						</button>
					</h2>
					<div
						id="flush-collapseFour"
						className="accordion-collapse collapse"
						data-bs-parent="#accordionFlushExample"
					>
						<div className="accordion-body">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Sunt perspiciatis voluptates blanditiis, nam
							magni accusantium adipisci consectetur doloribus
							similique sit! Praesentium aliquid expedita rem
							itaque sapiente voluptas tempore? Dolores,
							asperiores.
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
