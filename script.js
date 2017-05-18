//function validate() {

		var errMsg = "";
		var	result = true;

		var radioCheck = document.getElementById ("gender"),
		 	fields = document.getElementsByName ("[data-error]"),
		 	form = document.getElementById ("regForm");

  console.log(radioCheck);
  console.log(fields);


		var name = document.getElementById ("firstname").;
		var namePattern = /[a-zA-Z]/;

			if(name === "" || !namePattern.test(name)) {
				errMsg += "Prosze podaj poprawne imie.\n";
				result = false;
			}


  console.log(name);
		var last = document.getElementById ("lastname").value;
		var lastPattern = /[a-zA-Z]/;

			if(last === "" || !lastPattern.test(last)) {
				errMsg += "Prosze podaj poprawne nazwisko.\n";
				result = false;
			}


		var email = document.getElementById ("email").value;
		var emailPattern = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;

			if(email === "" || !emailPattern.test(email)) {
				errMsg += "Email nie poprawny!\n";
				result = false;
			}


		var mobile = document.getElementById ("phone").value;
		var phonePattern = /^\d{10}$/;

			if(mobile === "" || !phonePattern.test(mobile)) {
				errMsg += "Numer telefonu skladac sie z cyfr.\n";
				result = false;
			}


  


		var kraj = document.querySelector("#kraj"),
			miasto = document.querySelector("#miasto"),
			city = document.querySelector("#city");

			kraj.addEventListener("onchange", function() {
				if(kraj == "Poland") {
					var array = ["Warszawa", "Krakow", "Poznan"];
					var selectList = document.createElement("select");
					miasto.appendChild(selectList);

					for(var i = 0; i < array.length; i++) {
						var option = document.createElement("option");
						option.value = array[i];
						option.text = array[i];
						selectList.appendChild(option);
					}
				} else if(kraj == "Australia") {
					var array2 = ["Melbourne", "Sydney", "Brisbane"];
					var selectList2 = document.createElement("select");
					miasto.appendChild(selectList2);

					for(var j = 0; j < array2.length; j++) {
						var option2 = document.createElement("option");
						option2.value = array2[j];
						option2.text = array2[j];
						selectList2.appendChild(option2);
					}
				}
			}, false);



			var form = document.getElementById("regForm");

			form.addEventListener("submit", function(e) {
					e.preventDefault();

					if (errMsg !== "") {
						for(var i = 0; i < errMsg.length; i++) {
						//var field = field[i];

						alert(errMsg);
					}

					return result;
				}
			}, false);



// 		var radioCheck = form.find('input[name="gender"]').click(function() {
// 	  		  console.log('You clicked this: ' + this.value);

// 			  if(this.value == 'woman'){
// 				radioCheck = ('#female').value;
// 			  } else if(this.value == 'man'){
// 			    radioCheck = ('#male').value;
// 			  }
// 			console.log("You selected: " + radioCheck);

// 		  return radioCheck;
// 		});


		var init = function init(form) {
			//validate();
			//miastoShow();
		};



		// var btn = document.querySelector("#btn");

		// btn.addEventListener("submit", init, false);

  	window.onload = init;

//}


