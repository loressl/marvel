import { ReactNode, useContext, useEffect, useState } from "react"
import { Container } from "./styles"

import { VisibilityContext } from "react-horizontal-scrolling-menu";

interface ArrowProps {
    disabled: boolean
    children: ReactNode
    onClick: () => void
}

const Arrow =({disabled, children, onClick}: ArrowProps)=>{
    return(
        <Container
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </Container>
    )
}

export function LeftArrow() {
    const {
      isFirstItemVisible,
      scrollPrev,
      visibleItemsWithoutSeparators,
      initComplete
    } = useContext(VisibilityContext);
  
    const [disabled, setDisabled] = useState(
      !initComplete || (initComplete && isFirstItemVisible)
    );
    
    useEffect(() => {
      if (visibleItemsWithoutSeparators.length) {
        setDisabled(isFirstItemVisible);
      }
    }, [isFirstItemVisible, visibleItemsWithoutSeparators]);
  
    return (
      <Arrow disabled={disabled} onClick={() => scrollPrev()}>
        Left
      </Arrow>
    );
  }

  export function RightArrow() {
    const {
      isLastItemVisible,
      scrollNext,
      visibleItemsWithoutSeparators
    } = useContext(VisibilityContext);
  
    const [disabled, setDisabled] = useState(
      !visibleItemsWithoutSeparators.length && isLastItemVisible
    );
    
    useEffect(() => {
      if (visibleItemsWithoutSeparators.length) {
        setDisabled(isLastItemVisible);
      }
    }, [isLastItemVisible, visibleItemsWithoutSeparators]);
  
    return (
      <Arrow disabled={disabled} onClick={() => scrollNext()}>
        Right
      </Arrow>
    );
  }