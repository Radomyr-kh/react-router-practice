import {useSearchParams} from 'react-router-dom';

export default function Task2() {
  let [searchParams] = useSearchParams();
  let tempArr = [];
  [...searchParams].map((entry) => {
    const [param, value] = entry;
    tempArr.push(`${param}=${value}`);
  });
  let queryParams = tempArr.join(', ');
  return <div>Subtask2, query parameters: {queryParams}</div>;
}
