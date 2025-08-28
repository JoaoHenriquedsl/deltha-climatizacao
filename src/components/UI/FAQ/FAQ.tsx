import { IoIosArrowUp } from "react-icons/io";
import "./FAQ.css";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

const FAQ = ({ children, title }: Props) => {
  const question = useRef<HTMLDivElement>(null);
  const arrow = useRef<HTMLDivElement>(null);

  const toggleAnswer = () => {
    question.current?.classList.toggle("faq-hidden");
    arrow.current?.classList.toggle("arrow-rotate");
  };

  return (
    <div className="faq">
      <div className="question" onClick={toggleAnswer}>
        <p>{title}</p>
        <div ref={arrow} className="arrow">
          <IoIosArrowUp />
        </div>
      </div>
      <div className="answer faq-hidden" ref={question}>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default FAQ;
