import React from "react";

interface SubTitleProps {
  text: string;
}

const SubTitle: React.FC<SubTitleProps> = ({ text }) => {
  return (
    <h2 className="text-left text-2xl font-bold mb-6">
      {text}
    </h2>
  );
};

export default SubTitle;