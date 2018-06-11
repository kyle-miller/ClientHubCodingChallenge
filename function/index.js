/**
 * Responds to any HTTP request.
 * If a max_range is posted in a JSON body, it will be used to run the fizz buzz algorithm.
 * If no max_range is specified the fizz buzz algorithm will be run with 100 as input.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
 
numberRePattern = /^[-]?\d+$/;
 
exports.fizzBuzz = (req, res) => {
	// Example input: 100
	try {
		var input;

		if (req.body === undefined || req.body.max_range === undefined) {
			input = Number(100);
		} else if (!numberRePattern.test(req.body.max_range.toString())) {
			res.status(400).send("Post a max_range greater that's a number");
			return;
		} else {
			input = Number(req.body.max_range);
		}

		var fizzBuzzStr = '';
		if (input >= 0) {
			for (var i = 0; i <= input; i++) {
				fizzBuzzStr += (((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz')) || i.toString()) + "\n";
			}
		} else {
			for (var i = 0; i >= input; i--) {
				fizzBuzzStr += (((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz')) || i.toString()) + "\n";
			}
		}

		res.status(200).send(fizzBuzzStr);
	} catch (e) {
		console.log(e.stack);
		res.status(500).send('Something went wrong: ' + e.message);
	}
};
