import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import BlogCard from '../components/BlogCard/BlogCard'
import Footer from '../components/Footer/Footer'
// import './App.css'

class Blog extends React.Component {

    render () {
        return (
    <div className="App">
        <Navbar />
        <Jumbotron />
        <BlogCard />
        <Footer />
        </div>
    )}
}

export default Blog