import React from 'react';
import Articles from './Articles';
import "./scrollEffect/scrollable.css"
import SingleWindowScroll from './scrollEffect/SingleWindowScroll';
import DualWindowScroll from './scrollEffect/DualWindowScroll';
import { lowerSection, middleSection, upperSection } from '../constants/dummyData';

const Body = () => {
  return (
    <div className='App'>
        <Articles data={upperSection}/>
        <SingleWindowScroll/>
        <Articles data={middleSection}/>
        <DualWindowScroll/>
        <Articles data={lowerSection}/>
    </div>
  )
}

export default Body;