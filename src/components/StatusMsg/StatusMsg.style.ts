import { createStyles, makeStyles } from "@material-ui/styles";

const useStyles = (color : string) => makeStyles(() => createStyles({
  msg: {
    margin: '10px 0',
    padding: 10,
    borderRadius: '10px',
    border: `solid 1px RGB(${color})`,
    backgroundColor: `rgba(${color}, 0.2)`,
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    fontWeight: 500,
    marginLeft: '16px',
    textAlign: 'left',
    color: `RGB(${color})`,
  }
}))();

export default useStyles;