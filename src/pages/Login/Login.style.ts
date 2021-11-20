import { createStyles, makeStyles } from "@material-ui/styles";

export default makeStyles(() => createStyles({
  container: {
    width: 500,
    display: 'flex',
    flexDirection: 'column',
  },
  username: {
    marginBottom: 20,
  },
  password: {
    marginBottom: 20,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    margin: 10,
  },
  errorMsg: {
    color: '#eb5757',
    fontWeight: 600,
    fontSize: 15,
  }
}));