import KeenSlider from 'keen-slider/react';
import React from 'react';
import { Car } from './car';

type ItemRenderer = (item: Car) => JSX.Element;

export interface CarouselProps {
  items: Car[];
  renderItem: ItemRenderer;
}
export interface CarouselNavigationArrowProps {
  slider: KeenSlider
}
export interface CarouselNavigationDotsProps {
  slider: KeenSlider, 
  currentSlide: number
}
export interface CarouselSlideProps {
  children: React.ReactNode
}
export interface CarouselSliderProps {
  items: Car[];
  renderItem: ItemRenderer;
}
