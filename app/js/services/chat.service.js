function chatService($firebaseArray){
    var messagesRef = firebase.database().ref().child("messages");
    var chat = {};

    chat.getMessages = function(){
        return $firebaseArray(messagesRef);
    }

    chat.sendMessage = function(message){
<<<<<<< HEAD
        console.log(message)
        chat.getMessages().$add(message).then(function(ref) {
          var id = ref.key;
          console.log("added record with id " + id);
          chat.getMessages().$indexFor(id); // returns location in the array
        });

        console.log($firebaseArray(messagesRef))
=======
        chat.getMessages().$add(message);
>>>>>>> ced6baf99fc53ca6b9b1566b088c82b9fe241c0e
    }

    chat.shownMessages = function(){
        return $firebaseArray(messagesRef.limitToLast(25));
    }

    return chat;
}

angular.module('chatApp')
<<<<<<< HEAD
.factory('chatService', ['$firebaseArray', chatService]);
=======
.factory('ChatService', ['$firebaseArray', chatService]);
>>>>>>> ced6baf99fc53ca6b9b1566b088c82b9fe241c0e
