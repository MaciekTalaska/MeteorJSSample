

if (Meteor.isClient) {
Posts = new Mongo.Collection('posts');
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
posts: postsData
});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Posts = new Mongo.Collection('posts');
  });
}

