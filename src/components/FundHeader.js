import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

class FundHeader extends Component {

    render(){

        const dropDownStyle = {
            color: 'black', 
            margin: '10px'
          }

        return(
          
            <>
                <Dropdown style={dropDownStyle}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Sort By
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={this.props.handler}>Largest Position by Weight</Dropdown.Item>
                        <Dropdown.Item onClick={this.props.handler}>Increasing Market Cap</Dropdown.Item>
                        <Dropdown.Item onClick={this.props.handler}>Closest to 52 Week Low</Dropdown.Item>
                        <Dropdown.Item onClick={this.props.handler}>Closest to 52 Week High</Dropdown.Item>
                        <Dropdown.Item onClick={this.props.handler}>% of Company Owned by {this.props.displayFund}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <h6>{this.props.sortBy}</h6>
            </>
        
        )
    }

}


export default FundHeader;
