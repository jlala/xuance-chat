import { useEffect } from "react";
import { astro } from "iztro";
import { Palace } from "../palace";
import { PalaceCenter } from "../palacecenter"
import "./index.module.scss";
import { userInfo } from "../types";

export function Astrolabe(props: {
  userInfo: userInfo
}) {
  const fixLeap = true
  const language = "zh-CN"

  const astrolabe = astro.bySolar(
    props.userInfo.birthDay,
    props.userInfo.birthTime,
    props.userInfo.gender,
    fixLeap,
    language
  )

  return (
    <>
      {astrolabe?.palaces.map((palace, index) => {
        return (
          <Palace astrolabe={astrolabe} palace={palace} key={index} />
        )
      })}
      <PalaceCenter astrolabe={astrolabe} />
    </>
  )
}