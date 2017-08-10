function chatService($firebaseArray){
    var messagesRef = firebase.database().ref().child("messages");
    var chat = {};

    chat.getMessages = function(){
        return $firebaseArray(messagesRef);
    }

    chat.sendMessage = function(message){
        console.log(message)
        chat.getMessages().$add(message).then(function(ref) {
          var id = ref.key;
          console.log("added record with id " + id);
          chat.getMessages().$indexFor(id); // returns location in the array
        });

        console.log($firebaseArray(messagesRef))
    }

    chat.shownMessages = function(){
        return $firebaseArray(messagesRef.limitToLast(25));
    }

    return chat;
}

angular.module('chatApp')
.factory('chatService', ['$firebaseArray', chatService]);
