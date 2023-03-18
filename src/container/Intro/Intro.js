import {BsPauseFill, BsFillPlayFill} from 'react-icons/bs';
import {meal} from '../../constants';
import {useState, useRef} from 'react'
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  const videoHandle = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    playVideo ? videoRef.current.pause() : videoRef.current.play();
  }

  return(
    <div className='app-video'>
      <video src={meal} ref={videoRef} type="video/mp4" controls={false} muted loop/>
      <div className='app-video-overlay flex-center'>
        <div className='app-video-overlay-circle flex-center' onClick={videoHandle}>
          {playVideo ? <BsPauseFill color="#FFF" fontSize={30}/> 
                    : <BsFillPlayFill color="#FFF" fontSize={30}/>}
        </div>
      </div>
    </div>
  )
};

export default Intro;
