
import React from 'react';
import { QuizResult } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';

interface AnalyticsDashboardProps {
  results: QuizResult[];
}

const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ results }) => {
  if (results.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border p-12 text-center">
        <div className="text-6xl mb-6">📉</div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">No Data Yet</h2>
        <p className="text-slate-500">Take some quizzes to see your learning progress analytics!</p>
      </div>
    );
  }

  const totalQuizzes = results.length;
  const avgScore = results.reduce((acc, r) => acc + (r.score / r.total), 0) / totalQuizzes * 100;
  
  // Prepare data for sport performance chart
  const sportDataObj: Record<string, { name: string, score: number, count: number }> = {};
  results.forEach(r => {
    if (!sportDataObj[r.sport]) sportDataObj[r.sport] = { name: r.sport, score: 0, count: 0 };
    sportDataObj[r.sport].score += (r.score / r.total) * 100;
    sportDataObj[r.sport].count += 1;
  });

  const sportData = Object.values(sportDataObj).map(d => ({
    name: d.name,
    accuracy: Math.round(d.score / d.count)
  }));

  // Prepare difficulty data
  const diffDataObj: Record<string, number> = { Easy: 0, Medium: 0, Hard: 0 };
  results.forEach(r => diffDataObj[r.difficulty]++);
  const diffData = Object.keys(diffDataObj).map(k => ({ name: k, value: diffDataObj[k] }));

  const COLORS = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Total Quizzes</p>
          <p className="text-3xl font-black text-slate-900">{totalQuizzes}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Avg Accuracy</p>
          <p className="text-3xl font-black text-indigo-600">{Math.round(avgScore)}%</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">Best Sport</p>
          <p className="text-3xl font-black text-green-600">
            {sportData.sort((a,b) => b.accuracy - a.accuracy)[0]?.name || 'N/A'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[400px]">
        {/* Performance by Sport */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm flex flex-col">
          <h3 className="text-sm font-bold text-slate-800 mb-6 uppercase tracking-wider">Accuracy by Sport</h3>
          <div className="flex-1 min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sportData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis unit="%" fontSize={12} domain={[0, 100]} />
                <Tooltip />
                <Bar dataKey="accuracy" fill="#4f46e5" radius={[4, 4, 0, 0]}>
                  {sportData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Difficulty Distribution */}
        <div className="bg-white p-6 rounded-2xl border shadow-sm flex flex-col">
          <h3 className="text-sm font-bold text-slate-800 mb-6 uppercase tracking-wider">Difficulty Distribution</h3>
          <div className="flex-1 min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={diffData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {diffData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 text-xs font-bold mt-2">
            {diffData.map((d, i) => (
              <div key={d.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }}></div>
                <span className="text-slate-600">{d.name}: {d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History Table */}
      <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
        <div className="p-6 border-b">
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">Quiz History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest border-b">
              <tr>
                <th className="px-6 py-4">Sport</th>
                <th className="px-6 py-4">Difficulty</th>
                <th className="px-6 py-4">Score</th>
                <th className="px-6 py-4">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm">
              {results.slice().reverse().map((r) => (
                <tr key={r.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-700">{r.sport}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                      r.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                      r.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {r.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-mono font-bold text-indigo-600">{r.score}/{r.total}</span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">
                    {new Date(r.timestamp).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
