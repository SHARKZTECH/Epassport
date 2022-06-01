import { Button, Col, Row } from "react-bootstrap";
import {useNavigate} from "react-router-dom"

import ApplicationSteps from "../components/ApplicationSteps";

const Instructions=()=>{
    const navigate=useNavigate()

    const submitHandler=(e)=>{
        e.preventDefault()
        navigate("/part1") 
    }
    return(
        <div>
            <ApplicationSteps step1 step2 />
             <Row>
                 <h2 className="text-center">
                 <span>OMBI LA KUTAKA PASPOTI YA KENYA</span>
                 <br/>
                 <span>APPLICATION FOR A KENYA PASSPORT</span>
                 </h2>
                 <Col>
                     <h3 className="text-center">MAAGIZO</h3>
                     <ul>
                        <li>Maelezo: Tafadhali ufahamu vyema kwamba wale wote wanaoomba
                        paspoti ni lazima wajaze Sehemu zote.
                        Sehemu ya 3, ni lazima kujazwa na mwombaji ambaye ni mwanamke
                        aliyeolewa.
                        </li>
                        <li>
                        Upendekezi wa ombi. Mwombaji lazima apendekezwe katika se-
                        hemu ya 7 na mwananchi wa Kenya kama vile mhuduma wa kidini,
                        daktari, mwanasheria, mtumishi wa serekali wa cheo cha juu au
                        mtumishi wa benki ambaye anamfahamu mwombaji, lakini asiwe ja-
                        maa wakaribu.
                        </li>
                        <li>
                        Picha. Picha tatu zilizopigwa hivi karibuni lazima ziambatane na
                        fomu. Picha hizi lazima ziwe za uso wote, bila kuvaa kofia au kitam-
                        baa. Pia picha isiwe ndani ya fremu. Ukubwa wa picha usizidi inchi 2
                        1⁄2 kwa inchi 2 upana wala usipungue inchi 2 kwa inchi 1 1⁄2 . Ni lazima
                        picha hizi ziwe katika karatasi nyembamba ya kawaida ya picha na
                        wala isiwe inang’ara.
                        </li>
                        <li>
                        Ada hivi sasa ya paspoti ya kurasa 32 ni Sh. 4,500, kurasa 48 ni
                        Sh.6,000, kurasa 64 ni Sh. 7500, Diplomatic ni sh. 7,500 , paspoti ili-
                        yopotea ni Sh. 12,000, paspoti iliyoharibiwa ni Sh. 10,000 na paspoti
                        ya EA paspoti Sh. 900. Ni lazima malipo haya yawe fedha taslimu au
                        hundi ya benki .Risiti rasmi itatolewa.
                        </li>
                        <li>
                        Fomu ya maombi ipelekwe na mwenye kuomba binafsi katika Ofisi
                        kuu yapaspoti, Nyayo House, Nairobi, Mombasa (Uhuru na Kazi
                        Building), Kisumu (Reinsurance Plaza), au Eldoret (Public Works),
                        Garissa, Nakuru(Ofisi ys PC), Embu( Ofisi ya PC) katika muda usio-
                        pungua siku 20 kabla ya tarehe ya kusafiri
                        </li>
                        <li>
                        Paspoti haiwezi kutolewa au kuongezwa muda wake hapa nchini kwa
                        niaba ya mtu ambaye tayari yuko nje ya Kenya. Mtu huyo anapaswa
                        kuwasilisha ombi lake kwenye ofisi ya ubalozi wa Kenya uliyo karibui
                        naye, na katika nchi ambako Kenya haina uwakilishi wa kibalozi,
                        katika ofisi ya ubalozi wa Uingereza iliyo karibu naye. Paspoti hazi-
                        tumwi nje ya Kenya kwa njia ya Posta.
                        </li>
                        <li>
                        Hati za kuonyesha ni raia wa Kenya ni lazima zitolewe.
                        </li>
                        <li>
                        Fomu zote za maombi ya paspoti ziambatanishwe na paspoti ya
                        awali kama ipo, Kitambulisho cha Kenya aina ya kisasa, cheti cha ku-
                        zaliwa na kopi za kila moja ya hati hizi ambazo zimethibitishwa.
                        </li>
                        <li>
                        Habari zote zitakazotolewa zitahifadhiwa kama siri ya serikali na
                        hazitajulishwa mtu yeyote asiyestahili.
                        </li>
                     </ul>
                 </Col>

                 <Col>
                 <h3 className="text-center">NOTES</h3>
                  <ul  >
                    <li>
                    Instructions. Kindly note that all applicants must complete all Sections.
                    Section 3 must be completed where the applicant is married and evi-
                    dence of the same produced.
                    </li>
                    <li>
                    Recommendation of application. The application must be recommended in Section
                    7 by a citizen of Kenya, such as a minister of religion, a medical or legal
                    practitioner, an established civil servant or bank official personally acquainted
                    with the applicant but not by an immediate relative.
                    </li>
                    <li>
                    Photographs. Three copies of a recent photograph of the applicant
                    must be taken full face without hat, and the photographs must not be
                    mounted. The size of the face must not be more than 2 1⁄2 inches by 2
                    inches or less than 2 inches by 1 1⁄2 inches. The photographs must be
                    printed on normal thin photographic paper and must not be glazed
                    </li>
                    <li>
                    The current fee for a 32 page passport is Sh. 4,500, 48 page pass-
                    port is Sh.6,000, 64 page passport is Sh.7,500, Diplomatic Sh. 7,500,
                    Lost passport Sh. 12,000, Mutilated passport Sh. 10,000 and EA pass-
                    port Sh. 900. This fee must be paid in cash or by bankers’ cheque and
                    an official receipt issued
                    </li>
                    <li>
                    Application for a passport must be submitted personally by the
                    applicant to the Passport Control Office, Nyayo House, Nairobi, or to
                    the Branch Passport Control Offices,:- Uhuru Na Kazi Building,
                    Mombasa, New PC’s Office Kisumu, Public Works Building, El-
                    doret, Garissa, Nakuru PC’s office and Embu PC’s office at least 20
                    days before the scheduled date of travel. Forms may be downloaded
                    from www.immigration.go.ke
                    </li>
                    <li>
                    A passport cannot be issued or renewed by a Passport Control Offi-
                    cer on behalf of a person already abroad. Such persons should apply to
                    the nearest Kenya Mission abroad or, where there is no Kenya repre-
                    sentative, to the nearest United Kingdom Mission.
                    Passports are not sent out of Kenya by post
                    </li>
                    <li>
                    Documentary evidence of Kenya citizenship must be produced.
                    </li>
                    <li>
                    All applications must be accompanied by a previous passport, if any
                    or current national Kenya Identity Card, Birth Certificates plus certi-
                    fied photocopies of each.
                    </li>
                    <li>
                    Information will be treated confidentially and shall not be passed to
                    any unauthorized persons.
                    </li>
                  </ul>
                 </Col>
             </Row>
                 <Button onClick={submitHandler} type="submit" variant='primary' className="my-3" >Continue</Button>
        </div>
    )
}

export default Instructions;