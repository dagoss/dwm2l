import React from 'react';
import styled from 'styled-components';
import { FamilyList } from '../components/FamilyList';
import { Family } from '../models/Models';


export const MainScreen= () => {
  return (
    <div>
      {Object.keys(Family).map(x => (
        <FamilyList family={x as Family} simplified/>
      ))}
    </div>
  );
}