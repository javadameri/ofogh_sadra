"use client";

import { IconPlayerPlay } from "@tabler/icons-react";
import Image from "next/image";

export const CallToActionVideoSection = () => {
  return (
    <section className="call-to-action-video">
      <div className="row m-0">
        <div className="col-lg-6 col-md-12 p-0">
          <div className="free-trial-content text-white">
            <h2 className="text-white">بهترین مشاوره در مورد هر تجارت</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
            <a href="#" className="btn primary-solid-btn mt-3">
              الان شروع کن
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 p-0">
          <div className="free-trial-image text-center">
            <Image
              width={700}
              height={400}
              src={"/img/cta-2-girl-img.jpg"}
              alt="تصویر"
              className="img-fluid"
            />
            <a
              href="https://www.youtube.com/watch?v=9No-FiEInLA"
              className="popup-youtube video-play-icon white-bip shadow"
            >
              <span className="ti-control-play">
                <IconPlayerPlay size={30} />
              </span>{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
