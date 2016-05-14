var stek = [];

exports.on = function(event, callback) {
	var state = typeof stek[event];
	if(state == 'undefined') stek[event] = callback;
	else if(state == 'function' && stek[event])
		stek[event] = callback;
};