import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex-col">
      <h2 className={styles.heading2}>立即開始體驗我們的服務吧！</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        無論您身在何方，我們將為您提供全球範圍內的服務，協助您接受信用卡付款並擴大業務。
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml:0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
