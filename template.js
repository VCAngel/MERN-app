const template = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MERN App!</title>
    </head>
    
    <body>
        <noscript>You need to enable JavaScript to view the app.</noscript>
        <div id="root"></div>
        <script type="text/javascript" src="./dist/bundle.js"></script>
    </body>
    
    </html>`;
};

module.exports = template;