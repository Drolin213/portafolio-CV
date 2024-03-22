import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { gsap } from "gsap";
import './preloader.scss';
import logo from '../assets/images/preload.svg';

function LinearProgressWithLabel(props) {
    const el = React.useRef();
    const tl = React.useRef();
    const q = gsap.utils.selector(el);

    React.useEffect(() => {
        tl.current = gsap.timeline()
      .to(q(".square"), {
        opacity: .7
      })
      .to(q(".square"), {
        duration: 1.5, ease: "powerInOut", opacity: 1, repeat: -1, yoyo: true
      });
      }, []);
  return (
    <div className="preload">
      <div className="loader">
        <LinearProgress variant="determinate" {...props} />
      </div>
      <div className="progress">
        <Typography variant="body2" color="">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </div>
    </div>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box>
      <div className="anime">
      <div className="load">
      <svg height="100%" fill="none" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="100%" version="1.1" viewBox="0 0 857 151" id="lo">
<g id="roar">
<path id="roar-four" stroke="#10e956" stroke-width="5" d="m466.1 146 0 2.5 2.5 0 72.2 0c7.8 0 14.6-2.8 20.1-8.3 5.6-5.6 8.4-12.4 8.4-20.2l0-88.1c0-7.8-2.8-14.6-8.4-20.1-5.5-5.6-12.3-8.4-20.1-8.4l-72.2 0-2.5 0 0 2.5 0 140.2zm81.2-120.7 0 0 0 0c1.9 1.8 2.8 3.9 2.8 6.5l0 88.1c0 2.6-.9 4.7-2.8 6.6-1.8 1.8-3.9 2.7-6.5 2.7l-46.6 0 0-81c0-4.6-.9-8.6-2.9-12.1-1.6-3-3.6-5.9-5.9-8.9l0-4.7 55.4 0c2.6 0 4.7.9 6.5 2.8zm-176.3-14.3-27-2 1.1 110.9c-.1 14.1 2.8 14.6 8.3 20.2l0 0-3.5 2.8c9.1 2.7 15.9 5.5 23.7 5.5l72.2 0 2.5 0-2.4-2.5-1-14 0-3-6 0-65.3.2C373.4 129.1 373.2 129.1 373.1 129.1L373.1 85.4 373.1 66.1 373.1 48.1Z" fill="none" stroke-linecap="butt" opacity="1" stroke-linejoin="miter"/>

</g>
</svg>
      </div>
      {/* <LinearProgressWithLabel value={progress} /> */}
      </div>
    </Box>
  );
}
