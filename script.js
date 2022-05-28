$(document).ready(function () {

    var level = 0;
    var index;
    var simonSeq = [];
    var allShapes = ['#shape1', '#shape2', '#shape3', '#shape4'];

    $('.littleCircle').click(function () { if (level == 0) { game() } })
    $('#shape1').click(function () { anim('#shape1'); checkIsGood('#shape1'); })
    $('#shape2').click(function () { anim('#shape2'); checkIsGood('#shape2'); })
    $('#shape3').click(function () { anim('#shape3'); checkIsGood('#shape3'); })
    $('#shape4').click(function () { anim('#shape4'); checkIsGood('#shape4'); })

    function game() {
        index = 0
        setLevel();
        fillSimonSeq(0);
    };

    function checkIsGood(shape){
        if(simonSeq[index] == shape){
            index++;
            if (index == level){
                game();
            }
        }else{
            $('.level').text('Vous avez perdu. Cliquez ici pour recommencer');
            level = 0;
        }
    }
    
    function setLevel() {
        level++;
        $('.level').text('niveau ' + level);
    }

    function anim(shape) {
        $(getSound(shape)).get(0).play();
        $(shape).css("opacity", "50%");
        window.setTimeout(function () {
            $(shape).css("opacity", "100%");
        }, 250)
    };

    function fillSimonSeq(i) {
        if (i < level) {
            setTimeout(function () {
                simonSeq[i] = allShapes[Math.floor(Math.random() * 4)];
                anim(simonSeq[i], getSound(simonSeq[i]));
                fillSimonSeq(i + 1);
            }, 600);
        }
    }

    function getSound(shape) {
        if (shape == '#shape1')
            return '.sound1'
        if (shape == '#shape2')
            return '.sound2'
        if (shape == '#shape3')
            return '.sound3'
        if (shape == '#shape4')
            return '.sound4'
    };
});
