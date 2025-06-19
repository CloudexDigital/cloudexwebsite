import { useEffect, useState } from "react";
import "../styles/spellTerminal.css";

const commands = [
  "We craft lightning-fast, <span>SEO-optimized websites that rank higher and convert better.</span> Get your free quote",
];

const SpellTerminal = () => {
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (index >= commands.length) return;
    const current = commands[index];
    let charIndex = 0;
    const interval = setInterval(() => {
      setTyped(current.slice(0, ++charIndex));
      if (charIndex === current.length) {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="terminal">
      <span
        className="prompt"
        dangerouslySetInnerHTML={{ __html: `${typed}|` }}
      />
    </div>
  );
};

export default SpellTerminal;
