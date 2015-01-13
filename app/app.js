
App = Ember.Application.create({
	rootElement: 'main'
});

App.Router.map(function() {

	this.resource('about');
	this.resource('services');
	this.resource('contact');

});

App.AboutRoute = Em.Route.extend({
	
	afterModel: function () {
		
	},

	actions: {
		showMore: function () {
			console.log('Inside showMore');
		}
	}
});