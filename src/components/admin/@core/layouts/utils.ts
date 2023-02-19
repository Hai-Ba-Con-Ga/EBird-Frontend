import { useLocation, useParams } from 'react-router-dom';

/**
 * Check for URL queries as well for matching
 * Current URL & Item Path
 *
 * @param path
 */
export const handleURLQueries = (path:any) => {
  const { search } = useLocation();
  const { id } = useParams();

  if (search && path) {
    const searchParams = new URLSearchParams(search);
    const queryParam = searchParams.get('query');

    return path === `/items/${id}` && queryParam !== null;
  }

  return false;
};
