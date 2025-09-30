import { useState } from "react";
function ListGroup() {
	const items = [
		"Tokyo",
		"New York",
		"San Francisco",
		"Miami",
		"Paris",
		"Rome",
		"Bahamas",
		"Cape Town",
	];

	const [active, setActive] = useState(0);
	const handleClick = (index: any) => {
		setActive(index);
	};
	return (
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
	);
}

export default ListGroup;
