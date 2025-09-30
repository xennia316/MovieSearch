import ListGroup from "./components/ListGroup/ListGroup";
function App() {
	return (
		<div>
			<ListGroup
				items={["Paris", "Miami", "Rome", "London", "Tokyo", "Bahamas"]}
				heading="Cities"
			/>
		</div>
	);
}

export default App;
