
	function validateForm(form) {
	
		var errMsg = [];
//		var	result = true;
		var	form = document.getElementById("regForm");
	
			// first name
	
		var namePattern = /[a-zA-Z]/;
		var name = form.getElementsByClassName("firstname");
			if(name === null || name === " " || !namePattern.test(name)) {
				errMsg.push("Prosze podaj poprawne imie.\n");
			}
	
		var lastPattern = /[a-zA-Z]/;
		var last = form.getElementsByClassName("lastname");
			if(last === null || last === " " || !lastPattern.test(last)) {
				errMsg.push("Prosze podaj poprawne imie.\n");
			}
		
		var emailPattern = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;
		var email = form.getElementsByClassName("email");
			if( email === " " || !emailPattern.test(email) ) {
				errMsg.push("Email nie poprawny!\n");
			}
		
		var phonePattern = /[7-9]{1}[0-9]{9}/;
		var mobile = form.getElementsByClassName("phone");
			if (mobile === null || mobile === "" || !phonePattern.test(mobile)) {
				errMsg.push("Numer telefonu musi sie zaczynac od 7,8 or 9.\n");
			}
		
			if (errMsg.length > 0) {   
				var msg = "ERRORS:\n\n";
				
				for(var i = 0; i < errMsg.length; i++) {
					msg += errMsg[i] + "\n";
				}
				alert(msg);
				return false; 
			}
			 
	
		
		function miastoShow() {
			var m_show = document.getElementById ("miasto");
				m_show.setAttribute("visibility", "hidden");
				document.body.appendChild(m_show);
				//var miastoMagic= document.getElementById ("miasto");
			
				if (m_show)
				{
					alert("checked");
					m_show.style.display = "block";
					
				} else {
					alert("notchecked");
					m_show.style.display = "none";
					
				}
		}
		
		var radioCheck = form.find('input[name="gender"]').click(function() {
	  		  console.log('You clicked this: ' + this.value);
	
			  if(this.value == 'woman'){
				radioCheck = ('#female').value;
			  } else if(this.value == 'man'){
			    radioCheck = ('#male').value;
			  } 
			console.log("You selected: " + radioCheck);
	
		  return radioCheck;
		});	
	}	
	


//(function () {
//
//		var form = document.querySelector("#regForm"),
//			fields = form.querySelectorAll("[data-error]");
//
//		form.addEventListener("submit", function (e) {
//				e.preventDefault();
//
//				var errors = [];
//
//				for (var i = 0; i < fields.length; i++) {
//					var field = fields[i];
//
//					if (fields.type === "text") {
//						if (field.value === "") {
//							errors.push(field.dataset.error);
//						}
//					} else if (field.type === "email") {
//						if (field.value.indexOf("@") === -1) {
//							errors.push(field.dataset.error);
//					} else if (field.type === "text") {
//						var phonePattern = /[7-9]{1}[0-9]{9}/;
//						var mobile = form.getElementsByClassName("phone");
//						if (field.value === "" || !phonePattern.test(mobile)) {
//							errors.push(field.dataset.error);
//					} else if (fields.type === "select-one") {
//						if (field.value === "") {
//							errors.push(field.dataset.error);
//					}
//				}
//			}
//			console.log(errors);
//
//		}, false);
//
//})();