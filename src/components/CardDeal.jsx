import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        找到更好的交易 <br className="sm:block hidden" /> 只需要幾個簡單的步驟。
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        使用我們的服務，您可以輕鬆找到更優惠的交易內容。我們提供一個方便的平臺，讓您比較不同品牌或商家的價格和優惠，以確保您獲得最佳的交易。
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="cards" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
