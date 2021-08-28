import FriendList from "./components/FriendList/FriendList";
import user from "./components/Profile.js/user.json";
import Profile from "./components/Profile.js/Profile";
import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./components/Statistics/statistical-data.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./components/TransactionHistory/transactions.json";
import "./App.css";

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />;
      <FriendList />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
