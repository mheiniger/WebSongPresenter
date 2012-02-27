
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Web Song Presenter' })
};

exports.view = function(req, res){
  res.render('view', { title: 'Web Song Presenter', layout: false })
};

exports.control = function(req, res){
    res.render('control', { title: 'Web Song Presenter' })
};