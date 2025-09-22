import React from "react";
import styles from "./flyIn.module.scss";
import Image from "next/image";

interface TicketProps {
  trackingNumber: string;
  passengerName: string;
  passportNumber: string;
  flightNumber: string;
  departure: string;
  destination: string;
  flightDate: string;
  flightTime: string;
  seatClass: string;
  ticketPrice: string;
  tax: string;
  totalPrice: string;
}

const FlyInTicketPdf = React.forwardRef<HTMLDivElement, TicketProps>(
  (
    {
      trackingNumber,
      passengerName,
      passportNumber,
      flightNumber,
      departure,
      destination,
      flightDate,
      flightTime,
      seatClass,
      ticketPrice,
      tax,
      totalPrice,
    },
    ref
  ) => {
    return (
      <div ref={ref} className={`container ${styles.ticket}`}>
        <div className="row p-3">
          {/* هدر بلیت */}
          <div className={`col-12 p-0 ${styles.header}`}>
            <div className="d-flex">
              <Image src="/img/logo1.png" alt="بلیت اینجا" width={200} height={100} className={styles.logo} />
              {/* <h2>بلیت اینجا</h2> */}
            </div>
            <h5 className="fw-bold">شماره پیگیری: {trackingNumber}</h5>
          </div>

          {/* اطلاعات مسافر */}
          <div className="col-12 mt-3 p-0">
            <h6 className="fw-bold mb-3">اطلاعات مسافر</h6>
            <table className="table text-center m-0">
              <thead>
                <tr>
                  <th>نام مسافر</th>
                  <th>رده سنی</th>
                  <th>کدملی / پاسپورت</th>
                  <th>شماره صندلی</th>
                  <th>شماره بلیت</th>
                  <th>سرویس</th>
                  <th>CAA</th>
                  <th>وضعیت</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mr HAMID MIRZAEI</td>
                  <td>بزرگسال</td>
                  <td>۹۰۲۴۴۷۲۲۰۲</td>
                  <td>--</td>
                  <td>۱۰۶۲۶۰۹۱۴</td>
                  <td>--</td>
                  <td>GGAUF7SQQMF\EXAWAI</td>
                  <td>OK</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* اطلاعات پرواز */}
          <div className="col-12 mt-3 p-0">
            <h6 className="fw-bold mb-3">اطلاعات پرواز</h6>
           <div className="d-flex">
           <table className="table text-center m-0">
              <thead>
                <tr>
                  <th>مبدأ</th>
                  <th>مقصد</th>
                  <th>ﺗﺎرﯾﺦ ﺣﺮکت</th>
                  <th>تاریخ ورود</th>
                  <th>ترمینال خروجی</th>
                  <th>ترمینال ورودی</th>
                  <th>شماره پرواز</th>
                  <th>رفرنس</th>
                  <th>ایرلاین</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>اﻫﻮاز - ﻓﺮودگﺎه اﻫﻮاز</td>
                  <td>ﻣﺸﻬﺪ - ﻓﺮودگﺎه ﺷﻬﯿﺪ ﻫﺎﺷﻤی ﻧژاد</td>
                  <td>1403/11/08 22:00</td>
                  <td>1403/11/08 23:50</td>
                  <td>--</td>
                  <td>--</td>
                  <td>85%</td>
                  <td>GGAUF2</td>
                  <td>air1 air</td>
                </tr>
              </tbody>
            </table>
              <div>
                <Image alt="airline" width={67.89} height={67.89} src={`/img/airlines-logo/A1.png`}/>
              </div>
           </div>
          </div>
          {/* قوانین استرداد */}
          <div className="col-12 mt-3 p-0">
            <h6 className="fw-bold mb-3">قوانین استرداد</h6>
            <table className="table text-center m-0">
              <thead>
                <tr>
                  <th>ﻣﺴﯿﺮ پرواز / کﻼس</th>
                  <th>ﺗﺎ 72 ﺳﺎﻋﺖ ﻗﺒﻞ پرواز</th>
                  <th>ﺗﺎ 48 ﺳﺎﻋﺖ ﻗﺒﻞ از پرواز</th>
                  <th>ﺗﺎ 24 ﺳﺎﻋﺖ ﻗﺒﻞ از پرواز</th>
                  <th>ﺗﺎ 12 ﺳﺎﻋﺖ ﻗﺒﻞ از پرواز</th>
                  <th>از 12 ﺳﺎﻋﺖ ﻗﺒﻞ از پرواز</th>
                  <th>NoShow</th>
                  <th>NoGo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>اﻫﻮاز - ﻣﺸﻬﺪ / Y</td>
                  <td>30%</td>
                  <td>50%</td>
                  <td>70%</td>
                  <td>85%</td>
                  <td>85%</td>
                  <td>85%</td>
                  <td>85%</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* اطلاعات مالی */}
          <div className="col-12 mt-3 p-0">
            <h6 className="fw-bold mb-3">اطلاعات مالی</h6>
            <table className="table text-center m-0">
              <thead>
                <tr>
                  <th>ﻧﻮع ﻣﺴﺎﻓﺮ</th>
                  <th>ﻗﯿﻤﺖ پایه(IRR)</th>
                  <th>ﻣﺎﻟﯿﺎت ﺑﺮ ارزش اﻓﺰوده(IRR)</th>
                  <th>ﻋﻮارض(IRR)</th>
                  <th>ﻣﺒﻠﻎ ﺑﻠﯿﺖ(IRR)</th>
                  <th>تعداد</th>
                  <th>ﻣﺒﻠﻎ کﻞ(IRR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ﺑﺰرگﺴﺎل</td>
                  <td>38,670,270</td>
                  <td>38,670,270</td>
                  <td>556,703</td>
                  <td>43,094,000</td>
                  <td>۱</td>
                  <td>43,094,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.info}>
            <ul className="p-0">
              <li>کلیه درﺧﻮاﺳﺖ ﻫﺎ ﺑﺮاﺳﺎس ﺗﺎرﯾﺦ اﻋﺘﺒﺎر ﺑﻠﯿﺖ اﻋﻤﺎل می ﺷﻮد.</li>
              <li>
                ﻟﻄﻔﺎ 90 دﻗﯿﻘﻪ ﻗﺒﻞ از ﺳﺎﻋﺖ پرواز در فرودگاه ﺣﻀﻮر داﺷﺘﻪ ﺑﺎﺷﯿﺪ.
              </li>
              <li>
                ﻟﻄﻔﺎ اﺷﯿﺎء ارزﺷﻤﻨﺪ، آﺳﯿﺐ پذیر و ﺿﺮوری را (کلید ﻣﻨﺰل، ﺳﻮﺋﯿچ
                ﺧﻮدرو، دارو و...) در ﺑﺎر تحویلی ﺧﻮد ﻗﺮار ﻧﺪﻫﯿﺪ
              </li>
              <li>
                در ﺻﻮرت ﻫﺮ گونه ﻣﻐﺎﻳﺮت در اﻃﻼﻋﺎت ﻣﺴﺎﻓﺮ (ﻧﺎم - ﻧﺎم ﺧﺎﻧﻮادگی - ﻛﺪ
                ﻣﻠﻰ - ﺷﻤﺎره پاسپورت و...) ﺟﻬﺖ اﺻﻼﺣﻴﻪ در فرودگاه ﻣﺒﻠﻎ ﯾک ﻣﯿﻠﯿﻮن
                تومان ﺟﺮﯾﻤﻪ اﺧﺬ ﺧﻮاﻫﺪ ﺷﺪ.
              </li>
              <li>ﻣﯿﺰان ﺑﺎر ﻣﺠﺎز ﺑﻪ ازای ﻫﺮ ﻣﺴﺎﻓﺮ (بزرگسال) 20 کﯿﻠﻮگﺮم</li>
              <li>
                ﻣﻘﺪار ﺑﺎر ﻣﺠﺎز داﺧﻞ کﺎﺑﯿﻦ (بزرگسال)6کﯿﻠﻮگﺮم اﺑﻌﺎد ﻣﺠﺎز:
                [55x40x20] ﺳﺎﻧﺘﯿﻤﺘﺮ
              </li>
              <li>30 دﻗﯿﻘﻪ ﻗﺒﻞ از پرواز کﺎﻧﺘﺮ پذیرش ﻣﺴﺎﻓﺮ ﺑﺴﺘﻪ ﺧﻮاﻫﺪ ﺷﺪ</li>
            </ul>
          </div>
          <div className={styles.support}>
            <p>
              تلفن پشتیبانی: <strong>05132233000</strong>
            </p>
            <p>
              آدرس آژانس:{" "}
              <span>مشهد - خیابان شهید کامیاب - بین ۳۰ و ۳۲ پلاک ۲۸۴-۲۸۶</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
);

FlyInTicketPdf.displayName = "FlyInTicketPdf";

export default FlyInTicketPdf;
