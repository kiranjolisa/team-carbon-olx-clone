import React from 'react'
import { useWindowScroll } from 'react-use'
import {IoIosArrowUp} from "react-icons/io"

import {Scroll} from "./styles"


export const ScrollToTop = () => {

    const {y : pageYOffset} = useWindowScroll()

    const [visible, setVisible] = React.useState(false)

    React.useEffect(() => {
        if(pageYOffset > 400) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    }, [pageYOffset])

    const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth" })

    if(!visible) {
        return false
    }
    return (
        <Scroll>
            <div>
                <button onClick = {scrollToTop} > <IoIosArrowUp size = "20px"/> Back to top</button>
            </div>
        </Scroll>
    )
}
