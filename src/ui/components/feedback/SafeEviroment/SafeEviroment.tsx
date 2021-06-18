import React from 'react';
import { SafeEvirementContainer } from './SafeEviroment.style';
import { Container } from '@material-ui/core';


const SafeEviroment = () => {

    return (
        <SafeEvirementContainer>
            <Container>
                Ambiente Seguro <i className={'twf-lock'} /> 
            </Container>
        </SafeEvirementContainer>
    );
}

export default SafeEviroment;