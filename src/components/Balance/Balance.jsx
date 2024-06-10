import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw, selectBalance } from '../../../redux/balanceSlice';

export default function Balance() {
  const dispatch = useDispatch();
  const value = useSelector(selectBalance);
  const handleDeposit = () => {
    dispatch(deposit(10));
  };
  const handleWithdraw = () => {
    dispatch(withdraw(10));
  };
  return (
    <div>
      <p>Balance: {value}</p>
      <button onClick={handleDeposit}>Deposit credits</button>
      <button onClick={handleWithdraw}>Withdraw credits</button>
    </div>
  );
}
