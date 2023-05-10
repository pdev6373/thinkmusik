import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Courses.module.css";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";

const myFont = localFont({ src: "../../fonts/GTWalsheimPro-Bold.woff2" });

const courses = [
  "/guitar_scroll.png",
  "/guitar_scroll2.png",
  "/guitar_scroll3.png",
  "/guitar_scroll.png",
  "/guitar_scroll2.png",
  "/guitar_scroll3.png",
];

export default function Courses() {
  return (
    <section className={styles.offer}>
      <div className={styles.offerTextWrapper}>
        <div className={styles.offerHeadingWrapper}>
          <h3
            className={`${styles.offerHeading} ${myFont.className}`}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            One membership.
          </h3>
          <h3
            className={`${styles.offerHeading2} ${myFont.className}`}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Access to every course.
          </h3>
        </div>

        <p className={styles.offerBody} data-aos="fade-up" data-aos-delay="200">
          Explore in-depth courses designed by experts
        </p>
      </div>

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView="auto"
        spaceBetween={0}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <div className={styles.coursesImageWrapper}>
              <Image
                src={course}
                alt="course image"
                fill
                className={styles.coursesImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.allCoursesLinkWrapper}>
        <Link href="/all-courses" className={styles.allCoursesLink}>
          View all Courses
        </Link>
      </div>
    </section>
  );
}
