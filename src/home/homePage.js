import { Component } from "react";
import "../pictures/makeup_artist_applying_makeup.jpeg";
import "../pictures/self_makeup.jpg";
import "../pictures/chef.jpg";
import BasicFigure from "./BasicFigure";

class HomePage extends Component {
    //constructor
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.handleClick = this.handleClick.bind(this);
        this.incrementCount = this.incrementCount.bind(this);
    }

    handleClick(event) {
        console.log("Beauty Club");
    }

    incrementCount() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div>
                <div>
                    <button type="button" onClick={this.handleClick}>
                        Beauty Club
                    </button>
                </div>
                <div>Enroll in September/October Batch  Apply Now</div>
                <figure>
                    <img src="../pictures/makeup_artist_applying_makeup" alt="makeup artist applying makeup"/>
                    <figcaption>This caption should be removed.</figcaption>
                </figure>
                <p>The current count is: {this.state.count}</p>
                <BasicFigure filename="../pictures/makeup_artist_applying_makeup.jpeg" caption="Remove caption"/>
                <BasicFigure filename="../pictures/self_makeup.jpg" caption="Remove caption"/>
                <BasicFigure filename="../pictures/chef.jpg" caption="Remove Caption"/>
            </div>
        )
    }
}

export default HomePage;