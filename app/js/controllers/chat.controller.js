function chatCtrl(ChatService, $firebaseAuth){
    console.log($firebaseAuth)
    var vm = this;
    var auth = $firebaseAuth();

    console.log(auth.$onAuthStateChanged)

    vm.messages = ChatService.getMessages();
    vm.messagesToShow = ChatService.shownMessages();

    vm.sendMessage = function(){
        var message = {
            authorName : vm.author.displayName,
            authorId :vm.author.uid,
            authorPhoto: vm.author.photoUrl,
            text: vm.newMessage
        } 

        if(vm.newMessage != ''){
            ChatService.sendMessage(message);
            vm.newMessage = '';
        }
        else {
            alert("Введите сообщение")
        }

    };

    vm.login = function(){
        auth.$signInWithPopup('google');
    }

    auth.$onAuthStateChanged(function(authData){
        vm.author = authData;
        console.log(authData)
    })
}


angular.module('chatApp')
.controller('chatCtrl', ['ChatService', '$firebaseAuth', chatCtrl])
