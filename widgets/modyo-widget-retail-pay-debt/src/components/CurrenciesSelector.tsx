import {
  MTab, MTabList, MTabs,
} from '@modyolabs/react-design-system';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getCurrencies } from '../store/selectors';
import { setSelectedCurrency } from '../store/slice';

export default function CurrenciesTabs() {
  const currencies = useAppSelector(getCurrencies);
  const dispatch = useAppDispatch();

  const handleSelectCurrency = (currency: string) => {
    dispatch(setSelectedCurrency(currency));
  };

  return (
    <MTabs>
      <MTabList className="justify-content-center">
        {currencies.map((currency) => (
          <MTab
            onClick={() => handleSelectCurrency(currency)}
            key={currency}
          >
            {currency}
          </MTab>
        ))}
      </MTabList>
    </MTabs>
  );
}
