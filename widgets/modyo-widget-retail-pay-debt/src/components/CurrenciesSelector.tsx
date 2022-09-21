import { MNav, MNavItem, MNavLink } from '@modyolabs/react-design-system';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  getCurrencies,
  getSelectedCurrency,
} from '../store/selectors';
import { setSelectedCurrency } from '../store/slice';

export default function CurrenciesTabs() {
  const currencies = useAppSelector(getCurrencies);
  const dispatch = useAppDispatch();
  const activeCurrency = useAppSelector(getSelectedCurrency);

  const handleSelectCurrency = (currency: string) => {
    dispatch(setSelectedCurrency(currency));
  };

  return (
    <MNav variant="tabs" className="justify-content-center mb-3 border-bottom">
      {currencies.map((currency) => (
        <MNavItem
          onClick={() => handleSelectCurrency(currency)}
          key={currency}
        >
          <MNavLink
            text={currency}
            isActive={currency === activeCurrency}
          />
        </MNavItem>
      ))}
    </MNav>
  );
}
