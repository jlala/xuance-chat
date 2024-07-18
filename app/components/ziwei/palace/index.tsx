
import { t } from "iztro/lib/i18n";
import FunctionalAstrolabe from "iztro/lib/astro/FunctionalAstrolabe";
import { Star } from "../star";
import { IPalaceProps } from "../types";
import styles from "./index.module.scss";
import { getLang } from "@/app/locales";
import { useEffect, useState } from "react";
import { fixIndex } from "iztro/lib/utils";

export function Palace(props: {
  palace: IPalaceProps,
  astrolabe: FunctionalAstrolabe,
  focusedIndex?: number,
  onFocused?: (index?: number) => void;
}) {
  const [surroundedPalacesOfSoul, setSurroundedPalacesOfSoul] = useState<any>({})
  const [classes, setClasses] =  useState({
    'palace': true,
    'target': false,
    'opposite': false,
    'wealth': false,
    'career': false,
  })
  const handleSurroundedPalaces = () => {
    props.onFocused?.(props.palace.index)
    const palaceName = props.palace.name
    const surroundedPalacesOfSoul = props.astrolabe.surroundedPalaces(palaceName);
    // setSurroundedPalacesOfSoul(surroundedPalacesOfSoul)
  }

  useEffect(() => {
    const index = props.palace.index
    const focusedIndex = props.focusedIndex
    const indexClasses = {
      ...classes,
      'target': focusedIndex === index,
      'opposite': focusedIndex !== undefined && index === fixIndex(focusedIndex + 6),
      'wealth': focusedIndex !== undefined && (index === fixIndex(focusedIndex + 4) || index === fixIndex(focusedIndex - 4)) ,
    }
    
    setClasses(indexClasses)
  }, [props.focusedIndex])

  return (
    <div 
      className={Object.entries(classes)
        .filter(([key, value]) => value)
        .map(([key]) => key)
        .join(" ")
      }
      style={{gridArea: `g${props.palace.index}`}}
      onClick={handleSurroundedPalaces}
      onMouseEnter={() => props.onFocused?.(props.palace.index)}
    >
      <div className={styles["stars-box"]}>
        <div className={`${getLang() === 'en' ? 'palace-head-en' : 'palace-head'} ${styles["palace-major"]}`}>
          {props.palace.majorStars?.map((star, index) => (
            <Star star={star} key={index} />
          ))}
        </div>
        <div className={`${getLang() === 'en' ? 'palace-head-en' : 'palace-head'} ${styles["palace-minor"]}`}>
          {props.palace.minorStars?.map((star, index) => (
            <Star star={star} key={index} />
          ))}
        </div>
        <div className={`${getLang() === 'en' ? 'palace-head-en' : 'palace-head'} ${styles["palace-adj"]}`}>
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