import { withStyles } from '@ellucian/react-design-system/core/styles';
import { spacing20 } from '@ellucian/react-design-system/core/styles/tokens';
import { Typography } from '@ellucian/react-design-system/core';
import PropTypes from 'prop-types';
import React from 'react';
import {
    usePageControl
} from '@ellucian/experience-extension/extension-utilities'

const styles = () => ({
    card: {
        margin: `0 ${spacing20}`
    }
});

const HomePage = (props) => {
    const { classes } = props;
    const { setPageTitle } = usePageControl();

    setPageTitle("Page 1");

    return (
        <div className={classes.card}>
            <Typography variant={'h2'}>
                Page 1
            </Typography>
        </div>
    );
};

HomePage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomePage);