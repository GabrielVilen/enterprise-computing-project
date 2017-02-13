function main(params) {
	var color = params["vote"].toLowerCase();
	return {
		"query":{
			"selector": {
				"_id": color
			}
		}
	};
}
