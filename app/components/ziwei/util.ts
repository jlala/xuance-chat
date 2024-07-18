import { getLang } from "../../locales";

export function langToLang() {
  const lang = getLang()

  if (lang === 'cn') {
    return 'zh-CN'
  } else if (lang === 'tw') {
    return 'zh-TW'
  } else if (lang === 'en') {
    return 'en-US'
  } else if (lang === 'ko') {
    return 'ko-KR'
  } else if (lang === 'jp') {
    return 'ja-JP'
  } else {
    return 'zh-CN'
  }
}