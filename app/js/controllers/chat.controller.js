function chatCtrl(chatService, $firebaseAuth){
    console.log($firebaseAuth)
    var vm = this;
    var auth = $firebaseAuth();

    console.log(auth.$onAuthStateChanged)

    vm.messages = chatService.getMessages();
    vm.messagesToShow = chatService.shownMessages();

    vm.sendMessage = function(){
        if(vm.author != null){
            var message = {
                authorName : vm.author.displayName,
                authorId :vm.author.uid,
                authorPhoto: vm.author.photoURL,
                text: vm.newMessage
            } 
        }
        else {
            alert("Зарегестрируйтесь для отправки сообщения")
        }

        if(vm.newMessage != ''){
            chatService.sendMessage(message);
            vm.newMessage = '';
        }
        else {
            alert("Введите сообщение")
        }

    };

    vm.login = function(){
        auth.$signInWithPopup('google');
    }

    vm.logout = function(){
        auth.$signOut();
    }

    auth.$onAuthStateChanged(function(authData){
        vm.author = authData;
    })
}


angular.module('chatApp')
.controller('chatCtrl', ['chatService', '$firebaseAuth', chatCtrl])
