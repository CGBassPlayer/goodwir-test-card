import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';
import { Typography } from '@ellucian/react-design-system/core';

import { SicasDropdown, TestButton } from "../components"

  const styles = () => ({
  card: {
    marginTop: 0,
    marginRight: spacing40,
    marginBottom: 0,
    marginLeft: spacing40
  }
});

const GoodwirTestCardCard = (props) => {
  const { classes } = props;

  return (
    <div className={classes.card}>
      <Typography variant="h2">
        Hello SICAS
      </Typography>
      <SicasDropdown />
      <TestButton emoji='🔥'/>
    </div>
  );
};

GoodwirTestCardCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GoodwirTestCardCard);
