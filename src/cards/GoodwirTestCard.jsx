import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacing40 } from '@ellucian/react-design-system/core/styles/tokens';
import { ErrorPage } from '@ellucian/react-design-system/core'
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const styles = () => ({
  card: {
    marginTop: 0,
    marginRight: spacing40,
    marginBottom: 0,
    marginLeft: spacing40
  },
  icon: {
    height: "1.5rem",
    width: "1.5rem"
  }
});

const GoodwirTestCardCard = (props) => {
  const { classes } = props;

  return (
    <div className={classes.card}>
      <h2>Hello World! <CodeBracketIcon className={classes.icon}/></h2>
    </div>
  );
};

GoodwirTestCardCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GoodwirTestCardCard);
;