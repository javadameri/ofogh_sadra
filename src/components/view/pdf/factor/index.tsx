import React from "react";
import styles from "./factor.module.scss";
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

const FactorPdf = React.forwardRef<HTMLDivElement, TicketProps>(
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
      <div ref={ref} className={`container ${styles.factor}`}>
        <div className="row p-3">
          <div className={`col-6 ${styles.cashier}`}>
            <div className={styles.head}>
              <Image
                src="/img/logo1.png"
                alt="بلیت اینجا"
                width={200}
                height={100}
                className={styles.logo}
              />
              <div className="text-center px-4">
                <h4 className="mb-3 bold">قبض صندوق</h4>
                <p>نسخه مشتری</p>
              </div>
            </div>
            <div className={styles.box1}>
              <p>
                رفرنس: <span>dfdfgh</span>
              </p>
              <p>
                شماره: <span>۱۲۳۴۲</span>
              </p>
            </div>
            <div className={styles.box1}>
              <p>
                تاريخ: <span>dfdfgh</span>
              </p>
              <p>
                شماره رسید صندق: <span>۱۲۳۴۲</span>
              </p>
            </div>
            <div className={styles.box1}>
              <p>
                رزرو: <span>dfdfgh</span>
              </p>
              <p>
                آژانس: <span>۱۲۳۴۲</span>
              </p>
            </div>
            <div className={styles.box1}>
              <p>
                شرح: فروش بلیط {"1"} فقره {"ALIJASEMPOOR"} پرواز رفت {"23432"}{" "}
                مورخ {"34/23/43"} ساعت {"23:23"} از {"تهران"} به {"مشهد"} رفرنس{" "}
                {"vfd232"} واچر {"345432"} شرکت هواپیمایی {"ایران ایر"}
              </p>
            </div>
            <div className={styles.box1}>
              <p>تلفن مشتری: +۹۸۹۳۴۵۳۴۳۴</p>
            </div>
            <div className={styles.box2}>
              <div className={styles.mohr}>
                <p>مهر و امضا مسئول فروش</p>
              </div>
              <div className="text-center">
                <p>مبلغ:</p>
                <strong>34,545,000</strong>
              </div>
              <div className={styles.mohr}>
                <p>مهر و امضا صندوق</p>
              </div>
            </div>
          </div>
          <div className={`col-6 ${styles.customer}`}>
            <div className={styles.head}>
              <Image
                src="/img/logo1.png"
                alt="بلیت اینجا"
                width={200}
                height={100}
                className={styles.logo}
              />
              <div className="text-center px-4">
                <h4 className="mb-3 bold">قبض صندوق</h4>
                <p>نسخه صندوقدار</p>
              </div>
            </div>
            <div className={styles.box1}>
              <p>
                رفرنس: <span>dfdfgh</span>
              </p>
              <p>
                شماره: <span>۱۲۳۴۲</span>
              </p>
            </div>
            <div className={styles.box1}>
              <p>
                تاريخ: <span>dfdfgh</span>
              </p>
              <p>
                شماره رسید صندق: <span>۱۲۳۴۲</span>
              </p>
            </div>
            <div className={styles.box1}>
              <p>
                رزرو: <span>dfdfgh</span>
              </p>
              <p>
                آژانس: <span>۱۲۳۴۲</span>
              </p>
            </div>
            <div className={styles.box1}>
              <p>
                شرح: فروش بلیط {"1"} فقره {"ALIJASEMPOOR"} پرواز رفت {"23432"}{" "}
                مورخ {"34/23/43"} ساعت {"23:23"} از {"تهران"} به {"مشهد"} رفرنس{" "}
                {"vfd232"} واچر {"345432"} شرکت هواپیمایی {"ایران ایر"}
              </p>
            </div>
            <div className={styles.box1}>
              <p>تلفن مشتری: +۹۸۹۳۴۵۳۴۳۴</p>
            </div>
            <div className={styles.box2}>
              <div className={styles.mohr}>
                <p>مهر و امضا مسئول فروش</p>
              </div>
              <div className="text-center">
                <p>مبلغ:</p>
                <strong>34,545,000</strong>
              </div>
              <div className={styles.mohr}>
                <p>مهر و امضا صندوق</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

FactorPdf.displayName = "FactorPdf";

export default FactorPdf;
