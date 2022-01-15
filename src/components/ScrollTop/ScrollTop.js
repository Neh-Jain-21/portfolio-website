const ScrollTop = () => {
	const handleScroll = () => {
		window.scrollTo(0, 0);
	};

	return (
		<button className="btn btn-primary btn-lg rounded-circle fab" onClick={handleScroll}>
			^
		</button>
	);
};

export default ScrollTop;
