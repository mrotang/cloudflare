           let count = <?php echo $timer_btn; ?>;
            let counter = setInterval(timer, 1000);
            function timer() {
                count = count - 1;
                if (count <= 0) {
                    document.getElementById('elpe-wait1').style.display = 'none';
                    document.getElementById('elpe-generate').style.display = 'block';
                    clearInterval(counter);
                    return;
                }
                document.getElementById("elpe-time").innerHTML = count;
            }

            function elpegenerate() {
                document.getElementById('elpe').focus();
                document.getElementById('elpe-link').style.display = 'none';
                document.getElementById('elpe-wait2').style.display = 'block';

                setInterval(function () {
                    document.getElementById('elpe-wait2').style.display = 'none';
                }, 30000);
                setInterval(function () {
                    document.getElementById('elpe-link').style.display = 'block';
                }, 2000);
            }
