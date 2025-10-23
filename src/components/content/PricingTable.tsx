import { Sun, Moon, Sunrise, Sunset, Award, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';

const pricingData = [
    {
      id: 'dag',
      tidspunkt: "Dag",
      periode: "Man-Fre 06-18",
      icon: <Sun className="w-5 h-5 mr-2 text-yellow-500" />,
      startpris: "58,-",
      kr_pr_km: "12,20",
      kr_pr_min: "8,42",
      minstepris: "128,-",
      jamforpris: "265,-",
      fjerntakst: "21,20",
    },
    {
      id: 'kveld',
      tidspunkt: "Kveld",
      periode: "Man-Fre 18-24",
      icon: <Sunset className="w-5 h-5 mr-2 text-orange-500" />,
      startpris: "70,-",
      kr_pr_km: "14,76",
      kr_pr_min: "10,18",
      minstepris: "155,-",
      jamforpris: "321,-",
      fjerntakst: "25,65",
    },
    {
      id: 'lordag',
      tidspunkt: "Lørdag",
      periode: "06-18",
      icon: <Sunrise className="w-5 h-5 mr-2 text-amber-500" />,
      startpris: "75,-",
      kr_pr_km: "15,86",
      kr_pr_min: "10,94",
      minstepris: "166,-",
      jamforpris: "345,-",
      fjerntakst: "27,58",
    },
    {
      id: 'helg_natt',
      tidspunkt: "Helg/Natt",
      periode: "Fre 18 - Man 06",
      icon: <Moon className="mr-2 text-indigo-500" style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px' }} />,
      startpris: "78,-",
      kr_pr_km: "16,47",
      kr_pr_min: "11,36",
      minstepris: "173,-",
      jamforpris: "358,-",
      fjerntakst: "28,62",
    },
    {
      id: 'hoytid',
      tidspunkt: "Høytid",
      periode: "Helligdager",
      icon: <Award className="w-5 h-5 mr-2 text-red-500" />,
      startpris: "84,-",
      kr_pr_km: "17,69",
      kr_pr_min: "12,20",
      minstepris: "186,-",
      jamforpris: "384,-",
      fjerntakst: "30,74",
    },
];

const PriceRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
        <span className="text-sm text-gray-600">{label}</span>
        <span className="text-sm font-semibold text-primary-2">{value}</span>
    </div>
);


export default function PricingTable() {
    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg h-full">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-2 mb-6">Prisoversikt (1-4 pers)</h2>
            <Tabs defaultValue="dag" className="w-full">
                <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 h-auto mb-4">
                    {pricingData.map((tab) => (
                        <TabsTrigger key={tab.id} value={tab.id} className="text-xs md:text-sm h-auto py-2">
                            {tab.icon} {tab.tidspunkt}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {pricingData.map((tab) => (
                    <TabsContent key={tab.id} value={tab.id}>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <PriceRow label="Periode" value={tab.periode} />
                            <PriceRow label="Startpris" value={tab.startpris} />
                            <PriceRow label="Kr/km" value={tab.kr_pr_km} />
                            <PriceRow label="Kr/min" value={tab.kr_pr_min} />
                            <PriceRow label="Minstepris" value={tab.minstepris} />
                            <PriceRow label="Jamførpris*" value={tab.jamforpris} />
                            <PriceRow label="Fjerntakst†" value={tab.fjerntakst} />
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
            <p className="text-xs text-gray-500 mt-4">
                *Jamførpris: Startpris + 8 km + 13 min.
                <br />
                † Fjerntakst: Gjelder per km etter 10 km.
                <br />
                Priser er inkl. 12% mva, gjeldende fra 15. april 2024.
            </p>
        </div>
    );
}
