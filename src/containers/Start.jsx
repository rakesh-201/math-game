import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { Session } from '../utils/storage'

class Start extends React.Component {

    state = {
        player: "player"
    }

    setNameOfPlayer = (event) => {
        this.setState({ player: event.target.value })
    }

    clicked = () => {
        Session.set("onlinePlayer", this.state.player)
        this.props.startPressed();
    }

    render() {
        return (
            <div>
                <div className="App-brandname">
                    {/* <i className="fas fa-graduation-cap"></i> */}
                    <i class="fa fa-gamepad" aria-hidden="true"></i>

                    <br />
                    <h3>Are You Ready For A Lot Of</h3>
                    <h1>Mathhh?</h1>
                </div>
                <Input text="Enter Your Name" onInputChange={this.setNameOfPlayer} />
                <p>

                </p>
                <Button isClicked={this.clicked}>Start</Button>
            </div>
        )
    }
}
export default Start;