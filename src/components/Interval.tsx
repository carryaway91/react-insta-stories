import React, { useEffect, useRef, useState } from "react";
import { Wrapper, Int } from "./IntervalStyles";

interface IProps {
  active: boolean;
  done: (i: number) => void;
  index: number;
  completed: boolean;
  completedPrevious: boolean;
  paused: boolean;
  activeIndex: number;
}

const Interval: React.FC<IProps> = (props: IProps) => {
  const i = useRef<HTMLDivElement>(null);
  const [intervalCurrentWidth, setIntervalCurrentWidth] = useState<string>("");
  const [interval, setActualIterval] = useState<any>(null);

  useEffect(() => {
    if (!props.completed && !props.paused) {
      i.current!.style.width = "0%";
      if (props.active) {
        resumeInterval();
      }
    }
  }, [props.active]);

  /**
   * ak bol interval dokonceny daj mu plnu dlzku
   */
  useEffect(() => {
    if (props.completed) {
      clearInterval(interval);
      i.current!.style.width = "100%";
      setActualIterval("");
    } else {
      clearInterval(interval);
      i.current!.style.width = "0";
    }
  }, [props.completed]);

  /**
   * ked su storky pauznute
   */

  useEffect(() => {
    if (props.active && !props.completed && props.paused) {
      pauseInterval();
    } else if (props.active && !props.paused && interval === "") {
      resumeInterval();
    }
  }, [props.paused]);

  useEffect(() => {
    clearInterval(interval);

    if (props.index === props.activeIndex + 1) {
      clearInterval(interval);
      i.current!.style.width = "0";
    }
  }, [props.completedPrevious]);

  const pauseInterval = () => {
    clearInterval(interval);
    setActualIterval("");
  };

  const resumeInterval = () => {
    clearInterval(interval);
    setActualIterval("");
    setActualIterval(
      setInterval(() => {
        if (i.current?.style.width) {
          i.current!.style.width =
            JSON.stringify(parseInt(i.current!.style.width) + 1) + "%";
          if (i.current!.style.width === "100%") {
            clearInterval(interval);
            props.done(props.index);
          }
        }
      }, 100)
    );
  };
  return (
    <Wrapper>
      <Int ref={i} />
    </Wrapper>
  );
};

export default Interval;
