import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import EpiCard from '../components/EpiCard'
import Footer from '../components/Footer/Footer'
// import './App.css'

class Episode extends React.Component {

    componentDidMount() {
    
    }
    
    render () {
        return (
    <div className="App">
        <Navbar />
        <Jumbotron />
        <EpiCard />
        <Footer />
        </div>
    )
}
}
export default Episode