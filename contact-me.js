function buy() {
            var buy_button = document.getElementById('buy-button');
            var sell_button = document.getElementById('sell-button');

            buy_button.classList.add('selected');
            sell_button.classList.remove('selected');
            // Get all elements with the class .md-form.template7
            var form1 = document.querySelectorAll('.md-form.template7 .mg-container')[0];
            var form1_parent = document.querySelectorAll('.md-form.template7')[0];

                form1_parent.style.display = "block";
                form1.style.visibility = "visible";
                form1.style.opacity = "1";


            var form2 = document.querySelectorAll('.md-form.template7 .mg-container')[1];
            var form2_parent = document.querySelectorAll('.md-form.template7')[1];
                form2.style.visibility = "hidden";
                form2.style.opacity = "0";
                form2_parent.style.display = "none";
        }
        function sell() {
            var buy_button = document.getElementById('buy-button');
            var sell_button = document.getElementById('sell-button');

            sell_button.classList.add('selected');
            buy_button.classList.remove('selected');

            var form1 = document.querySelectorAll('.md-form.template7 .mg-container')[0];
            var form1_parent = document.querySelectorAll('.md-form.template7')[0];
                fadeOutEffectBuy();

        }

        function fadeOutEffectBuy() {
            var fadeTarget = document.querySelectorAll('.md-form.template7 .mg-container')[0];
            var fadeTargetParent = document.querySelectorAll('.md-form.template7')[0];
            var fadeEffect = setInterval(function () {
                if(fadeTarget.style.opacity <= 0) {
                    fadeTargetParent.style.display = "none";
                    var form2 = document.querySelectorAll('.md-form.template7 .mg-container')[1];
                    var form2_parent = document.querySelectorAll('.md-form.template7')[1];
                        form2_parent.style.display = "block";
                        form2.style.visibility = "visible"
                        form2.style.opacity = "1";
                }
                if (!fadeTarget.style.opacity) {
                    fadeTarget.style.opacity = 1;
                }
                if (fadeTarget.style.opacity > 0) {
                    fadeTarget.style.opacity -= 0.1;
                } else {
                    clearInterval(fadeEffect);
                }
            }, 200);
        }

        function fadeOutEffectSell() {
            var fadeTarget = document.querySelectorAll('.md-form.template7 .mg-container')[1];
            var fadeEffect = setInterval(function () {
                if (!fadeTarget.style.opacity) {
                    fadeTarget.style.opacity = 1;
                }
                if (fadeTarget.style.opacity > 0) {
                    fadeTarget.style.opacity -= 0.1;
                } else {
                    clearInterval(fadeEffect);
                }
            }, 200);
        }
