console.log("Hey");

var myStorageTime = new Backbone.LocalStorage('locker');
console.log(myStorageTime.records)


var stories = Backbone.Model.extend({
	initialize: function() {
		console.log("It has been created!!!!")
	},
	defaults: {
		life: "Don't worry about it",
		author: "I forgot about his name"


	},
	localStorage: myStorageTime
});