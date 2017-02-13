function main(params) {
	return { 
			"query": {
				"selector": {
					"_id": params.id
				}
			}
		};
}
