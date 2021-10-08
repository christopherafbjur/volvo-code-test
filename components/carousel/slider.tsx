import React from "react";
import { CarouselSliderProps } from '../../types/carousel';
import Slide from './slide';


function Slider({ items, renderItem }: CarouselSliderProps, ref: any) {
  return (
    <div ref={ref} className="keen-slider">
      {items.map((item, i) => (
        <Slide key={i.toString()}>{renderItem(item)}</Slide>
      ))}
    </div>
  );
}

export default React.forwardRef(Slider);
