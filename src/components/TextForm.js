import React, { useState, useEffect } from "react";
import TextArea from "./TextArea";
import TextButtons from "./TextButtons";
import TextSummary from "./Summary";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [accuracy, setAccuracy] = useState(null);
  const [originalText, setOriginalText] = useState("");

  useEffect(() => {
    setOriginalText(props.text); // Update originalText when props.text changes
  }, [props.text]);

  useEffect(() => {
    if (originalText && text && startTime && !endTime) {
      calculateAccuracy();
    }
  }, [originalText, text, startTime, endTime]);

  useEffect(() => {
    let timerInterval;

    if (startTime && !endTime) {
      timerInterval = setInterval(() => {
        const currentTime = Date.now();
        const elapsed = (currentTime - startTime) / 1000; // Convert to seconds
        setElapsedTime(elapsed);
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [startTime, endTime]);

  const handleUpClick = () => {
    //console.log("Upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case !", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    setElapsedTime(0);
    setAccuracy(null);
    props.showAlert("All text cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleStartTimer = () => {
    setStartTime(Date.now());
    setEndTime(null);
  };

  const handleStopTimer = () => {
    if (startTime && !endTime) {
      setEndTime(Date.now());
      calculateAccuracy();
    }
  };

  const calculateAccuracy = () => {
    const correctCharacters = originalText.split("").filter((char, index) => {
      return char === text[index];
    }).length;
    const totalCharacters = originalText.length;
    const accuracyPercentage = (correctCharacters / totalCharacters) * 100;
    setAccuracy(accuracyPercentage.toFixed(2));
  };

  return (
    <>
      <TextArea text={text} handleOnChange={handleOnChange} mode={props.mode} />
      <TextButtons
        handleUpClick={handleUpClick}
        handleLowClick={handleLowClick}
        handleClearClick={handleClearClick}
        handleStartTimer={handleStartTimer}
        handleStopTimer={handleStopTimer}
      />
      <TextSummary
        text={text}
        elapsedTime={elapsedTime}
        accuracy={accuracy}
        mode={props.mode}
      />
    </>
  );
}
