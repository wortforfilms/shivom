import { useEffect, useState } from "react";

const useVideoRecorder = () => {
  const [videoURL, setVideoURL] = useState<any>("");
  const [isRecording, setIsRecording] = useState<any>(false);
  const [recorder, setRecorder] = useState<any>(null);

  // satya truthy 
  // file 

  useEffect(() => {
    // Lazily obtain recorder first time we're recording.
    if (recorder === null) {
      if (isRecording) {
        requestRecorder().then(setRecorder, console.error);
      }
      return;
    }

    // Manage recorder state.
    if (isRecording) {
      recorder?.start();
    } else {
      console.log(recorder)

      recorder.state!=="inactive" && recorder?.stop();
    }

    // Obtain the audio when ready.
    const handleData = (e:any) => {
      setVideoURL(URL.createObjectURL(e.data));
    };

    recorder.addEventListener("dataavailable", handleData);
    return () => recorder.removeEventListener("dataavailable", handleData);
  }, [recorder, isRecording]);

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  return [videoURL, isRecording, startRecording, stopRecording];
};

async function requestRecorder() {
  const stream = await navigator.mediaDevices.getUserMedia({ video:true, audio: true });
  return new MediaRecorder(stream);
}
export default useVideoRecorder;
