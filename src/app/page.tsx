'use client'

import Link from 'next/link';
import QItem from './components/q-item';

import dynamic from "next/dynamic";

export default function Home() {

  const Map = dynamic(() => import("./components/map"), { ssr:false });

  const faqData = [
    {question: 'Q: Is abortion safe?',
     answer: 'A: In-clinic and medication abortions are both very safe and very common. As a medical procedure, they are safer than most other common procedures like wisdom teeth removal!\n\nSource: https://www.plannedparenthood.org/learn/abortion/considering-abortion/what-facts-about-abortion-do-i-need-know'
    },
    {question: 'Q: How will I feel after an abortion?',
     answer: 'A: Most people can resume normal activities 1-2 days after an abortion. You may notice cramping or vaginal bleeding for a couple days. You may also experience emotional effects such as grief, and may not feel like yourself for a couple days. \n\nSource: https://www.plannedparenthood.org/learn/abortion/in-clinic-abortion-procedures/what-can-i-expect-after-having-an-in-clinic-abortion'
    },
    {question: `Q: Can I get an abortion if I'm under 18?`,
     answer: 'A: Anyone, regardless of their age, can receive care without parental involvement in Washington state! \n\nSource: https://prochoicewashington.org/wp-content/uploads/2025/02/pro-choice-washington-abortion-access-guide.pdf'
    },
    {question: 'Q: What is the difference between medication and in-clinic abortion?',
     answer: 'A: Medication abortions, or abortion pills, refer to when you take certain medicines to end a pregnancy up to 11 weeks after the first day of your last period. These are usually used in the stages of early pregnancy.\n\nIn-clinic abortions occur in health centers, with the procedure being performed by a well-trained doctor or nurse. \n\nSource: https://www.plannedparenthood.org/learn/abortion/considering-abortion/what-facts-about-abortion-do-i-need-know'
    }
  ]

  return (
    <div>

      <nav>
        <Link className="nav-link" href="#about">about us</Link>
        <Link className="nav-link" href="#resources">resources & faq</Link>
        <Link className="nav-link" href="#map">interactive map</Link>
      </nav>

      <section>
        <div className="pink-callout">
          <h1>Find your nearest reproductive health clinic.</h1>
          <p>
            With the current healthcare climate in the United States, we wanted to make a tool that 
keeps reproductive healthcare and resources accessible to the Washington community. 
Our goal is to centralize information about reproductive healthcare clinics in 
Washington, to support access to these necessary institutions. 
          </p>

          <div className="white-blurb">
            <h4>DISCLAIMER: </h4>
            <p>
              All information on this site is accurate as of 3/7/2026. As with any online tool, 
            please exercise caution and cross reference with each clinic's official website (available through clicking on
            the name of the clinic in its respective pop-up) for any sensitive information. 
            </p>
          </div>
        </div>
  
        <div id="map" className="map-container"><Map/></div>
        <p>Click on any pin to view more information about each clinic.</p>
      </section>

      <section id="resources">
        <h1>Resources & FAQ</h1>

        <div className='resources-container'>
          <div className='resource'>
            <h3>History</h3>
            <p>Interested in learning more about the history behind our reproductive rights?</p>
            <a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC9930478/' className='resource-link'>
              READ MORE
              <div className='arrow'></div>
            </a>
          </div>

          <div className='resource'>
            <h3>Policy</h3>
            <p>Stay informed on the current policies and laws surrounding reproductive rights in your state.</p>
            <a href='https://www.plannedparenthoodaction.org/abortion-access-tool/US' className='resource-link'>
              LEARN MORE
              <div className='arrow'></div>
            </a>
          </div>

          <div className='resource'>
            <h3>Donate</h3>
            <p>Support the fight for reproductive rights across the world by donating to the Planned Parenthood Action Fund!</p>
            <a href='https://www.weareplannedparenthoodaction.org/onlineactions/6iOI0_HnUUmPu_6_SRgayg2?sourceid=1017126&ms=4NALzzz00z1N1A&utm_campaign=4NIAU24XA_0000000107_0E1NAC&utm_source=Google&utm_medium=cpm&gclsrc=aw.ds&gad_source=1&gad_campaignid=21467187028&gbraid=0AAAAAC86yfRGhJR-m1P8c_lARruH_9-PU&gclid=Cj0KCQiAhaHMBhD2ARIsAPAU_D4k56FDltyB2b-519cRMbqz53hC32Dxoaxfg8hqqZKmXtqhE92X0EoaAggIEALw_wcB' className='resource-link'>
              DONATE
              <div className='arrow'></div>
            </a>
          </div>
        </div>

        {faqData.map((item, index) => (
          <QItem key={index} question={item.question} answer={item.answer}></QItem>
        ))}

      </section>

      <section id="about">
        <div className="pink-callout">
          <h1>About Us</h1>
          Health Equity Forward is a student-driven public health think tank and research collective committed to understanding and addressing the root causes of health disparities. Quantitative data and qualitative lived experiences are utilized to reveal how health inequities persist within communities. Solutions that foster health equity for all, regardless of background, are developed and implemented, utilizing public health frameworks, strategic policy advocacy, and community-centered initiatives.
          <div>
            <a href='https://www.instagram.com/healthequityforward/' className="ig-button"></a>
            <a href='mailto:healthequityforward@gmail.com' className="email-button"></a>
            {/* <a href='https://www.google.com/' className="web-button"></a> */}
          </div>
        </div>
      </section>

    </div>
    
  );
}
