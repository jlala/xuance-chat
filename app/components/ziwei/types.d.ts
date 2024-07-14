import { Palace, Star } from "iztro/lib/data/types";
import { GenderName } from "iztro/lib/i18n";

// 客户
interface userInfo {
  name: string
  birthDay: string
  birthTime: number
  birthDayType: string
  gender: GenderName
}

// 宫位信息
interface IPalaceProps extends Palace {
  
}

// 星信息
interface IStarProps extends Star {
  
}