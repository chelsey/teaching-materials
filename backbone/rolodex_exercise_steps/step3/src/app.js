var Model = Backbone.Model.extend({
	defaults: {
		firstName: "",
		lastName: "",
		role: "student",
		imgUrl: "http://placekitten.com/200/200"
	},
	initialize: function() {
		this.generateUsername();
	},
	generateUsername: function () {
		var username = this.get('firstName') + this.get('lastName');
		this.set('username', username);
		return username;
	}
});

var Collection = Backbone.Collection.extend({
	model: Model,
	comparator: 'lastName',
	initialize: function() {
		var self = this;
		self.listenTo(self, 'add', self.sort)
	}
});

var collection = new Collection([
	{
		firstName: "Marissa",
		lastName: "Meyer"
	},
	{
		firstName: "Sheryl",
		lastName: "Sandberg"
	},
	{
		firstName: "Kate",
		lastName: "Losse"
	}
]);

// insert your new code here