import Link from "next/link";

export const ErrorPage = () => {
  return (
    <main className="main">
      {/* <!--hero section start--> */}
      <section
        className="hero-section ptb-100 gradient-overlay full-screen"
        style={{
          background:
            "url('img/slider-img-2.jpg')no-repeat center center / cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-9 col-lg-7">
              <div className="error-content text-center text-white zindex-9">
                <div className="notfound-404">
                  <h1 className="text-white">404</h1>
                </div>
                <h2 className="text-white">
                  متاسفم , صفحه مورد نظر شما یافت نشد.
                </h2>
                <p className="lead">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </p>
                <Link className="btn outline-white-btn" href={"/"}>
                  بازگشت به صفحه اصلی
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--hero section end--> */}
    </main>
  );
};
