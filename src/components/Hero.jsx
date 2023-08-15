import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] ">
          迎接未來 <br className="block" />{" "}
          <span className="text-gradient">跨世代 </span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        全新付款方式
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        評估信用卡時，我們的專家團隊會運用一套方法論，精準辨識最符合您需求的選項。我們致力於提供客製化的解決方案，以確保您的金融需求得到最佳滿足。
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      {/* <div className="absolute z-[0] w-[40%] h-[25%] top-0  pink__gradient" /> */}
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40  cus__gradient" />
      {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20  blue__gradient" /> */}
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);
export default Hero;
