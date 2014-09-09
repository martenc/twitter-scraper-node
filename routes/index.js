/*
 * GET home page.
 */

exports.index = function(req, res) {
  res.render('index', { title: 'Twitter Scraper' });
};

exports.drake = function(req, res) {
  res.render('drake', { title: 'Twitter Scraper' });
};
