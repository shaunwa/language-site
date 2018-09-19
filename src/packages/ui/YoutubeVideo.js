import React from 'react';
import { Link } from 'react-static';
import { h } from 'react-hyperscript-helpers';
import styled from 'styled-components';
import { Icon } from './Icon';
import colors from './colors';
import Youtube from 'react-youtube';

const VideoWrapper = styled.div`
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;

export function YoutubeVideo({ videoId = '' }) {
	return h(VideoWrapper, [
		h(Youtube, {
			width: "560",
			height: "349",
			videoId,
		  frameborder: "0",
			allowfullscreen: true,
		}),
	])
}
