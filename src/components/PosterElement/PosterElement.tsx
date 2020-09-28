import React from "react";

import Parameters from "../../Parameters";

import "./posterElements.css";

interface PosterElementProps {
  poster: any;
  height: number;
}

type PosterElementState = {
  playing: boolean;
  audio: any;
  audioIndex: number;
};

// Displays the poster that is to be showed.
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
    /*Method for playing audio.
     * If this.state.playing is false when playAudio is called, load the correct sound and play it in a loop.
     *
     *
     */
    if (!this.state.playing) {
      this.state.audio.load();
      this.state.audio.play();
      this.state.audio.loop = true;
      this.state.audio.volume = this.context.params.volume / 10;
      this.setState({ playing: true });
    } else {
      this.state.audio.volume = this.context.params.volume / 10;
    }
  };

  componentDidMount() {
    //Lifecycle method to initiate playing music related to the given displayed poster.
    //Uses naming convention in mp3files to play the correct soundtrack.
    const audio = new Audio(`/sounds/${this.props.poster.props.name}.mp3`);
    this.setState({ audio, audioIndex: this.context.params.posterIndex });
    if (this.context.params.volume) {
      this.playAudio();
    }
  }

  componentDidUpdate() {
    //Lifecycle method to change playing music related to the new displayed poster.
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
    //render the poster with the given size and scaling defined in props.
    const animationName = this.props.poster.props.name + "Animation";
    const moodName = this.props.poster.props.name + "Mood";

    const props = {
      height: this.props.height,
      width: this.props.height / 1.333,
      className:
        `${this.context.params.animation ? animationName : ""}` +
        " " +
        `${this.context.params.mood ? moodName : ""}`,
    };
    return React.cloneElement(this.props.poster, props);
  }
}

export default PosterElement;
