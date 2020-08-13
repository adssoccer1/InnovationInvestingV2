import React, {Component} from 'react';
import Stock from './Stock.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion} from 'react-bootstrap';


class Fund extends Component {

    render(){

        if(this.props.holdings[this.props.displayFund].length === 0){
            return <h1>Loading...This can take several minutes. </h1>

        }else{

            const stockList = this.props.holdings[this.props.displayFund].map((item, index) => {
                return <Stock key={item.ticker} fund={this.props.displayFund} index={index} {...item}/>
            })
            
            return (
    
                <div className="FundDisplay">
                    <Accordion defaultActiveKey="1">
                        {stockList}
                    </Accordion>
                </div>

            );
        }
    }
  }
  
  export default Fund;
  