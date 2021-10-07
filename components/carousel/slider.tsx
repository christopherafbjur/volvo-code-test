import { forwardRef } from "react";
import Slide from './slide';

function Slider({ items, renderItem }, ref) {
  return (
    <div ref={ref} className="keen-slider">
      {items.map((item, i) => (
        <Slide key={i.toString()}>{renderItem(item)}</Slide>
      ))}
    </div>
  );
}

export default forwardRef(Slider);
