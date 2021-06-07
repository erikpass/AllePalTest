import { useEffect, useRef, useState } from "react";

export default function Countdown(props) {
  const [count, setCount] = useState(props.time);
  const [displayCount, setDisplayCount] = useState("");
  const countRef = useRef(count);
  let timer;

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    const totalSeconds = count;
    const days = (totalSeconds / (60 * 60 * 24)).toFixed(0);
    const hours = ((totalSeconds % (60 * 60 * 24)) / (60 * 60)).toFixed(0);
    const minutes = (
      ((totalSeconds % (60 * 60 * 24)) % (60 * 60)) /
      60
    ).toFixed(0);
    const seconds = (
      ((totalSeconds % (60 * 60 * 24)) % (60 * 60)) %
      60
    ).toFixed(0);

    let displayValue = `${
      days > 0 ? days + `${days === "1" ? " Päev " : " Päeva "}` : ""
    } 
    ${
      (days > 0) | (hours > 0)
        ? hours + `${hours === "1" ? " Tund " : " Tundi "}`
        : ""
    } 
    ${
      (minutes > 0) | (hours > 0) | (days > 0)
        ? minutes + `${minutes === "1" ? " Minut " : " Minutit "}`
        : ""
    } 
    ${seconds + `${seconds === "1" ? " Sekund " : " Sekundit "}`}`;

    if (totalSeconds <= 0) {
      setDisplayCount("Oksjon on lõppenud");
    } else {
      setDisplayCount("Oksjoni lõpuni " + displayValue);
    }
  }, [count]);

  const startTimer = () => {
    timer = setInterval(() => {
      if (countRef.current <= 0) {
        setCount(0);
        clearInterval(timer);
        return;
      }
      setCount((count) => count - 1);
    }, 1000);
  };

  return <div>{displayCount}</div>;
}
