import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Item, ItemsService } from '../src/client';

const Home: NextPage = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    void (async () => {
      const response = await ItemsService.getItemsItemsGet();
      console.log(response);
      setData(response);
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
