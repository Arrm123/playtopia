import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getGameList, selectGames,
} from './gameSlice';
import "./gamePage.css";
import Header from '../../components/header/Header';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../../components/home/Home';

export function GamePage() {
  const games = useSelector(selectGames);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getGameList());
  },[]);

  console.log(games);

  return (
    <div className='gamePage'>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to="/playtopia" />} />
        <Route path='/playtopia' exact element={<Home games={games} />} />
      </Routes>
    </div>
  );
}
