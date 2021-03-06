
Template.orDoc.onCreated(function(){
var self =this;
self.autorun(function(){
	var id = FlowRouter.getParam('id');
	self.subscribe('originalDoc',id);
});
});

Template.orDoc.helpers({
	jobId:function(){
		var id = FlowRouter.getParam('id');
		console.log(id);
	},
	docMode:function(){
		var id = FlowRouter.getParam('id');
		var id1 = OriginalDoc.findOne({JobId:id});
		//console.log(id1.length);
		if(typeof id1 == 'undefined')
			return true;
		else
			return false;
	},
	docDate:function(){
		var id = FlowRouter.getParam('id');
		var id1 = OriginalDoc.findOne({JobId:id},{fields:{OrRecDate:1}});
		return id1;
	},
	documentinfo:function(){
		var id = FlowRouter.getParam('id');
		var id1 = OriginalDoc.findOne({JobId:id});
		return id1;
	}
});
AutoForm.addHooks('orDocRecUpdate',{
	onSuccess:function(id,doc)
	{
		//Meteor.call('updateDockDocsDoc',id);
		//Meteor.call('updateCompletedJobField',id);
		alert('Data Updated');
		window.history.go(-1);
	}
});

AutoForm.addHooks('orDocRecInsert', {
  	onSubmit: function (insertDoc, updateDoc, currentDoc) {
    console.log(arguments);
    return false;
  },
	onSuccess:function(id,doc)
	{
		//Meteor.call('updateCompletedJobField',id);
		alert('Original Document Recieved');
	}
});
SimpleSchema.debug = true;
