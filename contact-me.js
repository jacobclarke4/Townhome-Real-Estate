       function buy() {
            var buy_button = document.getElementById('buy-button');
            var sell_button = document.getElementById('sell-button');

            buy_button.classList.add('selected');
            sell_button.classList.remove('selected');

            var form1_parent = document.querySelectorAll('.md-form.template7')[0];
            form1_parent.style.display = "block";
            var buying_banner = document.querySelector('.buying-banner');
            buying_banner.style.display = "block";


            var form2_parent = document.querySelectorAll('.md-form.template7')[1];
            form2_parent.style.display = "none";
            var selling_banner = document.querySelector('.selling-banner');
            selling_banner.style.display = "none";
       }
       function sell() {
            var buy_button = document.getElementById('buy-button');
            var sell_button = document.getElementById('sell-button');

            buy_button.classList.remove('selected');
            sell_button.classList.add('selected');

            var form1_parent = document.querySelectorAll('.md-form.template7')[0];
            form1_parent.style.display = "none";
            var buying_banner = document.querySelector('.buying-banner');
            buying_banner.style.display = "none";


            var form2_parent = document.querySelectorAll('.md-form.template7')[1];
            form2_parent.style.display = "block";
            var selling_banner = document.querySelector('.selling-banner');
            selling_banner.style.display = "block";
       }
