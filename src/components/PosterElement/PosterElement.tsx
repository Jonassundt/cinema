import React from "react";

import "./posterElements.css";

import Parameters from "../../Parameters";

interface PosterElementProps {
  poster: any;
  height: number;
}

type PosterElementState = {
  playing: boolean;
  audio: any;
  audioIndex: number;
};

class PosterElement extends React.Component<
  PosterElementProps,
  PosterElementState
  > {
  constructor(props: PosterElementProps) {
    super(props);
    this.state = { playing: false, audio: null, audioIndex: -1 };
  }

  static contextType = Parameters;

  playAudio = () => {
    if (!this.state.playing) {
      console.log(this.state.audio)
      this.state.audio.load();
      this.state.audio.play();
      this.state.audio.volume = this.context.params.volume / 10;
      this.setState({ playing: true });
    } else {
      this.state.audio.volume = this.context.params.volume / 10;
    }
  };

  componentDidMount() {
    const audio = new Audio(`/sounds/${this.props.poster.props.name}.mp3`);
    this.setState({ audio, audioIndex: this.context.params.posterIndex });
    if (this.context.params.volume) {
      this.playAudio();
    }
  }

  componentDidUpdate() {
    if (this.state.audioIndex === this.context.params.posterIndex) {
      if (this.context.params.volume) {
        this.playAudio();
      } else if (this.state.playing) {
        this.state.audio.pause();
        this.setState({ playing: false });
      }
    } else {
      this.state.audio.pause();
      const audio = new Audio(`/sounds/${this.props.poster.props.name}.mp3`);
      this.setState({
        playing: false,
        audio,
        audioIndex: this.context.params.posterIndex,
      });
      this.playAudio();
    }
  }

  render() {
    const animationName = this.props.poster.props.name + "Animation";

    const props = {
      height: this.props.height,
      width: this.props.height / 1.333,
      className: this.context.params.animation ? animationName : "",
    };
    return React.cloneElement(this.props.poster, props);
  }
}

export default PosterElement;
