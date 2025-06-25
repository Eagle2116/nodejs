const express = require('express');
const router = express.Router();


//get api 
router.get('/movies', (req, res) => {

    res.send('["The Shining","Incendies","Rang de Basanti","Finding Demo"]');
});

//get api by param id
router.get('/movies/:moviesId', (req, res) => {

    const movies = ["The Shining", "Incendies", "Rang de Basanti", "Finding Demo"];
    const request = req.params.moviesId;
    if (request < movies.length) {
        res.send(movies[request])
    } else {

        res.send('not a valid ID');
    }
})


//get api
router.get('/films', (req, res) => {


   res.send({"All Films": 
    [
    { "id": 1, "name": "The Shining" },
    { "id": 2, "name": "Incendies" },
    { "id": 3, "name": "Rang de Basanti" },
    { "id": 4, "name": "Finding Demo" }
  ]
});

});

//get api param by id

router.get('/films/:filmld', (req, res) => {
    const movieList = [
        { "id": 1, "name": "The Shining" },
        { "id": 2, "name": "Incendies" },
        { "id": 3, "name": "Rang de Basanti" },
        { "id": 4, "name": "Finding Demo" }
    ];
    let request = req.params.filmld;
    let response = false;
    for (let i= 0; i < movieList.length; i++) {
        if (movieList[i].id == request) {
            response = true;
            res.send(movieList[i]);
            break;
        }
    }
    if (response == false) {
        res.send('No film exists with this id');
    }

})

module.exports = router;