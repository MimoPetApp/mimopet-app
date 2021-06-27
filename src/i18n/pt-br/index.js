import petCreation from "./creation/pet/petCreation";
import petProfile from "./show/pet/petProfile";
import getStarted from "./auth/getStarted";
import login from "./auth/login";
import create from "./auth/create";

export default {
  ...petCreation,
  ...petProfile,
  ...getStarted,
  ...login,
  ...create
};
