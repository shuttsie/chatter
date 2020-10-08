import React  from 'react';
import Clock from 'react-live-clock';
import ReactPlayer from 'react-player'
import DepositParameters from '../LiveVideos/DepositParameters';
 
let time = new Date().toLocaleString();

class MeetingVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          time: new Date().toLocaleString()
        };
      }
      render() {
          console.log(time)
        return (
            <>
                {this.state.time >= "10/1/2020, 10:10:00 AM" && (
                    <DepositParameters/>
                )}
                
            </>
        )  
      }
    }
  
  export default MeetingVideo;