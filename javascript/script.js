let form = document.querySelector("form");

form.addEventListener("click", start);

function start(e) {
    e.preventDefault();

    if (e.target.hasAttribute("value")) {
        let children = e.target.parentElement.children;
        var low = children[0].value;
        var high = children[1].value;

        if (low == "" || high == "") {
            alert("Insert low and High Value");
            return;
        }

        var correcr_ans = Number(0);
        var x = Number(0);

        if (low > high) {
            alert("Lower bound will have to be smaller than Upper bound");
            return;
        } else {
            correcr_ans = Number(
                Math.ceil(Number(Math.random() * (high - low) + low))
            );

            for (let i = 0; i < 3; i++) {
                x = "";

                while (x == "") {
                    x = prompt(`Guess a Number:
                        Note: you have ${3 - i} chance remaining`);

                    if (x == "") alert("No input detected!");
                }

                if (Number(x) == correcr_ans) {
                    alert("You Win");
                    return;
                } else if (correcr_ans > Number(x)) {
                    alert("Correct answer is greater!");
                } else {
                    alert("Correct answer is smaller! ");
                }
            }
            alert("You lose!");
        }
    }
}
