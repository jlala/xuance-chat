import { useEffect, useState } from "react";
import { GenderName } from "iztro/lib/i18n";
import { Astrolabe } from "./astrolabe";
import styles from "./index.module.scss";
import { langToLang } from "./util";

export function Ziwei() {
  const [birthDay, setBirthdDay] = useState("1998-4-7")
  const [birthTime, setBirthTime] = useState(5)
  const [birthDayType, setBirthdDayType] = useState("solar")
  const [gender, setGender] = useState<GenderName>("男")
  const [language, setLanguage] = useState("zh-CN")
  
  useEffect(() => {
    setLanguage(langToLang())
  }, [language])
  
  return (
    <div className={styles.ziwei}>
      <div className={`astrolabe-theme-default ${styles["astrolabes"]}`}>
        <Astrolabe 
          userInfo={{
            name: "",
            birthDay,
            birthTime,
            birthDayType,
            gender,
          }}
          language={language}
        />
      </div>
    </div>
  )
}