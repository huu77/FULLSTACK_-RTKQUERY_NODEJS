import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
    {
        id: 1,
        title: "Slide 1",
        image: "https://thietkemyb.com.vn/wp-content/uploads/2022/10/banner-la-gi-khac-gi-voi-poster-cach-de-thiet-ke-mot-2.jpg"
    },
    {
        id: 2,
        title: "Slide 2",
        image: "https://static.unica.vn/media/imagesck/1629695828_banner-duong-pho.jpg?v=1629695828"
    },
    {
        id: 3,
        title: "Slide 3",
        image: "https://mona.media/wp-content/uploads/2021/06/banner-website.png"
    }
];
const Slide = ({ id, title, image }) => (
    <div key={id} className='mt-[20px] p-[10px]'>

        <img src={image} alt={title} className='w-full' />
    </div>)

const Baner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>

            <Slider {...settings}>
                 
                    {slides.map((slide) => (
                        <Slide {...slide} />
                    ))}
                

            </Slider>
        </>
    );
};

export default Baner;