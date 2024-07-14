import { useEffect } from "react";
import { astro } from "iztro";
import { Palace } from "../palace";
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
      {astrolabe?.palaces.map((palace) => {
        return (
          <Palace palace={palace} />
        )
      })}
    </>
  )
}