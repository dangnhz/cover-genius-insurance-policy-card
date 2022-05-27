import React from 'react'
import { StyledSkeletonElement } from '../styles/SkeletonElement.styled';

const SkeletonElement = ({type} : {type: string}) => {
  return (
    <StyledSkeletonElement className={type} />
  )
}

export default SkeletonElement