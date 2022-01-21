import React from 'react';
import PropTypes from 'prop-types';

const Mail = ({ color }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill={color}
        >
            <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
        </svg>
    );
};

Mail.propTypes = {
    color: PropTypes.string,
};

Mail.defaultProps = {
    color: '#000000',
};

export default Mail;
