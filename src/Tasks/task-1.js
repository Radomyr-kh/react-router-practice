import {useParams} from 'react-router-dom';

export default function Task1() {
  let {id} = useParams();
  return <div>Subtask1, parameter: {id}</div>;
}
