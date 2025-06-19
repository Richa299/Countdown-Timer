import { useState, useEffect } from "react";
import Card from "./components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import patternhill from "./assets/pattern-hills.svg";
import "./Counter.css";

export default function Counter() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const [sec, setActiveSec] = useState("");
  const [hour, setActiveHour] = useState("");
  const [min, setActiveMin] = useState("");
  const [day, setActiveDay] = useState("");

  useEffect(() => {
    let interval = setInterval(() => {
      if (seconds == 1) {
        if (minutes !== 0) {
          setMinutes((min) => min - 1);
          setActiveMin("min");
          setActiveSec("sec");
          setSeconds(5);
        }
        if (days == 0 && hours == 0 && minutes == 0) {
          setSeconds(0);
        }
      } else {
        if (seconds !== 0) {
          setSeconds((sec) => sec - 1);
          setActiveSec("sec");
        }
      }
      if (minutes == 1 && seconds == 1) {
        if (hours !== 0) {
          setHours((hr) => hr - 1);
          setActiveHour("hour");
          setMinutes(5);
        }
      }
      if (hours == 1 && minutes == 1 && seconds == 1) {
        if (days !== 0) {
          setDays((days) => days - 1);
          setActiveDay("day");
          setHours(2);
        }
      }
    }, 1000);

    setTimeout(() => setActiveSec(""), 400);
    setTimeout(() => setActiveMin(""), 400);
    setTimeout(() => setActiveDay(""), 400);
    setTimeout(() => setActiveHour(""), 400);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <>
      <div className="wrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "71vh",
          }}
        >
          <h2>WE'RE LAUNCHING SOON</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="counter-cards"
          >
            <Card data={days} title="DAYS" active={day} />
            <Card data={hours} title="HOURS" active={hour} />
            <Card data={minutes} title="MINUTES" active={min} />
            <Card data={seconds} title="SECONDS" active={sec} />
          </div>
          <div className="card-detail">
            <p>DAYS</p>
            <p>HOURS</p>
            <p>MINUTES</p>
            <p>SECONDS</p>
          </div>
        </div>
        <footer className="footer">
          <img src={patternhill} style={{ width: "100%" }} />
          <div className="footer-icons">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faPinterest} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </footer>
      </div>
    </>
  );
}
