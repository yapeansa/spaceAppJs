import tags from "./tags.json"
import { styled } from "styled-components"

const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 17px;
    margin-top: 56px;
    flex-wrap: wrap;
`

const TextoTags = styled.p`
    font-size: 24px;
    color: #D9D9D9;
    width:219px;
`

const TagList = styled.div`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
`

const TagButton = styled.button`
    padding: 10px 8px 8px;
    border-radius: 10px;
    background: rgba(217, 217, 217, 0.30);
    border: 2px solid transparent;
    box-sizing: border-box;
    color: #FFF;
    font-size: 24px;
    cursor: pointer;
    transition: .3s ease border-color;
    &:hover {
        border-color: #C98CF1;
    }
`

const Tags = ({ enviaBusca }) => {
    return (
        <TagsContainer>
            <TextoTags>Busque por tags:</TextoTags>
            <TagList>
                {tags.map(tag => <TagButton key={tag.id} onClick={() => enviaBusca(tag.id)}>{tag.titulo}</TagButton>)}
            </TagList>
        </TagsContainer>
    )
}

export default Tags
