
import { useEffect } from 'react';
import './JumpingBall.css';

interface JumpingBallProps{
  microphone?: MediaStream
}

export default function JumpingBall({microphone}: JumpingBallProps) {
  useEffect(()=>{
    if (microphone){
      const audioContext = new AudioContext();
      const audioAnalyser = audioContext.createAnalyser();
      const audioSource = audioContext.createMediaStreamSource(microphone);
      audioSource.connect(audioAnalyser);
      const data = new Uint8Array(audioAnalyser.frequencyBinCount);

      const loop = ()=>{
        audioAnalyser.getByteFrequencyData(data);
        const voiceStrength = data.reduce((sum, item)=>sum+item,0);
        if (voiceStrength>100){
          document.documentElement.style.setProperty("--ballSize", `${voiceStrength}px`)
        }
        requestAnimationFrame(loop);
      }

      requestAnimationFrame(loop);
    }
  },[microphone])

  return (
    <div className="container">
      <div className="ball" />
    </div>
  );
}

