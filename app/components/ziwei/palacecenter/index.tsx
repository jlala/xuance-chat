import FunctionalAstrolabe from "iztro/lib/astro/FunctionalAstrolabe"
import styles from "./index.module.scss";

export function PalaceCenter(props: {
  astrolabe: FunctionalAstrolabe
}) {
  return (
    <div className={`zg ${styles["palace-center"]}`}>
      <div>{props.astrolabe.gender} {props.astrolabe.fiveElementsClass}</div>
      <div>阳历：{props.astrolabe.solarDate}</div>
      <div>农历：{props.astrolabe.lunarDate} {props.astrolabe.time}</div>
      <div>干支：{props.astrolabe.chineseDate}</div>
      <div>命主：{props.astrolabe.soul}</div>
      <div>身主：{props.astrolabe.body}</div>
    </div>
  )
}