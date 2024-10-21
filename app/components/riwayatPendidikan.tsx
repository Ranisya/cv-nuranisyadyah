function RowRiwayat(props: any) {
    return (   <div className="border-2 border-indigo-500/75 rounded-lg bg-white-800 p-2 my-5">
      <div className="className cointainer mx-auto">
        <div className="className grid grid-cols-12 gap1">
          <div className="className col-span-12 md:col-span-4">{props.Jejang}</div>
          <div className="className col-span-12 md:col-span-4">{props.sekolah}</div>
          <div className="className col-span-12 md:col-span-4">{props.tahun}</div>
          </div>
        </div>
      </div>
    );  
  } 


export default function RiwayatPendidikan() {
  return (

      <div className="container mx auto p-2 text-center pt-20">
    <h2 className="text-2x1">Riwayat Pendidikan</h2>
           <RowRiwayat Jejang="SD" sekolah="SDN JAYANEGARA" tahun="2006-2013"/>
            <RowRiwayat Jejang="SMP" sekolah="SMP NEGRI 1 KABANDUNGAN" tahun="2013-2015"/>
            <RowRiwayat Jejang="SMA" sekolah="SMAS PESANTREN HUSNAYAIN" tahun="2016-2020"/>
            <RowRiwayat Jejang="DIPLOMA" sekolah="MA'SOEM UNIVERSITY" tahun="2022-2025"/>
    </div>
  );
}