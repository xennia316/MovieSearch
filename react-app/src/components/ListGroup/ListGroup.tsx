import { useState } from "react";

interface Props {
	items: string[];
	heading: string;
}

function ListGroup({ items, heading }: Props) {
	const [active, setActive] = useState(0);
	const handleClick = (index: any) => {
		setActive(index);
	};
	return (
		<>
			<h1>{heading}</h1>
			<ul className="list-group">
				{items.map((item, index) => (
					<a
						href="#"
						className={`list-group-item list-group-item-action ${
							index === active && `active`
						}`}
						aria-current="true"
						key={index}
						onClick={() => handleClick(index)}
					>
						{item}
					</a>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
