import React from 'react';
import { Section } from '../Section/Section';

export const Home = () => {
  return (
    <>
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        image="model-3.jpg"
        leftBtn="Custom order"
        rightBtn="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        image="model-y.jpg"
        leftBtn="Custom order"
        rightBtn="Existing inventory"
      />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        image="model-s.jpg"
        leftBtn="Custom order"
        rightBtn="Existing inventory"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        image="solar-panel.jpg"
        leftBtn="Order now"
        rightBtn="Learn more"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy
        From Your Roof"
        image="solar-roof.jpg"
        leftBtn="Order now"
        rightBtn="Learn more"
      />
      <Section
        title="Accessories"
        image="accessories.jpg"
        leftBtn="Shop now"
      />
    </>
  )
}

