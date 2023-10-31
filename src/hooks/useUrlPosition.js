import { useSearchParams } from "react-router-dom";
export function useUrlPosition() {
  // Here we are introduced this useSearchParameters hook that will get the parameter of the URL that we have set up with
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return { lat, lng };
}
