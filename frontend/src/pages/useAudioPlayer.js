import { useState, useEffect } from "react";

function useAudioPlayer() {
  const [duration, setDuration] = useState(0.0100);
  const [curTime, setCurTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState();
//   useEffect(() =>{
//     const audio = document.getElementById("audio");
//     audio.addEventListener("pause",()=> {
//       audio.pause()
// setPlaying(false)
//     },false)
//     audio.addEventListener("play",()=> {
//       audio.play()
// setPlaying(true)
//     },false)
//   },[])
  useEffect(() => {
    
    const audio = document.getElementById("audio");
    // state setters wrappers
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    }
    const setPlay=()=>setPlaying(true)
    const setPause=()=>setPlaying(false)
    audio.addEventListener("play", setPlay,false);
    audio.addEventListener("pause", setPause,false);

    const setAudioTime = () => setCurTime(audio.currentTime);

    // DOM listeners: update React state on DOM events
    audio.addEventListener("loadeddata", setAudioData);

    audio.addEventListener("timeupdate", setAudioTime);

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setCurTime(clickedTime)
      setClickedTime(null);
    } 

    // effect cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    }
  });
  // useEffect(()=>{
  //   const audio = document.getElementById("audio");
  //   const setPlay=()=>setPlaying(true)
  //   const setPause=()=>setPlaying(false)
  //  !playing? audio.addEventListener("play", setPlay,false):
  //   audio.addEventListener("pause", setPause,false)
  // },[playing])

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
    setCurTime
  }
}

export default useAudioPlayer;