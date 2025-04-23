import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getImageUrl } from "../../utils";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import styles from "./Certificates.module.css";
import certificates from "../../data/certificates.json";

export const Certificates = () => {
  return (
    <section className={styles.container} id="certificates">
      <h2 className={styles.title}>Certificates</h2>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1} // 👈 shows 3 certs at a time, tweak as needed
        loop={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        speed={800} // 🎷 smooth transition speed
      >
        {certificates.map((certificate, id) => (
          <SwiperSlide key={id}>
            <div className={styles.card}>
              <img
                src={getImageUrl(certificate.image)}
                alt={`Certificate of ${certificate.title}`}
                className={styles.image}
              />
              <h3 className={styles.title}>{certificate.title}</h3>
              <p className={styles.description}>{certificate.issuer}</p>
              <p className={styles.date}>{certificate.date}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
