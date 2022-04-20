import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SimpleSlider.module.css";
import img from '../../image/icons/carousel__item.jpg'


export default class SwipeToSlide extends Component {
  render() {

    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "80px",
      slidesToShow: 3,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
      <div className={styles.wrapper}>
        <Slider {...settings}>
           <div className={styles.content}>
            <img className={styles.image} src={img} alt="1"/>
          </div>
          <div className={styles.content}>
            <img className={styles.image} src={img} alt="1"/>
          </div>
          <div className={styles.content}>
            <img className={styles.image} src={img} alt="1"/>
          </div>
          <div className={styles.content}>
            <img className={styles.image} src={img} alt="1" />
          </div>

        </Slider>
      </div>
    );
  }
}
