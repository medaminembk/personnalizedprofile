import React from 'react'
import { Row, Col, Card, Button } from 'antd';
import { GithubFilled, FacebookFilled, LinkedinFilled, GoogleSquareFilled } from '@ant-design/icons';
import PropTypes from "prop-types";

const Profile = (props) => {
    const { fullName = "User", bio = "I'm the best", profession="Student" } = props;
    const styleglobal={
        display: 'flex', 
        justifyContent: "center", 
        height: "100vh", 
        backgroundColor: "#D9D7F1"
    }
    const stylecard={
        alignSelf: "center", 
        backgroundColor: "#D9D7F1"
    }
    const styletitle={
        fontSize:"28px", 
        fontWeight:"700", 
        color:"#000B49", 
        fontFamilly:"Arial"
    }
    const styleadress={
        fontSize:"24px", 
        fontWeight:"400",
         color:"#000B49", 
         fontFamilly:"Arial"    
    }
    const styleprofession={ fontSize: "24px", fontWeight: "400", color: "#000B49", fontFamilly: "Arial" }

    const stylebio={ fontSize: "20px", fontWeight: "400", color: "#000B49", fontFamilly: "Arial" }
    const styleicon={
        fontSize:"20px", color:"#000B49", marginRight:'20px'
    }
    const stylebutton={
        color:"white", backgroundColor:"#000B49", fontSize:"18px"
    }
    return (
        <div style={styleglobal}>
      <Card style={stylecard}>
        <Row justify="center">
          {props.children}
        </Row>
        <Row justify="center">
        <label style={styletitle}>{fullName}</label>
        </Row>

        <Row justify="center">
        <label style={styleadress}>Sousse</label>

        </Row>
        <Row justify="center">
          <label style={styleprofession}>{profession}</label>
        </Row>

        <Row justify="center">
          <label style={stylebio}>{bio}</label>
        </Row>

        <Row justify="center" style={{ marginTop: "5%" , marginBottom: "5%", display:"flex", justifyContent:"column", alignItems:'center' }}>
       
          
        
            <GithubFilled style={styleicon}/>

      
   
            <FacebookFilled  style={styleicon} />

       
    
            <LinkedinFilled  style={styleicon}/>

        
          
            <GoogleSquareFilled  style={styleicon}/>

     
        </Row>
        <Row justify="center">
          <Button style={stylebutton}
          onClick={() => props.alertMyInput(fullName)}
          >
            Contact
          </Button>
        </Row>
        <Row>
         
        </Row>

      </Card>
    </div>
    )
}

export default Profile

Profile.propTypes = {
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
    alertMyInput:PropTypes.func,
    // anyProp: PropTypes.any,
    // booleanProp: PropTypes.bool,
    // numberProp: PropTypes.number,
    // stringProp: PropTypes.string,
    // functionProp: PropTypes.func
};
