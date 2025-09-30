import ListGroup from "./components/ListGroup/ListGroup";
function App() {
	return (
		<div>
			<ListGroup
				items={["Paris", "Miami", "Rome", "London", "Tokyo", "Bahamas"]}
				heading="Cities"
				onSelectItem={(item) => console.log(item)}
			/>
		</div>
	);
}

export default App;
