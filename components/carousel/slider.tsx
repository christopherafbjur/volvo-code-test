import { forwardRef } from "react";
import Slide from './slide';

function Slider({ items, renderItem, keyExtractor = "id" }, ref) {
  return (
    <div ref={ref} className="keen-slider">
      {items.map((item) => (
        <Slide key={item[keyExtractor]}>{renderItem(item)}</Slide>
      ))}
    </div>
  );
}

export default forwardRef(Slider);
