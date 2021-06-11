import React from 'react'
import {LoadMore} from "./styles"

export const LoadMoreButton = ({showMoreItems}) => {
    return (
        <LoadMore>
            <button onClick = {showMoreItems}>Load more</button>
        </LoadMore>
    )
}
