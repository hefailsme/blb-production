import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import EngineerCard from '../components/EngineerCard/EngineerCard'
import Footer from '../components/Footer/Footer'
import {Row} from 'mdbreact'


class Engineer extends React.Component {
    
    componentDidMount() {

    }

    render () {
        return (
            <div className="App">            
                <Row>
                <Navbar />
                </Row>
                <EngineerCard />
                <Footer />               
            </div>
        )
    }   
}

export default Engineer