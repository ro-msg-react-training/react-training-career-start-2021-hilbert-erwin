import { makeStyles, Theme } from "@material-ui/core";

export const useProductUpdateStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "75%",
    margin: "auto",
    marginTop: "50px",
    borderRadius: "10px",
    padding: "20px",
  },
  items: {
    margin: "10px",
  },
  input: {
    width: "100%",
  },
}));
