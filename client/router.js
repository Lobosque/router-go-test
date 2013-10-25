Router.configure({
  autoRender: false
});

Router.map(function() { 
  this.route('contact', { path: '/'});
  this.route('login', { path: '/login'});
});

var appRequireLogin = function() {
  //this.stop(); //Using this.top() works
  Router.go('login');
}

Router.before(appRequireLogin, {only: ['contact']});
