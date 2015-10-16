if (Meteor.isClient)
{
  var BeforeHooks = {
    webOrApp: function () {
      this.next();
    },
  };
}
