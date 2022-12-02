import React from "react";

import { Components, HomeContainer } from './styles';
import { CardComponent } from "../../components";


export const Home = () => {
    return (
        <HomeContainer>
          <h1>Bora componetizar!</h1>
          <Components>
            <CardComponent title={"Marcos Antonio"} description={"Sistemas de Informação"}/>
            <CardComponent title="Paulo Andre" description="Engenharia de Requisitos"/>
            <CardComponent title="José" description="Juliane"/>
          </Components>
        </HomeContainer>
    );
}