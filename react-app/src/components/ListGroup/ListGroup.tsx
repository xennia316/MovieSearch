import { useState } from "react";

interface Props {
	items: string[];
	heading: string;
	onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
	const [active, setActive] = useState(0);
	const handleClick = (index: any) => {
		setActive(index);
		onSelectItem(index);
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
