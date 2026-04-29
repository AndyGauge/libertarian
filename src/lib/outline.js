// The book. Each section carries a `year` — reading order is chronological.
// Sequential page numbers (01, 02, …) are assigned after sort.

const raw = [
  {
    title: 'When a third party actually won',
    year: 1854,
    gesture: 'It has happened in American history exactly once — and only because the Whigs died first.',
    body: 'The Republican Party organized in Ripon, Wisconsin in March 1854 and held its first state convention in Jackson, Michigan in July. Six years later Lincoln took the White House. The conditions were specific: the Kansas-Nebraska Act split the Whigs along a fault line — slavery — that they could not paper over, and the party simply collapsed as a national coalition. Republicans walked into the vacuum. Every third party since has run the same play and missed: the Greenbacks in the 1880s, the Populists in the 1890s, Roosevelt\'s Bull Moose in 1912 (which came second and still failed), the Progressives, the Reform Party in 1992, the Greens, the Libertarians. None of them broke through, because neither major party died. The lesson is structural, not motivational. A third party replaces a second party. It does not add to a stable two.',
    eli5: 'A new party only wins national power when an old party dies. The Whigs died over slavery. Republicans walked in. That has happened exactly once in American history. Everyone since has been waiting for the second time.',
    citation: 'Eric Foner, *Free Soil, Free Labor, Free Men*, 1970.'
  },
  {
    title: 'Nolan\'s living room',
    year: 1972,
    gesture: 'A philosopher and an Oregon broadcaster on the ballot — and one stolen electoral vote.',
    body: 'The Libertarian Party was founded in David Nolan\'s house in Westminster, Colorado on December 11, 1971, mostly in disgust at Nixon\'s wage and price controls. The first ticket — philosopher John Hospers and Oregon broadcaster Tonie Nathan — appeared on the ballot in two states and got 3,673 votes. They also got one electoral vote, cast by Roger MacBride, a Virginia Republican elector who broke with Nixon and voted Hospers/Nathan. That vote made Tonie Nathan the first woman and the first Jewish person to receive an electoral vote in U.S. history. MacBride was rewarded with the LP\'s 1976 nomination. The party\'s self-image for the next forty years was set in that founding gesture: small, principled, philosophically literate, structurally doomed.',
    eli5: 'Started in a Colorado living room over Nixon\'s price controls. First ticket got 3,673 votes and one electoral vote from a Republican elector who defected. That defector\'s vote made Tonie Nathan the first woman and first Jew to receive an electoral vote in U.S. history.',
    citation: 'Brian Doherty, *Radicals for Capitalism*, 2007.'
  },
  {
    title: 'What is Aleppo?',
    year: 2016,
    gesture: 'The closest the Libertarian Party ever came to mattering, killed in five syllables on Morning Joe.',
    body: 'Gary Johnson and Bill Weld — two former two-term Republican governors — ran a serious general-election ticket and pulled 4,489,341 votes, 3.27% of the total. That was the LP\'s high-water mark, triple the previous record (Ed Clark and David Koch\'s 1.06% in 1980), and it briefly made the Libertarians the recognizable third party in American politics. In summer polling Johnson cleared 13% — within range of the 15% threshold for the presidential debates. On September 8, asked on MSNBC about the war in Aleppo, Johnson said "And what is Aleppo?" The city had been the center of the Syrian civil war for five years. The campaign never recovered the polling it needed for the debate stage. The final 3.27% was the spike that briefly looked like a trend and turned out to be a peak.',
    eli5: 'A two-governor ticket polled 13% over the summer of 2016 and was a few points from making the debate stage. A live brain freeze about Syria killed the run. The Libertarians still finished with their highest vote share ever — roughly one in thirty voters.',
    citation: 'Federal Election Commission, official 2016 returns.',
    link: 'https://www.fec.gov/resources/cms-content/documents/federalelections2016.pdf'
  },
  {
    title: 'Jo and Spike',
    year: 2020,
    gesture: 'A Clemson lecturer and a podcaster who promised every American a pony — the last ticket the old LP would recognize.',
    body: 'Jo Jorgensen, a senior lecturer in psychology at Clemson, ran with Spike Cohen, a podcaster whose signature campaign promise was a pony for every American. The ticket got 1,865,724 votes (1.18%), about 40% of the 2016 spike, but kept ballot access in all 50 states and DC. The margin was larger than Biden\'s lead in Georgia, Arizona, and Wisconsin combined — which made the LP, briefly, the most cited spoiler in post-election analysis. Jorgensen\'s platform was the standard old-school package: end the drug war, end the wars, abolish the income tax, deregulate. Two years later, the people who would take over the party would not have nominated either of them.',
    eli5: 'Clemson lecturer plus a podcaster who promised every American a pony. They lost three-quarters of the 2016 vote but kept the 50-state ballot, and their margin in three swing states exceeded Biden\'s. Two years later the new wing of the party would have nominated neither.',
    citation: 'Federal Election Commission, official 2020 returns.'
  },
  {
    title: 'Pegasus',
    year: 2021,
    gesture: 'Spyware on the phones of journalists, activists, and one murdered man\'s fiancée — surfaced by a leak of fifty thousand numbers.',
    body: 'In July 2021 a consortium of seventeen newsrooms, with Amnesty International and Forbidden Stories, published a leak of more than 50,000 phone numbers selected by NSO Group clients for possible Pegasus targeting. Pegasus is mercenary spyware. It infiltrates a phone to extract personal and location data and to surreptitiously activate microphone and camera. Among the targets: Hatice Cengiz, fiancée of Saudi journalist Jamal Khashoggi, whose phone was infected four days after Khashoggi was murdered in the Saudi consulate in Istanbul. NSO is licensed by Israel\'s Defense Ministry, sells to government clients only, and claims it cannot prevent misuse. The libertarian objection writes itself: the surveillance state in question is not built by any one government but rented à la carte, by any government with the money — and the targets are precisely the people whose job it is to hold governments accountable.',
    eli5: 'An Israeli company sells Pegasus, software that secretly turns a phone into a wiretap with camera and microphone access. A 2021 leak showed clients had targeted 50,000 phone numbers belonging to journalists, activists, and politicians worldwide. One target was the fiancée of Jamal Khashoggi — her phone was infected four days after he was killed.',
    citation: 'Human Rights Research Center, August 19, 2021, citing the Pegasus Project.',
    link: 'https://www.humanrightsresearch.org/post/nso-group-must-take-accountability-for-its-spyware-infiltration'
  },
  {
    title: 'Argentina takes the chair',
    year: 2021,
    gesture: 'Forty-seven nations, unanimous, give Argentina the presidency of the UN Human Rights Council — thirty-eight years after the disappearances ended.',
    body: 'On December 13, 2021, all 47 member states of the UN Human Rights Council voted Argentina to its presidency. The choice was symbolic. Between 1976 and 1983 Argentina\'s military government carried out the *Proceso de Reorganización Nacional*, a dirty war against suspected leftists in which as many as 30,000 civilians disappeared. The transition to democracy in 1983 produced a public-trial process that convicted senior junta members for crimes against humanity — an outcome rare in post-authoritarian transitions. The country\'s human-rights NGOs (Madres de Plaza de Mayo, CELS, Abuelas de Plaza de Mayo) were the engine of those trials. The unanimous 2021 vote treated Argentina as a model: a state that had used civilian institutions to hold its own military to account. Two years later the country would elect Javier Milei, who would dispute the 30,000 figure on the campaign trail.',
    eli5: 'In December 2021 all 47 countries on the UN Human Rights Council voted unanimously to put Argentina in charge. The reason was the country\'s history: forty years earlier the military had disappeared up to 30,000 civilians, and after 1983 the civilian courts actually convicted senior generals — the rare case of a country prosecuting its own dictatorship. Two years later the country elected Milei.',
    citation: 'James Francis Whitehead, *Courthouse News Service* / HRRC, December 22, 2021.',
    link: 'https://www.humanrightsresearch.org/post/argentina-to-lead-united-nations-human-rights-council'
  },
  {
    title: 'Reno',
    year: 2022,
    gesture: 'A four-year takeover plan ended in Sparks, Nevada with the chair, the platform, and 37 state delegations — and the line condemning bigotry deleted.',
    body: 'At the Libertarian National Convention in Sparks, Nevada in May 2022, the Mises Caucus completed a four-year campaign to take the party. Angela McArdle won the chair election with 692 votes, more than 69% of delegates. The caucus controlled 37 state delegations and swept the entire leadership slate. Delegates removed the abortion-rights plank, attempted the same on open immigration, and replaced the platform\'s long-standing statement that "bigotry as such is irrational and repugnant" with vaguer language about identity-blind rights. The state parties of New Mexico, Virginia, and Massachusetts disaffiliated. Major donors walked. Internal documents showed candidates, fundraising, and membership all collapsing within a year. The caucus\'s intellectual line runs through Hans-Hermann Hoppe, whose "physical removal" doctrine — the idea that a libertarian community would expel democrats and other non-libertarians — gives the temperature even when the platform won\'t cite it. Three years later Hoppe\'s circle would publicly disown Milei. The same school that produced the harshest libertarian critique of the world\'s most prominent libertarian president had, in the meantime, taken the only libertarian party that ever made it to #3 and reshaped it in its own image.',
    eli5: 'A stealth four-year campaign won the May 2022 convention. The new chair won 69% of delegates. The platform deleted the line saying bigotry is repugnant. State parties in New Mexico, Virginia, and Massachusetts quit; donors walked; membership collapsed. The intellectual godfather of the new wing is Hoppe — the same guy whose followers, three years later, would say Milei is no Austrian.',
    citation: 'Brian Doherty, *Reason*, 29 May 2022.',
    link: 'https://reason.com/2022/05/29/mises-caucus-takes-control-of-libertarian-party/'
  },
  {
    title: 'Counter-terrorism is the warrant',
    year: 2023,
    gesture: 'A UN special rapporteur reports what every libertarian writer has said for twenty years: the post-9/11 emergency built the surveillance machine, and the emergency never ended.',
    body: 'In March 2023 UN Special Rapporteur Fionnuala Ní Aoláin delivered a report to the Human Rights Council documenting the use of counter-terrorism law as the standing legal basis for state deployment of drones, spyware, biometric collection, and AI-driven surveillance. Her finding: the regulatory architecture for these technologies is essentially absent, and "in the absence of regulation, the cost to human rights can only increase with no end in sight." The mechanism is recognizable from the U.S. PATRIOT Act, the U.K.\'s Investigatory Powers Act, and a long tail of national-security legislation passed in panic and renewed in calm. The political economy is older than that — Madison wrote in 1795 that "of all the enemies to public liberty, war is, perhaps, the most to be dreaded, because it comprises and develops the germ of every other." Counter-terrorism is the modern grammar of permanent war.',
    eli5: 'A UN expert documented in 2023 that governments worldwide use counter-terrorism law as the cover story for deploying drones, phone-cracking software, biometric ID systems, and AI surveillance — without any meaningful regulation. The pattern: a security emergency starts, the emergency law passes, and the law never gets repealed.',
    citation: 'Fionnuala Ní Aoláin, UN Special Rapporteur on counter-terrorism and human rights; HRRC, March 16, 2023.',
    link: 'https://www.humanrightsresearch.org/post/counter-terrorism-used-to-justify-surveillance-infringing-on-human-rights'
  },
  {
    title: 'Milei\'s first year',
    year: 2024,
    gesture: 'Monthly inflation crashes from 26% to 4%. Poverty hits 53%. A fifty-year high in both directions, simultaneously.',
    body: 'By November 2024, eleven months into Milei\'s term, the macro picture was the schizophrenic chart conservatives and progressives both predicted. Monthly inflation fell from 26% in December 2023 to 4% by June 2024 — a stabilization unmatched in recent Argentine history. At the same time the poverty rate rose to roughly 53%, the highest in more than two decades; purchasing power dropped 20.7%; unemployment moved from 5.7% to 7.7%; energy bills for middle-class households rose 155%. 70,000 government jobs were eliminated. Pensions and salaries were frozen. The peso was devalued 50%. Milei\'s defense: "We know that in the short term the situation will worsen. But then we will see the fruits of our efforts." Kirsten Sehnbruch, an LSE policy fellow on Latin America, said the same data more directly: "this new economic programme is not protecting the poor — the jump is absolutely horrendous." This was the first-year report card, before the Austrian school disowned him.',
    eli5: 'A year into Milei, the headline numbers split. Inflation fell from 26% per month to 4%. Poverty hit 53%, the worst in twenty years. Government jobs cut by 70,000. Pensions and salaries frozen. Energy bills up 155%. Milei said the pain is part of the plan. An LSE economist said it isn\'t protecting anyone.',
    citation: 'Megan Ryan, *Human Rights Research Center*, November 6, 2024.',
    link: 'https://www.humanrightsresearch.org/post/have-javier-milei-s-austerity-policies-negatively-affected-the-argentinian-economy'
  },
  {
    title: 'Brítez Arce v. Argentina',
    year: 2024,
    gesture: 'The Inter-American Court names obstetric violence for the first time — and the country with the laws on the books still has no enforcement.',
    body: 'In 2023 the Inter-American Court of Human Rights handed down its decision in *Brítez Arce v. Argentina*, the first ruling at that level to name "obstetric violence" as a category of human-rights abuse. Argentina had, on paper, the architecture: National Law 25,929 (Humanised Birth, 2004) and National Law 26,485 (Comprehensive Protection Against Violence Against Women, 2009) define and prohibit "the violence that healthcare personnel exercise on women\'s bodies and reproductive processes." A December 2024 HRRC analysis found the laws are largely unenforced — a pattern this book keeps returning to: rights regimes that work in courtrooms do not automatically work in clinics, jails, or police stations. The libertarian critique of the regulatory state has a sibling in the human-rights critique of the unenforced statute.',
    eli5: 'Argentina passed two strong laws against obstetric violence — mistreatment of women during birth — in 2004 and 2009. In 2023 an international court named the harm for the first time, in a case against Argentina. A 2024 review found the laws on the books were not actually being enforced in hospitals.',
    citation: 'Sarisha Harikrishna, *Human Rights Research Center*, December 12, 2024.',
    link: 'https://www.humanrightsresearch.org/post/silent-scars-confronting-obstetric-violence-in-argentina'
  },
  {
    title: '1.9 million',
    year: 2025,
    gesture: 'The U.S. holds 1.9 million people in criminal-legal custody. Black Americans are 13% of the country and 39% of its prisons. The War on Drugs is past a trillion dollars.',
    body: 'A February 2025 historical-context piece laid out the libertarian-and-civil-rights consensus numbers on U.S. incarceration. The U.S. holds roughly 1.9 million people across its criminal-legal systems — the highest absolute count and one of the highest per-capita rates in the world. Black Americans, 13% of the population, are 38.9% of the incarcerated. Black drivers are 6.2% likely to be stopped and searched on a given trip; Latino drivers 9.2%. The War on Drugs, declared by Nixon in 1971, has cost more than $1 trillion and produced at least 900,000 drug arrests a year between 1990 and 2022, of which 77% of federal drug-offense convictions go to Black or Latino defendants who together are 30% of the population. The libertarian objection — incoherence, racial disparity, fiscal disaster — has been the same objection since Milton Friedman wrote against drug prohibition in 1972 and William F. Buckley reversed his position on it in 1996. The bipartisan policy continues anyway.',
    eli5: 'The U.S. holds 1.9 million people in criminal-legal custody — the highest count anywhere. Black Americans are 13% of the population and 39% of those locked up. The War on Drugs declared in 1971 has cost over a trillion dollars and produced ~900,000 drug arrests a year. Almost every libertarian, almost every civil-rights scholar, and a quiet bipartisan minority of senators agree it does not work. It continues.',
    citation: 'Tara Zhang, *Human Rights Research Center*, February 11, 2025.',
    link: 'https://www.humanrightsresearch.org/post/mass-incarceration-in-the-united-states-a-historical-context'
  },
  {
    title: 'Buenos Aires Wednesdays',
    year: 2025,
    gesture: 'Retirees marching every Wednesday in downtown Buenos Aires; water cannons and rubber bullets; nine journalists attacked on a single day in May.',
    body: 'A July 2025 HRRC analysis catalogued the protest-policing record of the first seventeen months of the Milei administration. Pensioners — about 15.7% of Argentina\'s population, with payments frozen against accelerating prices — protested in downtown Buenos Aires every Wednesday. On March 12, 2025, retirees and soccer fans clashed with police; at least twenty protesters were hospitalized. The Ministry of Security issued a "stadium ban," a resolution preventing anyone the state deemed engaged in "violent behavior and disrupts traffic" from entering soccer stadiums — administrative authority extending into protest participation. On May 28, 2025, at least nine journalists were attacked while covering protests; three were arbitrarily detained. Milei refused to investigate the security forces\' March 12 conduct and publicly praised the officers. The HRRC summary: "the government\'s discouragement of its citizens to mobilize, the lack of accountability of security forces, and the suppression of independent journalists signals a deeper crack in Argentina\'s democracy." This is what the libertarian president looked like enforcing libertarian austerity.',
    eli5: 'By mid-2025, every Wednesday Argentine pensioners marched in downtown Buenos Aires because their payments had been frozen while prices rose. The government answered with water cannons, rubber bullets, and a ban on anyone "disruptive" entering soccer stadiums. On one day in May, nine journalists were attacked. Milei refused to investigate the police and praised them.',
    citation: 'Danielle Castano, MA, *Human Rights Research Center*, July 29, 2025.',
    link: 'https://www.humanrightsresearch.org/post/voices-suppressed-human-rights-under-fire-in-argentina'
  },
  {
    title: 'Milei is no Austrian',
    year: 2025,
    gesture: 'The world\'s most prominent self-described libertarian president gets pilloried by the school he claims to represent — not from the left, from his own.',
    body: 'Eighteen months into Javier Milei\'s presidency, the orthodox Austrian-school economists whose books he waved on the campaign trail are no longer claiming him. Hans-Hermann Hoppe\'s circle concludes flatly that "Milei is no Austrian," pointing to the contradiction at the core of his monetary doctrine — he insists closing the central bank would cause hyperinflation *if no more pesos were printed*, a sentence that refutes itself. The promised dollarization never happened; the central bank stayed open; the chainsaw ended in a 48-month, $20 billion IMF program signed in April, with $12 billion drawn up front. Capital controls were partially lifted at the Fund\'s insistence, replaced by a crawling band that drifts 1% a month. Argentina missed its reserve targets almost immediately. Luis Caputo — the JP Morgan banker who helped engineer the 2018 default — runs the economy, which is hard to square with a campaign waged against the *casta política*. By August the peso had its worst month since the December 2023 devaluation, inflation ran 36% annualized, industrial production was down 21% over four months to its lowest since 2007, and bond auctions were failing at 69% annual rates. Milei answers his critics by calling them imbeciles. Saifedean Ammous, watching the rollovers fail, predicts either default or inflation north of the coupon. The pattern is older than Milei: a libertarian rhetorician arrives, the structural deficit doesn\'t care, and the IMF writes the actual policy.',
    eli5: 'Milei ran as the Austrian-school guy who would burn down the Argentine state. In office he kept the central bank, took a $20 billion IMF loan, hired a Wall Street banker to run the economy, and pegged the peso to a band. The Austrians he campaigned with say that\'s not Austrian economics — it\'s a normal IMF program with a chainsaw on the cover. The peso is sliding, factories are idle, and bonds won\'t clear at 69%.',
    citation: 'Nick Corbishley, *Naked Capitalism*, 26 August 2025.',
    link: 'https://www.nakedcapitalism.com/2025/08/even-senior-austrian-economists-are-beginning-to-distance-themselves-from-javier-milei.html'
  },
  {
    title: 'Morena, Brenda, Lara',
    year: 2025,
    gesture: 'Three young women — twenty, twenty, fifteen — kidnapped, murdered, livestreamed on Instagram, found buried in a Buenos Aires suburb.',
    body: 'On September 30, 2025, demonstrations across Argentina marched on Parliament demanding justice for Morena Verdi (20), Brenda del Castillo (20), and Lara Gutierrez (15). The three had been lured into a van by suspected drug-gang members; their murders were livestreamed on Instagram; their bodies were recovered from a buried site outside Buenos Aires. The protesters\' demand was twofold: prosecute the perpetrators, and confront a Milei administration the demonstrators accused of failing to act against rising drug-related criminal activity. Community leaders pointed at a particular causal chain: austerity had increased poverty and stripped the public services that historically pulled at-risk youth away from gang recruitment. The libertarian theory says drug-gang violence is the predictable shadow of drug prohibition; the libertarian president, in his second year, was running policies that the prohibitionist left and the prohibitionist right both blamed for it.',
    eli5: 'In September 2025, three young women — twenty, twenty, fifteen — were kidnapped by suspected drug-gang members in Argentina. Their murders were livestreamed on Instagram. Their bodies were buried near Buenos Aires. Protesters marched on Parliament, demanding action and blaming Milei\'s cuts to public services for making youth more vulnerable to gangs.',
    citation: 'Vera Rousseff, *Human Rights Research Center*, September 30, 2025.',
    link: 'https://www.humanrightsresearch.org/post/protests-erupt-in-argentina-after-brutal-narco-femicide-case'
  },
  {
    title: 'ICE without a judge',
    year: 2026,
    gesture: 'A leaked memo tells federal agents they can break into a house on an administrative warrant — a document not signed by any judge.',
    body: 'A January 30, 2026 leak surfaced an Immigration and Customs Enforcement memo instructing federal officers that they could forcibly enter private residences under the authority of administrative warrants — documents issued by immigration agencies themselves rather than by judges. Reporting placed the practice as already operative since at least summer 2025. The Fourth Amendment language is not contested: it protects "against unreasonable searches and seizures of private property by the government," and has been read since the eighteenth century to require a judicial warrant supported by probable cause for entry into a home. Legal scholars cited in the HRRC analysis: "administrative warrants have historically lacked the authority to permit officials to enter a home without the resident\'s permission" — and "entering a private residence without a judicial warrant remains a clear violation of the Fourth Amendment, no matter a person\'s immigration or citizenship status." This is the exact fault line where the libertarian critique of the security state and the civil-libertarian critique of immigration enforcement converge.',
    eli5: 'A leaked 2026 memo told ICE officers they could break into homes on a warrant signed by another ICE officer rather than by a judge. Legal scholars say that is a clear Fourth Amendment violation — entry into a home requires a judge\'s warrant, no matter who lives there.',
    citation: 'Devin Windelspecht, MSc, *Human Rights Research Center*, January 30, 2026.',
    link: 'https://www.humanrightsresearch.org/post/leaked-ice-memo-says-agents-can-enter-houses-without-judge-s-warrant-in-likely-violation-of-u-s-co'
  },
  {
    title: 'Twelve-hour days',
    year: 2026,
    gesture: 'The Milei government calls it "labour modernisation" — 12-hour shifts, longer probations, weakened strikes, with 40% of the workforce already informal.',
    body: 'In March 2026 the Milei administration introduced a labour-reform package the government billed as "HISTORIC, we have labour modernisation." The provisions: legalize 12-hour workdays, extend probation periods for new hires, restrict strike actions, and weaken trade-union mediation in favor of direct employer-employee negotiation. Approximately 40% of Argentina\'s workforce was already informally employed — outside any union, any contract, any pension system — and critics argued the reforms would deepen that condition by reducing the protections of the formally employed without regularizing the rest. Two weeks of street protests followed the bill\'s introduction in the capital. Opponents called the reforms "unconstitutional," contending they contradict labour protections written into Argentine law during the 1940s under Juan Perón. The libertarian movement, intellectually, supports labour deregulation. The question this case raises — and the question the entire Milei file in this book raises — is what the doctrine looks like in practice when the state remains intact, the courts remain friendly to property, and the actual deregulation falls on the workers who had the least to begin with.',
    eli5: 'In March 2026 Milei proposed a "labour modernisation" bill: 12-hour workdays, longer probations, harder to strike, weaker unions. About 40% of Argentine workers are already off-the-books with no protections at all. Critics said the bill would extend that vulnerability to the workers who still had something to lose.',
    citation: 'Peter Clarkin, MA, *Human Rights Research Center*, March 6, 2026.',
    link: 'https://www.humanrightsresearch.org/post/workers-rights-under-threat-in-argentina-due-to-proposed-labour-reforms'
  },
  {
    title: 'Human rights as casus belli',
    year: 2026,
    gesture: '"If war is readily justified in the name of human rights, military conflict itself may cease to appear as an affront to humanity."',
    body: 'An April 29, 2026 essay by Jasper Kelsey at the Human Rights Research Center traced the post-Cold-War career of human-rights language as a justification for state violence. The argument: in the absence of credible Cold War ideological framing, governments learned to package strategic interventions in moral language, and "human rights discourse therefore provides states with a powerful tool: it allows them to frame military intervention as morally legitimate while avoiding the perception of outright aggression." Kelsey\'s case roster: Kosovo (NATO 1999, the founding template), Iraq (2003), Libya (Obama, 2011), Russia in Georgia (2008) and Ukraine (2022), Israel in Gaza (October 2023 forward), Trump\'s January 2026 actions in Venezuela, and the February 2026 Trump-Israeli campaign against Iran. The libertarian non-interventionist tradition runs from Robert Taft through Murray Rothbard through Ron Paul to Ron Paul\'s son and to Tucker Carlson — and the question that tradition asks is the question Kelsey closes on: whether war can ever be a way to defend human rights when the war itself produces the next round of victims. The book opened on Aleppo, the city Gary Johnson did not know.',
    eli5: 'A 2026 essay traced how governments use the language of human rights to justify wars they actually launch for strategic reasons — beginning with NATO in Kosovo in 1999 and running through Iraq, Libya, Ukraine, Gaza, and the 2026 U.S. operations against Venezuela and Iran. The essay\'s quiet question: if war can be sold as a defense of human rights, what does it stop being?',
    citation: 'Jasper Kelsey, *Human Rights Research Center*, April 29, 2026.',
    link: 'https://www.humanrightsresearch.org/post/human-rights-as-a-justification-for-war'
  }
];

export const flat = raw
  .map((s) => ({ ...s }))
  .sort((a, b) => a.year - b.year)
  .map((s, i) => ({ ...s, num: String(i + 1).padStart(2, '0'), orderIndex: i }));

export const YEAR_MIN = Math.min(...flat.map((s) => s.year));
export const YEAR_MAX = Math.max(...flat.map((s) => s.year));

export function next(num) {
  const i = flat.findIndex((s) => s.num === num);
  return i >= 0 && i < flat.length - 1 ? flat[i + 1] : null;
}

export function prev(num) {
  const i = flat.findIndex((s) => s.num === num);
  return i > 0 ? flat[i - 1] : null;
}
