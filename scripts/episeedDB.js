const mongoose = require("mongoose")
const Episode = require("../models/episodemodel/episodemodel")
const MONGODB_URI = require("../config/keys")
mongoose.Promise = global.Promise

const episodeSeed = [
    {
        key: 1,
        number: 1,
        band: "Peace'd Out",
        title: "Peace'd Out debuts 'I Would Like To Feed Your Fingertips. To The Wolverines'",
        embed: "https://www.youtube.com/embed/EaTE4DeomGE",
        link: "https://youtu.be/EaTE4DeomGE",
        description: "Fresh out of recording their debut EP, Peace'd Out came by Bright Lights to debut the band with a live performance of 'I Would Like To Feed Your Fingertips. To The Wolverines'."
    },
    
    {
        key: 2,
        number: 2,
        band: "Peace'd Out",
        title: "Peace'd Out debuts 'Castlemania'",
        embed: "https://www.youtube.com/embed/sSC4Rw0HHAc",
        link: "https://youtu.be/sSC4Rw0HHAc",
        description: "Fresh out of recording their debut EP, Peace'd Out came by Bright Lights to debut the band with a live performance of 'Castlemania'."
    },
    
    {
        key: 3,
        number: 3,
        band: "Felled Trees",
        title: "Felled Trees perform Dinosaur Jr's 'Get Me'",
        embed: "https://www.youtube.com/embed/L41a6gFEoeo",
        link: "https://youtu.be/L41a6gFEoeo",
        description: "The indie supergroup, Felled Trees, featuring Sergie and Sasha Loobkoff, Garrett Klahn, Ed Breckenridge, Steve Choi, and Roger Camero, perform 'Get Me' at Bright Lights."
    },
    
    {
        key: 4,
        number: 4,
        band: "Surf Riot",
        title: "Surf Riot perfom 'Woods'",
        embed: "https://www.youtube.com/embed/zqJmLiFnon8",
        link: "https://youtu.be/zqJmLiFnon8",
        description: "Surf Riot recorded a 3 song EP at Bright Lights, and luckily we recorded it with the cameras rolling through the entire process. Check out 'Woods'."
    },
    
    {
        key: 5,
        number: 5,
        band: "Surf Riot",
        title: "Surf Riot perform 'Angela's Song'",
        embed: "https://www.youtube.com/embed/S894LGFIvgw",
        link: "https://youtu.be/S894LGFIvgw",
        description: "Surf Riot recorded a 3 song EP at Bright Lights, and luckily we recorded it with the cameras rolling through the entire process. Check out 'Angela's Song'."
    },
    
    {
        key: 6,
        number: 6,
        band: "Surf Riot",
        title: "Surf Riot perform 'You Are An Aperture'",
        embed: "https://www.youtube.com/embed/0qbnD36LhZ8",
        link: "https://youtu.be/0qbnD36LhZ8",
        description: "Surf Riot recorded a 3 song EP at Bright Lights, and luckily we recorded it with the cameras rolling through the entire process. Check out 'You Are An Aperture'."
    }
]

const connect_db = () => {

    console.log("in connect_db")
    mongoose.connect(
        MONGODB_URI || "mongodb://localhost/BlbDB"
    )
};


const seedDB = () => {

    Episode.remove({}, function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('successfully removed documents');
        }
    })

    for (let epi of episodeSeed) {  
        const epi_instance = new Episode(epi);
        epi_instance.save().catch(err => console.log(err))
    }

}

module.exports = {
    seedDB,
    connect_db
}
