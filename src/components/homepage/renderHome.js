import React from 'react';
import './Homepage.css';
import { useDispatch, useSelector } from 'react-redux';
import { renderItem } from '../../redux/homepage/homepageSlice';
import { openModal } from '../../redux/modal/modalSlice';
import Icon from '../icon';

export default function RenderHome() {
  const dispatch = useDispatch();
  const covid = useSelector((state) => state.Forex.Forex);
  const newCovid = covid.slice(0, 21);
  return (
    <div className="forex-container">
      {newCovid.map((item) => (
        <article className="eachItem" key={item.id}>
          <button
            className="show-more"
            type="button"
            onClick={() => {
              dispatch(renderItem(item.id));
              dispatch(openModal());
            }}
          >
            <Icon />
          </button>
          <div>
            <h2>{item.country}</h2>
            <p>{item.death}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
