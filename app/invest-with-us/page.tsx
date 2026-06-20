import Cta from "../homepage/cta"
import InvestTypes from "./components/invest-types"
import InvestRequirements from "./components/invest-requirements"
import InvestHero from "./components/invest-hero"


export default function Page(){
  return (
    <>
    <InvestHero />
    <InvestRequirements />
    {/* <InvestTypes /> */}
    <Cta />
    </>
  )
}