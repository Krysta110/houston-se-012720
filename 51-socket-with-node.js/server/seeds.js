const Painting = require('./models/Painting')

Painting.sync() 
.then(() => Painting.destroy({where: {}}))
.then(() => paintings.forEach(painting => Painting.create(painting)))

// Painting.destroy({where: {}}) //destroy all the rows


const paintings = [
    {
        "title":  "Portrait of a Carthusian",
        "artist": "Portrait",
        "url": "https://d32dm0rphc51dk.cloudfront.net/pVc7CubFzVlPhbErTAqyYg/medium.jpg",
    },
    {
        "title": "Bust of Pseudo-Seneca",
        "artist": "He is Fire, He is Death",
        "url":   "https://d32dm0rphc51dk.cloudfront.net/pLcp7hFbgtfYnmq-b_LXvg/medium.jpg",
    },
    {
        "title": "Portrait of Gerard de Lairesse",
        "artist": "An uninteresting dragon",
        "url":  "https://d32dm0rphc51dk.cloudfront.net/6b4QduWxeA1kSnrifgm2Zw/medium.jpg",
    }
]

// paintings.forEach(painting => Painting.create(painting))