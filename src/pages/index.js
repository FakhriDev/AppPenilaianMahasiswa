import { Inter } from 'next/font/google';
import Tabel from '../components/Tabels';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className="flex justify-center max-w-[1440px] mx-auto">
        <div className="mt-20 mb-10">
          <h4 className="text-[24px]">PENILAIAN MAHASISWA</h4>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto mb-10">
        <div className="relative overflow-x-auto">
          <Tabel />
        </div>
      </div>
    </>
  );
}
