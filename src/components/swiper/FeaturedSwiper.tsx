import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { COLORS, PropertyCategory } from "@/utils/app_constants";
import Link from "next/link";

interface FeaturedSwiperProps {
  featuredLists: any
}
const FeaturedSwiper = ({ featuredLists }: FeaturedSwiperProps ) => {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {featuredLists.map((featuredList: any, index: number) => {

            return (
                <SwiperSlide key={index}>
                    <Link href={`/featured/${featuredList.id}`} style={{ color: COLORS.BLACK }}>
                      <Box
                        sx={{
                          position: 'relative', 
                          height: '100%', 
                          width: '100%', 
                        }}
                      >
                        <Box sx={{ position: 'absolute', zIndex: 9, backgroundColor: '#FFFFFF', marginTop: { xs: '10px', sm: '10px', md: '20px', lg: '20px' }}}>
                          <Typography sx={{ padding: { xs: '10px', sm: '10px', md: '15px', lg: '15px' } }}>
                          {featuredList.name}
                          </Typography>
                        </Box>
                        <Box
                          sx={{ 
                          position: 'relative', 
                          overflow: 'hidden', 
                          height: '100%', 
                          width: '100%', 
                          }}>
                              <Image
                                  fill
                                  src={featuredList.coverImage}
                                  alt='option'
                              />
                        </Box>
                      </Box>
                    </Link>
                </SwiperSlide>
            )
        })}
      </Swiper>
    </>
  );
}

export default FeaturedSwiper