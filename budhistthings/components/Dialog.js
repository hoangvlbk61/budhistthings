import React from 'react';
import PropTypes from 'prop-types';

const Dialog = props => {
    return (
        <dialog class="backdrop:bg-gray-50">
            <form method="dialog">
                {chilren}
            </form>
        </dialog>
    );
};

Dialog.propTypes = {

};

export default Dialog;