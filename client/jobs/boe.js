Template.boe.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('beDetails');
});
});
