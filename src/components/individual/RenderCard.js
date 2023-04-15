import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/modalSlice';

export default function RenderCard() {
  const dispatch = useDispatch();
  const forex = useSelector((state) => state.Forex.forexItem);

  return (
    <div className="modal">
      <button type="button" onClick={() => dispatch(closeModal())}>Close</button>
      <h2>{forex[0].id}</h2>
      <h2>{forex[0].Deaths}</h2>
      <h2>{forex[0].Fatality}</h2>
      <p>Kayode olatunji</p>
    </div>
  );
}
