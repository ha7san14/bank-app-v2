import React, { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosConfig";
import { AiOutlineEdit, AiOutlineSearch } from "react-icons/ai";
import EditBalanceModal from "../../components/balancemodals/EditBalanceModal";

const ManageBalance = () => {
  const [balances, setBalances] = useState([]);
  const [filteredBalances, setFilteredBalances] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [accountNumberMap, setAccountNumberMap] = useState({});
  const [usernameMap, setUsernameMap] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedBalance, setSelectedBalance] = useState(null);

  const fetchBalances = async () => {
    try {
      const response = await axiosInstance.get("/balances");
      setBalances(response.data);
      setFilteredBalances(response.data);
    } catch (error) {
      console.error("Error fetching balances:", error);
    }
  };

  const fetchAccounts = async () => {
    try {
      const response = await axiosInstance.get("/accounts");
      setAccounts(response.data);

      // Map for accountId and accountNumber
      const accountNumberMap = response.data.reduce((acc, account) => {
        acc[account.id] = account.accountNumber;
        return acc;
      }, {});

      // Map for username using account data
      const usernameMap = response.data.reduce((acc, account) => {
        acc[account.id] = account.user.username;
        return acc;
      }, {});

      setAccountNumberMap(accountNumberMap);
      setUsernameMap(usernameMap);
    } catch (error) {
      console.error("Error fetching accounts:", error);
    }
  };

  useEffect(() => {
    fetchBalances();
    fetchAccounts();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setFilteredBalances(balances);
    } else {
      const filtered = balances.filter((balance) =>
        usernameMap[balance.account.id]
          ?.toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
      setFilteredBalances(filtered);
    }
  };

  const openEditModal = (balance) => {
    setSelectedBalance(balance);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedBalance(null);
    setIsEditModalOpen(false);
  };

  const handleBalanceUpdated = (updatedBalance) => {
    setBalances((prevBalances) =>
      prevBalances.map((balance) =>
        balance.id === updatedBalance.id ? updatedBalance : balance
      )
    );
    setFilteredBalances((prevFilteredBalances) =>
      prevFilteredBalances.map((balance) =>
        balance.id === updatedBalance.id ? updatedBalance : balance
      )
    );
    closeEditModal();
  };

  return (
    <div className="p-4">
      <div className="bg-gray-800 text-white p-4 rounded-t-2xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl">Manage Balance</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by username"
              value={searchTerm}
              onChange={handleSearch}
              className="pl-4 pr-10 py-2 rounded-2xl border border-gray-300"
              style={{ color: "black" }}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <AiOutlineSearch className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-b-2xl shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="w-1/12 px-4 py-2 font-bold text-left">Sr.</th>
              <th className="w-3/12 px-4 py-2 font-bold text-left">Username</th>
              <th className="w-3/12 px-4 py-2 font-bold text-left">
                Account Number
              </th>
              <th className="w-3/12 px-4 py-2 font-bold text-left">Amount</th>
              <th className="w-2/12 px-4 py-2 font-bold text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBalances.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No balances right now
                </td>
              </tr>
            ) : (
              filteredBalances.map((balance, index) => (
                <tr
                  key={balance.id}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                >
                  <td className="border px-4 py-2 text-center">{index + 1}</td>
                  <td className="border px-4 py-2">
                    {usernameMap[balance.account.id] || "Unknown"}
                  </td>
                  <td className="border px-4 py-2">
                    {accountNumberMap[balance.account.id] || "Unknown"}
                  </td>
                  <td className="border px-4 py-2">Rs {balance.amount || 0}</td>
                  <td className="border px-4 py-2 text-center">
                    <AiOutlineEdit
                      className="text-blue-500 cursor-pointer"
                      onClick={() => openEditModal(balance)}
                      size={24}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <EditBalanceModal
        isOpen={isEditModalOpen}
        onRequestClose={closeEditModal}
        balance={selectedBalance}
        onBalanceUpdated={handleBalanceUpdated}
      />
    </div>
  );
};

export default ManageBalance;
