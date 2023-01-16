let instruction_page_path = "instruction.php"

function Login(){
    let email_input = document.getElementById("email").value;
    let psw_input = document.getElementById("psw").value;
    let interactive_email = document.getElementById("interactive_login_email");
    let interactive_password = document.getElementById("interactive_login_password");
    let email_bool_if_email = false

    interactive_password.innerHTML = "";
    interactive_email.innerHTML = "";

    // Differents check
    if(email_input != ""){
        for(let i=0;i <= localStorage.length-1; i++){
            current_user = JSON.parse(localStorage.getItem(localStorage.key(i)))
            if(current_user["email"]==email_input){
                console.log("email entered correspond");
                email_bool_if_email = true;
                if (current_user['password'] == psw_input){
                    console.log("email and password match to localstorage, login");
                    window.sessionStorage.setItem("Active", email_input);
                    window.location.href = instruction_page_path;
                    return 0 ;
                }else{
                    console.log("Password doesn't correspond good");
                    interactive_password.innerHTML = "Password doesn't match your email";
                }
            }else{
                console.log("Email not found in our database");
                interactive_email.innerHTML = "Email not found in our database";       
            }
        }
    }else{
        console.log("Email can't be empty");
        interactive_email.innerHTML = "Email can't be empty";       
    }
    if(email_bool_if_email == true){
        interactive_email.innerHTML = ""
    }
};

function Register(){
    let email_input = document.getElementById("email").value;
    let psw_input = document.getElementById("psw").value;
    let interactive_email = document.getElementById("interactive_login_email");
    let interactive_password = document.getElementById("interactive_login_password");
    let form_box = document.getElementById("form");
    let email_already_exist = false;

    // (?=.{6,})        at least 6 characters long
    // ([^A-Za-z0-9])   at least 1 special character
    // (?=.*[0-9])      at least 1 digit
    interactive_password.innerHTML = "";
    console.log(psw_input);
    let strongPassword = RegExp('(?=.{6,})(?=.*[0-9])([^A-Za-z0-9])')

    // Iterate the localstorage to gather users data's
    for(let i=0;i <= localStorage.length-1; i++){
        current_user = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (current_user["email"] == email_input){
            console.log("email already exist");
            email_already_exist = true;
        }
    }

    // All the check
    if(email_already_exist == false ){
        if(email_input != ""){
            if (strongPassword.test(psw_input)==false){
                interactive_password.innerHTML = 'The password is not strong enought';

            }else if (strongPassword.test(psw_input)==true){
                interactive_password.innerHTML = 'Password strong ennough';
                username_and_phone = promp_add_information()
                // Generate new user dict
                user_dict = {"email": email_input,
                            "password": psw_input,
                            "username": username_and_phone[0],
                            "phone_nb": username_and_phone[1],
                            "points(click)": 0,
                            "user_click": 0,
                            "autoclick_rate": 0,
                            "total_bonus": 0,
                        };
                localStorage[user_dict.email] = JSON.stringify(user_dict);
                window.sessionStorage.setItem("Active", email_input)
                window.location.href = instruction_page_path
            }
        }else{
            console.log("email can't be empty")
            interactive_email.innerHTML = "Email can't be empty"
        }
    }else{
        console.log("no action because email already exist");
        interactive_email.innerHTML = "Email already exists"
    }

};

function promp_add_information(){
    // differents prompt for the not mendatory information
    let username = prompt("Not mendatory information, enter username");
    let phone_nb = prompt("Not mandatory, enter your phone number");
    console.log(username);
    console.log(phone_nb);
    return [username,phone_nb]
}

function welcoming_text(){
    active_player_email = window.sessionStorage.getItem("Active");
    active_player = active_player_email.split("@")
    let interactive_welcom = document.getElementById("Welcome");
    interactive_welcom.innerHTML = active_player[0];
}

function sort(array){
    array.sort(function(a, b){return b["points(click)"]-a["points(click)"]});
    console.log("Sort function done")
}

function leaderboard_fill(Leaderboard_size){
    let nl = document.querySelector("#leaderboard_data");
    let leaderboard_array = []
    let max_number =7;

    // Iterate throught the localstorage
    for(let i=0;i <= localStorage.length-1; i++){
        current_user = JSON.parse(localStorage.getItem(localStorage.key(i)))
        console.log("getting data for : "+ current_user["email"]);
        leaderboard_array.push(current_user);  
    }

    sort(leaderboard_array);
    
    // if want to display the full leaderboard
    if (Leaderboard_size == 1){
        var data_index = ["email","points(click)","user_click","autoclick_rate", "total_bonus"];
    }
    //if want to display short leaderboard
    else if (Leaderboard_size == 0){
        var data_index = ["email","points(click)"];
        console.log("lengh : "+ leaderboard_array.length)
        
        //condition to not get to uch data on the small game leaderboard
        if (leaderboard_array.length > max_number){
            console.log("warning reduce the size to fit the small table")
            leaderboard_array = leaderboard_array.slice(0,max_number)
        }
    }

    // fill the table with the sorted data
    for(let i=0; i<= leaderboard_array.length-1; i++){
        let current_dict = leaderboard_array[i];
        var tr = nl.insertRow(i);

        for(let x=0; x<=data_index.length-1; x++){
            var cell = tr.insertCell(x);
            cell.innerHTML = current_dict[data_index[x]];

        nl.appendChild(tr);}
    }
    
}

