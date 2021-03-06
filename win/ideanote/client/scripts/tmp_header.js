Template.tmp_header.created = function () {};
Template.tmp_header.ActiveUsername = function () {
    var usr = Users.findOne(Session.get(SessionRef.Name.ActiveUserId));

    return usr && usr.FName + " " + usr.LName;
};
Template.tmp_header.loggedin_user = function () {
    return Session.equals(SessionRef.Name.ActiveUserId, null) ? false : true;
};
Template.tmp_header.rendered = function () {};
Template.tmp_header.events({
    'click #hplAddNewNote': function (e) {
        e.preventDefault();
        Router.navigate("/noteeditor/" + Session.get(SessionRef.Name.ActiveUserId), true);
    },
    'click #hplListNote' : function(e){
    e.preventDefault();
        Router.navigate("/listnote/" + Session.get(SessionRef.Name.ActiveUserId), true);
    },
    'click #hplSignOut' : function(e){
        e.preventDefault();
        Session.set(SessionRef.Name.ActiveUserId, null);
        Session.set(SessionRef.Name.ActiveUserType, null);
        Router.navigate("/",true);
    }
});