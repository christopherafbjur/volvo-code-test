export default function NavigationDots({ slider, currentSlide }) {
  if (!slider) return null;

  return (
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
  );
}
