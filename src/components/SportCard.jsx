import React from "react";
const listCard = [];
const SportCard = React.memo(({ info }) => {
  listCard.push(info.value);
  console.log(listCard);
  return <div></div>;
});

export default SportCard;
