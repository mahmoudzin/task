'use strict';

$(document).ready(function(){
    //navigate to register section
    $('#get-started').click(function(){
        $('#welcome-box').fadeOut(1000,()=>{
            $('#register-form').fadeIn(1000);
        });
    });


    //navigate to successed section
    $('#register-form').submit(function(e){
        e.preventDefault();

        if($('#password').val() !== $('#confirm_password').val())
            $('#err').html('please enter password as above');
        else{
            $('#register-form').fadeOut(1000,()=>{
                $('#successed-box').fadeIn(1000);
                $('#useremail').html($('#email').val());
            });
        }
    })

})