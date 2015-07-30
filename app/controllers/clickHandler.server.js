'use strict';

var Clicks = require('../models/clicks.js');

function ClickHandler () {

	this.getClicks = function (req, res) {
		Clicks
			.findOne({}, { '_id': false })
			.exec(function (err, result) {
				if (err) { throw err; }

				var clickResults = [];

				if (result) {
					clickResults.push(result);
					res.json(clickResults);
				} else {
					var newDoc = new Clicks({ 'clicks': 0 });
					newDoc.save(function (err, doc) {
						if (err) { throw err; }

						clickResults.push(doc);
						res.json(clickResults);
					});
				}
			});
	};

	this.addClick = function (req, res) {
		Clicks
			.findOneAndUpdate({}, { $inc: { 'clicks': 1 } })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result);
				}
			);
	};

	this.resetClicks = function (req, res) {
		Clicks
			.findOneAndUpdate({}, { 'clicks': 0 })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result);
				}
			);
	};

}

module.exports = ClickHandler;
