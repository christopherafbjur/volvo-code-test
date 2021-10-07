import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React from "react";
import Product from "../product";
import NavigationArrows from "./navigationArrows";
import NavigationDots from "./navigationDots";
import Slider from "./slider";

export default function Carousel({ products }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    initial: 0,
    slidesPerView: 4,
    breakpoints: {
      "(max-width: 619px)": {
        slidesPerView: 1,
      },
      "(min-width: 620px) and (max-width: 1000px)": {
        slidesPerView: 2,
      },
      "(min-width: 1001px) and (max-width: 1170px)": {
        slidesPerView: 3,
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  console.log(sliderRef);

  return (
    <>
      <div className="navigation-wrapper">
        <Slider
          ref={sliderRef}
          items={products}
          renderItem={(item) => (
            <Product
              id={item.id}
              type={item.bodyType}
              title={item.modelName}
              subtitle={item.modelType}
              imageUrl={item.imageUrl}
            />
          )}
        />
        <NavigationArrows slider={slider} />
      </div>
      <NavigationDots slider={slider} currentSlide={currentSlide} />
    </>
  );
}
