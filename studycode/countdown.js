let timerInterval;
        let remainingTime = 0;

        function startCountdown() {
            const hours = parseInt(document.getElementById('hours').value) || 0;
            const minutes = parseInt(document.getElementById('minutes').value) || 0;
            const seconds = parseInt(document.getElementById('seconds').value) || 0;

            remainingTime = (hours * 3600) + (minutes * 60) + seconds;

            document.getElementById('checkArea').style.display = 'block';
            document.getElementById('inputArea').style.display = 'none';

            updateCountdown();
            timerInterval = setInterval(updateCountdown, 1000);
        }

        function stopCountdown() {
            clearInterval(timerInterval);
        }

        function resetCountdown() {
            clearInterval(timerInterval);
            remainingTime = 0;
            document.getElementById('inputArea').style.display = 'flex';
            document.getElementById('checkArea').style.display = 'none';
            document.getElementById('hours').value = "";
            document.getElementById('minutes').value = "";
            document.getElementById('seconds').value = "";
        }

        function updateCountdown() {
            const hours = Math.floor(remainingTime / 3600);
            const minutes = Math.floor((remainingTime % 3600) / 60);
            const seconds = remainingTime % 60;

            const formattedTime = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
            document.getElementById('countdown').textContent = formattedTime;

            remainingTime--;

            if (remainingTime < 0) {
                clearInterval(timerInterval);
                alert("Time's up!");
                resetCountdown();
            }
        }

        function pad(num) {
            return num.toString().padStart(2, '0');
        }