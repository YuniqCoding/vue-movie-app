import axios from "axios";
import _upperFirst from "lodash/upperFirst";
import _toLower from "lodash/toLower";

export async function fetchMovieTitle() {
  const res = await axios.get(
    "https://www.omdbapi.com/?apikey=7035c60c&i=tt4520988"
  );
  return _upperFirst(_toLower(res.data.Title)); // Frozen II => Frozen ii
}
