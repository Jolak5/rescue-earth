import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/modal/modalSlice';

export default function RenderCard() {
  const dispatch = useDispatch();
  const forex = useSelector((state) => state.Forex.forexItem);

  return (
    <div className="modal">
      <button type="button" onClick={() => dispatch(closeModal())}>Close</button>
      <p>Kayode olatunji</p>
      {forex.map((item) => (
        <div className="eachItem" key={item.id}>
          <h2>{item.id}</h2>
          <p>{item.death}</p>
          <p>{item.Fatality}</p>

        </div>
      ))}
    </div>
  );
}
