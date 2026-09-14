<!DOCTYPE html>
<html lang="ur" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>دوستی اکھاڑہ - 12 ٹہنی & AI والٹ</title>
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#1a0f07">
    <style>
        :root {
            --bg-primary: #120a05;
            --bg-card: #22140a;
            --accent-gold: #e5a93c;
            --accent-red: #d94336;
            --accent-blue: #2a75d3;
            --text-light: #f5e9da;
            --border-gold: rgba(229, 169, 60, 0.3);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            user-select: none;
        }

        body {
            background-color: var(--bg-primary);
            color: var(--text-light);
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            padding-bottom: 20px;
        }

        header {
            width: 100%;
            max-width: 480px;
            background: linear-gradient(180deg, #2c1a0e 0%, var(--bg-primary) 100%);
            padding: 15px;
            text-align: center;
            border-bottom: 2px solid var(--accent-gold);
            box-shadow: 0 4px 15px rgba(0,0,0,0.5);
        }

        h1 {
            color: var(--accent-gold);
            font-size: 1.6rem;
            letter-spacing: 1px;
            text-shadow: 0 2px 4px rgba(0,0,0,0.8);
        }

        .container {
            width: 100%;
            max-width: 480px;
            padding: 15px;
        }

        /* Card Styles */
        .card {
            background: var(--bg-card);
            border: 1px solid var(--border-gold);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 15px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }

        /* Auth Form */
        .auth-box input {
            width: 100%;
            padding: 12px;
            margin: 8px 0;
            background: #180d06;
            border: 1px solid var(--border-gold);
            border-radius: 8px;
            color: #fff;
            font-size: 1rem;
            text-align: right;
        }

        .btn {
            width: 100%;
            padding: 12px;
            background: linear-gradient(180deg, #f3be58 0%, var(--accent-gold) 100%);
            color: #000;
            font-weight: bold;
            font-size: 1rem;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            margin-top: 10px;
            transition: all 0.2s;
        }

        .btn:active {
            transform: scale(0.98);
        }

        .btn-secondary {
            background: linear-gradient(180deg, #3d2514 0%, #26160a 100%);
            color: var(--accent-gold);
            border: 1px solid var(--accent-gold);
        }

        .toggle-link {
            text-align: center;
            margin-top: 12px;
            color: var(--accent-gold);
            cursor: pointer;
            font-size: 0.9rem;
            text-decoration: underline;
        }

        /* Dashboard & Wallet */
        .wallet-card {
            background: linear-gradient(135deg, #2e1b0e 0%, #170d06 100%);
            border: 2px solid var(--accent-gold);
            text-align: center;
        }

        .balance-title {
            font-size: 0.9rem;
            color: #b5a495;
        }

        .balance-amount {
            font-size: 2.2rem;
            color: var(--accent-gold);
            font-weight: bold;
            margin: 5px 0 15px 0;
        }

        .action-btns {
            display: flex;
            gap: 10px;
        }

        .action-btns .btn {
            flex: 1;
            margin-top: 0;
        }

        /* Game Board Area */
        .game-card {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .game-status {
            font-size: 1.1rem;
            font-weight: bold;
            margin-bottom: 10px;
            color: var(--accent-gold);
        }

        #boardCanvas {
            background-color: #d2a679;
            border: 4px solid #5c3a21;
            border-radius: 8px;
            box-shadow: inset 0 0 20px rgba(0,0,0,0.4);
            touch-action: none;
        }

        /* AI Chat Box */
        .ai-box {
            border-left: 3px solid var(--accent-gold);
        }

        .ai-header {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: bold;
            color: var(--accent-gold);
            margin-bottom: 10px;
        }

        .chat-logs {
            height: 100px;
            overflow-y: auto;
            background: #150b05;
            padding: 8px;
            border-radius: 6px;
            font-size: 0.85rem;
            margin-bottom: 8px;
            border: 1px solid rgba(255,255,255,0.05);
        }

        .chat-input-group {
            display: flex;
            gap: 5px;
        }

        .chat-input-group input {
            flex: 1;
            padding: 8px;
            background: #180d06;
            border: 1px solid var(--border-gold);
            border-radius: 6px;
            color: #fff;
        }

        .chat-input-group button {
            width: auto;
            padding: 8px 15px;
            margin: 0;
        }

        /* Modal Popup */
        .modal {
            display: none;
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.8);
            justify-content: center;
            align-items: center;
            z-index: 100;
        }

        .modal-content {
            background: var(--bg-card);
            padding: 20px;
            border-radius: 12px;
            width: 90%;
            max-width: 400px;
            border: 1px solid var(--accent-gold);
        }

        .hidden { display: none !important; }
    </style>
</head>
<body>

<header>
    <h1>دوستی اکھاڑہ 🏆</h1>
</header>

<div class="container">

    <!-- Auth Screen -->
    <div id="authScreen" class="card auth-box">
        <h2 id="authTitle" style="text-align: center; color: var(--accent-gold); margin-bottom: 15px;">لاگ ان کریں</h2>
        <input type="text" id="username" placeholder="اپنا نام لکھیں">
        <input type="password" id="password" placeholder="پاسورڈ لکھیں">
        <button class="btn" id="authBtn" onclick="handleAuth()">لاگ ان کریں</button>
        <div class="toggle-link" id="toggleAuth" onclick="toggleAuthMode()">نیا اکاؤنٹ بنائیں؟</div>
    </div>

    <!-- Main App Screen (Hidden until Login) -->
    <div id="mainScreen" class="hidden">
        
        <!-- User Header / Logout -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span>خوش آمدید، <strong id="userDisplay" style="color: var(--accent-gold);"></strong></span>
            <button class="btn-secondary" style="padding: 5px 10px; font-size: 0.8rem; border-radius: 5px; cursor: pointer;" onclick="logout()">لاگ آؤٹ</button>
        </div>

        <!-- Wallet Card -->
        <div class="card wallet-card">
            <div class="balance-title">موجودہ والٹ بیلنس</div>
            <div class="balance-amount" id="balanceDisplay">Rs 0</div>
            <div class="action-btns">
                <button class="btn" onclick="openModal('deposit')">➕ ڈیپازٹ</button>
                <button class="btn btn-secondary" onclick="openModal('withdraw')">➖ ودڈرا</button>
            </div>
        </div>

        <!-- 12 Tehni Game Card -->
        <div class="card game-card">
            <div class="game-status" id="gameStatus">آپ کی باری (لال گوٹیاں)</div>
            <canvas id="boardCanvas" width="320" height="320"></canvas>
            <button class="btn btn-secondary" style="margin-top: 15px;" onclick="resetGame()">نئی گیم شروع کریں</button>
        </div>

        <!-- Smart AI Assistant -->
        <div class="card ai-box">
            <div class="ai-header">
                🤖 AI اسسٹنٹ (گیم & والٹ رہنما)
            </div>
            <div class="chat-logs" id="chatLogs">
                <div><strong>AI:</strong> سلام! میں آپ کا ایڈوانس اسسٹنٹ ہوں۔ بارہ ٹہنی گیم کی چالیں پوچھیں یا والٹ کی معلومات!</div>
            </div>
            <div class="chat-input-group">
                <input type="text" id="aiInput" placeholder="کوئی سوال پوچھیں...">
                <button class="btn" onclick="sendAiMessage()">بھیجیں</button>
            </div>
        </div>

    </div>
</div>

<!-- Modal Popup for Deposit / Withdraw -->
<div class="modal" id="walletModal">
    <div class="modal-content">
        <h3 id="modalTitle" style="color: var(--accent-gold); margin-bottom: 10px;"></h3>
        <p style="font-size: 0.85rem; color: #ccc; margin-bottom: 10px;">رقم درج کریں (Easypaisa/JazzCash/Bank):</p>
        <input type="number" id="modalAmount" style="width: 100%; padding: 10px; background: #110803; border: 1px solid var(--border-gold); color: #fff; border-radius: 6px; margin-bottom: 15px;" placeholder="رقم لکھیں">
        <button class="btn" onclick="processTransaction()">کنفرم کریں</button>
        <button class="btn btn-secondary" onclick="closeModal()" style="margin-top: 5px;">کینسل</button>
    </div>
</div>

<script>
    // --- State Management ---
    let isSignupMode = false;
    let currentUser = null;
    let currentModalType = '';

    // --- Service Worker Registration for PWA ---
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(err => console.log('SW Reg Fail:', err));
    }

    // --- Auto Login Check ---
    window.onload = function() {
        const savedUser = localStorage.getItem('dyg_user');
        if (savedUser) {
            currentUser = JSON.parse(savedUser);
            showMainScreen();
        }
    };

    function toggleAuthMode() {
        isSignupMode = !isSignupMode;
        document.getElementById('authTitle').innerText = isSignupMode ? "نیا اکاؤنٹ بنائیں" : "لاگ ان کریں";
        document.getElementById('authBtn').innerText = isSignupMode ? "اکاؤنٹ بنائیں" : "لاگ ان کریں";
        document.getElementById('toggleAuth').innerText = isSignupMode ? "پہلے سے اکاؤنٹ ہے؟ لاگ ان کریں" : "نیا اکاؤنٹ بنائیں؟";
    }

    function handleAuth() {
        const u = document.getElementById('username').value.trim();
        const p = document.getElementById('password').value.trim();

        if (!u || !p) {
            alert('براہ کرم تمام خانے پر کریں!');
            return;
        }

        let users = JSON.parse(localStorage.getItem('dyg_db_users') || '{}');

        if (isSignupMode) {
            if (users[u]) {
                alert('اس نام سے اکاؤنٹ پہلے سے موجود ہے!');
                return;
            }
            users[u] = { password: p, balance: 500 }; // 500 Welcome Bonus
            localStorage.setItem('dyg_db_users', JSON.stringify(users));
            alert('اکاؤنٹ کامیابی سے بن گیا! 500 روپے بونس شامل کر دیا گیا ہے۔');
        }

        // Login
        if (users[u] && users[u].password === p) {
            currentUser = { username: u, balance: users[u].balance };
            localStorage.setItem('dyg_user', JSON.stringify(currentUser));
            showMainScreen();
        } else {
            alert('غلط نام یا پاسورڈ!');
        }
    }

    function logout() {
        localStorage.removeItem('dyg_user');
        currentUser = null;
        document.getElementById('mainScreen').classList.add('hidden');
        document.getElementById('authScreen').classList.remove('hidden');
    }

    function showMainScreen() {
        document.getElementById('authScreen').classList.add('hidden');
        document.getElementById('mainScreen').classList.remove('hidden');
        document.getElementById('userDisplay').innerText = currentUser.username;
        updateBalanceDisplay();
        initGame();
    }

    function updateBalanceDisplay() {
        document.getElementById('balanceDisplay').innerText = `Rs ${currentUser.balance}`;
        // Sync to DB
        let users = JSON.parse(localStorage.getItem('dyg_db_users') || '{}');
        if (users[currentUser.username]) {
            users[currentUser.username].balance = currentUser.balance;
            localStorage.setItem('dyg_db_users', JSON.stringify(users));
        }
        localStorage.setItem('dyg_user', JSON.stringify(currentUser));
    }

    // --- Wallet Modals ---
    function openModal(type) {
        currentModalType = type;
        document.getElementById('modalTitle').innerText = type === 'deposit' ? 'رقم ڈیپازٹ کریں' : 'رقم ودڈرا کریں';
        document.getElementById('modalAmount').value = '';
        document.getElementById('walletModal').style.display = 'flex';
    }

    function closeModal() {
        document.getElementById('walletModal').style.display = 'none';
    }

    function processTransaction() {
        const amt = parseInt(document.getElementById('modalAmount').value);
        if (isNaN(amt) || amt <= 0) {
            alert('صحیح رقم درج کریں!');
            return;
        }

        if (currentModalType === 'deposit') {
            currentUser.balance += amt;
            alert(`Rs ${amt} کامیابی سے ڈیپازٹ کر دیے گئے ہیں!`);
        } else {
            if (amt > currentUser.balance) {
                alert('آپ کے پاس اتنا بیلنس موجود نہیں ہے!');
                return;
            }
            currentUser.balance -= amt;
            alert(`Rs ${amt} ودڈرا کی درخواست موصول ہو گئی ہے۔`);
        }
        updateBalanceDisplay();
        closeModal();
    }

    // --- AI Assistant Logic ---
    function sendAiMessage() {
        const input = document.getElementById('aiInput');
        const txt = input.value.trim();
        if (!txt) return;

        const chatLogs = document.getElementById('chatLogs');
        chatLogs.innerHTML += `<div><strong>آپ:</strong> ${txt}</div>`;
        input.value = '';

        let reply = "میں آپ کی بات سمجھ گیا۔ بارہ ٹہنی گیم میں اپنی گوٹیوں کو حریف کی پھنسانے کی کوشش کریں!";
        if (txt.includes('بیلنس') || txt.includes('پیسے') || txt.includes('ڈیپازٹ')) {
            reply = `آپ کا موجودہ بیلنس Rs ${currentUser.balance} ہے۔ آپ ڈیپازٹ والے بٹن سے مزید بیلنس شامل کر سکتے ہیں۔`;
        } else if (txt.includes('کیسے') || txt.includes('طریقہ') || txt.includes('رول')) {
            reply = "بارہ ٹہنی میں 12 نیلے اور 12 لال گوٹیاں ہوتی ہیں۔ حریف کی گوٹی کے اوپر سے چھلانگ لگا کر اسے مارا جاتا ہے۔";
        }

        setTimeout(() => {
            chatLogs.innerHTML += `<div style="color:var(--accent-gold);"><strong>AI:</strong> ${reply}</div>`;
            chatLogs.scrollTop = chatLogs.scrollHeight;
        }, 500);
    }

    // --- 12 Tehni (Bead 12) Game Engine ---
    const canvas = document.getElementById('boardCanvas');
    const ctx = canvas.getContext('2d');
    const nodes = [];
    let selectedNode = null;
    let turn = 'player'; // 'player' (Red) or 'ai' (Blue)

    // Build 5x5 Grid Board (Classic Bead 12 structure)
    function buildBoard() {
        nodes.length = 0;
        const padding = 35;
        const step = (canvas.width - padding * 2) / 4;

        for (let r = 0; r < 5; r++) {
            for (let c = 0; c < 5; c++) {
                let piece = null;
                // Red Pieces (Player) - Top 2 rows + 2 middle
                if (r < 2 || (r === 2 && c < 2)) piece = 'player';
                // Blue Pieces (AI) - Bottom 2 rows + 2 middle
                else if (r > 2 || (r === 2 && c > 2)) piece = 'ai';

                nodes.push({
                    id: r * 5 + c,
                    r, c,
                    x: padding + c * step,
                    y: padding + r * step,
                    piece
                });
            }
        }
    }

    function drawBoard() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Lines
        ctx.strokeStyle = '#5c3a21';
        ctx.lineWidth = 3;

        // Grid Lines
        for (let i = 0; i < 5; i++) {
            // Horizontal
            ctx.beginPath();
            ctx.moveTo(nodes[i*5].x, nodes[i*5].y);
            ctx.lineTo(nodes[i*5+4].x, nodes[i*5+4].y);
            ctx.stroke();

            // Vertical
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[20+i].x, nodes[20+i].y);
            ctx.stroke();
        }

        // Diagonals
        ctx.beginPath(); ctx.moveTo(nodes[0].x, nodes[0].y); ctx.lineTo(nodes[24].x, nodes[24].y); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(nodes[4].x, nodes[4].y); ctx.lineTo(nodes[20].x, nodes[20].y); ctx.stroke();

        // Draw Pieces
        nodes.forEach(node => {
            if (node.piece) {
                ctx.beginPath();
                ctx.arc(node.x, node.y, 14, 0, Math.PI * 2);
                ctx.fillStyle = node.piece === 'player' ? '#d94336' : '#2a75d3';
                ctx.fill();
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 2;
                ctx.stroke();

                // Highlight Selected
                if (selectedNode === node) {
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, 18, 0, Math.PI * 2);
                    ctx.strokeStyle = '#e5a93c';
                    ctx.lineWidth = 3;
                    ctx.stroke();
                }
            }
        });
    }

    canvas.addEventListener('click', function(e) {
        if (turn !== 'player') return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Find clicked node
        const clicked = nodes.find(n => Math.hypot(n.x - x, n.y - y) < 20);

        if (clicked) {
            if (clicked.piece === 'player') {
                selectedNode = clicked;
            } else if (selectedNode && !clicked.piece) {
                // Try Move
                if (isValidMove(selectedNode, clicked)) {
                    clicked.piece = 'player';
                    selectedNode.piece = null;
                    selectedNode = null;
                    drawBoard();
                    checkWin();
                    turn = 'ai';
                    document.getElementById('gameStatus').innerText = "AI چلو سوچ رہا ہے...";
                    setTimeout(aiMove, 800);
                    return;
                }
            }
            drawBoard();
        }
    });

    function isValidMove(from, to) {
        const dr = Math.abs(from.r - to.r);
        const dc = Math.abs(from.c - to.c);
        // Simple 1-step move
        return (dr <= 1 && dc <= 1);
    }

    function aiMove() {
        // AI Logic: Find first available AI piece and move to empty adjacent spot
        const aiPieces = nodes.filter(n => n.piece === 'ai');
        const emptyNodes = nodes.filter(n => !n.piece);

        for (let p of aiPieces) {
            for (let e of emptyNodes) {
                if (isValidMove(p, e)) {
                    e.piece = 'ai';
                    p.piece = null;
                    turn = 'player';
                    document.getElementById('gameStatus').innerText = "آپ کی باری (لال گوٹیاں)";
                    drawBoard();
                    checkWin();
                    return;
                }
            }
        }
        turn = 'player';
        document.getElementById('gameStatus').innerText = "آپ کی باری (لال گوٹیاں)";
    }

    function checkWin() {
        const redCount = nodes.filter(n => n.piece === 'player').length;
        const blueCount = nodes.filter(n => n.piece === 'ai').length;

        if (blueCount === 0) {
            alert('مبارک ہو! آپ جیت گئے! Rs 100 کا انعام شامل کر دیا گیا ہے۔');
            currentUser.ba