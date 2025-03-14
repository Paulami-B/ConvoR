import { useState } from "react";
import { TitleType } from "../props/SideBarProps";


interface OptionContextType {
  option: TitleType;
  setOption: (option: TitleType) => void;
}

export const useSetOption = (): OptionContextType => {
  const [option, setOption] = useState<TitleType>("message");
  return { option, setOption };
};