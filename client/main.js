import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './homeLayout.html';

Template.homeLayout.events({
  'click #Ineed': function(event, template) {

    event.preventDefault();
    Router.go('Ineed');
     console.log('#IneedButton was clicked');
  }
});

Template.homeLayout.events({
  'click #Ihave': function(event, template) {

    event.preventDefault();
    Router.go('Ihave');
     console.log('#IhaveButton was clicked');
  }
});
