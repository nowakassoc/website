import React from 'react';
import Icon from './Icon';

const Publications = () => (
  <section id="section-publications">
    <span id="publications" className="section-link" />
    <h2>Publications</h2>
    <ol className="publications-list">
      <li>
        Michael, Max and Nowak, Martin; &ldquo;Fulfilling Historic Commitments
        and Obligations - A Proposal for a 21st Century Health System for
        Jefferson County, Alabama.&rdquo;{' '}
        <time dateTime="2012">Spring 2012</time>.<br />
        <a
          aria-label="Article available from al.com"
          href="http://media.al.com/bn/other/Michael-Nowak-report-0902-12.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon icon="external-link-alt" className="icon-link" />
          Available from al.com
        </a>
      </li>

      <li>
        Nowak, Martin C.; &ldquo;Practitioner Response&rdquo;, in:
        <br />
        Landry, Amy and Landry, Robert J.; &ldquo;Factors Associated with
        Hospital Bankruptcies: A Political and Economic Framework&rdquo;;&nbsp;
        <cite>Journal of Healthcare Management</cite>; Volume 54, Number
        4,&nbsp;
        <time dateTime="2009">July / August, 2009</time>.<br />
        <a
          aria-label="Article available from nih.gov"
          href="https://www.ncbi.nlm.nih.gov/pubmed/19681358"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon icon="external-link-alt" className="icon-link" />
          Available from nih.gov
        </a>
        {/*
        Available here: https://www.ncbi.nlm.nih.gov/pubmed/19681358
        Link to NIH website with abstract
        https://www.ncbi.nlm.nih.gov/pubmed/19681358
        Link to Journal of Healthcare Management with Buy PDF Link
        */}
      </li>

      <li>
        Jack, Eric P., Powers, Thomas L., and Nowak, Martin C.; &ldquo;A New
        Perspective on Supply and Demand&rdquo;; The Association for Operations
        Management; <cite>APICS Magazine</cite>
        ;&nbsp;
        <time dateTime="2005">March, 2005</time>.
        {/* Unavailable online. APICS says past issues available to subscribers */}
      </li>

      <li>
        Interview: Rogers, Michelle; &ldquo;Lessons Learned&rdquo;;&nbsp;
        <cite>HealthLeaders</cite>; <time dateTime="2003">June, 2003</time>;
        Volume 6, Number 6.
        {/* Unavailable online. Healthleaders has online magazine archive beginning
    in 2013. */}
      </li>

      <li>
        Interview: Siwicki, Bill; &ldquo;What&apos;s the CEO&apos;s
        Role?&rdquo;;&nbsp;
        <cite>Health Data Management</cite>
        ;&nbsp;
        <time dateTime="1999">February, 1999</time>; Volume 7, Number 2.
        {/* Unavailable online. Health Data Management has online magazine archive
    beginning in 2015. */}
      </li>

      <li>
        Interview: Siwicki, Bill; &ldquo;Can Chief Security Officers Protect
        Data from Prying Eyes?&rdquo;; <cite>Health Data Management</cite>
        ;&nbsp;
        <time dateTime="1998">October, 1998</time>; Volume 6, Number 10.
        {/* Unavailable online. Health Data Management has online magazine archive
    beginning in 2015. */}
      </li>

      <li>
        Nowak, Martin C.; &ldquo;Creating Patient-Focused Residents through
        Written Feedback&rdquo;;&nbsp;
        <cite>
          Improving and Maintaining Patient Satisfaction: Selected Best
          Practices
        </cite>
        ; University Health System Consortium,&nbsp;
        <time dateTime="1994">July, 1994</time>.{/* Unavailable online. */}
      </li>

      <li>
        Nowak, Martin C. and Middleton, Susan C.; &ldquo;A Case of Innovation:
        The Sign Shop&rdquo;,&nbsp;
        <cite>Hospital Material Management Quarterly</cite>, 10(3),{' '}
        <time dateTime="1989">1989</time>.
        {/* Many links to this article it is present in library catalogs, but no abstract,
    content or download links are available. */}
      </li>

      <li>
        Marion, K.R. and M.C. Nowak. <time dateTime="1985">1985</time>. A size
        record for the southern ringneck snake (Diadophis punctatus);
        Herpetological Review, 16(4): 111.
        <br />
        <a
          aria-label="Article available from ssarherps.org"
          href="https://ssarherps.org/herpetological-review-pdfs/#id-2198"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon icon="external-link-alt" className="icon-link" />
          Available from ssarherps.org
        </a>
        {/* Direct PDF download link to entire issue:
    https://www.dropbox.com/s/0nkxn5gb4kmb8ke/HR%201985.16.4R.pdf?dl=1
    Herpetology archives page with all PDF download links:
    https://ssarherps.org/herpetological-review-pdfs/ */}
      </li>

      <li>
        Cox, W.A., M.C. Nowak and K.R. Marion. <time dateTime="1980">1980</time>
        . Observations on courtship and mating behavior in the musk turtle,
        Sternotherus minor. Journal of Herpetology, 14(2): 200-204.
        <br />
        <a
          aria-label="Article available from jstor.org"
          href="https://www.jstor.org/stable/1563862?socuuid=404fec7d-7362-43e9-89ef-8e1d81283191"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon icon="external-link-alt" className="icon-link" />
          Available from jstor.org
        </a>
        {/* citations from
          https://www.jstor.org/stable/1563862?seq=1#page_scan_tab_contents

          MLA: Cox, William A., et al. “Observations on Courtship and Mating
          Behavior in the Musk Turtle, Sternotherus Minor.” Journal of Herpetology,
          vol. 14, no. 2, 1980, pp. 200–204. JSTOR, JSTOR,
          www.jstor.org/stable/1563862.

          APA: Cox, W., Nowak, M., & Marion, K. (1980). Observations on Courtship
          and Mating Behavior in the Musk Turtle, Sternotherus minor. Journal of
          Herpetology, 14(2), 200-204. doi:10.2307/1563862

          Chicago: Cox, William A., Martin C. Nowak, and Ken R. Marion.
          "Observations on Courtship and Mating Behavior in the Musk Turtle,
          Sternotherus Minor." Journal of Herpetology 14, no. 2 (1980): 200-04.
          doi:10.2307/1563862.

          JSTOR Share Link:
          <br />
          Observations on Courtship and Mating Behavior in the Musk Turtle,
          Sternotherus minor on JSTOR
          https://www.jstor.org/stable/1563862?socuuid=404fec7d-7362-43e9-89ef-8e1d81283191
        */}
      </li>

      <li>
        Marion, K.R. and M.C. Nowak. <time dateTime="1980">1980</time>. One egg
        twins in a snake, Elaphe guttata guttata. Trans. Kans. Acad. Scie.
        83(2): 98-100.
        <br />
        <a
          aria-label="Available from jstor.org"
          href="https://www.jstor.org/stable/3627722?socuuid=6ca2d2e0-e706-48a6-ae7c-a830fad04939"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon icon="external-link-alt" className="icon-link" />
          Available from jstor.org
        </a>
        {/* https://www.jstor.org/stable/3627722?seq=1/subjects
          MLA: Marion, Ken R. “One-Egg Twins in a Snake, Elaphe Guttata Guttata.” Transactions of the Kansas Academy of Science (1903-), vol. 83, no. 2, 1980, pp. 98–100. JSTOR, JSTOR, www.jstor.org/stable/3627722.

          APA: Marion, K. (1980). One-Egg Twins in a Snake, Elaphe guttata guttata. Transactions of the Kansas Academy of Science (1903-), 83(2), 98-100. doi:10.2307/3627722

          Chicago: Marion, Ken R. "One-Egg Twins in a Snake, Elaphe Guttata Guttata." Transactions of the Kansas Academy of Science (1903-) 83, no. 2 (1980): 98-100. doi:10.2307/3627722.

          JSTOR Share Link One-Egg Twins in a Snake, Elaphe guttata guttata on JSTOR
          https://www.jstor.org/stable/3627722?socuuid=6ca2d2e0-e706-48a6-ae7c-a830fad04939
        */}
      </li>

      <li>
        Additional newspaper stories, trade journal articles, and quotations by
        Martin C. Nowak.
        <br />
        <a
          aria-label="Google Martin C. Nowak UAB"
          href="https://www.google.com/search?q=%22martin+c.+nowak%22+%2B+uab"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icon icon="external-link-alt" className="icon-link" />
          Google &ldquo;Martin C. Nowak UAB&rdquo;
        </a>
      </li>
    </ol>
  </section>
);

export default Publications;
