import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    void (async () => {
      const response = await fetch('http://localhost:8000/');
      const data = await response.json();
      console.log(data);
      setData(data);
    })();
  }, []);

  return (
    <div>
      <h1>monorepo (Next.js, Fast API)</h1>
      <div>
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
};

export default Home;
