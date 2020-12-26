// Wait for the DOM to be ready
$(document).ready(function() {
  jQuery.validator.addMethod("customEmail", function(value, element) {
             return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value);
            }, "Please enter valid email address!");

  $("#main").validate({
   
        
             rules: {
                 email:{
                     required:true,
                     customEmail:true
                 },
				 name:{
					 required:true
				 },
				 subiect:{
					 required:true,
					 maxlength: 60
				 },
				 message:{
					 required:true
				 }
				 
             },
			  messages: {
				name: "Please enter your name",
				lastname: "Please enter your lastname",
				message:"Please enter your message",
				subiect: 
				{
					required: "Please enter your subiect",
					maxlength: "Your subiectmust be max 60 characters long"
				}
			  }
        
    
  });
});
