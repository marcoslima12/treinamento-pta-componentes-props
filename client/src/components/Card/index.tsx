import React from "react";
import { CardDescription, CardTitle, StyledCard } from "./styles";

type CardProps = {
    title: string;
    description: string;
}


export const CardComponent = ({title, description}: CardProps) => {
    return(
        <StyledCard>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </StyledCard>
    );
}