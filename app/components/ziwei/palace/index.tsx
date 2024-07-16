
import { t } from "iztro/lib/i18n";
import FunctionalAstrolabe from "iztro/lib/astro/FunctionalAstrolabe";
import { Star } from "../star";
import { IPalaceProps } from "../types";
import styles from "./index.module.scss";

export function Palace(props: {
  palace: IPalaceProps,
  astrolabe: FunctionalAstrolabe
}) {

  const handleSurroundedPalaces = () => {
    const star = props.palace.name
    const surroundedPalacesOfSoul = props.astrolabe.surroundedPalaces(star);
    console.log(surroundedPalacesOfSoul)
  }

  return (
    <div 
      className={styles["palace"]}
      style={{gridArea: `g${props.palace.index}`}}
      onClick={handleSurroundedPalaces}
    >
      <div className={styles["stars-box"]}>
        <div className={styles["palace-major"]}>
          {props.palace.majorStars?.map((star, index) => (
            <Star star={star} key={index} />
          ))}
        </div>
        <div className={styles["palace-minor"]}>
          {props.palace.minorStars?.map((star, index) => (
            <Star star={star} key={index} />
          ))}
        </div>
        <div className={styles["palace-adj"]}>
          {props.palace.adjectiveStars?.map((star, index) => (
            <Star star={star} key={index} />
          ))}
        </div>
      </div>
      <div className={styles["stars-box-footer"]}>
        <div className={styles["place-ages"]}>
          {props.palace.ages.slice(0, 7).join(" ")}
        </div>
        <div className={styles["place-decadal"]}>
          {props.palace.decadal.range.join(" - ")}
        </div>
        <div className={styles["star-48"]}>
          <div className={styles["star-cs12"]}>{props.palace.changsheng12}</div>
          <div className={styles["star-bs12"]}>{props.palace.boshi12}</div>
          <div className={styles["star-jq12"]}>{props.palace.jiangqian12}</div>
          <div className={styles["star-sq12"]}>{props.palace.suiqian12}</div>
        </div>
        <div className={styles["place-footer-right"]}>
          <div className={styles["palace-name"]}>
            {props.palace.name}
            {props.palace.isBodyPalace && (
              <span className={styles["body-palace"]}>{t("bodyPalace")}</span>
            )}
          </div>
          <div className={styles["hae"]}>
            <div>{props.palace.heavenlyStem}</div>
            <div>{props.palace.earthlyBranch}</div>
          </div>
        </div>
      </div>
    </div>
  )
}