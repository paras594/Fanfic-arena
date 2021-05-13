function truncate(str) {
	if (str.length > 30) {
		return str.slice(0, 60) + "...";
	}
}

export default truncate;
