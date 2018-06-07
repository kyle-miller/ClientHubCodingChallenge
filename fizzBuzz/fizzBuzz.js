/**
 * Responds to any HTTP request that can provide a number as the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
 
numberRePattern = /^\d+$/;
 
exports.fizzBuzz = (req, res) => {
	// Example input: 100
	try {
		if (req.body === undefined || req.body.number === undefined || !numberRePattern.test(req.body.number.toString())) {
			res.status(400).send('Post a number greater than 1');
		} else {
			var input = Number(req.body.number);
			var fizzBuzzStr = ((input % 3 ? '' : 'Fizz') + (input % 5 ? '' : 'Buzz')) || input.toString();
			res.status(200).send(fizzBuzzStr);
		}
	} catch (e) {
		console.log(e.stack);
		res.status(500).send('Something went wrong: ' + e.message);
	}
};
