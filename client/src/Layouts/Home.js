import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import EpiList from '../components/HomeCard/HomeCard'
import Footer from '../components/Footer/Footer'
// import './App.css'

class Home extends React.Component {
    
    componentDidMount() {

    }

    render () {
        return (
            <div className="App">
                <Navbar />
                <Jumbotron />
                <EpiList />
                <Footer />
            </div>
        )
    }   
}

export default Home