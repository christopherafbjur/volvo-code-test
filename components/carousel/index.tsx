import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import { Block } from "vcc-ui";
import { getMinimumItemArray } from "../../lib/helpers";
import { CarouselProps } from "../../types";
import NavigationArrows from "./navigationArrows";
import NavigationDots from "./navigationDots";
import Slider from "./slider";

const MINIMUM_SLIDES = 8;
const SLIDER_CONFIG = {
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
};

export default function Carousel(props: CarouselProps) {
  const [items, setItems] = useState(props.items);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    ...SLIDER_CONFIG,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  useEffect(() => {
    setItems(getMinimumItemArray(props.items, MINIMUM_SLIDES));
  }, [props.items]);

  useEffect(() => {
    slider &&
      slider.refresh({
        ...SLIDER_CONFIG,
        slideChanged(s) {
          setCurrentSlide(s.details().relativeSlide);
        },
      });
  }, [items, slider]);

  return (
    <>
        <Slider
          ref={sliderRef}
          items={items}
          renderItem={props.renderItem}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            padding: "20px",
          }}
        >
          <div style={{ gridColumn: "2" }}>
            <NavigationDots slider={slider} currentSlide={currentSlide} />
          </div>
          <div style={{ gridColumn: "3" }}>
            <Block
              extend={{
                "@media (max-width: 619px)": {
                  display: "none",
                },
              }}
            >
              <NavigationArrows slider={slider} />
            </Block>
          </div>
        </div>
    </>
  );
}
