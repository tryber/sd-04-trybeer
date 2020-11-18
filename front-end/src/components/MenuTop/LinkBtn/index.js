import React from 'react';
import { Button } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

const LinkBtn = (props) => {
  const history = useHistory();
  const { route, children } = props;

  return (
    <Button
      variant="outline"
      mt={ 3 }
      mr={ 3 }
      type="button"
      data-testid="no-account-btn"
      onClick={ () => {
        history.push(route);
      } }
    >
      {children}
    </Button>

  );
};

export default LinkBtn;
