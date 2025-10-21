const pricingData = [
  {
    tidspunkt: "Dag (Man-Fre 06-18)",
    startpris: "58,-",
    start_m: "97,-",
    kr_pr_km: "12,20",
    kr_pr_min: "8,42",
    minstepris: "128,-",
    jamforpris: "265,-",
    fjerntakst: "21,20",
  },
  {
    tidspunkt: "Kveld (Man-Fre 18-24)",
    startpris: "70,-",
    start_m: "117,-",
    kr_pr_km: "14,76",
    kr_pr_min: "10,18",
    minstepris: "155,-",
    jamforpris: "321,-",
    fjerntakst: "25,65",
  },
  {
    tidspunkt: "Lørdag (06-18)",
    startpris: "75,-",
    start_m: "126,-",
    kr_pr_km: "15,86",
    kr_pr_min: "10,94",
    minstepris: "166,-",
    jamforpris: "345,-",
    fjerntakst: "27,58",
  },
  {
    tidspunkt: "Helginatt (Man-Fre 24-06/Lør-Søn 18-06)",
    startpris: "78,-",
    start_m: "131,-",
    kr_pr_km: "16,47",
    kr_pr_min: "11,36",
    minstepris: "173,-",
    jamforpris: "358,-",
    fjerntakst: "28,62",
  },
  {
    tidspunkt: "Høytid og Helligdager",
    startpris: "84,-",
    start_m: "141,-",
    kr_pr_km: "17,69",
    kr_pr_min: "12,20",
    minstepris: "186,-",
    jamforpris: "384,-",
    fjerntakst: "30,74",
  },
];

export default function PricingTable() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-primary-2 mb-6">Prisoversikt (1-4 personer)</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tidspunkt</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Startpris</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start m.</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kr/km</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kr/min</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Minstepris</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jamførpris*</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fjerntakst†</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pricingData.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.tidspunkt}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.startpris}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.start_m}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.kr_pr_km}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.kr_pr_min}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.minstepris}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.jamforpris}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.fjerntakst}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500 mt-4">*Jamførpris er basert på startpris + 8 km + 13 min betalt tid. Prisene gjelder fra 15. april 2024 og er inklusive 12% mva. † Fjerntakst gjelder per km etter 10 km.</p>
    </div>
  );
}
