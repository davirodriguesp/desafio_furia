import React from "react";

const Options = (props) => {
  const options = [
    {
      text: "Ver Status ao Vivo",
      handler: () => props.actionProvider.handleLiveStatus(),
      id: 1,
    },
    {
      text: "Ver Próximos Jogos",
      handler: () => props.actionProvider.handleNextMatches(),
      id: 2,
    },
  ];

  return (
    <div className="options-container">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={option.handler}
          className="option-button"
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

export default Options;
