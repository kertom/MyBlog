function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const express = require('express');
const app = express();
//app.use(express.static('../dist/MyArticlesBlog/'));
app.use(express.static('./'));
app.get('/', function(req, res) {
    res.sendFile('www/index.html',
    {root:__dirname});//, {root: 'dist/MyArticlesBlog/'}
    res.sendFile('www/main-es2015.js', 
    {root:__dirname});

    res.sendFile('www/polyfills-es2015.js', 
    {root:__dirname});

    res.sendFile('www/vendor-es2015.js', 
    {root:__dirname});

    res.sendFile('www/runtime-es2015.js', 
    {root:__dirname});


  //);
});
app.listen(process.env.PORT || 8080);
