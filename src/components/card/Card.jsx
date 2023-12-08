import React, { useState, useEffect, useRef } from 'react';
import './card.scss';

const Card = () => {
  const [style, setStyle] = useState({});
  const [animated, setAnimated] = useState(false);
  const cardRef = useRef(null);

  const normalizePosition = (e) => (e.type === 'touchmove' ? [e.touches[0].clientX, e.touches[0].clientY] : [e.nativeEvent.offsetX, e.nativeEvent.offsetY]);
  const calculateStyles = (pos, $card) => {
    const [l, t] = pos;
    const h = $card.offsetHeight, w = $card.offsetWidth;
    const px = Math.abs(Math.floor((100 / w) * l) - 100), py = Math.abs(Math.floor((100 / h) * t) - 100);
    const pa = (50 - px) + (50 - py), lp = 50 + (px - 50) / 1.5, tp = 50 + (py - 50) / 1.5;
    const px_spark = 50 + (px - 50) / 7, py_spark = 50 + (py - 50) / 7, p_opc = 20 + Math.abs(pa) * 1.5;
    const ty = ((tp - 50) / 2) * -1, tx = ((lp - 50) / 1.5) * 0.5;
    return {
      grad_pos: { backgroundPosition: `${lp}% ${tp}%` },
      sprk_pos: { backgroundPosition: `${px_spark}% ${py_spark}%`, opacity: p_opc / 100 },
      tf: { transform: `rotateX(${ty}deg) rotateY(${tx}deg)` },
    };
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    const pos = normalizePosition(e);
    const $card = cardRef.current;
    setStyle({ ...calculateStyles(pos, $card) });
    setAnimated(false);
    console.log();
  };

  const handleMouseLeave = () => setStyle({});

  useEffect(() => {
    let timeout;
    if (animated) timeout = setTimeout(() => setAnimated(false), 2500);
    return () => clearTimeout(timeout);
  }, [animated]);

  return (
    <main id="app">
      <section className="cards">
        <div
          ref={cardRef}
          className={`card pika ${animated ? 'animated' : ''}`}
          onMouseMove={handleMouseMove}
          onTouchMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onTouchEnd={handleMouseLeave}
          onTouchCancel={handleMouseLeave}
          style={{transform: style?.tf?.transform}}
        ></div>
      </section>
    </main>
  );
};

export default Card;
