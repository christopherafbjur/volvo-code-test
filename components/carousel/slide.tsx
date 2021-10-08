import { CarouselSlideProps } from "../../types/carousel";
export default function Slide({ children }: CarouselSlideProps) {
  return (
    <div className="keen-slider__slide" style={{ padding: "20px" }}>
      {children}
    </div>
  );
}
