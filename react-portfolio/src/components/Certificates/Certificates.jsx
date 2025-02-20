import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getImageUrl } from "../../utils";
import { Navigation, Pagination } from "swiper/modules";

import styles from "./Certificates.module.css";
import certificates from "../../data/certificates.json";

export const Certificates = () => {
  return (
    <section className={styles.container} id="certificates">
      <h2 className={styles.title}>Certificates</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {certificates.map((certificate, id) => (
          <SwiperSlide key={id}>
            <div className={styles.card}>
              <img
                src={getImageUrl(certificate.image)} // Ensure the JSON has a correct image path
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
