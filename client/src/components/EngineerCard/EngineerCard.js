import React, { Component } from 'react';
import { Container, Row, Col, Mask, View } from 'mdbreact';
import axios from 'axios';
import './EngineerCard.css'

class Engineer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      episodes: []
    };
  }

  componentDidMount() {
    axios.get('/api/episodes')
      .then(res => {
        console.log(res)
        this.setState({ episodes: res.data });
        console.log(this.state.episodes);
      });
  }

  render() {
    return (
          <Container>
            <h2 className="h1-responsive font-weight-bold text-center my-5">BRIGHT LIGHTS BASEMENT ENGINEERS</h2>
            <Row>
              <Col lg="5">
                <View className="rounded z-depth-1 mb-lg-0 mb-6" hover waves>
                  <img className="img-fluid roger-img" src={require('../../assets/images/roger.jpg')} alt="roger"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
                  <h5>Roger recording Aaron Brooks of Foreign Pain at Bright Lights 2.0</h5>
              </Col>
              <Col lg="7">
                  <h3 className="pink-text font-weight-bold mb-3 p-0"><strong>ABOUT ROGER CAMERO</strong></h3>
                  <p className="roger">Roger Camero is an audio engineer and musician, living in Orange County.
                      He has been active in the music industry for the past 20 years and started out playing in
                      the punk band, No Motiv, in 1998. Since then, he's played in bands such as The Warriors, Peace'd Out,
                      Retaliate, Grave Maker, and Felled Trees. As a solo artist, he goes by the name, He Fails Me.
                      In 2008 he started working as a touring Front-of-House Live Sound Engineer for RX Bandits, as well as a Tech
                      for artists such as Ben Harper & The Innocent Criminals, New Found Glory, The Used, and At The Drive In. 
                      His time on the road came to a close in 2016, and since then, his focus has been on record production.
                      In 2018, he shifted gears and has been studying Full Stack Web Development to go along with his musical skillset.
                      He is the co-owner of Bright Lights Basement, and also works out of Bright Mountain Studios in Keene, California,
                      and The Captain's Quarters in Ventura, California.
                   </p>
              </Col>
            </Row>
            <hr className="my-5"/>
            <Row>
              <Col lg="7">
                <h3 className="pink-text font-weight-bold mb-3 p-0"><strong>ABOUT EROL ULUG</strong></h3>
                <p className="rollie">Erol Ulug has been producing and engineering musicians and bands in the Southern California area for over thirteen years. 
                He got his start while still in high school, recording out of his bedroom and/or the local practice space. 
                Over the years he has worked with several notable bands involved in the local punk/hardcore/metal scene such as Dangers, 
                Final Fight, Graf Orlock, Seizures, Seahaven and Bleeding Through. In 2011 he graduated from California State 
                University Fullerton with a Bachelors of Music in Jazz Studies with an emphasis in electric guitar. 
                He currently co-owns Bright Lights Studios based in Santa Ana, CA and privately teaches guitar, 
                electric bass and drums in the northern Orange County area.
                </p>
 
              </Col>
              <Col lg="5">
                <View className="rounded z-depth-1 mb-lg-0 mb-4" hover waves>
                  <img className="img-fluid rollie-img" src={require('../../assets/images/rollie2.jpeg')} alt="rollie"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
                <h5>Rollie recording at Bright Lights 2.0</h5>
              </Col>
            </Row>
            <hr className="my-5"/>
          </Container>
    );
  }
}

export default Engineer;