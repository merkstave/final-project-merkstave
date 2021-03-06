import MainPage from "./MainPage";
import { drizzleConnect } from "drizzle-react";

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    Bounties: state.contracts.Bounties,
    drizzleStatus: state.drizzleStatus,
  };
};

const AppContainer = drizzleConnect(MainPage, mapStateToProps);

export default AppContainer;
