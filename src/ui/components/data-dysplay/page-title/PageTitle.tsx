import React from 'react';
import { PageTitleContainer, PageTitleStyled } from './PageTitle.style';


interface PageTitleProps {
    title: string;
    subtitle?: string | JSX.Element | number;
}


const PageTitle: React.FC<PageTitleProps> = (props) => {
    let abc = 55;
    return (
        <PageTitleContainer>
            <PageTitleStyled>
                {props.title}
            </PageTitleStyled>
            {props.subtitle}        
        </PageTitleContainer>
    );
}


export default PageTitle;