
class Game{
    constructor(){
        this.nb_click = 0
        this.human_click = 0
        this.autoclick_rate = 0
        this.inflation_rate = 1.30
        this.life_count = 3
        this.appear_rate_number = 35
        this.ennemy_refresh_speed = 800
        this.email_player = sessionStorage.getItem("Active");
        this.old_data = JSON.parse(localStorage.getItem(this.email_player))
        this.unit = [
            "Million",
            "Billion"
            ]
    }
    // Function managing the ennemy movement
    ennemy_event(refresh_speed){

        $("#ennemy").css("visibility","visible");
        let position_ennemy = 640
        $("#ennemy").css("left", position_ennemy.toString()+"px");
    
        //Intervall for moving the ennemy
        var moving = setInterval( function(){
            position_ennemy = position_ennemy -10
            console.log(position_ennemy.toString()+"px");
            $("#ennemy").css("left", position_ennemy.toString()+"px");
            let state = $("#ennemy").css("visibility")
            console.log("state -> "+state);
            // if the user have killed the ennemy
            if (state == "hidden"){
                $("#ennemy").css("left", "640px");
                console.log("ennemy killed");
                clearInterval(moving)
            // if the ennemy hit the button
            }else if(position_ennemy == 370){
                console.log("one life down")
                console.log("life -> "+game.life_count);
                game.life_count = game.life_count-1
                console.log("life -> "+game.life_count);
                $("#ennemy").css("visibility","hidden");
                game.heart_display()
                clearInterval(moving)
            }
        },game.ennemy_refresh_speed)        
    }

    // Function to display number in a precise element and format if too big
    display_number(element, number){
        if (number >= 1e6){
            console.log("Number need to be update");
            let split_num = number.toExponential(5).split("e+");
            
            //exp to index
            let exp_num = Math.floor((split_num[1]/3)-2);
    
            // get round exp to format (1e6,1e9,1e12,...)
            let exp = "1e" + (split_num[1]-(split_num[1]-(6+(exp_num*3)))).toString()
            element.text(number/exp + " " + game.unit[exp_num]);
            
        }else{
            element.text(number);
        }
    }

    // Gather total bonus buyed when game end
    calculate_total_bonus(){
        console.log($(".game_button"));
        let total_bonus = 0
        for (let i=1; i< 6;i++){
            // let element = $(".button_list").children()[i]
            let button = $("#button"+i.toString())
            console.log(button.children()[0].textContent)
            let data_split = button.children()[0].textContent.split(" : ")
            total_bonus += parseInt(data_split[1])
            console.log("total_bo ->" + total_bonus);
        }
        return total_bonus
    }

    // Function when the game end
    end_game(data){
        clearInterval(autoclick)
        clearInterval(ennemy_appearing)
        console.log("end game");
        console.log(data)
        console.log(data["points(click)"])
        // Check if it's a new highscore
        if (this.nb_click >data["points(click)"]){
            console.log("new high score");
            game.calculate_total_bonus();
            data["points(click)"] = this.nb_click;
            data["user_click"] = this.human_click;
            data["autoclick_rate"] = this.autoclick_rate;
            data["total_bonus"] = game.calculate_total_bonus()
            console.log(data);
            // Put new data in localstorage
            localStorage[this.email_player] = JSON.stringify(data)
            alert("new high score")
            window.location.href = "leaderboard.php"
        }else{
            alert("Game Over, Not a high score sorry")
            window.location.href = "leaderboard.php"
        }
    }

    // Function managing the display of the hearts
    heart_display(){
        console.log("heart function -> "+this.life_count);
        if (this.life_count == 2){
            $("#life1").css("visibility","hidden")
        }else if (this.life_count == 1){
            $("#life2").css("visibility","hidden")
            
        }else if(this.life_count == 0){
            $("#life3").css("visibility","hidden")
            game.end_game(this.old_data)
        }
    }

    // Function managing the difficulty throught the game
    set_difficulty(){
        if(this.nb_click >1e5){
            console.log("set difficultys 500-45");
            this.ennemy_refresh_speed = 200
            this.appear_rate_number = 45
        }else if(this.nb_click >1e4){
            console.log("set difficultys 800-35");
            this.ennemy_refresh_speed = 400
            this.appear_rate_number = 40
        }else if(this.nb_click >1e3){
            console.log("set difficultys 900-25");
            this.ennemy_refresh_speed = 500
            this.appear_rate_number = 35
        }
    }
}


var game = new Game();



// ##########################################################################
// Set the intervall function for the game ##################################
// ##########################################################################

//Interval managing the autoclick rate
autoclick = setInterval(function () {
    game.nb_click = game.nb_click + game.autoclick_rate;
    game.display_number($("#clickValue"),game.nb_click)

}, 1000)

// Intervall managing if a ennemy appear or not
ennemy_appearing = setInterval(function () {
    let state = $("#ennemy").css("visibility");
    if (state !="visible"){
        $("#ennemy").css("left", "640px");
        // let appear_rate_number = 90
        if (game.nb_click > 0){
            let random_number =Math.floor(Math.random()*101)
            console.log("random number --> " + random_number);
            if (random_number <=game.appear_rate_number){
                console.log("event occurre");
                game.set_difficulty()
                game.ennemy_event(game.ennemy_refresh_speed)
            }  
        }else{
            console.log("too early for ennemy");
        }
    }
},5000)

// All the differents button managing for the game
$(document).ready(function () {
    
    // If click on the main button
    $("#clicker").click(function () {
        game.human_click +=1;
        game.nb_click +=1;
        let clickValue = $("#clickValue");
        game.display_number(clickValue,game.nb_click)

    })
    
    // If click on a button in the shop
    $(".game_button").click(function (){
        game.human_click +=1

        let ammount_element = $(this).children()[0]
        let ammount_value = ammount_element.textContent.split(" : ")[1]
        let rate = parseInt($(this).attr("click_by_sec"))
        let ammount = parseInt(ammount_value)
        let price_display_element = $(this).children()[2]
        let base_price = parseInt($(this).attr("price"))
        let actual_price
        console.log("ammount ->>"+ammount);

        
        if (ammount ==0){
            console.log(("first buy"));
            actual_price = base_price
        }
        // Calculate the price of the item
        else{
            actual_price = Math.ceil(base_price * Math.pow(game.inflation_rate,ammount))
        }

        console.log("price -> " + actual_price)       

        if (game.nb_click >= actual_price){
            game.nb_click = game.nb_click-actual_price
           
            ammount = ammount+1
            actual_price = Math.ceil(base_price * Math.pow(game.inflation_rate,ammount))
            console.log("next price -> " + actual_price)

            game.display_number($("#clickValue"),game.nb_click)
            ammount_element.textContent = "Number : "+ ammount.toString()
            price_display_element.textContent = "Price : "+actual_price.toString()
            game.autoclick_rate = game.autoclick_rate+ rate
            game.display_number($("#rate_value"),game.autoclick_rate)
            console.log("update rate --> "+game.autoclick_rate)

        }
    })

    // if click on an ennemy
    $("#ennemy").click(function (){
        game.human_click +=1;
        let state = $(this).css("visibility");
        console.log("sate ->> " +state);
        $(this).css("visibility","hidden");
        let state_after = $(this).css("visibility");
        console.log("sate ->> " +state_after);

    })

    // If click on the end game button
    $("#end_game_bt").click( function(){
        // console.log(old_data);
        game.end_game(game.old_data)
    })

})