route = (req, res) =>  {

    res.writeHead(200, { "Content-Type": "text/html" });

    switch(req.url) {
        case "/":
            res.write("Hello there!");
            break;
        default:
            res.write("Error 404: Page not found!");
    }

    res.end();

}

exports.route = route;