import React from "react";

import { Element } from "../../Element/Element";

import { SidebarHeaderStyled } from "./SidebarHeader.styled";
import { SidebarHeaderProps, SidebarHeaderElementType } from "../constants";

export const SidebarHeader = ({ ...props }: SidebarHeaderProps) => {
    return (
        <Element<SidebarHeaderElementType>
            as={SidebarHeaderStyled}
            {...props}
        />
    );
}