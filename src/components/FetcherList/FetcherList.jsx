import { useJsonFetch } from '../../hooks/useJsonFetch';

export const FetcherList = ({ urls }) => {
  const baseUrl = process.env.REACT_APP_FETCH_BASE_URL;

  return (
    <ul className="fetcher_list">
      {urls.map((url, i) => (
        <Fetcher url={url} baseUrl={baseUrl} key={i} />
      ))}
    </ul>
  );
};

const Fetcher = ({ url, options, baseUrl }) => {
  const [data, loading, error] = useJsonFetch(`${baseUrl}/${url}`, options);

  return error ? (
    <div className="error">{error.message}</div>
  ) : loading ? (
    <div className="loading">loading...</div>
  ) : (
    <div className="successful_request">
      The data converted to string is: {JSON.stringify(data)}'
    </div>
  );
};
