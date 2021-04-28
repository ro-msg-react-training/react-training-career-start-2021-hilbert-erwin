import { makeStyles, Theme } from "@material-ui/core";

export const useProductViewStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "75%",
    margin: "auto",
    marginTop: "150px",
    borderRadius: "10px",
    paddingBottom: "20px",
    paddingLeft: "25px",
  },
  image: {
    width: "50%",
  },
  details: {
    width: "50%",
    fontSize: "30px",
    fontWeight: "bold",
  },
  header: {
    fontSize: "20px",
    color: theme.palette.primary.main,
  },
  cart: {
    margin: "37px",
  },
}));
