import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1000&auto=format&fit=crop',
    alt: 'Classic Black Edition',
    title: 'Classic Black Edition'
  },
  {
    src: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1000&auto=format&fit=crop',
    alt: 'Rose Gold Premium',
    title: 'Rose Gold Premium'
  },
  {
    src: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1000&auto=format&fit=crop',
    alt: 'Silver Executive',
    title: 'Silver Executive'
  },
  {
    src: 'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?q=80&w=1000&auto=format&fit=crop',
    alt: 'Titanium Sport',
    title: 'Titanium Sport'
  }
];

export default function Gallery() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gold-400 to-gold-200 bg-clip-text text-transparent font-playfair">
            Discover Our Collection
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-montserrat">
            Each timepiece is meticulously crafted to perfection, available in various premium finishes
          </p>
        </motion.div>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full max-w-4xl"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index} className="w-72 h-96 relative">
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white text-xl font-semibold font-montserrat">{image.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}