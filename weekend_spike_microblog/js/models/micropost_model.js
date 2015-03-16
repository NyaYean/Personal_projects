console.log("Micropost_model folder");

var notetakerLocalStorage = new Backbone.LocalStorage('poststorage')

App.Models.Note = Backbone.Model.extend({
	initialize: function(){
		console.log('New microPost Model Created!!')
	},

	defaults: {
		title:"Enter Title",
		content: "Enter Content"
	},
	localStorage: notetakerLocalStorage

});