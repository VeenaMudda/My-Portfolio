import { Component } from "react";

class BasicFigure extends Component {
    render() {
        return (
            <figure>
                <img src={this.props.filename} alt={this.props.caption}/>
            </figure>
        )
    }
}

export default BasicFigure;