import React from 'react';
import { StyledLoader, Spinner } from './styles';

const Loader = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <StyledLoader {...props}>
      <Spinner />
    </StyledLoader>
  );
}

export default Loader;
