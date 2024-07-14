
import { Star } from "../star";
import { IPalaceProps } from "../types";
import styles from "./index.module.scss";

export function Palace(props: {
  palace: IPalaceProps
}) {
  console.log(props.palace)

  return (
    <div 
      className={styles["palace"]}
      style={{gridArea: `g${props.palace.index}`}}
    >
      <div className={styles["stars-box"]}>
        <div className={styles["palace-major"]}>
          {props.palace.majorStars?.map((star) => (
            <Star star={star}/>
          ))}
        </div>
        <div className={styles["palace-minor"]}>
          {props.palace.minorStars?.map((star) => (
            <Star star={star}/>
          ))}
        </div>
        <div className={styles["palace-adj"]}>
          {props.palace.adjectiveStars?.map((star) => (
            <Star star={star}/>
          ))}
        </div>
      </div>
      <div>
        {props.palace.name}
      </div>
    </div>
  )
}