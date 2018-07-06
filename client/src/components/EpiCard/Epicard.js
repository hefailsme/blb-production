
import React from 'react';
import { Container, Row, Col, Fa, View, Button } from 'mdbreact'
import axios from 'axios'
import './Epicard.css'

class EpiCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          episodes: []
        }
    }


    componentDidMount() {
        axios.get('api/episodes')
        .then(res => {
            this.setState({ episodes: res.data })
            console.log(this.state.episodes)
        })
    }
    render() {
        return (
        <div>
            <Container>
                    <h2 className="h1-responsive font-weight-bold text-center my-5">PAST EPISODES</h2>
                    <p className="epi-comment">AS WE AWAIT THE ARRIVAL OF BRIGHT LIGHTS BASEMENT'S NEW WEB SERIES, 
                        TAKE A LOOK AT PAST LIVE PERFORMANCES FROM BRIGHT LIGHTS V2.0  </p>
                    <hr className="my-5"/>  
                <Row>
                    {this.state.episodes.map(episodes => 
                    <Col lg="4" md="12" className="mb-lg-0 mb-4">
                        <View hover className="rounded z-depth-2 mb-4" waves>
                            <iframe title="Episode" width="280" height="250" src={episodes.embed} frameborder="0" 
                            allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </View>
                        <a className="pink-text"><h6 className="font-weight-bold mb-3">
                        <p><a className="font-weight-bold">EPISODE: {episodes.number}</a></p>
                        <Fa icon="film" className="pr-2"></Fa>{episodes.band}</h6></a>
                        <h4 className="font-weight-bold mb-3"><strong>{episodes.title}</strong></h4>
                        <p className="dark-grey-text">{episodes.description}</p> 
                        <Button href={episodes.link} target="_blank" onClick={episodes.link} color="pink" rounded size="md">WATCH NOW</Button>
                        <hr className="my-5"/>  
                    </Col>
                    )}
                </Row>
            </Container>
        </div>
        )
    }
}

  export default EpiCard