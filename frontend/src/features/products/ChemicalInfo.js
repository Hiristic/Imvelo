import React from 'react';
import { GoBackButton, ContentWrapper } from "./product.styled";
import Products from "./Products";
import { useHistory } from 'react-router-dom';

const ChemicalInfo = () => {

    const history = useHistory();
    return (
        <ContentWrapper>
            <GoBackButton onClick={() => history.push('./')}>
                Tillbaka till Produktlistan
            </GoBackButton>
        </ContentWrapper>

    );
};

export default ChemicalInfo;