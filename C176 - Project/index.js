let words = [
    {
        "inputs":5,
        "category":"Sports",
        "word":"Chess"
    },
    {
        "inputs":6,
        "category":"European Country Name",
        "word":"France"
    },
    {
        "inputs":6,
        "category":"Shapes",
        "word":"Square"
    }
]
$(document).ready(function () {
   fillBlanks();
})


function fillBlanks(){
    var gameOver = false
    var correct_guess = false;

    const words = words[Math.floor(Math.random() * words.length)];

    $("#blanks").empty();
    for (let i = 0; i < words.inputs; i++) {
        let input_html = `<input type="text" class="input_field" id="input_${i}" placeholder="Input ${i + 1}"/>`
        $("#blanks").append(input_html)
    }

    $("#hint").empty();
    for (let i = 0; i < story.words.length; i++) {
        let html = `<button class="hint_button">${words.words[i]}</button>`
        $("#category").append(html)
    }

    $(".clickable").click(function(){
        

        let id = !(this).attr("id");

        var life = parseInt($("#life").text())

        for (var i = 0; i < randomWord.word.length; i++){
            if(randomWord.word.charAt(i).toLowerCase() == id){
                if(life > 0 && ($(".fill_blanks").eq(i).html()== "_" || $(".fill_blanks").eq(i).html()== id)){

                    $(".fill_blanks").eq(i).html(id);
                    correct_guess=true;

                    if($("#blanks").text() === randomWord.word.toLowerCase()){
                        $("#result").test("GG! You Win");
                        correct_guess = true;
                        gameOver = true;
                    }
                }
            }
        }
    })
}