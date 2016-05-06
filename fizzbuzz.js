exports.count = function(begin, end) {

	var output = begin;
	for (var i = begin; i < end; i += 1) {
		output = output + " " + (i + 1);
	}

	//return, e.g. "1 2 3 4 5"
	return output;
};

exports.fizzer = function(num) {
	if(0 === num % 3) {
		return "fizz";
	}
	return num;
};

exports.buzzer = function(num) {
	if(0 === num % 5) {
		return "buzz"
	}
	return num;
};

exports.fizzbuzzer = function(num) {
	if(0 === num % 15) {
		return "fizzbuzz"
	}
	return num;
};

// another way to do it is 
// return 0 === num % 15 ? "FizzBuzz" : num
