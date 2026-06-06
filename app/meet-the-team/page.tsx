import TeamHero from "./components/team-hero"
import TeamMembers from "./components/team-members"
import TeamCta from "./components/team-cta"


export default function Page() {
    return (
        <main className="pt-16">
            <TeamHero />
            <TeamMembers />
            <TeamCta />
        </main>
    )
}