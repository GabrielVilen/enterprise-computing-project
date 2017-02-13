function main(params) {
	if(params.docs.length !== 1){
		throw new Error("unexpected result from aggregate document");
	}else {
		params.docs[0].count++;
		return {
			"doc": params.docs[0]
		}
	}
}
