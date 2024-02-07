let tik = document.querySelector("#tik")
let you = document.querySelector("#you")
let git = document.querySelector("#git")
let h1 = document.querySelector("#h1header")

h1.onclick = () => {
    let title = "Employee";
    let names = ["Youssef","Tasneem","Jasmine","logy"]
    let jobs = ["programming a website with 'HTML,CSS,JS'","make stuff with polymer clay","Drawing and make landscape picture","make articles"]
    let write = document.write(`
    <html>
    <head>
        <title>${title}</title>
        <style>
            * {
                margin:0;
                padding:0;
            }
            body {
                display:flex;
                align-items:center;
                flex-direction:column ;
                justify-content:center;
                height:100vh;
                margin:30px;
                background:linear-gradient(to top, lightgray,gray);
            }
            button {
                padding:10px;
                font-size:30px;
                background-color:blue;
                color:white;
                border:none;
                font-family:cursive;
                border-radius:20px;
            }
            h1 {
                font-size:30px;
                margin-bottom:20px
                color:blue;
                
            }
            div {
                display:inline;
            }
        </style>
    </head>
    <body>
        <div>
            <h1 align="center">${names[0]} work as ${jobs[0]}</h1>
            <h1 align="center">${names[1]} work as ${jobs[2]}</h1>
            <h1 align="center">${names[2]} work as ${jobs[2]}</h1>
            <h1 align="center">${names[3]} work as ${jobs[3]}</h1>
        </div>
        <button onclick="make()">Return</button>
        <script>
            function make() {
                location.replace("index.html")
            }
        </script>
    </body>
    </html>
    `)
}

tik.onclick = () => {
    location.replace("https://www.tiktok.com")
}

you.onclick = () => {
    location.replace("https://www.youtube.com")
}

git.onclick = () => {
    location.replace("https://github.com/ym43")
}