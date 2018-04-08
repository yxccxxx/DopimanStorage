
Router.route('/', function () {
  this.render('home');
  this.layout('homeLayout');
});


Router.route('/Ineed', function () {
  this.render('IneedPage');
  this.layout('IneedLayout');
});

Router.route('/Ihave', function () {
  this.render('IhavePage');
  this.layout('IhaveLayout');
});
