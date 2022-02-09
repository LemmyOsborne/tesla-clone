import React from 'react';
import { Section } from '../Section/Section';
import sectionInfo from "../../sectionInfo.json"


export const Home = () => {
  return (
    <>
      {sectionInfo.map(item => (
        <Section key={item.id} {...item} />
      ))}
    </>
  )
}

