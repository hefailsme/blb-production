import React, { Component } from 'react';
import { Container, Row, Col, Mask, View } from 'mdbreact';
import axios from 'axios';
import './HomeCard.css'

class List extends Component {

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
            <h2 className="h1-responsive font-weight-bold text-center my-5">THE STORY OF BRIGHT LIGHTS</h2>
            <Row>
              <Col lg="5">
                <View className="rounded z-depth-1 mb-lg-0 mb-6" hover waves>
                  <img className="img-fluid" src={require('../../assets/images/donskate.jpg')} alt="don-skate"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
                  <h5>Donny and Danny Phillips of The Warriors, outside of Bright Lights v1.0</h5>
              </Col>
              <Col lg="7">
                  <h3 className="pink-text font-weight-bold mb-3 p-0"><strong>THE BIRTH OF BRIGHT LIGHTS</strong></h3>
                  <p className="story">Bright Lights Studio was born out of a small rehearsal space in Santa Ana, Ca. 
                  The studio was the jam room for Jason Hedrick, which he sublet to Roger Camero. In need of a new place
                  to write and record music, Roger made use of the shared space and named it, "Bright Lights", 
                  due to the fluorescent lighting in the room. By recording standards, the place was tiny, extremely lacking 
                  in acoutics, soundproofing, and ventilation. Luckily for him, most of his clientele came from the punk and hardcore community,
                  where bands know what being DIY is all about. During this time, Roger recorded albums for bands such as, The Warriors,
                  Force of Change, Dear Life, Retaliate, and Vendetta. While recording Force of Change, Roger met Erol Ulug, 
                  who coincidentally ended up renting a room in the same building. The studio served its purpose as a stepping stone towards
                  something greater, and in 2007, Roger made a move literally down the street.
                   </p>
              </Col>
            </Row>
            <hr className="my-5"/>
            <Row>
              <Col lg="7">
                <h3 className="pink-text font-weight-bold mb-3 p-0"><strong>BRIGHT LIGHTS v2.0</strong></h3>
                <p className="story2">In 2007, a game changing opportunity was presented to Roger. Dan Smith, a fellow OC musician and tattoo artist,
                  was recording a demo with Roger earlier in the year. During the session, Roger expressed his desire to find something 
                  better than recording at a rehearsal space. Lucky for him, Dan was already a tenant in a warehouse just down the street. 
                  The warehouse was home to his tattoo shop and was a practice space for his band. He offered to let Roger rent out the back of his warehouse, 
                  which eventually became Bright Lights version 2. After a couple years sharing the space, 
                  Dan found himself a new home tattooing in Los Angeles, and Roger inherited the whole warehouse. 
                  That is when Erol re-entered the picture and became a full time studio mate. Bright Lights 2.0 served as their homebase for 11 years.
                  Throughout the years, bands such as Thrice, RX Bandits, Comeback Kid, Night Demon, Silver Snakes, Seahaven, Seizures, and Graf Orlock graced Bright Lights with their presence.
                  Unfortunately, all great things eventually come to an end. In the summer of 2018, 
                  the building that Bright Lights operated in was sold, and the production duo was forced to move out.
                </p>
 
              </Col>
              <Col lg="5">
                <View className="rounded z-depth-1 mb-lg-0 mb-4" hover waves>
                  <img className="img-fluid" src={require('../../assets/images/thricebl.jpeg')} alt="thrice-bl"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
                <h5>Thrice recording at Bright Lights v2.0</h5>
              </Col>
            </Row>
            <hr className="my-5"/>
            <Row>
              <Col lg="5">
                <View className="rounded z-depth-1 mb-lg-0 mb-4" hover waves>
                  <img className="img-fluid" src={require('../../assets/images/basement.jpg')} alt="basement"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
                  <h5>Bright Lights Basement awaits. Coming July 2018.</h5>
              </Col>
              <Col lg="7">
                  <h3 className="pink-text font-weight-bold mb-3 p-0"><strong>COMING SOON IN THE SUMMER OF 2018: "BRIGHT LIGHTS BASEMENT"</strong></h3>
                  <p className="story3">We are truly excited for the future. We have teamed up with Lockout Music Studios to bring Downtown Santa Ana
                  a brand new DIY recording facility. Located on the 4th Street strip, Bright Lights Basement is an underground (literally) multi-track
                  digital recording studio with new features. Roger and Rollie have expanded operations, bringing in live video studio sessions as a major
                  part of the new studio. The new format will come in the form of a web series, with fellow bands and artists joining the crew
                  hanging out in DTSA and performing live at the studio. We are also pleased to announce that the studio will be compiling a studio blog,
                  showing a glimpse of the recording vibes at Bright Lights Basement.</p>                  
              </Col>
            </Row>
            <hr className="my-5"/>
          </Container>
    );
  }
}

export default List;