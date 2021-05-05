import { useEffect, useState } from 'react';

import { FetchAllAccounts } from '../../Services/Accounts';

const Collection = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    FetchAllAccounts().then((data) => {
      setAccounts(data);
    });
  }, []);
  console.log(accounts);
  return <h1> Accounts</h1>;
};
export default Collection;
