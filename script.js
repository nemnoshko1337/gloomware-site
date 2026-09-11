* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #07070b;
    color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

.background {
    position: fixed;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: -1;
}

.glow {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    filter: blur(130px);
    opacity: 0.15;
}

.glow-1 {
    background: #3366ff;
    top: -200px;
    left: -100px;
}

.glow-2 {
    background: #8b45ff;
    right: -150px;
    top: 300px;
}


/* NAVBAR */

.navbar {
    height: 80px;
    padding: 0 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid rgba(255,255,255,0.05);

    position: sticky;
    top: 0;

    background: rgba(7,7,11,0.75);
    backdrop-filter: blur(20px);

    z-index: 100;
}

.logo {
    font-size: 23px;
    font-weight: 800;
    letter-spacing: -1px;
}

.logo-gloom {
    color: #4b82ff;
}

.logo-ware {
    color: #9b62ff;
}

nav {
    display: flex;
    gap: 35px;
}

nav a {
    color: #888894;
    font-size: 14px;
    transition: 0.25s;
}

nav a:hover {
    color: white;
}

.nav-button {
    padding: 11px 20px;

    border-radius: 10px;

    background: rgba(255,255,255,0.07);

    border: 1px solid rgba(255,255,255,0.08);

    font-size: 13px;

    transition: 0.25s;
}

.nav-button:hover {
    background: rgba(255,255,255,0.13);
    transform: translateY(-2px);
}


/* HERO */

.hero {
    min-height: 760px;

    padding: 100px 7%;

    display: grid;
    grid-template-columns: 1fr 1fr;

    align-items: center;

    gap: 70px;
}

.hero-content {
    max-width: 650px;
}

.version {
    display: inline-block;

    padding: 7px 12px;

    border: 1px solid rgba(100,130,255,0.25);

    border-radius: 8px;

    color: #7895ff;

    font-size: 11px;
    font-weight: 700;

    letter-spacing: 2px;

    margin-bottom: 25px;
}

.hero h1 {
    font-size: clamp(55px, 7vw, 92px);

    line-height: 0.95;

    letter-spacing: -5px;

    margin-bottom: 30px;
}

.hero h1 span {
    background: linear-gradient(
        90deg,
        #4d80ff,
        #9360ff
    );

    -webkit-background-clip: text;
    color: transparent;
}

.hero p {
    max-width: 540px;

    color: #898995;

    font-size: 17px;

    line-height: 1.7;

    margin-bottom: 35px;
}

.hero-buttons {
    display: flex;
    gap: 12px;

    flex-wrap: wrap;
}

.button {
    padding: 14px 22px;

    border-radius: 11px;

    font-size: 14px;
    font-weight: 600;

    transition: 0.25s;
}

.button.primary {
    background: linear-gradient(
        100deg,
        #4678ff,
        #8753ef
    );

    box-shadow:
        0 10px 40px rgba(70,100,255,0.18);
}

.button.primary:hover {
    transform: translateY(-3px);

    box-shadow:
        0 15px 50px rgba(70,100,255,0.3);
}

.button.secondary {
    border: 1px solid rgba(255,255,255,0.1);

    background: rgba(255,255,255,0.04);
}

.button.secondary:hover {
    background: rgba(255,255,255,0.08);

    transform: translateY(-3px);
}

.author {
    margin-top: 30px;

    color: #565662;

    font-size: 12px;
}

.author b {
    color: #777783;
}


/* FAKE GUI */

.hero-interface {
    display: flex;
    justify-content: center;
}

.fake-window {
    width: 100%;
    max-width: 560px;

    border-radius: 18px;

    overflow: hidden;

    background: rgba(15,15,22,0.9);

    border: 1px solid rgba(255,255,255,0.08);

    box-shadow:
        0 30px 100px rgba(0,0,0,0.5),
        0 0 80px rgba(70,90,255,0.08);

    transform: perspective(1000px) rotateY(-4deg) rotateX(2deg);

    transition: 0.5s;
}

.fake-window:hover {
    transform:
        perspective(1000px)
        rotateY(0deg)
        rotateX(0deg)
        translateY(-8px);
}

.window-top {
    height: 50px;

    padding: 0 18px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid rgba(255,255,255,0.06);

    color: #b0b0bc;

    font-size: 13px;
    font-weight: 600;
}

.window-buttons {
    display: flex;
    gap: 5px;
}

.window-buttons i {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: #444450;
}

.window-body {
    display: flex;

    min-height: 360px;
}

.sidebar {
    width: 145px;

    padding: 20px 10px;

    border-right: 1px solid rgba(255,255,255,0.05);
}

.side {
    padding: 11px 13px;

    border-radius: 8px;

    color: #777783;

    font-size: 12px;

    margin-bottom: 5px;

    transition: 0.2s;
}

.side.active {
    color: white;

    background: linear-gradient(
        90deg,
        rgba(75,120,255,0.25),
        rgba(120,70,255,0.12)
    );
}

.modules {
    flex: 1;

    padding: 20px;
}

.module {
    min-height: 70px;

    padding: 15px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 10px;

    border-radius: 11px;

    border: 1px solid rgba(255,255,255,0.05);

    background: rgba(255,255,255,0.025);
}

