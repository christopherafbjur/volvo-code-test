import cn from "classnames";
import { CarouselNavigationDotsProps } from "../../types/carousel";
import styles from "./navigationDots.module.css";

export default function NavigationDots({
  slider,
  currentSlide,
}: CarouselNavigationDotsProps) {
  if (!slider) return null;

  return (
    <div className={styles.dots}>
      {[...Array(slider.details().size).keys()].map((idx) => {
        return (
          <button
            key={idx}
            onClick={() => {
              slider.moveToSlideRelative(idx);
            }}
            className={cn(styles.dot, {
              [styles.active]: currentSlide === idx,
            })}
          />
        );
      })}
    </div>
  );
}
