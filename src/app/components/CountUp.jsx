"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const CountUp = ({ start, end, duration = 3, allowDecimal = false }) => {
  const ref = useRef(null);

  const formatValue = (value) => {
    // Deals → decimal allowed
    if (allowDecimal) {
      if (value >= 1_000_000) {
        return (value / 1_000_000).toFixed(1) + "M"; // always keep decimal
      }
      if (value >= 1_000) {
        return (value / 1_000).toFixed(1) + "K";
      }
      return value.toFixed(1);
    }

    // Others → no decimals
    if (value >= 1_000_000) {
      return Math.round(value / 1_000_000) + "M";
    }
    if (value >= 1_000) {
      return Math.round(value / 1_000) + "K";
    }
    return Math.round(value);
  };

  useEffect(() => {
    if (!ref.current) return;

    const obj = { val: start };

    gsap.to(obj, {
      val: end,
      duration,
      ease: "power1.out",
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = formatValue(obj.val);
        }
      },
    });
  }, [start, end, duration, allowDecimal]);

  return <span ref={ref}>{formatValue(start)}</span>;
};

export default CountUp;