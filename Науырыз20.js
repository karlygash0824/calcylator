
//Task1:
function getNumber(promptText) {
    let num;
    while (true) {
        num = prompt(promptText);
        if (!isNaN(num) && num !== null && num.trim() !== "") {
            return Number(num);
        }
        alert("Қате енгізу! Сан енгізіңіз.");
    }
}

function calculator() {
    let num1 = getNumber("Бірінші санды енгізіңіз:");
    let num2 = getNumber("Екінші санды енгізіңіз:");

    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num2 !== 0 ? (num1 / num2).toFixed(2) : "Бөлінбейді (0-ге бөлу мүмкін емес)";

    alert(
        `Қосынды: ${sum}\nАйырма: ${difference}\nКөбейтінді: ${product}\nБөлінді: ${quotient}`
    );
}

calculator();

//Task2:



    
    
        function getNumber(promptMessage) {
            while (true) {
                let num = prompt(promptMessage);
                if (!isNaN(num) && num !== null && num.trim() !== "" && Number(num) > 0) {
                    return Number(num);
                }
                alert("Қате енгізу! Сан енгізіңіз.");
            }
        }

        function calculateDiscount() {
            let price = getNumber("Заттың бағасын енгізіңіз:");
            let quantity = getNumber("Қанша зат сатып алғыңыз келеді?");
            
            let total = price * quantity; // Жалпы құнды есептеу
            let discount = 0;

            if (total >= 10000) {
                discount = 0.3; // 30% жеңілдік
            } else if (total >= 5000) {
                discount = 0.2; // 20% жеңілдік
            } else if (total >= 2000) {
                discount = 0.1; // 10% жеңілдік
            }

            let finalPrice = total - (total * discount); // Жеңілдікпен соңғы төлем

            document.getElementById("result").innerHTML = 
                `Жалпы құн: ${total} ₸<br> Жеңілдік: ${discount * 100}%<br> Соңғы төлем: ${finalPrice.toFixed(2)} ₸`;
        }



        //Task3:
 
        const hiddenNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;
        let guess;
        
        console.log("1 мен 100 арасындағы жасырылған санды табыңыз!");
        
        while (true) {
            guess = parseInt(prompt("Сан енгізіңіз (1-100):"));
            attempts++;
        
            if (isNaN(guess) || guess < 1 || guess > 100) {
                console.log("Қате! 1 мен 100 арасындағы санды енгізіңіз.");
                continue;
            }
        }
            let difference = Math.abs(hiddenNumber - guess);
        
            if (guess === hiddenNumber) {
                console.log(`Құттықтаймын! Дұрыс сан: ${hiddenNumber}. Жалпы әрекет саны: ${attempts}');
                break;
            } else if (difference <= 5) {
                console.log(guess < hiddenNumber ? "Сан жоғары" : "Сан төмен");
            } else {
                console.log(guess < hiddenNumber ? "Жәй жоғары" : "Жәй төмен");
                }
                                                }

        
                     
