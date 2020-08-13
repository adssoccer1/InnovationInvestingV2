import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Button} from 'react-bootstrap';

class MainNavBar extends Component {

    render(){


        const navStyle = {
            textalign : 'center',
            margin: '10px'
          };

        const buttonStyle = {
            background: 'white',
            opacity: '.8', 
            color: 'black'
      
          }

        return(
          <div style={navStyle}>
            <Nav fill  defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link><Button onClick={this.props.handler} style={buttonStyle}>ARKK</Button></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={this.props.handler}><Button style={buttonStyle}>ARKG</Button></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={this.props.handler}><Button style={buttonStyle}>ARKF</Button></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={this.props.handler} ><Button style={buttonStyle}>ARKW</Button></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={this.props.handler} ><Button style={buttonStyle}>ARKQ</Button></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={this.props.handler} ><Button style={buttonStyle}>PRINT</Button></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={this.props.handler} disabled><Button style={buttonStyle}>IZRL</Button></Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        )
    }
}


export default MainNavBar;
