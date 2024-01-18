import { StyledLoader, Spinner } from './styles';

const Loader = () => {
  return (
    <StyledLoader data-testid="loader">
      <Spinner />
    </StyledLoader>
  );
}

export default Loader;