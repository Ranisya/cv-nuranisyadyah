function RowPekerjaan (props:any) {
    return (<div className="border-2 border-indigo-500/75 rounded-lg bg-white-800 p-2 my-5">
      <div className="className cointainer mx-auto">
        <div className="className grid grid-cols-12 gap-1">
          <div className="span-12 md:col-span-4">{props.sebagai}</div>
          <div className="col-span-12 md:col-span-4">{props.instansi}</div>
          <div className="col-span-12 md:col-span-4">{props.tahun}</div>
          </div>
        </div>
      </div>
    );  
  } 

export default function RiwayatPekerjaan() {
  return (
    <div className="container mx=auto p-2 text-center">
      <h2 className="text-3xl">Riwayat Pekerjaan</h2>
            <RowPekerjaan sebagai="Admin" instansi="PT Heekea" tahun="2020-2024"/>
            <RowPekerjaan sebagai="Akuntan" instansi="PT Ma'soem" tahun="Juli 2023"/>
            <RowPekerjaan sebagai="Bendahara" instansi="Computer Club" tahun="2023-2024"/>
    </div>
  );
}