import { useEffect, useState } from "react";
import { astro } from "iztro";
import { Palace } from "../palace";
import { PalaceCenter } from "../palacecenter";
import "./index.module.scss";
import { userInfo } from "../types";
import { Language } from "iztro/lib/data/types";

export function Astrolabe(props: {
  userInfo: userInfo,
  language: Language
}) {
  const [focusedIndex, setFocusedIndex] = useState<number>();
  const fixLeap = true
  const astrolabe = astro.bySolar(
    props.userInfo.birthDay,
    props.userInfo.birthTime,
    props.userInfo.gender,
    fixLeap,
    props.language
  )

  return (
    <>
      {astrolabe?.palaces.map((palace, index) => {
        return (
          <Palace 
            astrolabe={astrolabe} 
            palace={palace} 
            key={index}
            focusedIndex={focusedIndex}
            onFocused={setFocusedIndex}
          />
        )
      })}
      <PalaceCenter astrolabe={astrolabe} />
    </>
  )
}