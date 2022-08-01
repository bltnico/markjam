scene("transition", (_text: string, _onKeyPress: () => void) => {
	add([
		text(_text),
	])
	onKeyPress(_onKeyPress)
})
