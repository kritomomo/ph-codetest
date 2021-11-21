import NavBar from "../../components/Navbar/Navbar";
import useStyles from './HomePage.style';

const HomePage = () => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <NavBar />
        <h2>Home Page</h2>
      </div>
  );
};

export default HomePage;