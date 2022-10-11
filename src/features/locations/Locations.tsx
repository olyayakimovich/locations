import { useGetLocationsQuery } from './Locations.api';
import { Location } from './Locations.types';
import './Locations.css';

export const Locations = () => {
  const { data } = useGetLocationsQuery();
  return (
    <div className='container'>
      {data?.locations.map(({ id, name }: Location) => <h2 key={id}>{name}</h2>)}
    </div>
  );
}
