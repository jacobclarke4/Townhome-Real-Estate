<!DOCTYPE html>
<html>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;700&display=swap" rel="stylesheet">
        <style>
            .md-form.template7 .mg-container {
                visibility: hidden;
                opacity: 0;
                transition: all 1s ease;
            }
            body * {
                font-family: font-Lato-300 !important;
                font-style: light !important;
                font-weight: bold !important;
            }
            .question-container {
                background: linear-gradient(90deg, rgba(43,43,43,1) 25%, rgba(70,70,70,1) 55%) !important;
                color: white;
                text-align: center;
                font-size: 2rem;
                padding: 25px 0px;
            }
            .question-text {
                font-size: 2rem;
            }
            .question-container button {
                background: white;
                border:none;
                color: black;
                font-family: font-Lato-300;
                font-style: light;
                font-weight: bold;
                font-size: 2rem;
                border-radius: 5px;
                margin: 0px 5px;
                padding: 0px 10px;
                transition: background .5s ease;
            }
            .question-container button:hover {
                background: rgba(184, 184, 184, 1);
            }
            .question-container button.selected {
                background: rgba(184, 184, 184, 1);
            }
        </style>
    </head>
    <body>
        <div class="question-container">
            <h2 class="question-text">Are you looking to <span><button Onclick="buy()" id="buy-button">BUY</button></span> or <span><button Onclick="sell()" id="sell-button">SELL</button></span>?</h2>
        </div>


    <script>
        /*
        function buy() {
            var buy_button = document.getElementById('buy-button');
            var sell_button = document.getElementById('sell-button');

            buy_button.style.background = "rgba(184, 184, 184, 1)";
            sell_button.style.background = "white";
        }
        function sell() {
            var buy_button = document.getElementById('buy-button');
            var sell_button = document.getElementById('sell-button');

            sell_button.style.background = "rgba(184, 184, 184, 1)";
            buy_button.style.background = "white";
        }
        */
        function buy() {
            var buy_button = document.getElementById('buy-button');
            var sell_button = document.getElementById('sell-button');

            buy_button.classList.add('selected');
            sell_button.classList.remove('selected');
            // Get all elements with the class .md-form.template7
            var form1 = document.querySelectorAll('.md-form.template7 .mg-container')[0];
                form1.style.display = "block";
                form1.style.visibility = "visible";
                form1.style.opacity = "1";


            var form2 = document.querySelectorAll('.md-form.template7')[1];
                form2.style.visibility = "hidden";
                form2.style.opacity = "0";
                form2.style.display = "none";
        }
        function sell() {
            var buy_button = document.getElementById('buy-button');
            var sell_button = document.getElementById('sell-button');

            sell_button.classList.add('selected');
            buy_button.classList.remove('selected');

            var form1 = document.querySelectorAll('.md-form.template7')[0];
                form1.style.visibility = "hidden";
                form1.style.opacity = "0";
                form1.style.display = "none";

            var form2 = document.querySelectorAll('.md-form.template7')[1];
                form2.style.display = "block";
                form2.style.visibility = "visible"
                form2.style.opacity = "1";
        }
    </script>
    </body>

</html>
