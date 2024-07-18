import { IStarProps } from "../types"
import styles from "./index.module.scss";
import { getLang } from "../../../locales";

export function Star(props: {
  star: IStarProps
}) {
  const starType = `star-name-${props.star.type}`
  return (
    <div className={styles["star-box"]}>
      <div className={`${styles["star-name"]} ${starType} ${getLang() ? 'en' : ''}`}>
        {props.star.name}
      </div>
      <div className={styles["star-brightness"]}>
        {props.star.brightness}
      </div>
      <div className={styles["star-mutagen"]}>
        {props.star.mutagen}
      </div>
    </div>
  )
}