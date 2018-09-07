import { Component } from 'react';
import { h } from 'react-hyperscript-helpers';
import Sound from 'react-sound';

import {
  PlayButton as PlayButtonComponent,
  Icon,
  ButtonText,
} from '../ui';

export function PlayButton({ audioUrl }) {
  return h(PlayButtonBase, { label: 'Play', icon: 'play', audioUrl });
}

export function SlowButton({ audioUrl }) {
  return h(PlayButtonBase, { label: 'Slow', icon: 'step-forward', audioUrl });
}

class PlayButtonBase extends Component {
  constructor(props) {
    super(props);
    this.state = { isPlaying: false };
  }

  play = () => {
    this.setState({ isPlaying: true });
  }

  pause = () => {
    this.setState({ isPlaying: false });
  }

  render = () => {
    const { label, icon, audioUrl } = this.props;
    const { isPlaying } = this.state;

    return h('div', [
      h(PlayButtonComponent, {
        onClick: () => this.play(),
      }, [
        h(Icon, {
          name: icon,
          style: {
            float: 'left',
          },
        }),
        h(ButtonText, label),
      ]),
      h(Sound, {
        url: `../audios/${audioUrl}`,
        playStatus: isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED,
        onFinishedPlaying: this.pause,
      })
    ])
  }
}
