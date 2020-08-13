import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

class IntroInfo extends Component {

    render(){

        
        return(
            <div class="introInfoDiv">
                <p>Ark Invest is an investment fund focused on investing in disruptive innovation. Learn more about them on their website <a href="https://ark-invest.com/">here</a>. </p>
                <p>Ark Invest manages six publicly traded ETFs that are listed <a href="https://ark-invest.com/etfs/" rel="noopener noreferrer" target="_blank">here</a>. Each ETF is focused on an unique "innovation platform". Learn about Ark's research and
                    then return here to be updated with the latest information for each of their ETFs. Click on the ticker buttons below to navigate between each of 
                    Ark's ETFs.
                <p id="disclaimer">Disclaimer: the data on this site is sourced from <a href="https://ark-funds.com/investor-resources" rel="noopener noreferrer" target="_blank">here </a> and is not garuanteed to be up to date. Check the date below the selected ticker to see when the data was pulled last.</p> 
                </p>

                <Button onClick={this.props.toggle}>Hide</Button>
            </div>
        )
    }
}


export default IntroInfo;
