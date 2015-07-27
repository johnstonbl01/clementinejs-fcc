'use strict';

function ClickHandler (db) {
	var clicks = db.collection('clicks');

	this.getClicks = function (req, res) {
		clicks
			.findOne(
				{},
				{ '_id': false },
				function (err, result) {
					if (err) { throw err; }

					var clickResults = [];

					if (result) {
						clickResults.push(result);
						res.json(clickResults);
					} else {
						clicks.insert({ 'clicks': 0 }, function (err) {
							if (err) { throw err; }

							clicks.findOne({}, {'_id': false}, function (err, doc) {
								if (err) { throw err; }

								clickResults.push(doc);
								res.json(clickResults);
							});

						});

					}
				}
			);
	};

	this.addClick = function (req, res) {
		clicks
			.findAndModify(
				{},
				{ '_id': 1 },
				{ $inc: { 'clicks': 1 } },
				function (err, result) {
					if (err) { throw err; }

					res.json(result);
				}
			);
	};

	this.resetClicks = function (req, res) {
		clicks
			.update(
				{},
				{ 'clicks': 0 },
				function (err, result) {
					if (err) { throw err; }

					res.json(result);
				}
			);
	};

}

module.exports = ClickHandler;
