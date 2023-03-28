import { useEffect } from 'react';

import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './MainPage.swiper.css';
import classes from './MainPage.module.css';
import slideImg1 from '@/assets/banner/banner01.png';
import slideImg2 from '@/assets/banner/banner02.png';
import slideImg3 from '@/assets/banner/banner03.png';
import slideImg4 from '@/assets/banner/banner04.png';
import lineBanner from '@/assets/banner/line-banner01.png';

import { Container, Product, Title } from '@/components';
import { useReadData } from '@/firebase/firestore';

/* -------------------------------------------------------------------------- */

export default function MainPage() {
  const { readData, data } = useReadData('banner');
  
  useEffect(() => {
    readData();
  }, [readData]);

  return (
    <div className={classes.mainPage}>
      <Swiper
        className="visualSwiper"
        loop={true}
        modules={[Pagination, Navigation]}
        navigation={true}
        pagination={{
          type: 'fraction',
        }}
      >
        {data &&
          data.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img alt={item.alt} src={item.image} />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <Container className={classes.container}>
        <Title titleStyle="XL">이 상품 어때요?</Title>
        <Product isSwiper={true} />
      </Container>
      <Container className={classes.container}>
        <img
          alt="더 풍성해진 10월의 퍼플 위크 적립률 UP + 3종쿠폰팩"
          src={lineBanner}
        />
      </Container>
      <Container className={classes.container}>
        <Title titleStyle="XL">놓치면 후회할 가격</Title>
        <Product isSwiper={true} />
      </Container>
    </div>
  );
}
