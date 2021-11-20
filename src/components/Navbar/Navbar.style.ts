import { createStyles, makeStyles } from "@material-ui/styles";

export default makeStyles(() => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    margin: '10px 10px',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
}));