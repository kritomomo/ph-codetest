import React from 'react'
import { Typography } from '@material-ui/core';
import useStyles from './StatusMsg.style';

interface IStatusMsg {
  content: string;
  color: string;
}

const StatusMsg = ({ content, color }: IStatusMsg) => {
  const classes = useStyles(color);
  return (
    <div className={classes.msg}>
      <Typography className={classes.content}>
        {content}
      </Typography>
    </div>
  );
};

export default StatusMsg;