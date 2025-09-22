import { IconArrowLeft, IconClockHour3, IconLink, IconSquareCheck, IconUser } from "@tabler/icons-react";
import Image from "next/image";

export const ServicesDetails = () => {
  return (
    <main className="main">
      {/* <!--header section start--> */}
      <section
        className="hero-section ptb-100 gradient-overlay"
        style={{
          background:
            "url('img/header-bg-5.jpg')no-repeat center center / cover",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-7">
              <div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
                <h1 className="text-white mb-0 position-relative">
                  جزئیات پروژه
                </h1>
                {/* <div className="custom-breadcrumb">
                  <ol className="breadcrumb d-inline-block bg-transparent py-0 rtl">
                    <li className="list-inline-item breadcrumb-item">
                      <a href="#">خانه</a>
                    </li>
                    <li className="list-inline-item breadcrumb-item">
                      <a href="#">صفحات</a>
                    </li>
                    <li className="list-inline-item breadcrumb-item active">
                      جزئیات پروژه
                    </li>
                  </ol>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--header section end--> */}

      {/* <!--project details section start--> */}
      <section className="project-details-section ptb-100">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-12 col-lg-8">
              <div className="img-wrap mb-md-4 mb-lg-0">
                <Image
                  width={400}
                  height={400}
                  src={"/img/hero-bg7.jpg"}
                  alt="پروژه"
                  className="img-fluid rounded shadow-sm"
                />
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="project-details-sidebar">
                <ul className="project-info-list">
                  <li className="d-flex align-items-center mb-3 p-4 rounded">
                    <span className="color-secondary d-block me-3"><IconUser size={25}/></span>
                    <div className="d-block">
                      <h5 className="mb-0">نام شرکت</h5>
                      <p>شرکت تم محدود</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-3 p-4 rounded">
                    <span className="ti-time icon-sm color-secondary d-block me-3"><IconClockHour3 size={25}/></span>
                    <div className="d-block">
                      <h5 className="mb-0">مدت زمان پروژه</h5>
                      <p>10 تیر 1399 </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-center mb-3 p-4 rounded">
                    <span className="ti-link icon-sm color-secondary d-block me-3"><IconLink size={25}/></span>
                    <div className="d-block">
                      <h5 className="mb-0">آدرس پروژه</h5>
                      <a href="#">www.themetagscompany.com</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <!--project details row start--> */}
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="project-details-content">
                <h5>شرح پروژه</h5>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="project-details-feature">
                <ul className="list-unstyled tech-feature-list">
                  <li className="py-1">
                    <span className="ti-check-box me-2 color-secondary"><IconSquareCheck size={16}/></span>
                    <strong></strong>
                    مشاور <strong>سلب مسئولیت</strong> مشاوره منابع انسانی
                  </li>
                  <li className="py-1">
                    <span className="ti-check-box me-2 color-secondary"><IconSquareCheck size={16}/></span>
                    <strong></strong>
                    مشاور مهاجرت <strong>شرکتی</strong> ، مشاوره اطلاعات
                  </li>
                  <li className="py-1">
                    <span className="ti-check-box me-2 color-secondary"><IconSquareCheck size={16}/></span>
                    <strong></strong>مشاور خلاق بهینه سازی <strong>SEO</strong>
                  </li>
                  <li className="py-1">
                    <span className="ti-check-box me-2 color-secondary"><IconSquareCheck size={16}/></span>
                    <strong>به سرعت</strong> استراتژیک را قبل از جوامع مفهومی
                    کنید
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-details-feature">
                <ul className="list-unstyled tech-feature-list">
                  <li className="py-1">
                    <span className="ti-check-box me-2 color-secondary"><IconSquareCheck size={16}/></span>
                    <strong>مشاور</strong>
                    داروساز مشاور خلاق
                  </li>
                  <li className="py-1">
                    <span className="ti-check-box me-2 color-secondary"><IconSquareCheck size={16}/></span>
                    <strong>یکپارچه</strong>
                    صلاحیت های اصلی B2B را سفارشی کنید
                  </li>
                  <li className="py-1">
                    <span className="ti-check-box me-2 color-secondary"><IconSquareCheck size={16}/></span>
                    <strong></strong>مشاور <strong>مهاجرت</strong> ، مشاوره
                    اطلاعات
                  </li>
                  <li className="py-1">
                    <span className="ti-check-box me-2 color-secondary"><IconSquareCheck size={16}/></span>
                    <strong>مشاور</strong> داروساز مشاور خلاق
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!--project details row end--> */}
        </div>
      </section>
      {/* <!--project details section end--> */}

      {/* <!--call to action section start--> */}
      <section className="call-to-action py-5 gray-light-bg">
        <div className="container">
          <div className="row justify-content-around align-items-center">
            <div className="col-md-7">
              <div className="subscribe-content">
                <h3 className="mb-1">مشاوره آژانس در زمینه تجارت شما</h3>
                <p>
                  تجارت الکترونیکی کاملاً آزمایش شده و معماری مترقی را به سرعت
                  درگیر کنید.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="action-btn text-lg-right text-sm-left">
                <a href="#" className="btn secondary-solid-btn">
                  مشتری شوید
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--call to action section end--> */}
    </main>
  );
};
