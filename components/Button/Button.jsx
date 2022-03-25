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
                className={`bg-gray-700 lg:p-4 p-3 text-sm text-white`}
                hoverColor={activeColor}
            >
                {title}
            </ButtonStyle>
        </Link>
    );
};

export default Button;
