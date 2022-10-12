
function Func() {
	return <p>hello there</p>;
}

const root = ReactDOM.createRoot(document.getElementById('root-element-id'));
root.render(<Func/>);