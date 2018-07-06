const mongoose = require("mongoose")
const Blog = require("../models/blogmodel/blogmodel")
const MONGODB_URI = require("../config/keys")
mongoose.Promise = global.Promise

const blogSeed = [
    {
        key: 1,
        number: 1,
        date: "9-10-2013",
        embed: "https://www.youtube.com/embed/MiP21jrUyAc",
        link: "https://youtu.be/MiP21jrUyAc",
        title: "Felled Trees in Studio (1 of 3)",
        description: "The indie supergroup feating members of Samian, Knapsack, Thrice, and No Motiv recorded an entire album covering Dinosaur Jr's, 'Where You Been', at Bright Lights. Here is the 1st of 3 promo videos talking about the making of, 'Where We Been'."
    },
    
    {
        key: 2,
        number: 2,
        date: "9-10-2013",
        embed: "https://www.youtube.com/embed/VoDtDdccapU",
        link: "https://youtu.be/VoDtDdccapU",
        title: "Felled Trees in Studio (2 of 3)",
        description: "The indie supergroup feating members of Samian, Knapsack, Thrice, and No Motiv recorded an entire album covering Dinosaur Jr's, 'Where You Been', at Bright Lights. Here is the 2nd of 3 promo videos talking about the making of, 'Where We Been'."
    },
    
    {
        key: 3,
        number: 3,
        date: "9-10-2013",
        embed: "https://www.youtube.com/embed/-0njcvU3nKA",
        link: "https://youtu.be/-0njcvU3nKA",
        title: "Felled Trees in Studio (3 of 3)",
        description: "The indie supergroup feating members of Samian, Knapsack, Thrice, and No Motiv recorded an entire album covering Dinosaur Jr's, 'Where You Been', at Bright Lights. Here is the 3rd and last promo video talking about the making of, 'Where We Been'."
    },
    
    {
        key: 4,
        number: 4,
        date: "4-11-2013",
        embed: "https://www.youtube.com/embed/jw-6_fqlXYU",
        link: "https://youtu.be/jw-6_fqlXYU",
        title: "Peace'd Out in Studio (1 of 3)",
        description: "We've got a series of videos from Peace'd Out talking about the birth of the band, and the recording process for their debut EP on Siren Records. Here is video 1 of 3."
    },
    
    {
        key: 5,
        number: 5,
        date: "4-11-2013",
        embed: "https://www.youtube.com/embed/IL2gPkjr2uI",
        link: "https://youtu.be/IL2gPkjr2uI",
        title: "Peace'd Out in Studio (2 of 3)",
        description: "We've got a series of videos from Peace'd Out talking about the birth of the band, and the recording process for their debut EP on Siren Records. Here is video 2 of 3."
    },
    
    {
        key: 6,
        number: 6,
        date: "4-11-2013",
        embed: "https://www.youtube.com/embed/sO9CoSOKI_M",
        link: "https://youtu.be/sO9CoSOKI_M",
        title: "Peace'd Out in Studio (3 of 3)",
        description: "We've got a series of videos from Peace'd Out talking about the birth of the band, and the recording process for their debut EP on Siren Records. Here is the third and final installment."
    }  
]

const connect_db = () => {
    console.log("in connect_db")
    mongoose.connect(
        MONGODB_URI || "mongodb://localhost/BlbDB"
    )
}

const seedDB = () => {
    
        Blog.remove({}, function(err) {
            if (err) {
                console.log(err)
            } else {
                console.log('successfully removed documents');
            }
        })
    
        for (let blog of blogSeed) {  
            const blog_instance = new Blog(blog);
            blog_instance.save().catch(err => console.log(err))
        }    
    }
    
    module.exports = {
        seedDB,
        connect_db
    }