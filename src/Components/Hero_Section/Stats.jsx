import { useEffect, useState } from "react";

const Stats = () => {
  const [githubData, setGithubData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/2608raghav")
      .then((res) => res.json())
      .then((data) => setGithubData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex justify-center gap-8 mt-14 flex-wrap">

  <div className="bg-green-500/5 border border-green-500/20 rounded-xl px-8 py-5 text-center">
    <h3 className="text-4xl font-bold text-green-400">500+</h3>
    <p className="text-gray-400 mt-2">Contributions</p>
  </div>

  <div className="bg-green-500/5 border border-green-500/20 rounded-xl px-8 py-5 text-center">
    <h3 className="text-4xl font-bold text-green-400">250+</h3>
    <p className="text-gray-400 mt-2">DSA Problems</p>
  </div>

  <div className="bg-green-500/5 border border-green-500/20 rounded-xl px-8 py-5 text-center">
    <h3 className="text-4xl font-bold text-green-400">10+</h3>
    <p className="text-gray-400 mt-2">Projects Built</p>
  </div>

  <div className="bg-green-500/5 border border-green-500/20 rounded-xl px-8 py-5 text-center">
    <h3 className="text-4xl font-bold text-green-400">5+</h3>
    <p className="text-gray-400 mt-2">Open Source Contributions</p>
  </div>

</div>
  );
};

export default Stats;