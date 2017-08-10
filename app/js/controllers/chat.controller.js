<<<<<<< HEAD
function chatCtrl(chatService, $firebaseAuth){
=======
function chatCtrl(ChatService, $firebaseAuth){
>>>>>>> ced6baf99fc53ca6b9b1566b088c82b9fe241c0e
    console.log($firebaseAuth)
    var vm = this;
    var auth = $firebaseAuth();

    console.log(auth.$onAuthStateChanged)

<<<<<<< HEAD
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
=======
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
>>>>>>> ced6baf99fc53ca6b9b1566b088c82b9fe241c0e
            vm.newMessage = '';
        }
        else {
            alert("Введите сообщение")
        }

    };

    vm.login = function(){
        auth.$signInWithPopup('google');
    }

<<<<<<< HEAD
    vm.logout = function(){
        auth.$signOut();
    }

    auth.$onAuthStateChanged(function(authData){
        vm.author = authData;
=======
    auth.$onAuthStateChanged(function(authData){
        vm.author = authData;
        console.log(authData)
>>>>>>> ced6baf99fc53ca6b9b1566b088c82b9fe241c0e
    })
}


angular.module('chatApp')
<<<<<<< HEAD
.controller('chatCtrl', ['chatService', '$firebaseAuth', chatCtrl])
=======
.controller('chatCtrl', ['ChatService', '$firebaseAuth', chatCtrl])
>>>>>>> ced6baf99fc53ca6b9b1566b088c82b9fe241c0e
