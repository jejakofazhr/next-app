import { useMemo } from 'react';

export default function ExpensiveComponent({ data }) {
  const computedData = useMemo(() => {
    return data.map(item => item.value * 2);
  }, [data]);
  return <div>{computedData.join(', ')}</div>;
}
