
var App = {
	Models: {},
	Collections: {},
	Views: {}
};

$(function(){

	App.notes = new App.Collections.Notes;
	// App.notesPreviewListView = new App.Views.NotesPreviewList({ collection: App.notes });
	// App.noteView = new App.Views.Note({model: new App.Models.Note});
	// App.noteRouter = new App.Routers.NoteRouter();
	
	App.notes.fetch();

	//Starting the history of everything
	Backbone.history.start();

});