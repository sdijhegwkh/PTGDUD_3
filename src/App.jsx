import { useState } from "react";


export default function InvestmentCalculator() {
  const [investMoney, setInvestMoney] = useState(10);
  const [rate, setRate] = useState(10);
  const [goal, setGoal] = useState(180);
  const [data, setData] = useState([]);

  const calculateInvestment = () => {
    let year = new Date().getFullYear() + 1;
    let money = investMoney * 10;
    let result = [];

    while (money < goal) {
      let endYearMoney = Math.floor(money * (1 + rate / 100));
      result.push({ year, money, rate, endYear: endYearMoney });
      money = endYearMoney;
      year++;
    }
    setData(result);
  };

  return (
    <div className="p-6 bg-gray-900 text-white w-[400px] mx-auto rounded-lg">
      <div className="space-y-3">
        <label>Input Your Invest Money</label>
        <input
          type="number"
          value={investMoney}
          onChange={(e) => setInvestMoney(Number(e.target.value))}
          className="w-full"
        />
        <label>Input Rate:</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className="w-full"
        />
        <label>Input your Goal:</label>
        <input
          type="number"
          value={goal}
          onChange={(e) => setGoal(Number(e.target.value))}
          className="w-full"
        />
        <button onClick={calculateInvestment} className="w-full bg-black mt-3 text-white p-2 rounded">
          Click
        </button>
      </div>
      {data.length > 0 && (
        <table className="mt-5 border-collapse border border-gray-400 w-full">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2">Year</th>
              <th className="border border-gray-400 p-2">Money</th>
              <th className="border border-gray-400 p-2">Rate</th>
              <th className="border border-gray-400 p-2">End Year</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-400 p-2">{row.year}</td>
                <td className="border border-gray-400 p-2">{row.money}</td>
                <td className="border border-gray-400 p-2">{row.rate}</td>
                <td className="border border-gray-400 p-2">{row.endYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}