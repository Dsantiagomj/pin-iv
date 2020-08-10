import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  slide: {
    padding: 15,
    minHeight: 500,
    color: "#fff",
    marginBottom: 40,
  },
  slide1: {
    background: "#FEA900",
  },
  slide2: {
    background: "#B3DC4A",
  },
  slide3: {
    background: "#6AC0FF",
  },
};

const Carousel = () => (
  <AutoPlaySwipeableViews>
    <div style={Object.assign({}, styles.slide, styles.slide1)}></div>
    <div style={Object.assign({}, styles.slide, styles.slide2)}></div>
    <div style={Object.assign({}, styles.slide, styles.slide3)}></div>
  </AutoPlaySwipeableViews>
);

export default Carousel;
