function chatService($firebaseArray){
    var messagesRef = firebase.database().ref().child("messages");
    var chat = {};

    chat.getMessages = function(){
        return $firebaseArray(messagesRef);
    }

    chat.sendMessage = function(message){
        chat.getMessages().$add(message);
    }

    chat.shownMessages = function(){
        return $firebaseArray(messagesRef.limitToLast(25));
    }

    return chat;
}

angular.module('chatApp')
.factory('ChatService', ['$firebaseArray', chatService]);
