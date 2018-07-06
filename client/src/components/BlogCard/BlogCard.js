import React, { Component } from 'react';
import { Container, Row, Col, Fa, View, Button } from 'mdbreact';
import axios from 'axios'
import './BlogCard.css'

class Blog extends Component {

    constructor(props) {
        super(props)
        this.state = {
            blogs: []
        }
    }

    componentDidMount() {
        axios.get('/api/blogs')
        .then(res => {
          console.log(res)
          this.setState({ blogs: res.data });
          console.log(this.state.blogs);
        });    
    }
    render() {
        return(
        <div>
            <Container>
                <h2 className="h1-responsive font-weight-bold text-center my-5">STUDIO BLOG ARCHIVE</h2>
                <p className="epi-comment">AS WE AWAIT THE ARRIVAL OF BRIGHT LIGHTS BASEMENT'S NEW STUDIO BLOG, 
                        TAKE A LOOK AT BRIGHT LIGHTS V2.0 STUDIO BLOG ARCHIVE </p>
                    <hr className="my-5"/>  
            <Row>
                {this.state.blogs.map(blogs =>
                <Col lg="4" md="12" className="mb-lg-0 mb-4">

                    <View hover className="rounded z-depth-2 mb-4" waves>
                        <iframe title="Episode" width="300" height="250" src={blogs.embed} frameborder="0" 
                        allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </View>

                        <a className="pink-text"><h6 className="font-weight-bold mb-3">
                        <Fa icon="music" className="pr-2"></Fa>{blogs.band}</h6></a>
                        <h4 className="font-weight-bold mb-3"><strong>{blogs.title}</strong></h4>
                        <p><a className="font-weight-bold">DATE: {blogs.date}</a></p>
                        <p className="dark-grey-text">{blogs.description}</p> 
                        <Button href={blogs.link} target="_blank" onClick={blogs.link} color="pink" rounded size="md">WATCH NOW</Button>
                        <hr className="my-5"/>  

                </Col>
                )}
            </Row>
          </Container>
        </div>
        )
    }
}
    
export default Blog;