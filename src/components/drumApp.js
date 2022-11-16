import React, { Component } from "react";
import Heater from "../audioClips/Heater-1.mp3";
import Heater2 from "../audioClips/Heater-2.mp3";
import Heater3 from "../audioClips/Heater-3.mp3";
import Heater4 from "../audioClips/Heater-4.mp3";
import clap from "../audioClips/Clap.mp3";
import OpenHH from "../audioClips/OpenHH.mp3";
import kicknhat from "../audioClips/Kick_n_Hat.mp3";
import kick from "../audioClips/Kick.mp3";
import ClosedHH from "../audioClips/ClosedHH.mp3";

class DrumApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastAudio: "",
      audioInfo: [
        { name: "Heater-1", refName: "audio1", source: Heater },
        { name: "Heater-2", refName: "audio2", source: Heater2 },
        { name: "Heater-3", refName: "audio3", source: Heater3 },
        { name: "Heater-4", refName: "audio4", source: Heater4 },
        { name: "Clap", refName: "audio5", source: clap },
        { name: "Open HH", refName: "audio6", source: OpenHH },
        { name: "kick n' hat", refName: "audio7", source: kicknhat },
        { name: "Kick", refName: "audio8", source: kick },
        { name: "ClosedHH", refName: "audio9", source: ClosedHH },
      ],
    };

    this.audio1 = React.createRef();
    this.audio2 = React.createRef();
    this.audio3 = React.createRef();
    this.audio4 = React.createRef();
    this.audio5 = React.createRef();
    this.audio6 = React.createRef();
    this.audio7 = React.createRef();
    this.audio8 = React.createRef();
    this.audio9 = React.createRef();
  }

  //listen for what key the user presses and run the handleplay function for the right one.
  componentDidMount = () => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Q" || e.key === "q") {
        document.getElementById("heater").focus();
        document.getElementById("heater").click();
        this.handlePlay(this.state.audioInfo[0]);
      } else if (e.key === "W" || e.key === "w") {
        document.getElementById("heater2").click();
        document.getElementById("heater2").focus();
        this.handlePlay(this.state.audioInfo[1]);
      } else if (e.key === "E" || e.key === "e") {
        document.getElementById("heater3").click();
        document.getElementById("heater3").focus();
        this.handlePlay(this.state.audioInfo[2]);
      } else if (e.key === "A" || e.key === "a") {
        document.getElementById("heater4").click();
        document.getElementById("heater4").focus();
        this.handlePlay(this.state.audioInfo[3]);
      } else if (e.key === "S" || e.key === "s") {
        document.getElementById("clap").click();
        document.getElementById("clap").focus();
        this.handlePlay(this.state.audioInfo[4]);
      } else if (e.key === "D" || e.key === "d") {
        document.getElementById("openHH").click();
        document.getElementById("openHH").focus();
        this.handlePlay(this.state.audioInfo[5]);
      } else if (e.key === "Z" || e.key === "z") {
        document.getElementById("kicknhat").click();
        document.getElementById("kicknhat").focus();
        this.handlePlay(this.state.audioInfo[6]);
      } else if (e.key === "X" || e.key === "x") {
        document.getElementById("kick").click();
        document.getElementById("kick").focus();
        this.handlePlay(this.state.audioInfo[7]);
      } else if (e.key === "C" || e.key === "c") {
        document.getElementById("closedHH").click();
        document.getElementById("closedHH").focus();
        this.handlePlay(this.state.audioInfo[8]);
      }
    });
  };

  handlePlay = (src) => {
    this[src.refName].current.currentTime = 0;
    this[src.refName].current.play();
    //new Audio(src.source).play();
    this.setState({ lastAudio: src.name });
  };

  render() {
    return (
      <div id="drum-machine">
        <button
          className="drum-pad"
          id="heater"
          onClick={() => this.handlePlay(this.state.audioInfo[0])}
        >
          <audio
            controls
            ref={this.audio1}
            className="clip"
            id="Q"
            src={Heater}
            type="audio/mpeg"
          >
            Your browser does not support the audio tag.
          </audio>
          Q
        </button>
        <button
          className="drum-pad"
          id="heater2"
          onClick={() => this.handlePlay(this.state.audioInfo[1])}
        >
          <audio
            controls
            ref={this.audio2}
            className="clip"
            id="W"
            src={Heater2}
            type="audio/mpeg"
          >
            Your browser does not support the audio tag.
          </audio>
          W
        </button>
        <button
          className="drum-pad shadow-5"
          id="heater3"
          onClick={() => this.handlePlay(this.state.audioInfo[2])}
        >
          <audio
            controls
            ref={this.audio3}
            className="clip"
            id="E"
            src={Heater3}
            type="audio/mpeg"
          >
            Your browser does not support the audio tag.
          </audio>
          E
        </button>
        <br />
        <button
          className="drum-pad"
          id="heater4"
          onClick={() => this.handlePlay(this.state.audioInfo[3])}
        >
          <audio
            controls
            ref={this.audio4}
            className="clip"
            id="A"
            src={Heater4}
            type="audio/mpeg"
          >
            Your browser does not support the audio tag.
          </audio>
          A
        </button>
        <button
          className="drum-pad"
          id="clap"
          onClick={() => this.handlePlay(this.state.audioInfo[4])}
        >
          <audio
            controls
            ref={this.audio5}
            className="clip"
            id="S"
            src={clap}
            type="audio/mpeg"
          >
            Your browser does not support the audio tag.
          </audio>
          S
        </button>
        <button
          className="drum-pad"
          id="openHH"
          onClick={() => this.handlePlay(this.state.audioInfo[5])}
        >
          <audio
            controls
            ref={this.audio6}
            className="clip"
            id="D"
            src={OpenHH}
            type="audio/mpeg"
          >
            Your browser does not support the audio tag.
          </audio>
          D
        </button>
        <br />
        <button
          className="drum-pad"
          id="kicknhat"
          onClick={() => this.handlePlay(this.state.audioInfo[6])}
        >
          <audio
            controls
            ref={this.audio7}
            className="clip"
            id="Z"
            src={kicknhat}
            type="audio/mpeg"
          >
            Your browser does not support the audio tag.
          </audio>
          Z
        </button>
        <button
          className="drum-pad"
          id="kick"
          onClick={() => this.handlePlay(this.state.audioInfo[7])}
        >
          <audio
            controls
            ref={this.audio8}
            className="clip"
            id="X"
            src={kick}
            type="audio/mpeg"
          >
            Your browser does not support the audio tag.
          </audio>
          X
        </button>
        <button
          className="drum-pad"
          id="closedHH"
          onClick={() => this.handlePlay(this.state.audioInfo[8])}
        >
          <audio
            controls
            ref={this.audio9}
            className="clip"
            id="C"
            src={ClosedHH}
            type="audio/mpeg"
          >
            Your browser does not support the audio tag.
          </audio>
          C
        </button>

        <div id="display">
          {this.state.lastAudio}
          <span />
        </div>

        {/*copy these and change them*/}
      </div>
    );
  }
}

export default DrumApp;
