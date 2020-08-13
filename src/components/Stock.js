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
            'margin-right': '20px'
        }; 
      
        const link = "https://www.google.com/search?ei=KZEwX7DMLdSGytMP2aaHmAs&q="+ this.props.ticker + "+stock&oq=tsla+stock&gs_lcp=CgZwc3ktYWIQAzIFCAAQsQMyBAgAEEMyBAgAEEMyBwgAELEDEEMyAggAMgcIABCxAxBDMgQIABBDMgcIABCxAxBDMgQIABBDMgcIABCxAxAKOgQIABBHUJicCFiYnAhg9Z4IaABwAXgAgAFXiAFXkgEBMZgBAKABAaoBB2d3cy13aXrAAQE&sclient=psy-ab&ved=0ahUKEwjwhI2YrY_rAhVUg3IEHVnTAbMQ4dUDCAw&uact=5";

        

        return(
            <div class="Stock">
                <Card style={cardStyle}>
                    <Accordion.Toggle as={Card.Header} eventKey={this.props.index + 1}>

                        <div class="accordianToggle">
                            <div class="accordianToggleLeft">
                                <Image style={imageStyle} src={this.props.logo} fluid roundedCircle />
                                {this.props.company} <span class="accordianTickerHeader">({this.props.ticker})</span>
                            </div>
                            <div class="accordianToggleRight"></div>

                            <table class="accordianToggleCenter">
                                <tbody class="accordianStockInfo">
                                    <tr>
                                        <td class="accordianColTitle">Previous Close</td>
                                        <td class="accordianColInfo">${this.props.price}</td>
                                        <td class="accordianColTitle">Market Cap</td>
                                        <td class="accordianColInfo">${this.props.marketCap} Million</td>
                                        <td class="accordianColTitle">% Weight of {this.props.fund}</td>  
                                        <td class="accordianColInfo">{this.props.weight}%</td>                                   
                                    </tr>
                                    <tr>
                                        <td class="accordianColTitle">52 Wk Low</td>
                                        <td class="accordianColInfo">${this.props.fiftyTwoWeekLow}</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>

                                        <td class="accordianColTitle">Value in {this.props.fund}</td>
                                        <td class="accordianColInfo">${Math.round(this.props.value / 1000000)} Million</td>
                                    </tr>
                                    <tr>
                                        <td class="accordianColTitle">52 Wk High</td>
                                        <td class="accordianColInfo">${this.props.fiftyTwoWeekHigh}</td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                        <td class="accordianColTitle">% of Company Owned</td>
                                        <td class="accordianColInfo">{Math.round( (parseInt(this.props.value, 10) / (parseInt(this.props.marketCap, 10) *1000000)) * 100 * 100) / 100}%</td>
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
                            <div class="stockInfoFooter">
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