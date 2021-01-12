var express = require('express')
var router = express.Router()
router.use(express.static(__dirname + '/../assets'))

//sendfile has been deprecated so when using sendFile, 
//we need to use absolute path

var path = {
    root: __dirname + './../layouts'
}

router.get('/', function (req, res) {
    res.sendFile('/posts.html', path)
})

module.exports = router