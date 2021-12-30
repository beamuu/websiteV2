import styled from "styled-components";

export const Title = styled.h2`
    margin-top: 100px;
    margin-bottom: 40px;
`


interface IAppTitle {
    children?: any
    id?: string
}
export function AppTitle({ children, id }: IAppTitle) {
    return (
        <div className="container" id={id}>
            <Title>{children}</Title>
        </div>
    )
}