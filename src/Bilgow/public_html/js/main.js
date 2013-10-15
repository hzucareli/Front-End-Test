$(document).ready(function(){
        $('#btn-following').click(function(e){
           $('#friends-hub').slideUp();
           $('#following-hub').slideDown();
        });
        
        $('#btn-friends').click(function(e){
           $('#following-hub').slideUp();
           $('#friends-hub').slideDown();
        });
        
        $('#btn-show-bar').click(function(e){
            $('#social-hub').toggleClass('social-hide');
        });
});
