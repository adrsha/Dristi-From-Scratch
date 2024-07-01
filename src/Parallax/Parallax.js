import "./Parallax.css";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { throttle } from "lodash";
import { lenis } from "../Lenis/Lenis";

function Parallax() {
  const [scrollY, setScrollY] = useState(0);
  const parallaxElsRef = useRef([]);
  const rafIdRef = useRef(null);

  useEffect(() => {
    lenis.scrollTo(0, 0);
    const parallaxEls = document.getElementsByClassName("parallaxEl");
    parallaxElsRef.current = Array.from(parallaxEls).map((el) => ({
      el,
      lerp: parseFloat(el.dataset.lerp || 10),
      initialPos: el.getBoundingClientRect().top,
      currentPos: 0,
    }));
    console.log(parallaxElsRef.current);
  }, []);

  const handleScroll = useCallback(
    throttle(() => {
      setScrollY(lenis.scroll);
    }, 16),
    [],
  );

  useEffect(() => {
    lenis.on("scroll", handleScroll);
    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [handleScroll]);

  const updatePositions = useCallback(() => {
    parallaxElsRef.current.forEach((item) => {
      const { el, lerp, initialPos } = item;
      const targetPos = -(scrollY - initialPos) / lerp;
      item.currentPos += (targetPos - item.currentPos) * 0.1;

      const roundedPos = Math.round(item.currentPos * 10) / 10; // reduce accuracy for better performance
      el.style.transform = `translate3d(0, ${roundedPos}px, 0)`;
    });

    rafIdRef.current = requestAnimationFrame(updatePositions);
  }, [scrollY]);

  useEffect(() => {
    rafIdRef.current = requestAnimationFrame(updatePositions);
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [updatePositions]);

  return null;
}

export default Parallax;
import "./Parallax.css";
