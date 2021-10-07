import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React from "react";
import { Flex } from "vcc-ui";
import Chevron from "./chevron";
import Product from "./product";

export default function Carousel({ data }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    initial: 0,
    slidesPerView: 4,
    breakpoints: {
      '(max-width: 719px)': {
        slidesPerView: 1,
      },
      '(min-width: 720px) and (max-width: 1000px)': {
        slidesPerView: 2,
      },
      '(min-width: 1001px) and (max-width: 1170px)': {
        slidesPerView: 3,
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  console.log("data", data);

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {data.map((obj) => (
            <div key={obj["id"]} className="keen-slider__slide">
              <Product
                type={obj.bodyType}
                title={obj.modelName}
                subtitle={obj.modelType}
                imageUrl={obj.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
      {slider && (
        <div className="dots">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            );
          })}
        </div>
      )}
      {slider && (
        <Flex extend={{float: 'right', width: '60px', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Chevron
            direction="left"
            onClick={(e) => e.stopPropagation() || slider.prev()}
          />
          <Chevron
            direction="right"
            onClick={(e) => e.stopPropagation() || slider.next()}
          />
        </Flex>
      )}
    </>
  );
}
