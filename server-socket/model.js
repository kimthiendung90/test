user: {
	id: 1,
	name: "kimthiendung"
}

room: {
	id: 1,
	name: "room1",
	type: 0, //0 public room, 1 private (1vs1), 2 multi user in room
	allow: ['*'], //0 => ['*'], 1 => ['me', 'friend'], 2 => ['me', friend1', 'friend2', ...]
	time: "2017-03-30, 20:00:01"
}

chat: {
	id: 1,
	userId: 1,
	roomId: 1,
	message: "string",
	media: [
		{"image": ""},
		{"video": ""},
		{"iframe": ""}
	],
	time: "2017-03-30, 20:00:01"
}