Template.masterhome.helpers({
  activeIfTemplateIs: function (template) {
    var currentRoute = FlowRouter.getRouteName();
    return currentRoute && template === currentRoute ? 'active' : '';
  }
});