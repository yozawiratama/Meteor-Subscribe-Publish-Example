//Meteor.publish('listnotes',function(user_id){
//    return ListNotes.find();
//});

Meteor.methods({
    AddNewUser: function (email, pwd, fname, lname, gender) {
        var newUser = Users.insert({
            Email: email,
            Password: pwd,
            FName: fname,
            LName: lname,
            Gender: gender,
            Birthdate: ""

        });
        //        if (newUser != undefined) return true;
        //        else return false;
        return true;
    },
    UserLogin: function (email, pwd) {
        var usr = Users.findOne({
            Email: email,
            Password: pwd
        });
        if (usr != undefined) return usr._id;
        else return false;
    },
    AddNewNote: function (title, content, user_id) {
        console.log("masuk");
        console.log(user_id);
        console.log(title);
        console.log(content);
        console.log(new Date());
//        var newNote = Notes.insert({
//            Title: title,
//            Content: content,
//            CreatedDate: new Date(),
//            CreatedBy: user_id,
//            LastModifiedDate: new Date(),
//            LastModifiedBy: user_id
//        });
//        console.log(newNote);
        return true;
    }

    //    welcome: function (name) {
    //        console.log('on server, welcome called with name: ', name);
    //        if (name == undefined || name.length <= 0) {
    //            throw new Meteor.Error(404, "Please enter your name");
    //        }
    //        return "Welcome " + name;
    //    }
});