import React, {Component} from 'react';
import {Card, Accordion, Image} from 'react-bootstrap';
import StockInfo from './StockInfo.js';



class Stock extends Component {



    getSortBy(){
        console.log("touched sort by")
        if(this.props.sortBy === "Largest Position by Weight"){
            return this.props.weight;
        }
        return -1;
    }

    render() {

        const cardStyle = {
        }

        const imageStyle = {
            width: '8%',
            height: 'auto',
            'marginRight': '20px'
        }; 
      
        const link = "https://www.google.com/search?ei=KZEwX7DMLdSGytMP2aaHmAs&q="+ this.props.ticker + "+stock&oq=tsla+stock&gs_lcp=CgZwc3ktYWIQAzIFCAAQsQMyBAgAEEMyBAgAEEMyBwgAELEDEEMyAggAMgcIABCxAxBDMgQIABBDMgcIABCxAxBDMgQIABBDMgcIABCxAxAKOgQIABBHUJicCFiYnAhg9Z4IaABwAXgAgAFXiAFXkgEBMZgBAKABAaoBB2d3cy13aXrAAQE&sclient=psy-ab&ved=0ahUKEwjwhI2YrY_rAhVUg3IEHVnTAbMQ4dUDCAw&uact=5";

        

        return(
            <div className="Stock">
                <Card style={cardStyle}>
                    <Accordion.Toggle as={Card.Header} eventKey={this.props.index + 1}>

                        <div className="accordianToggle">
                            <div className="accordianToggleLeft">
                                <Image style={imageStyle} src={this.props.logo} fluid roundedCircle />
                                {this.props.company} <span className="accordianTickerHeader">({this.props.ticker})</span>
                            </div>
                            <div className="accordianToggleRight"></div>

                            <table className="accordianToggleCenter">
                                <tbody className="accordianStockInfo">
                                    <tr>
                                        <td className="accordianColTitle">Previous Close</td>
                                        <td className="accordianColInfo">${this.props.price}</td>
                                        <td className="accordianColTitle">Market Cap</td>
                                        <td className="accordianColInfo">${this.props.marketCap} Million</td>
                                        <td className="accordianColTitle">% Weight of {this.props.fund}</td>  
                                        <td className="accordianColInfo">{this.props.weight}%</td>                                   
                                    </tr>
                                    <tr>
                                        <td className="accordianColTitle">52 Wk Low</td>
                                        <td className="accordianColInfo">${this.props.fiftyTwoWeekLow}</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>

                                        <td className="accordianColTitle">Value in {this.props.fund}</td>
                                        <td className="accordianColInfo">${Math.round(this.props.value / 1000000)} Million</td>
                                    </tr>
                                    <tr>
                                        <td className="accordianColTitle">52 Wk High</td>
                                        <td className="accordianColInfo">${this.props.fiftyTwoWeekHigh}</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td className="accordianColTitle">% of Company Owned</td>
                                        <td className="accordianColInfo">{Math.round( (parseInt(this.props.value, 10) / (parseInt(this.props.marketCap, 10) *1000000)) * 100 * 100) / 100}%</td>
                                    </tr>
                                    <tr>
                                    </tr>
                                    
                                </tbody>
                            </table>

                            <div id="clickForMoreInfo" >Click for more info!</div>

                        </div>


                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={this.props.index + 1}>
                        <Card.Body>
                        
                            <StockInfo {...this.props}></StockInfo>
                            <div className="stockInfoFooter">
                                <p>
                                    <span>{this.props.ticker} Website: <a rel="noopener noreferrer" target="_blank" href={this.props.weburl}>here</a></span> &nbsp;
                                    &nbsp;
                                    &nbsp;

                                    <span>Graph: <a rel="noopener noreferrer" target="_blank" href={link}>here</a></span>
                                </p>
                            </div>


                         </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </div>
        ) 
    }
}

export default Stock