$(document).ready(function () {

    let randomNumber = getRandomNumber();
    let emeraldValue = getRandomForCrystal();
    let citrineValue = getRandomForCrystal();
    let amethystValue = getRandomForCrystal();
    let topazValue = getRandomForCrystal();
    let tally = 0;
    let wins = 0;
    let losses = 0;

    $("#random-number").append(randomNumber);

    $("#emerald").on("click", function () {
        updateNumber(emeraldValue);
        $("#your-number").text(tally);

        console.log(emeraldValue);

        checkNumber();
    });

    $("#amethyst").on("click", function () {
        updateNumber(amethystValue);
        $("#your-number").text(tally);

        console.log(amethystValue);

        checkNumber();
    });

    $("#citrine").on("click", function () {
        updateNumber(citrineValue);
        $("#your-number").text(tally);

        console.log(citrineValue);

        checkNumber();
    });

    $("#topaz").on("click", function () {
        updateNumber(topazValue);
        $("#your-number").text(tally);

        console.log(topazValue);

        checkNumber();
    });

    $("#restart").on("click", function () {
        restart();
    });

    function getRandomNumber() {
        return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    }

    function getRandomForCrystal() {
        return Math.floor(Math.random() * 12) + 1;
    }

    function updateNumber(crystalValue) {
        tally = tally + crystalValue;
        return tally;
    }

    function checkNumber() {
        if (tally > randomNumber) {
            losses++;
            $("#losses-count").text(losses);
            $('#emerald').css('pointer-events', 'none');
            $('#citrine').css('pointer-events', 'none');
            $('#amethyst').css('pointer-events', 'none');
            $('#topaz').css('pointer-events', 'none');
        } else if (tally === randomNumber) {
            wins++;
            $("#wins-count").text(wins);
            $('#emerald').css('pointer-events', 'none');
            $('#citrine').css('pointer-events', 'none');
            $('#amethyst').css('pointer-events', 'none');
            $('#topaz').css('pointer-events', 'none');
        } else {
            return tally;
        }
    }

    function restart() {
        randomNumber = getRandomNumber();
        emeraldValue = getRandomForCrystal();
        amethystValue = getRandomForCrystal();
        citrineValue = getRandomForCrystal();
        topazValue = getRandomForCrystal();
        tally = 0;

        $("#random-number").text(randomNumber);
        $("#your-number").text(tally);

        $('#emerald').css('pointer-events', 'auto');
        $('#citrine').css('pointer-events', 'auto');
        $('#amethyst').css('pointer-events', 'auto');
        $('#topaz').css('pointer-events', 'auto');
    }
});