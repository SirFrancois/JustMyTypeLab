let $playButton = $("#play-button");
let $content = $("#target");
let $highlight = $("#yellow-block");
let $highlightPosition = 0;
let $keyUpper = $("#keyboard-upper-container");
let $keyLower = $("#keyboard-lower-container");
let $sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let $sentenceNumber = 0;
let $sentence = $sentences[$sentenceNumber];
let $charNumber = 0;
let $letter = $sentence.substring($charNumber, $charNumber + 1);
let $mistakes = 0;
let $isTimeCounting = false;
let $startDate;
let $startTime;



//intial starting point
$(document).ready(function() {
    $($keyUpper).hide();

    //for shifting to upper case lettering
    $(document).keydown(function (e) {
        if (e.key == "Shift") {
            $($keyUpper).show();
            $($keyLower).hide();    
        } else {
            $(document).keydown(function  (e) {
                $($keyUpper).hide()
                $($keyLower).show();    
              })
      };})

        //highlight pressed key
      $(document).keypress(function (e) {
        let $key = $("#" + e.which);
        $($key).css("background-color", "yellow");

        //unhighlight released key
        $(document).keyup(function (e) {
        $($key).css("background-color", "#f5f5f5");
    };
}

 //show current sentence on screen
 $("#sentence").text($sentence);
 //show target letter on screen
 $("#target-letter").text($letter);
 //read for keypress
 $(document).keypress(function (e) {
     //set start time
     if ($isTimeCounting === false) {
         $startDate = new Date();
         $startTime = $startDate.getTime();
         $isTimeCounting = true;     
       }

       //if pressed key == desired key
       if (e.which == $sentences[$sentenceNumber].charCodeAt($charNumber)) {
        //make a green checkmark
        let $right = $("<span>✔</span>");
        $($right).addClass('green');
        $($right).appendTo("#feedback");





        //make a red X
        let $wrong = $("<span>✗</span>");
        $($wrong).addClass('red');
        $($wrong).appendTo("#feedback");
        //increment mistake counter
        $mistakes++;
    }