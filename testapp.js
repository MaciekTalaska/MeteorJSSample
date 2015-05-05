if (Meteor.isClient) {
  var postsData = [
  {
  txt: 'Introducing Telescope'
  },
  {
  txt: 'Meteor'
  },
  {
  txt: 'The Meteor Book'
  }
];
  
Template.postsList.helpers({
posts: function() {
  return Posts.find();
}
});
  
Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var post = {
      txt: $(e.target).find('[name=txt]').val()
    };
    
    Posts.insert(post);
    e.target[0].value = "";
  }
});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if (Posts.find().count() === 0)
      {
        Posts.insert({txt:'something'});
      }
  });
}

