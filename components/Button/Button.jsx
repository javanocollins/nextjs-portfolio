import React from "react";
import styled from "styled-components";
import Link from "next/link";

const ButtonStyle = styled.button`
    transition: all 0.2s;
    &:hover {
        background-color: ${(props) => props.hoverColor};
        transition: all 0.2s;
    }
`;

const Button = ({ link, title, activeColor }) => {
    return (
        <Link href={`${link}`}>
            <ButtonStyle
                className={`bg-gray-100 p-4 text-sm`}
                hoverColor={activeColor}
            >
                {title}
            </ButtonStyle>
        </Link>
    );
};

export default Button;
