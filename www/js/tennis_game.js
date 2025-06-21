document.getElementById('start-game').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('main-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';

    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const paddleWidth = width * 0.2;
    const paddleHeight = 15;
    const ballSize = 15;
    const ballSpeed = 1.5;
    const paddleSpeed = 10;
    const randomness = 0.3; // для имитации шероховатости

    let player1 = { x: (width - paddleWidth) / 2, y: height - 30, score: 0, prevX: 0, vx: 0 };
    let player2 = { x: (width - paddleWidth) / 2, y: 15, score: 0, prevX: 0, vx: 0 };

    let keysPressed = {};

    let ball = {
        x: width / 2,
        y: height / 2,
        vx: ballSpeed * (Math.random() > 0.5 ? 1 : -1),
        vy: ballSpeed * (Math.random() > 0.5 ? 1 : -1)
    };

    function drawPaddle(player) {
        ctx.fillStyle = '#0f0';
        ctx.fillRect(player.x, player.y, paddleWidth, paddleHeight);
    }

    function drawBall() {
        ctx.fillStyle = '#fff';
        ctx.fillRect(ball.x, ball.y, ballSize, ballSize);
    }

    function drawScores() {
        ctx.fillStyle = '#fff';
        ctx.font = '20px sans-serif';
        ctx.fillText(`P1: ${player1.score}`, 10, height - 10);
        ctx.fillText(`P2: ${player2.score}`, 10, 30);
    }

    function resetBall(loser) {
        ball.x = width / 2;
        ball.y = height / 2;
        ball.vx = ballSpeed * (Math.random() > 0.5 ? 1 : -1);
        ball.vy = loser === 1 ? -ballSpeed : ballSpeed;
    }

    function updateKeyboardControls() {
        player1.prevX = player1.x;
        player2.prevX = player2.x;

        if (keysPressed['a']) player1.x = Math.max(0, player1.x - paddleSpeed);
        if (keysPressed['d']) player1.x = Math.min(width - paddleWidth, player1.x + paddleSpeed);

        if (keysPressed['j']) player2.x = Math.max(0, player2.x - paddleSpeed);
        if (keysPressed['l']) player2.x = Math.min(width - paddleWidth, player2.x + paddleSpeed);

        player1.vx = player1.x - player1.prevX;
        player2.vx = player2.x - player2.prevX;
    }

    function applyBounceEffect(player) {
        // добавляем горизонтальную скорость ракетки и небольшую случайность
        ball.vx += player.vx * 0.2;
        ball.vx += (Math.random() - 0.5) * randomness;
        // ограничим максимальный отскок по X
        ball.vx = Math.max(-5, Math.min(5, ball.vx));
    }

    function gameLoop() {
        ctx.clearRect(0, 0, width, height);

        updateKeyboardControls();

        ball.x += ball.vx;
        ball.y += ball.vy;

        if (ball.x <= 0 || ball.x + ballSize >= width) ball.vx *= -1;

        if (ball.y + ballSize >= player1.y && ball.x + ballSize >= player1.x && ball.x <= player1.x + paddleWidth) {
            ball.vy *= -1;
            ball.y = player1.y - ballSize;
            applyBounceEffect(player1);
        }

        if (ball.y <= player2.y + paddleHeight && ball.x + ballSize >= player2.x && ball.x <= player2.x + paddleWidth) {
            ball.vy *= -1;
            ball.y = player2.y + paddleHeight;
            applyBounceEffect(player2);
        }

        if (ball.y > height) {
            player2.score++;
            if (player2.score >= 10) return alert('Игрок 2 победил!');
            resetBall(1);
        }

        if (ball.y < 0) {
            player1.score++;
            if (player1.score >= 10) return alert('Игрок 1 победил!');
            resetBall(2);
        }

        drawPaddle(player1);
        drawPaddle(player2);
        drawBall();
        drawScores();

        requestAnimationFrame(gameLoop);
    }

    if ('ontouchstart' in window) {
        canvas.addEventListener('touchmove', e => {
            e.preventDefault();
            for (const touch of e.touches) {
                if (touch.clientY > height / 2) {
                    player1.prevX = player1.x;
                    player1.x = Math.min(width - paddleWidth, Math.max(0, touch.clientX - paddleWidth / 2));
                    player1.vx = player1.x - player1.prevX;
                } else {
                    player2.prevX = player2.x;
                    player2.x = Math.min(width - paddleWidth, Math.max(0, touch.clientX - paddleWidth / 2));
                    player2.vx = player2.x - player2.prevX;
                }
            }
        }, { passive: false });
    } else {
        window.addEventListener('keydown', e => keysPressed[e.key.toLowerCase()] = true);
        window.addEventListener('keyup', e => keysPressed[e.key.toLowerCase()] = false);
    }

    gameLoop();
});
