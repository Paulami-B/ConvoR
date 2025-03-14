import { TitleType } from "../props/SideBarProps";
import { SettingType } from "../props/SettingsProps";
import { create } from "zustand";
import { persist } from "zustand/middleware";


interface OptionContextType {
  option: TitleType;
  setOption: (option: TitleType) => void;
}

export const useOptionStore = create<OptionContextType>()(
  persist(
    (set) => ({
      option: "message", // Default value (only used for first-time users)
      setOption: (option) => set({ option }),
    }),
    {
      name: "option-storage", // Key name in localStorage
    }
  )
);

interface ModalDataType {
  modalData: SettingType | null;
  setModalData: (option: SettingType | null) => void;
}

export const useModalStore = create<ModalDataType>()(
  persist(
    (set) => ({
      modalData: null,
      setModalData: (modalData) => set({ modalData }),
    }),
    {
      name: "setting-storage"
    }
  )
)