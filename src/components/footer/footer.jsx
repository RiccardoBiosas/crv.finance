import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    padding: '0 32px',
    display: 'flex',
    width: '100%',
    borderBottom: 'none',
    flexWrap: 'wrap',
    // [theme.breakpoints.down('xs')]: {
    //   justifyContent: 'flex-start',
    // }
  },
  builtWith:{
    marginBottom: '20px'
  },
  builtHeading: {
    marginBottom: '12px',
    marginRight: '1rem',
    color: 'white',
    // textDecoration: 'none',
    paddingBottom: '10px',
    "&:hover": {
      textDecoration: 'underline'
    }
  },
})

class Footer extends Component {

  constructor(props) {
    super()

    this.state = {}
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.footer}>
        <div className={ classes.builtWith }>
          <a href="https://opium.finance" target='__blank' className={ classes.builtHeading }>Opium.Finance</a>
          <a href="https://github.com/andrecronje/crv.finance" target='__blank' className={ classes.builtHeading }>Credits</a>
        </div>
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(Footer));
