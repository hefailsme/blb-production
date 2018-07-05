import React, { Component } from 'react';
import { Container, Row, Col, Mask, Fa, View, Button} from 'mdbreact';
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
                <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img className="img-fluid" src="../../assets/images/donskate.jpg" alt="don-skate"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
              </Col>
              <Col lg="7">
                  <h3 className="pink-text font-weight-bold mb-3 p-0"><strong>THE BIRTH OF BRIGHT LIGHTS</strong></h3>
                  <p className="story">Today is the end of an era. I said goodbye to one of the most special places I was lucky enough to call home. 
                    I didn’t physically live there, but my musical spirit definitely did. 
                    Endless thanks to Dan Smith who graciously opened the door and handed me a key to what eventually would become Bright Lights. 
                    It has been a true journey, both sonically and spiritually. As this chapter comes to a end, 
                    I must also give thanks and all the love to Max Mcdonald, Raymond Camero, 
                    Steve Choi and Erol Ulug for making Bright Lights the most enlightened and soulful studio experience, 
                    joining me on this very wild adventure. Thank you to the bands, artists, and fellow engineers/producers 
                    that brought their talents to Bright Lights. As sad as I am losing a place like this, 
                    there is a light at the end of the tunnel...and it surely is bright. See you soon, Bright Lights Basement. 💡</p>
              </Col>
            </Row>
            <hr className="my-5"/>
            <Row>
              <Col lg="7">
                <a className="pink-text">
                  <h6 className="font-weight-bold mb-3">
                    <Fa icon="newspaper" className="pr-2"></Fa>Lifestyle
                  </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0"><strong>Title of the news</strong></h3>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                <p>by <a><strong>Carine Fox</strong></a>, 14/08/2018</p>
                <Button color="pink" size="md" className="mb-lg-0 mb-4 waves-light">Read more</Button>
              </Col>
              <Col lg="5">
                <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg" alt="Sample image"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
              </Col>
            </Row>
            <hr className="my-5"/>
            <Row>
              <Col lg="5">
                <View className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg" alt="Sample image"/>
                  <a><Mask overlay="white-slight"/></a>
                </View>
              </Col>
              <Col lg="7">
                  <a className="indigo-text"><h6 className="font-weight-bold mb-3"><Fa icon="newspaper" className="pr-2"></Fa>Food</h6></a>
                  <h3 className="font-weight-bold mb-3 p-0"><strong>Title of the news</strong></h3>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia sit amet.</p>
                  <p>by <a><strong>Carine Fox</strong></a>, 11/08/2018</p>
                  <Button color="indigo" size="md" className="waves-light ">Read more</Button>
              </Col>
            </Row>
          </Container>
    );
  }
}

export default List;