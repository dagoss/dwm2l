import React from 'react';
import styled from 'styled-components';
import { library } from '../models/Library';
import { Family, IMonster, Monsters } from '../models/Models';
import { MonsterImage } from './MonsterImage';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  padding: 5px;
  min-width: 75px;
  min-height: 125px;
  position:relative;
  text-align: center;
  display:flex;
  justify-content: center;
  align-items: center;
`

const Name = styled.div`
  position:absolute;
  bottom:0;
`

interface FamilyListProps {
  family: Family;
}

export const FamilyList = ({family}: FamilyListProps) => {
  let items: IMonster[] = [];
  for (let x of library.monsters.values()) {
    if (x.family === family) {
      items.push(x);
    }
  }

  items = items.sort((a, b) => {
    const order = Object.values(Monsters);
    return order.indexOf(a.name) - order.indexOf(b.name);
  });

  return (
    <Wrapper>
      {items.map(x => (
        <Card>
          <MonsterImage monster={x.name} />
          <Name>{x.name}</Name>
        </Card>
      ))}
    </Wrapper>
  )
}

export default FamilyList;