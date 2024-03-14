/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';
import './styles.css';

const CustomText = ({ words, typingDelay = 200, changingDelay = 3000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Efecto para manejar la escritura y eliminación de las palabras
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, typingDelay);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // Efecto para cambiar la palabra después de un cierto tiempo
  useEffect(() => {
    if (!reverse) {
      return;
    }

    const timeout = setTimeout(() => {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
    }, changingDelay);

    return () => clearTimeout(timeout);
  }, [reverse]);

  return (
    <div className="typewriter">
      <span>{`${words[index].substring(0, subIndex)}${reverse ? '.' : ' '}`}</span>
    </div>
  );
};

export default CustomText;
