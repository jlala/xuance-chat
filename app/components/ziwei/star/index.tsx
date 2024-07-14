import { IStarProps } from "../types"
import styles from "./index.module.scss";

export function Star(props: {
  star: IStarProps
}) {
  return (
    <div className={styles["star-box"]}>
      <div className={styles["star-name"]}>
        {props.star.name}
      </div>
      <div className={styles["star-brightness"]}>{props.star.brightness}</div>
      <div className={styles["star-mutagen"]}>{props.star.mutagen}</div>
    </div>
  )
}