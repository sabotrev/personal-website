import React from 'react';
import PropTypes from 'prop-types';

import IconGithub from './github';
import IconLinkedIn from './linkedin';
import IconMail from './mail';
import IconPhone from './phone';
import IconResume from './resume';

// Utility function to grab Icons by name
const Icon = ({ name, color }) => {
    switch (name.toLowerCase()) {
        case 'github':
            return <IconGithub color={color} />;
        case 'linkedin':
            return <IconLinkedIn color={color} />;
        case 'mail':
            return <IconMail color={color} />;
        case 'phone':
            return <IconPhone color={color} />;
        case 'resume':
            return <IconResume color={color} />;
        default:
            return null;
    }
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
};

export default Icon;
