import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full blue__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[5%] h-[50%] rounded-full cus__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        輕鬆管理您的 <br className="sm:block hidden" /> 付款和財務帳單
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        自動付款是一個方便的方式，讓您省時省力地支付帳單。設定自動付款功能，您的帳單會在到期日自動支付，免去了忘記或延遲付款的困擾。同時，數位帳單也讓您能夠將所有的帳單集中在一個平臺上。
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple_store"
          className="w-[128px] h-[42px] object-contatin mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-contatin  cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
