import React, { Component } from "react";
import {
  DialogContent,
  Dialog,
  Slide
} from '@material-ui/core';

import { colors } from '../../theme'

import Unlock from './unlock.jsx';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class UnlockModal extends Component {
  render() {
    const { closeModal, modalOpen } = this.props;

    const fullScreen = window.innerWidth < 450;

    return (
      <Dialog open={ modalOpen } onClose={ closeModal } fullWidth={ true } maxWidth={ 'sm' } TransitionComponent={ Transition } fullScreen={ fullScreen }
        PaperProps={{
          style: {
            backgroundColor: colors.bg,
            boxShadow: 'none',
            border: '1px solid ' + colors.white,
            borderRadius: '10px'
          },
        }}
      >
        <DialogContent>
          <Unlock closeModal={ closeModal } />
        </DialogContent>
      </Dialog>
    )
  };
}

export default UnlockModal;
