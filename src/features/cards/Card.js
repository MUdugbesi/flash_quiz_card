import React, { useState } from "react";
import { useSelector } from "react-redux";
// import selector
import { card_state_selector } from "../../redux_slice/card/CardSlice";

export default function Card({ id }) {
  const card = useSelector(card_state_selector(id)); // replace this with a call to your selector to get a card by id
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
