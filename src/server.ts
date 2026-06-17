import http from "node:http";

http
	.createServer(() => {
		console.log("Knock on the door");
	})
	.listen(3000);
