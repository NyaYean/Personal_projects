console.log("Micropost View");

var microPostView = Backbone.View.extend({
	el: "#full-post-template",

	initialize: function() {
		console.log("New Post View")
		this.fullTemplate = Handlebars.compile($('#full-post-template').html());
		this.editTemplate = Handlebars.compile($('#edit-post-template').html());
		this.newTemplate = Handlebars.compile($('#new-post-template').html());

		this.render();
	},


	render: function() {
		var postData = this.model.toJSON()
	},
	events: {
		'click .create' : "createNote"
	},
	createNote: function(){
		console.log("I'm clicked")
	}
})