.module b {
    display: block;

    font-size: 13px;

    margin-bottom: 5px;
}

.module small {
    color: #646470;

    font-size: 10px;
}

.toggle {
    width: 34px;
    height: 19px;

    border-radius: 20px;

    background: #292931;

    position: relative;
}

.toggle::after {
    content: "";

    position: absolute;

    width: 13px;
    height: 13px;

    border-radius: 50%;

    background: #777783;

    left: 3px;
    top: 3px;

    transition: 0.2s;
}

.toggle.on {
    background: linear-gradient(
        90deg,
        #4d7cff,
        #8a55ff
    );
}

.toggle.on::after {
    left: 18px;

    background: white;
}


/* SECTIONS */

.section {
    padding: 120px 7%;
}

.section-title {
    display: flex;
    align-items: center;

    gap: 15px;
}

.section-title span {
    color: #5b7eff;

    font-size: 12px;
    font-weight: 700;
}

.section-title h2 {
    font-size: 38px;

    letter-spacing: -2px;
}

.section-description {
    color: #70707c;

    margin-top: 15px;

    line-height: 1.6;
}


/* FEATURES */

.features-grid {
    margin-top: 50px;

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 15px;
}

.feature-card {
    padding: 28px;

    min-height: 220px;

    border-radius: 15px;

    background:
        linear-gradient(
            145deg,
            rgba(255,255,255,0.045),
            rgba(255,255,255,0.015)
        );

    border: 1px solid rgba(255,255,255,0.06);

    transition: 0.3s;
}

.feature-card:hover {
    transform: translateY(-6px);

    border-color: rgba(100,130,255,0.25);

    background:
        linear-gradient(
            145deg,
            rgba(75,110,255,0.08),
            rgba(255,255,255,0.015)
        );
}

.feature-icon {
    font-size: 22px;

    margin-bottom: 35px;

    color: #718dff;
}

.feature-card h3 {
    font-size: 17px;

    margin-bottom: 12px;
}

.feature-card p {
    color: #71717c;

    font-size: 13px;

    line-height: 1.6;
}


/* SHOWCASE */

.screenshots {
    margin-top: 50px;

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 15px;
}

.screenshot {
    aspect-ratio: 16 / 10;

    border-radius: 15px;

    overflow: hidden;

    border: 1px solid rgba(255,255,255,0.07);

    background:
        linear-gradient(
            135deg,
            #101018,
            #171722
        );
}

.placeholder {
    height: 100%;

    display: flex;

    align-items: center;

    justify-content: center;

    color: #454550;

    font-size: 12px;

    letter-spacing: 2px;
}


/* ABOUT */

.about-box {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 100px;

    padding: 70px;

    border-radius: 20px;

    background:
        linear-gradient(
            120deg,
            rgba(55,80,180,0.08),
            rgba(110,60,180,0.05)
        );

    border: 1px solid rgba(255,255,255,0.06);
}

.about-label {
    color: #718cff;

    font-size: 11px;

    letter-spacing: 2px;

    font-weight: 700;
}

.about h2 {
    margin-top: 20px;

    font-size: 46px;

    letter-spacing: -2px;
}

.about h2 span,
.download h2 span {
    color: #8160ff;
}

.about-box > p {
    align-self: center;

    color: #777783;

    line-height: 1.8;

    font-size: 15px;
}


/* DOWNLOAD */

.download {
    padding: 150px 7%;

    text-align: center;

    border-top:
        1px solid rgba(255,255,255,0.05);
}

.download h2 {
    margin-top: 20px;

    font-size: clamp(40px, 6vw, 65px);

    letter-spacing: -3px;
}

.download p {
    margin-top: 15px;

    color: #71717c;
}

.download-buttons {
    margin-top: 35px;

    display: flex;

    justify-content: center;

    gap: 10px;
}


/* FOOTER */

footer {
    padding: 40px 7%;

    display: flex;

    align-items: center;

    justify-content: space-between;

    border-top:
        1px solid rgba(255,255,255,0.05);

    color: #454550;

    font-size: 11px;
}

.footer-logo {
    font-size: 17px;

    font-weight: 800;
}

.footer-logo span {
    color: #4c7cff;
}

.footer-logo b {
    color: #865cff;
}

.footer-author {
    color: #555560;
}


/* RESPONSIVE */

@media (max-width: 1000px) {

    .hero {
        grid-template-columns: 1fr;
    }

    .hero-interface {
        max-width: 650px;
    }

    .features-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .screenshots {
        grid-template-columns:
            1fr 1fr;
    }

    .about-box {
        grid-template-columns: 1fr;
        gap: 30px;
    }
}


@media (max-width: 650px) {

    .navbar {
        padding: 0 5%;
    }

    nav {
        display: none;
    }

    .hero {
        padding: 80px 5%;
    }

    .hero h1 {
        letter-spacing: -3px;
    }

    .section {
        padding: 80px 5%;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }

    .screenshots {
        grid-template-columns: 1fr;
    }

    .about-box {
        padding: 35px;
    }

    .about h2 {
        font-size: 35px;
    }

    footer {
        flex-direction: column;
        gap: 15px;
    }

    .sidebar {
        width: 100px;
    }
}
