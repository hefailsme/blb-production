import React from 'react'
import {Col, View} from 'mdbreact'
import './Jumbotron.css'

const Tron = () => (
    <div>
      <Col lg="12">
          <View>
            <img className="jumbotron" src={require('../../assets/images/BLB_Header_Final.png')} alt="jumbo"/>                
          </View>      
      </Col>
    </div>
  )


export default Tron