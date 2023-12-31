import { ITabData, ITabInfo } from "Types";
import { ReactNode } from "react";

interface IFeaturesContext {
    isChanging: boolean,
    featuresData: ITabInfo,
    tabs: ITabData[]
    handleFocus: (event: React.FocusEvent<HTMLInputElement>) => undefined | boolean
    handleClick: (event: React.MouseEvent<HTMLInputElement>) => void
}


interface IFeaturesProps {
    children: ReactNode
}

export type { IFeaturesContext, IFeaturesProps };