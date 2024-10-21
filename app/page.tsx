import Hero from "./components/hero";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import "./nurani-style.css"

export default function CVonline () {
  return(
    <section>
      <Hero/>
      <RiwayatPendidikan/>
      <RiwayatPekerjaan/>
    </section>
  )
}