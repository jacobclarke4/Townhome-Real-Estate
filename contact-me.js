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
            var form1 = document.querySelectorAll('.md-form.template7')[0];
                form1.style.display = "block";

            var form2 = document.querySelectorAll('.md-form.template7')[1];
                form2.style.display = "none";
        }
        function sell() {
            var buy_button = document.getElementById('buy-button');
            var sell_button = document.getElementById('sell-button');

            sell_button.classList.add('selected');
            buy_button.classList.remove('selected');

            var form1 = document.querySelectorAll('.md-form.template7')[0];
                form1.style.display = "none";

            var form2 = document.querySelectorAll('.md-form.template7')[1];
                form2.style.display = "block";

        }
