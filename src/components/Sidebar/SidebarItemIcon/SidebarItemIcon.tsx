import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarItemIconStyled } from "./SidebarItemIcon.styled";


export interface SidebarItemIconCustomProps {
    iconType ? : "stroked" | "filled";
}

export type SidebarItemIconElementType = HTMLDivElement;
export type SidebarItemIconProps       = CommonAndHTMLProps<SidebarItemIconElementType> & SidebarItemIconCustomProps;

export const SidebarItemIcon = ({
    iconType,
    ...props
}: SidebarItemIconProps) => {
    let classNames = [];

    if (iconType) {
        classNames.push(`icon-${iconType}`);
    }

    return (
        <Element<SidebarItemIconElementType>
            as={SidebarItemIconStyled}
            classNames={classNames}
            {...props}
        />
    );
}
