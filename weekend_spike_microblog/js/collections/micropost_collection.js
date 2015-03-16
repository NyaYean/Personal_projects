console.log("Micropost Collection folder")


App.Collections.Notes = Backbone.Collection.extend({
	initialize: function() {
		console.log("Micropost Collection created")
	},
	model: App.Models.Note,
	localStorage: notetakerLocalStorage
})