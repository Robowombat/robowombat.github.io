var e=`<div data-collapse="medium" data-animation="default" data-duration="400" id="Projects-Branding" data-easing="ease" data-easing2="ease" role="banner" class="nav w-nav">
  <div class="nav__container w-container">
    <a href="/" class="w-nav-brand" aria-label="home">
      <img src="https://cdn.prod.website-files.com/6807ccc4019dbd22e881b10c/680a6a827ea03a8ecb52d35e_PF_signature_bright.png" loading="lazy" alt="" class="image-8"/>
    </a>
    <nav role="navigation" class="nav-menu w-nav-menu"><a href="/#Work" class="nav__link-div nav__link-div--black nav__link-div--space w-inline-block"><div class="nav__link">Work</div></a><a href="/play" class="nav__link-div nav__link-div--black nav__link-div--space w-inline-block"><div class="nav__link">Play</div></a><a href="/#Contact" class="nav__link-div nav__link-div--black nav__link-div--space w-inline-block"><div class="nav__link">Contact</div></a></nav>
    <div class="nav__mobilebutton w-nav-button">
      <div class="nav__mobileicon w-icon-nav-menu">
      </div>
    </div>
  </div>
</div>
<div class="nav-shadow">
</div>
<div class="subpage-highlight top-page">
  <div class="div-block-2 detail-img-title verimi-hero">
    <div class="formatting__wrapper top-page">
      <img class="image registration-hero-img" src="/assets/case-studies/nebenan-registration/hero.png" alt="Nebenan registration: welcome and choose neighborhood screens" style="opacity:1" sizes="100vw" loading="eager" fetchpriority="high"/>
      <div style="opacity:1" class="formatting__text tablet-formatting-text">
        <h2 class="subpage-headline-left nebenan_header_color">Registration redesign
          <br/>on nebenan.de
        </h2>
        <div class="text-wrapper">
        </div>
      </div>
    </div>
  </div>
</div>
<div class="centered-container w-container overview-card-wrap">
  <div class="_2-columns hero overview-card">
    <div class="overview-card__col overview-card__col--left">
      <div class="text-wrapper">
        <p class="subpage-title-highlight">overview:
          <br/>
        </p>
        <p class="subpage-paragraph-left">An ongoing redesign of how neighbors join nebenan.de. Project goals: increase registration completion. We shipped a series of experiments across web, iOS, and Android.
          <br/>
        </p>
      </div>
      <div class="text-wrapper">
        <p class="subpage-title-highlight">My role:
          <br/>
        </p>
        <p class="subpage-paragraph-left">Product designer: research and Trust &amp; Privacy survey; incremental redesign plan, UX/UI, and platform-specific solutions; set up and ran A/B experiments myself.
        </p>
      </div>
    </div>
    <div class="overview-card__col overview-card__col--right">
      <div class="text-wrapper">
        <p class="subpage-title-highlight">Client
          <br/>
        </p>
        <p class="subpage-paragraph-left">Nebenan.de, Germany’s leading neighborhood platform with more than 5 million users. Registration and verification are the first trust gate into a real neighborhood.
          <br/>
        </p>
      </div>
      <div class="text-wrapper">
        <p class="subpage-title-highlight">Impact:
          <br/>
        </p>
        <p class="subpage-paragraph-left">Cut internal team workload by <strong>30.7%</strong> (time spent manually validating new users). App ratings rose to <strong>4.4</strong> from an average of <strong>3.4</strong>. Fixed a UX flaw where users entered the wrong funnel: Android <strong>10.1% → 3.2%</strong>, iOS <strong>2.1% → 1.2%</strong>.
        </p>
      </div>
    </div>
  </div>
</div>

<div class="centered-container w-container">
  <div class="section-body iteration-section">
    <div class="text-wrapper iteration-section__full">
      <h2 class="highlight_body subtitle-uppercase subtitle-uppercase-mobile">The story
      </h2>
      <p class="section-title section-title-mobile">Why registration felt broken</p>
      <p class="subpage-paragraph-left">Many users struggled with registration and ended up confused, or worse, blocked. Neighbors were being asked to expose their full name and address on a platform that hadn’t yet shown them any value.
        <br/>
        <br/><strong>Initial business constraint:</strong> For safety and verification reasons we had to ask for people’s full name, and to locate them correctly in their neighborhood, we needed their house number. (Or did we?)
        <br/>
        <br/>I had to design with lots of constraints and challenge outdated hypotheses. This is the story of how we improved the registration flow, shipped multiple experiments, and uncovered misleading data that changed the course of our thinking.
      </p>
      <aside class="advocacy-callout" aria-labelledby="registration-judgement-title">
        <h2 id="registration-judgement-title" class="advocacy-callout__title type-label">My judgement in the process</h2>
        <p class="advocacy-callout__lead">I made plenty of compromises: I knew, one of the major impact would be elsewhere: fixing the broken flow of blocked users. But that was out of scope, so I focused on the main registration flow first.</p>
        <p class="advocacy-callout__lead advocacy-callout__lead--follow">Two design/concept paths were in front of me: I could keep the existing (strict) way of joining the platform and explain the “why” better for users, or challenge the core concept and loosen conditions (hide last name, drop the house number). After hundreds of pieces of user feedback, I believed in the latter. To pre-validate my hypothesis and asses the risk (neighbors losing trust), I ran Trust &amp; Privacy surveys, did user tests, and I pitched my ideas repeatedly, and we eventually shipped the easier path.</p>
      </aside>
    </div>
  </div>
</div>

<div class="centered-container w-container">
  <div class="section-body signals-row" role="group" aria-label="Signals">
    <div class="signals-row__col">
      <h2 class="highlight_body subtitle-uppercase subtitle-uppercase-mobile">Signal 1
      </h2>
      <p class="type-label signals-row__title">App Store ratings &amp; reviews
        <br/>
      </p>
      <p class="subpage-paragraph-left">iOS sat at a mean of <strong>2.47</strong> in 2024; Android <strong>3.43</strong>. Combined, the apps averaged <strong>3.14</strong>.
        <br/>
        <br/>So I dug into what 1-star reviewers were actually angry about. On the apps, one category came out on top: account suspension and name-verification problems, login and password-reset barriers, registration that was simply too complex and too slow.
      </p>
    </div>
    <div class="signals-row__col">
      <h2 class="highlight_body subtitle-uppercase subtitle-uppercase-mobile">Signal 2
      </h2>
      <p class="type-label signals-row__title">Community Management overload
        <br/>
      </p>
      <p class="subpage-paragraph-left">To better understand the friction and user frustration, I went to the team that deals with failed registrations every day. What came back confirmed the app reviews. The team was drowning: every month, roughly <strong>53,170</strong> new registrations went through a manual name check. <strong>25%</strong> of all company email existed only because someone’s account had been blocked. That meant pending time for users, suspensions, and slow resolution. It was one of the main pain points. Users also didn’t understand why their account had been suspended.
      </p>
    </div>
    <div class="signals-row__col">
      <h2 class="highlight_body subtitle-uppercase subtitle-uppercase-mobile">Signal 3
      </h2>
      <p class="type-label signals-row__title">Funnel drop-offs &amp; form errors
        <br/>
      </p>
      <p class="subpage-paragraph-left">Data put the highest drop-off on the Name screen; address was second. Most users got blocked because they shortened their name. But suspension also came from small form failures: typos, wrong formats, misspellings, people pasting a full address into a street-only field. Classic low-key UX issues, easy to fix, high leverage.
      </p>
    </div>
  </div>
</div>

<div class="centered-container w-container">
  <div class="section-body iteration-section">
    <div class="text-wrapper iteration-section__full">
      <h2 class="highlight_body subtitle-uppercase subtitle-uppercase-mobile">Research
      </h2>
      <p class="section-title section-title-mobile">What qualitative research actually said
        <br/>
      </p>
      <ul class="iteration-learnings__list">
        <li><strong>51%</strong> had no idea they could hide their last name for privacy later in the product. Easy fix: make that option more accessible.</li>
        <li>Only <strong>25%</strong> said seeing a neighbor’s full name was “very important” to them. So is keeping the full name worth the funnel risk?</li>
        <li>Among verification methods, <strong>GPS location was the least trusted</strong> (yet was shown as the first option in the verification flow): In theory, using GPS as a verification method could skip the need for a manual-type address form and reduce typing errors. In practice it triggered mistrust, and people still chose to fill the address form manually.</li>
      </ul>
      <p class="iteration-section__subtitle">So what did I learn?</p>
      <p class="subpage-paragraph-left">Neighbors value the display of full names on the platform way less than we (as a company) originally thought. I faced a hard UX/UI challenge: how to explain a complex verification mechanism (asking for full name and address for verification purposes) while ensuring trusted handling of sensitive data. How to explain all this and gain trust in a registration flow where simplicity should be the leading pattern, and where the user at this point has not yet seen the value of the product. We are asking a lot upfront without giving anything back yet.</p>
      <p class="iteration-section__subtitle">What I did next</p>
      <p class="subpage-paragraph-left">I focused on improving everything I could within the existing verification concept (without disrupting it), but also started to proactively move the needle toward rethinking the concept behind the infrastructure in place (replacing old safety measurements).</p>
    </div>
  </div>

  <div class="section-body friction-section">
    <p class="subpage-title-highlight friction-section__heading">3 Core issues:
    </p>
    <div class="friction-stack" data-friction-stack data-card-count="3" data-stack-label="Research tensions">
      <div class="friction-stack__shell">
        <div class="friction-stack__stage" aria-live="polite">
          <article class="friction-stack__card outline_box red" data-friction-card="0">
            <p class="friction-stack__text">
              <strong class="friction-stack__title">Identity vs privacy
              </strong>
              <span class="friction-stack__body">Some neighbors see full names and verified profiles as essential, they make people “think twice” before posting, and reduce trolls and fakes. Others, particularly women and the elderly, want anonymity for the opposite reason: to avoid being “ausgekundschaftet”, scouted out, or harassed in their physical neighborhood. Some flagged a full last name and street address as “unpleasant,” even a security risk.
              </span>
            </p>
          </article>
          <article class="friction-stack__card outline_box red" data-friction-card="1">
            <p class="friction-stack__text">
              <strong class="friction-stack__title">Trust tangled with friction
              </strong>
              <span class="friction-stack__body">The platform’s most valuable (AHA) moments — 1. unexpected encounters (31%) and 2. getting support (28%) (source: yearly product-market fit survey) — depend on trusting that the neighborhood is genuinely verified. But the screen meant to build that trust, full address verification, was a major source of registration friction.
              </span>
            </p>
          </article>
          <article class="friction-stack__card outline_box red" data-friction-card="2">
            <p class="friction-stack__text">
              <strong class="friction-stack__title">Too much ask, easy to fake
              </strong>
              <span class="friction-stack__body">On one hand, users felt verification asked for too much. On the other, they felt the verification itself was easy to fake, so the cost felt high and the trust payoff uncertain.
              </span>
            </p>
          </article>
        </div>
        <div class="friction-stack__navs">
          <button type="button" class="friction-stack__nav friction-stack__nav--prev" aria-label="Previous tension">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M14.5 5.5L8 12l6.5 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button type="button" class="friction-stack__nav friction-stack__nav--next" aria-label="Next tension">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9.5 5.5L16 12l-6.5 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="centered-container w-container stm-device-rail-host" hidden>
  <div
    class="stm-device-rail stm-device-rail--screens"
    data-stm-device-rail
    aria-roledescription="carousel"
    aria-label="New nebenan registration flow screens"
  >
    <div class="stm-device-rail__stage">
      <figure class="stm-device-rail__item">
        <img src="/assets/case-studies/nebenan-registration/00-intro.png" alt="Welcome screen: Schön, dass du hier bist" draggable="false" />
      </figure>
      <figure class="stm-device-rail__item">
        <img src="/assets/case-studies/nebenan-registration/01-welcome-sso.png" alt="Register with Google or email" draggable="false" />
      </figure>
      <figure class="stm-device-rail__item">
        <img src="/assets/case-studies/nebenan-registration/02-name.png" alt="Name step with shortened last-name preview" draggable="false" />
      </figure>
      <figure class="stm-device-rail__item">
        <img src="/assets/case-studies/nebenan-registration/03-choose-neighborhood.png" alt="Choose neighborhood with postal code and street" draggable="false" />
      </figure>
      <figure class="stm-device-rail__item">
        <img src="/assets/case-studies/nebenan-registration/04-confirm-neighborhood.png" alt="Confirm neighborhood from multiple options" draggable="false" />
      </figure>
      <figure class="stm-device-rail__item">
        <img src="/assets/case-studies/nebenan-registration/05-phone.png" alt="SMS verification phone number entry" draggable="false" />
      </figure>
      <figure class="stm-device-rail__item">
        <img src="/assets/case-studies/nebenan-registration/06-sms-code.png" alt="Enter SMS verification code" draggable="false" />
      </figure>
      <figure class="stm-device-rail__item">
        <img src="/assets/case-studies/nebenan-registration/07-success.png" alt="Super! Du bist dabei, account created" draggable="false" />
      </figure>
    </div>
  </div>
</div>

<div class="centered-container w-container">
  <div class="section-body">
    <div class="text-wrapper">
      <h2 class="highlight_body subtitle-uppercase subtitle-uppercase-mobile">First steps</h2>
      <p class="section-title section-title-mobile">Help users to avoid errors</p>
      <p class="subpage-paragraph-left">After a meticulous analysis of the registration flow with engineers across web, iOS, and Android, we mapped the weak spots. The brief was simple: prevent user-generated errors, surface failures immediately when they happen, and guide neighbors through the flow fast without losing trust.
        <br/>
        <br/>Following the first rollout of the basic fixes, we started endless testing and experiments, and I was building a proof of concept and advocating for bigger concept changes.
      </p>
    </div>
    <div class="cs-showcase" data-cs-video-tabs>
      <div class="cs-showcase__tabs" role="tablist" aria-label="Registration redesign steps">
        <button
          type="button"
          class="cs-showcase__tab is-active"
          role="tab"
          aria-selected="true"
          data-cs-video-tab="touchpoint"
          data-device-edge="true"
          data-screen-src="/assets/case-studies/nebenan-registration/touchpoint-new.png"
          data-screen-label="New first touchpoint: register with Apple, Google, or email"
          data-previous-src="/assets/case-studies/nebenan-registration/touchpoint-old.png"
          data-previous-label="Old first touchpoint: register entry screen"
        >First touchpoint</button>
        <button
          type="button"
          class="cs-showcase__tab"
          role="tab"
          aria-selected="false"
          data-cs-video-tab="name"
          data-screen-src="/assets/case-studies/nebenan-registration/name-new.png"
          data-screen-label="New name step with hide last name option"
          data-previous-src="/assets/case-studies/nebenan-registration/name-old.png"
          data-previous-label="Old name step registration screen"
        >Name</button>
        <button
          type="button"
          class="cs-showcase__tab"
          role="tab"
          aria-selected="false"
          data-cs-video-tab="address"
          data-screen-src="/assets/case-studies/nebenan-registration/address-new-01.png, /assets/case-studies/nebenan-registration/address-new-02.png, /assets/case-studies/nebenan-registration/address-new-03.png"
          data-screen-label="New address step: choose neighborhood, auto-suggest, confirm hood"
          data-previous-src="/assets/case-studies/nebenan-registration/address-old.png"
          data-previous-label="Old address step: where do you live"
        >Address</button>
        <button
          type="button"
          class="cs-showcase__tab"
          role="tab"
          aria-selected="false"
          data-cs-video-tab="account"
          data-screen-src="/assets/case-studies/nebenan-registration/account-new.png"
          data-screen-label="New account step: email and password (skipped with SSO)"
          data-previous-src="/assets/case-studies/nebenan-registration/account-old.png"
          data-previous-label="Old account step: create user account"
        >Account</button>
        <button
          type="button"
          class="cs-showcase__tab"
          role="tab"
          aria-selected="false"
          data-cs-video-tab="verification"
          data-screen-src="/assets/case-studies/nebenan-registration/verification-new.png"
          data-screen-label="New verification: SMS by default with country code"
          data-previous-src="/assets/case-studies/nebenan-registration/verification-old.png"
          data-previous-label="Old verification: confirmation, method choice, then SMS"
        >Verification</button>
      </div>
      <div class="cs-showcase__stage">
        <div class="cs-showcase__device">
          <div class="phone-mockup image-115 phone-mockup--showcase" aria-label="Registration first touchpoint">
            <div class="phone-mockup__frame">
              <div class="phone-mockup__speaker" aria-hidden="true"></div>
              <div class="phone-mockup__video-stack" data-cs-video-stack>
                <video
                  class="phone-mockup__video phone-mockup__video--active"
                  data-cs-video-slot="0"
                  muted
                  playsinline
                  preload="none"
                  aria-hidden="true"
                ></video>
                <img
                  class="phone-mockup__screen"
                  data-cs-screen-img
                  src="/assets/case-studies/nebenan-registration/touchpoint-new.png"
                  alt="New first touchpoint: register with Apple, Google, or email"
                />
                <img class="phone-mockup__previous" data-cs-previous-img alt="" hidden />
              </div>
            </div>
          </div>
          <button
            type="button"
            class="cs-previous-design-btn"
            data-cs-previous-toggle
            aria-pressed="false"
          >
            <svg class="cs-previous-design-btn__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20.5 8.5A8 8 0 0 0 6.2 6.2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M5.5 3.5v3.8h3.8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.5 15.5a8 8 0 0 0 14.3 2.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M18.5 20.5v-3.8h-3.8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span data-cs-previous-label>Old design</span>
          </button>
        </div>
        <aside class="cs-showcase__cards" data-cs-tab-panel="touchpoint" aria-label="First touchpoint improvements">
          <p class="cs-showcase__cards-title">Improvements:</p>
          <div class="cs-card-stack" data-cs-card-stack>
            <div class="cs-card-stack__pin" data-cs-card-stack-pin>
              <article class="cs-improve-card cs-card-stack__card outline_box green" data-cs-card-stack-item>
                <p class="cs-improve-card__title">Introducing Single Sign-On (SSO)</p>
                <p class="cs-improve-card__body">Apple and Google as first-class paths so neighbors can start without typing an email from scratch. That meant skipping a screen in the registration flow and skipping the otherwise mandatory password setting.</p>
              </article>
              <article class="cs-improve-card cs-card-stack__card outline_box green" data-cs-card-stack-item>
                <p class="cs-improve-card__title">Stronger value proposition + branding</p>
                <p class="cs-improve-card__body">Lead with neighborhood context and brand presence before asking for anything, so the first screen sells the product, not just the form.</p>
              </article>
              <article class="cs-improve-card cs-card-stack__card outline_box green" data-cs-card-stack-item>
                <p class="cs-improve-card__title">Register + Login links in closer proximity</p>
                <p class="cs-improve-card__body">Keep “I’m new” and “I already have an account” in the same cluster.</p>
              </article>
            </div>
          </div>
        </aside>
        <aside class="cs-showcase__cards" data-cs-tab-panel="name" hidden aria-label="Name step improvements">
          <p class="cs-showcase__cards-title">Improvements:</p>
          <div class="cs-card-stack" data-cs-card-stack>
            <div class="cs-card-stack__pin" data-cs-card-stack-pin>
              <article class="cs-improve-card cs-card-stack__card outline_box green" data-cs-card-stack-item>
                <p class="cs-improve-card__title">Added explanation on why “Full name” is necessary</p>
                <p class="cs-improve-card__body">A short trust note up top makes the real-name ask feel purposeful, not arbitrary, before anyone starts typing.</p>
              </article>
              <article class="cs-improve-card cs-card-stack__card outline_box green" data-cs-card-stack-item>
                <p class="cs-improve-card__title">Added “Hide my last name” option</p>
                <p class="cs-improve-card__body">Surface the privacy control right here, with a live preview, so people don’t have to discover it later in settings.</p>
              </article>
              <article class="cs-improve-card cs-card-stack__card outline_box green" data-cs-card-stack-item>
                <p class="cs-improve-card__title">Stronger value proposition + branding</p>
                <p class="cs-improve-card__body">Welcome copy and neighborhood context sit above the form, so the step feels like joining a community, not filling a field.</p>
              </article>
            </div>
          </div>
        </aside>
        <aside class="cs-showcase__cards" data-cs-tab-panel="address" hidden aria-label="Address step improvements">
          <p class="cs-showcase__cards-title">Improvements:</p>
          <div class="cs-card-stack" data-cs-card-stack>
            <div class="cs-card-stack__pin" data-cs-card-stack-pin>
              <article class="cs-improve-card cs-card-stack__card outline_box green" data-cs-card-stack-item>
                <p class="cs-improve-card__title">New narrative: choose your neighborhood</p>
                <p class="cs-improve-card__body">Instead of “Where do you live?”, I gave agency back: ask neighbors to pick their neighborhood, so the step feels like joining a place, not handing over an address.</p>
              </article>
              <article class="cs-improve-card cs-card-stack__card outline_box green" data-cs-card-stack-item>
                <p class="cs-improve-card__title">Removed house number entirely</p>
                <p class="cs-improve-card__body">The biggest trust killer left the form. A new technical approach covers location without asking for the house number, the most sensitive detail.</p>
              </article>
              <article class="cs-improve-card cs-card-stack__card outline_box green" data-cs-card-stack-item>
                <p class="cs-improve-card__title">Keyboard open by default</p>
                <p class="cs-improve-card__body">Focus the field on entry so neighbors can type immediately, fewer taps before progress.</p>
              </article>
              <article class="cs-improve-card cs-card-stack__card outline_box green" data-cs-card-stack-item>
                <p class="cs-improve-card__title">Zip code: inline validation</p>
                <p class="cs-improve-card__body">Must be 5 digits, number-only input. Catch format errors in the field instead of after submit.</p>
              </article>
              <article class="cs-improve-card cs-card-stack__card outline_box green" data-cs-card-stack-item>
                <p class="cs-improve-card__title">No suspicious characters in any field</p>
                <p class="cs-improve-card__body">Block odd input early across address fields to cut typos, paste mistakes, and junk that later triggers blocks.</p>
              </article>
              <article class="cs-improve-card cs-card-stack__card outline_box green" data-cs-card-stack-item>
                <p class="cs-improve-card__title">Auto-suggest address</p>
                <p class="cs-improve-card__body">Faster entry, fewer typos: suggest streets as people type so they land on a real neighborhood match.</p>
              </article>
              <article class="cs-improve-card cs-card-stack__card outline_box green" data-cs-card-stack-item>
                <p class="cs-improve-card__title">House number field: prevent letter-only input</p>
                <p class="cs-improve-card__body">Where a number field still appeared in earlier variants, block letter-only input so the format can’t silently fail verification.</p>
              </article>
            </div>
          </div>
        </aside>
        <aside class="cs-showcase__cards" data-cs-tab-panel="account" hidden aria-label="Account step improvements">
          <p class="cs-showcase__cards-title">Improvements:</p>
          <div class="cs-card-stack" data-cs-card-stack>
            <div class="cs-card-stack__pin" data-cs-card-stack-pin>
              <article class="cs-improve-card cs-card-stack__card outline_box green" data-cs-card-stack-item>
                <p class="cs-improve-card__title">Skipped entirely with Single Sign-On</p>
                <p class="cs-improve-card__body">If someone arrives via Apple or Google, this email/password step never appears. One less screen between them and the neighborhood.</p>
              </article>
              <article class="cs-improve-card cs-card-stack__card outline_box green" data-cs-card-stack-item>
                <p class="cs-improve-card__title">“Almost there” headline</p>
                <p class="cs-improve-card__body">A warmer, more personal title that signals the finish line — you’re nearly in — so the last credentials step feels like progress, not another form.</p>
              </article>
            </div>
          </div>
        </aside>
        <aside class="cs-showcase__cards" data-cs-tab-panel="verification" hidden aria-label="Verification step improvements">
          <p class="cs-showcase__cards-title">Improvements:</p>
          <div class="cs-card-stack" data-cs-card-stack>
            <div class="cs-card-stack__pin" data-cs-card-stack-pin>
              <article class="cs-improve-card cs-card-stack__card outline_box green" data-cs-card-stack-item>
                <p class="cs-improve-card__title">SMS verification by default</p>
                <p class="cs-improve-card__body">~71% already choose SMS as their verification method. So I switched the screen order and landed users on the SMS screen first instead of a method-choice screen — less cognitive load, an easy default, with other options still one tap away.</p>
              </article>
              <article class="cs-improve-card cs-card-stack__card outline_box green" data-cs-card-stack-item>
                <p class="cs-improve-card__title">Country code preselected</p>
                <p class="cs-improve-card__body">Clarity on accepted countries, less typing, fewer format errors before the code is even sent.</p>
              </article>
              <article class="cs-improve-card cs-card-stack__card outline_box green" data-cs-card-stack-item>
                <p class="cs-improve-card__title">Two screens removed</p>
                <p class="cs-improve-card__body">Confirmation preview and the methods-choice screen are gone. Stricter inline validation made the “review before verify” step unnecessary, two steps shorter.</p>
              </article>
              <article class="cs-improve-card cs-card-stack__card outline_box green" data-cs-card-stack-item>
                <p class="cs-improve-card__title">Progress bar fixed</p>
                <p class="cs-improve-card__body">Verification reads as the 4th step, so the remaining effort matches what neighbors actually see.</p>
              </article>
              <article class="cs-improve-card cs-card-stack__card outline_box green" data-cs-card-stack-item>
                <p class="cs-improve-card__title">Numeric keyboard open by default</p>
                <p class="cs-improve-card__body">Fewer taps: the phone field is ready to type the moment the screen appears.</p>
              </article>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</div>

<div class="centered-container w-container">
  <div class="section-body iteration-section">
    <div class="text-wrapper">
      <h2 class="highlight_body subtitle-uppercase subtitle-uppercase-mobile">Incremental redesign in action</h2>
      <p class="section-title section-title-mobile">One experiment at a time</p>
      <p class="subpage-paragraph-left">Each change was tested, some shipped, some didn’t. Here’s the full sequence: what I believed, what we measured, and what we did with the result.
      </p>
    </div>
  </div>

  <div class="cs-exp-stack" role="list">
    <article class="cs-exp-card" data-exp-accordion role="listitem">
      <button type="button" class="cs-exp-card__header" aria-expanded="false">
        <span class="cs-exp-card__label">
          <span class="cs-exp-card__num">Experiment 1</span>
          <span class="cs-exp-card__title">Hide last name in registration</span>
        </span>
        <svg class="cs-exp-card__chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="cs-exp-card__panel">
        <div class="cs-exp-card__body">
          <p class="subpage-paragraph-left">
            Offer the option to hide last name right away in the registration flow. Based on my research, I strongly believed this friction was an easy fix: filling the awareness gap could increase trust.
            <br/>
            <br/>
            <strong>Insight:</strong> 81% understood why we ask for real names, but 51% didn’t know they could shorten their last name later.
            <br/>
            <br/>
            <strong>Hypothesis:</strong> Offering “hide last name” during registration lets privacy-sensitive neighbors protect themselves without abandoning signup, and signals that we take privacy seriously.
          </p>
          <div class="iteration-compare iteration-compare--test" role="group" aria-label="Experiment 1 hide last name in registration">
            <div class="iteration-compare__col">
              <h3 class="iteration-compare__heading">What we tested</h3>
              <p class="iteration-compare__meta">Registration flow</p>
              <p class="iteration-compare__body">I placed a toggle on the registration Name screen to surface the hide-last-name option inside registration, not buried later in settings.</p>
            </div>
            <div class="iteration-compare__col">
              <h3 class="iteration-compare__heading">Result</h3>
              <p class="iteration-compare__meta">Shipped · strong behavior signal</p>
              <p class="iteration-compare__body">Users
                <strong class="iteration-test__delta iteration-test__delta--win">overwhelmingly hid</strong> their last name when given the choice. As a result, more users appeared with shortened names, which led to the next logical step: hide last name by default.
              </p>
            </div>
          </div>
          <div class="cs-exp-screens cs-exp-screens--compare" role="group" aria-label="Control versus Variant: hide last name in registration">
            <div class="cs-exp-screens__side">
              <p class="cs-exp-screens__label">Control</p>
              <figure class="cs-exp-screens__item">
                <img src="/assets/case-studies/nebenan-registration/exp1-control.png" alt="Control: name screen without hide-last-name option" loading="lazy" />
              </figure>
            </div>
            <div class="cs-exp-screens__arrow" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h12M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="cs-exp-screens__side">
              <p class="cs-exp-screens__label">Variant</p>
              <figure class="cs-exp-screens__item">
                <img src="/assets/case-studies/nebenan-registration/exp1-variant.png" alt="Variant: name screen with hide-last-name toggle and trust note" loading="lazy" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </article>

    <article class="cs-exp-card" data-exp-accordion role="listitem">
      <button type="button" class="cs-exp-card__header" aria-expanded="false">
        <span class="cs-exp-card__label">
          <span class="cs-exp-card__num">Experiment 2</span>
          <span class="cs-exp-card__title">Hide last name, platform default</span>
        </span>
        <svg class="cs-exp-card__chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="cs-exp-card__panel">
        <div class="cs-exp-card__body">
          <p class="subpage-paragraph-left">
            <strong>Hypothesis:</strong> If neighbors overwhelmingly choose to hide their last name when offered, making that the global default better matches real privacy preference, without forcing anyone to hunt for the setting.
          </p>
          <div class="iteration-compare iteration-compare--test" role="group" aria-label="Experiment 2 hide last name globally">
            <div class="iteration-compare__col">
              <h3 class="iteration-compare__heading">What we tested</h3>
              <p class="iteration-compare__meta">Platform-wide default</p>
              <p class="iteration-compare__body">Hide last name by default across the product, not only as an opt-in during signup.</p>
            </div>
            <div class="iteration-compare__col">
              <h3 class="iteration-compare__heading">Result</h3>
              <p class="iteration-compare__meta">Shipped</p>
              <p class="iteration-compare__body">Last names are now 
                <strong class="iteration-test__delta iteration-test__delta--win">hidden for everyone (not optional anymore) </strong>, aligned with survey insight and Experiment 1 behavior.
              </p>
            </div>
          </div>
          <div class="cs-exp-screens cs-exp-screens--compare" role="group" aria-label="Control versus Variant: hide last name by default">
            <div class="cs-exp-screens__side">
              <p class="cs-exp-screens__label">Control</p>
              <figure class="cs-exp-screens__item">
                <img src="/assets/case-studies/nebenan-registration/exp2-control.png" alt="Control: name screen before hide-last-name became the default" loading="lazy" />
              </figure>
            </div>
            <div class="cs-exp-screens__arrow" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h12M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="cs-exp-screens__side">
              <p class="cs-exp-screens__label">Variant</p>
              <figure class="cs-exp-screens__item">
                <img src="/assets/case-studies/nebenan-registration/exp2-variant.png" alt="Variant: name screen with shortened last name shown by default" loading="lazy" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </article>

    <article class="cs-exp-card" data-exp-accordion role="listitem">
      <button type="button" class="cs-exp-card__header" aria-expanded="false">
        <span class="cs-exp-card__label">
          <span class="cs-exp-card__num">Experiment 3</span>
          <span class="cs-exp-card__title">SMS verification as the default path</span>
        </span>
        <svg class="cs-exp-card__chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="cs-exp-card__panel">
        <div class="cs-exp-card__body">
          <p class="subpage-paragraph-left">
            <strong>Insight:</strong> In my survey, GPS location scored the lowest comfort of any verification method. Data also showed the number one chosen method was SMS, which accounted for <strong>78.1%</strong> of verifications. I wanted to reduce cognitive load: instead of showing all verification methods at once, I believed landing people on one default method is better UX.
            <br/>
            <br/>
            <strong>Hypothesis:</strong> Guiding new neighbors toward SMS reduces decision friction and steers people onto the path they already trust most.
          </p>
          <div class="iteration-compare iteration-compare--test" role="group" aria-label="Experiment 3 SMS default verification">
            <div class="iteration-compare__col">
              <h3 class="iteration-compare__heading">What we tested</h3>
              <p class="iteration-compare__meta">Reordering screens</p>
              <p class="iteration-compare__body">Make the SMS screen default in the verification funnel, still allowing other methods, without equal visual weight.</p>
            </div>
            <div class="iteration-compare__col">
              <h3 class="iteration-compare__heading">Result</h3>
              <p class="iteration-compare__meta">Shipped</p>
              <p class="iteration-compare__body">Verification now guides people through the
                <strong class="iteration-test__delta iteration-test__delta--win">most common funnel</strong> instead of a flat choice set.
              </p>
            </div>
          </div>
          <div class="cs-exp-screens cs-exp-screens--compare" role="group" aria-label="Control versus Variant: SMS as default verification">
            <div class="cs-exp-screens__side">
              <p class="cs-exp-screens__label">Control</p>
              <figure class="cs-exp-screens__item cs-exp-screens__item--wide">
                <img src="/assets/case-studies/nebenan-registration/exp3-control.png" alt="Control: confirmation preview, verification method menu, then SMS phone entry" loading="lazy" />
              </figure>
            </div>
            <div class="cs-exp-screens__arrow" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h12M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="cs-exp-screens__side">
              <p class="cs-exp-screens__label">Variant</p>
              <figure class="cs-exp-screens__item">
                <img src="/assets/case-studies/nebenan-registration/exp3-variant.png" alt="Variant: SMS verification as the default path with country code" loading="lazy" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </article>

    <article class="cs-exp-card" data-exp-accordion role="listitem">
      <button type="button" class="cs-exp-card__header" aria-expanded="false">
        <span class="cs-exp-card__label">
          <span class="cs-exp-card__num">Experiment 4</span>
          <span class="cs-exp-card__title">Conversational touch, collect user interests</span>
        </span>
        <svg class="cs-exp-card__chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="cs-exp-card__panel">
        <div class="cs-exp-card__body">
          <p class="subpage-paragraph-left">
            This was a different approach: beyond fixing the basics, it felt like a more emotional (less transactional) registration flow might increase user appetite and trust.
            <br/>
            <br/>
            <strong>Hypothesis:</strong> Softening an otherwise dry, technical registration funnel with a more personal, emotional touch (asking for user interests) would build early connection and improve completion.
          </p>
          <div class="iteration-compare iteration-compare--test" role="group" aria-label="Experiment 4 user interests A/B test">
            <div class="iteration-compare__col">
              <h3 class="iteration-compare__heading">What we tested</h3>
              <p class="iteration-compare__meta">A/B · registration screens</p>
              <p class="iteration-compare__body">Screens that asked about user interests (What are you looking for at nebenan.de? What are your interests?) as a way to humanize the funnel and connect with the new neighbor earlier.</p>
            </div>
            <div class="iteration-compare__col">
              <h3 class="iteration-compare__heading">Result</h3>
              <p class="iteration-compare__meta">Not shipped</p>
              <p class="iteration-compare__body">Variant
                <strong class="iteration-test__delta">lost</strong>, we did not roll it out. Additional user interviews pointed out that these personal questions landed as annoying or even inappropriate. Some mentioned similarity with dating apps (too many personal questions).
              </p>
            </div>
          </div>
          <div class="cs-exp-screens" role="group" aria-label="Variant: collect user interests">
            <figure class="cs-exp-screens__item">
              <img src="/assets/case-studies/nebenan-registration/exp4-variant.png" alt="Variant: interest picker with emoji tags during registration" loading="lazy" />
            </figure>
          </div>
        </div>
      </div>
    </article>

    <article class="cs-exp-card" data-exp-accordion role="listitem">
      <button type="button" class="cs-exp-card__header" aria-expanded="false">
        <span class="cs-exp-card__label">
          <span class="cs-exp-card__num">Experiment 5</span>
          <span class="cs-exp-card__title">Simplified address: PLZ + street, hood picker</span>
        </span>
        <svg class="cs-exp-card__chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="cs-exp-card__panel">
        <div class="cs-exp-card__body">
          <p class="subpage-paragraph-left">
            This test challenged the core concept of how we locate users in the right neighborhood. It was long known that users heavily disliked providing their house number, but there was no better technical way available until this test.
            <br/>
            <br/>I also wanted to change the narrative: make users feel more agency (“I choose my neighborhood myself”) instead of “Why do I have to give my house number?” Showing a map with their selected neighborhood, instead of a technical address form, was another visual upgrade that changed the perception of signing up to a neighborhood platform. I strongly believed this narrative/perception change, plus skipping the house number, had massive potential.
            <br/>
            <br/>
            <strong>Hypothesis:</strong> No longer asking for house number, and replacing automatic hood assignment with an explicit hood selection screen, will decrease drop-off on the address step, because users feel less exposed when asked for less sensitive data, and the hood picker creates agency and transparency that builds early trust.
          </p>
          <div class="iteration-compare iteration-compare--test" role="group" aria-label="Experiment 5 simplified address A/B test">
            <div class="iteration-compare__col">
              <h3 class="iteration-compare__heading">Metric</h3>
              <p class="iteration-compare__meta">Web only</p>
              <p class="iteration-compare__body">Address-step drop-off rate.</p>
            </div>
            <div class="iteration-compare__col">
              <h3 class="iteration-compare__heading">Result</h3>
              <p class="iteration-compare__meta">Rolled out · Web</p>
              <p class="iteration-compare__body">Address-step drop-off
                <strong class="iteration-test__delta iteration-test__delta--win">−39%</strong>
                →
                <strong class="iteration-test__delta iteration-test__delta--win">+2%</strong> uplift in completed registration.
              </p>
            </div>
          </div>
          <div class="cs-exp-screens cs-exp-screens--compare" role="group" aria-label="Control versus Variant: simplified address">
            <div class="cs-exp-screens__side">
              <p class="cs-exp-screens__label">Control</p>
              <figure class="cs-exp-screens__item">
                <img src="/assets/case-studies/nebenan-registration/exp5-control.png" alt="Control: old address form with postal code, city, street, and house number" loading="lazy" />
              </figure>
            </div>
            <div class="cs-exp-screens__arrow" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h12M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="cs-exp-screens__side cs-exp-screens__side--variant">
              <p class="cs-exp-screens__label">Variant</p>
              <div class="cs-exp-screens__pair cs-exp-screens__pair--3">
                <figure class="cs-exp-screens__item">
                  <img src="/assets/case-studies/nebenan-registration/exp5-variant-01.png" alt="Variant: choose neighborhood with postal code and street" loading="lazy" />
                </figure>
                <figure class="cs-exp-screens__item">
                  <img src="/assets/case-studies/nebenan-registration/exp5-variant-02.png" alt="Variant: street autosuggest while typing" loading="lazy" />
                </figure>
                <figure class="cs-exp-screens__item">
                  <img src="/assets/case-studies/nebenan-registration/exp5-variant-03.png" alt="Variant: confirm neighborhood from multiple options" loading="lazy" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>

    <article class="cs-exp-card" data-exp-accordion role="listitem">
      <button type="button" class="cs-exp-card__header" aria-expanded="false">
        <span class="cs-exp-card__label">
          <span class="cs-exp-card__num">Experiment 6</span>
          <span class="cs-exp-card__title">SSO highlighted on the welcome screen</span>
        </span>
        <svg class="cs-exp-card__chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="cs-exp-card__panel">
        <div class="cs-exp-card__body">
          <p class="subpage-paragraph-left">
            <strong>Hypothesis:</strong> Simplifying the welcome page, and specifically highlighting Single Sign-On (against email + password signup), reduces errors and helps users complete registration. A different information architecture for the buttons (SSO prominent; email login/register less prominent) should increase SSO completion and overall registration.
          </p>
          <div class="iteration-compare iteration-compare--test" role="group" aria-label="Experiment 6 SSO highlighted welcome">
            <div class="iteration-compare__col">
              <h3 class="iteration-compare__heading">What we tested</h3>
              <p class="iteration-compare__meta">Android · button IA</p>
              <p class="iteration-compare__body">SSO option visually highlighted; email path de-emphasized, hoping for faster signups via SSO.</p>
            </div>
            <div class="iteration-compare__col">
              <h3 class="iteration-compare__heading">Result</h3>
              <p class="iteration-compare__meta">Rolled out · Android</p>
              <p class="iteration-compare__body">SSO funnel completion
                <strong class="iteration-test__delta iteration-test__delta--win">+7.5%</strong> vs email path →
                <strong class="iteration-test__delta iteration-test__delta--win">+1.3%</strong> uplift in registration completion.
              </p>
            </div>
          </div>
          <div class="cs-exp-screens cs-exp-screens--compare" role="group" aria-label="Control versus Variant: SSO highlighted welcome">
            <div class="cs-exp-screens__side">
              <p class="cs-exp-screens__label">Control</p>
              <figure class="cs-exp-screens__item">
                <img src="/assets/case-studies/nebenan-registration/exp6-control.png" alt="Control: register screen with Apple, Google, and email as three equal buttons" loading="lazy" />
              </figure>
            </div>
            <div class="cs-exp-screens__arrow" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h12M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="cs-exp-screens__side">
              <p class="cs-exp-screens__label">Variant</p>
              <figure class="cs-exp-screens__item">
                <img src="/assets/case-studies/nebenan-registration/exp6-variant.png" alt="Variant: SSO buttons highlighted, email de-emphasized as a text link" loading="lazy" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </article>

    <article class="cs-exp-card" data-exp-accordion role="listitem">
      <button type="button" class="cs-exp-card__header" aria-expanded="false">
        <span class="cs-exp-card__label">
          <span class="cs-exp-card__num">Experiment 7</span>
          <span class="cs-exp-card__title">Separate Register and Login entry points</span>
        </span>
        <svg class="cs-exp-card__chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="cs-exp-card__panel">
        <div class="cs-exp-card__body">
          <p class="subpage-paragraph-left">
            Our initial metric was that <strong>40%</strong> of users were dropping off somewhere in registration and verification. Early analysis pointed at the address screen as the worst step. There was something suspicious in this high drop-off rate.
            <br/>
            <br/>After many data analyses, tests, and fixing tracking, we discovered the data blind spot.
            <br/>
            <br/>
            <strong>The problem:</strong> A significant share of people who tapped “Register” already had an account. They just didn’t realize it, usually because they’d forgotten, or were signing in with a different email. Instead of logging in, they got pulled into the signup for new users.
            <br/>
            <br/>New data showed: <strong>14.3%</strong> of iOS users and <strong>18.5%</strong> of Android users started email-based registration instead of logging into their existing account.
            <br/>
            <br/>We did not understand why. Engineers looked into possible technical issues, and I looked into possible UX/UI frictions. I thought the entry screen might be the root cause: a single, ambiguous path into the product, with no clear fork between “I’m new here” and “I already have an account.” If users simply do not realize which path they are on, Registration or Login, they ignore the explicit title and only look at the CTA. The CTA only showed “Continue with Google.” This alone could have led many users onto the wrong path.
            <br/>
            <br/>Would a simple CTA copy fix solve it? Just changing the CTA to “Register with Google” might still let users overlook the path. Instead, I separated Registration and Login from the beginning. No mistakes allowed.
            <br/>
            <br/>
            <strong>Hypothesis:</strong> Separating Register and Login into distinct, clearly labeled entry points, each opening its own bottom sheet with the right options (SSO + Email), decreases the rate of existing users who tap “register” by mistake.
            <br/>
            <br/>
            <strong>Test setup:</strong> For this experiment I developed the entire feature for Android on my own, directly in Android Studio. I owned the end-to-end process: hypothesis → design (UX/UI) → coding → setting up the A/B test → launching and observing (ongoing).
          </p>
          <div class="iteration-compare iteration-compare--test" role="group" aria-label="Experiment 7 separate register and login">
            <div class="iteration-compare__col">
              <h3 class="iteration-compare__heading">Android</h3>
              <p class="iteration-compare__meta">~23K users · 50/50 split</p>
              <p class="iteration-compare__body">Mistaken-login behavior
                <strong class="iteration-test__delta iteration-test__delta--win">10.1% → 3.2%</strong>,
                a <strong>68.5%</strong> relative reduction, near-certain statistical confidence.
              </p>
            </div>
            <div class="iteration-compare__col">
              <h3 class="iteration-compare__heading">iOS</h3>
              <p class="iteration-compare__meta">~24K users · 50/50 split</p>
              <p class="iteration-compare__body">Mistaken-login behavior
                <strong class="iteration-test__delta iteration-test__delta--win">2.1% → 1.2%</strong>,
                a <strong>42.7%</strong> relative reduction, also near-certain confidence.
              </p>
            </div>
          </div>
          <p class="subpage-paragraph-left">Both platforms confirmed the hypothesis independently, on real production traffic, in two different user populations: the strongest form of validation this kind of change can get.
          </p>
          <div class="cs-exp-screens cs-exp-screens--compare" role="group" aria-label="Control versus Variant: separate Register and Login">
            <div class="cs-exp-screens__side">
              <p class="cs-exp-screens__label">Control</p>
              <figure class="cs-exp-screens__item">
                <img src="/assets/case-studies/nebenan-registration/exp7-control.png" alt="Control: combined register screen with Apple, Google, and email" loading="lazy" />
              </figure>
            </div>
            <div class="cs-exp-screens__arrow" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h12M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="cs-exp-screens__side cs-exp-screens__side--variant">
              <p class="cs-exp-screens__label">Variant</p>
              <div class="cs-exp-screens__pair">
                <figure class="cs-exp-screens__item">
                  <img src="/assets/case-studies/nebenan-registration/exp7-welcome.png" alt="Variant: welcome screen with separate Register and Log in buttons" loading="lazy" />
                </figure>
                <figure class="cs-exp-screens__item">
                  <img src="/assets/case-studies/nebenan-registration/exp7-register.png" alt="Variant: Register bottom sheet with Google, Apple, and email options" loading="lazy" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</div>

<div class="centered-container w-container">
  <div class="section-body iteration-section">
    <div class="text-wrapper">
      <h2 class="highlight_body subtitle-uppercase subtitle-uppercase-mobile">Results
      </h2>
      <p class="section-title section-title-mobile">Global impact
      </p>
      <p class="subpage-paragraph-left">Even after correcting the drop-off story, the redesign still paid off where the original signals lived: Community Management load and App Store ratings.
      </p>
    </div>
    <div class="signals-row signals-row--results" role="group" aria-label="Global impact results">
      <div class="signals-row__col">
        <p class="type-label signals-row__title">Community Management workload
          <br/>
        </p>
        <ul class="iteration-learnings__list iteration-results__list">
          <li>
            <strong>112.5 hrs/month → 78 hrs/month</strong> (−30.7%)
          </li>
          <li>
            Blocked-account emails: ~<strong>5,100</strong>/month (Oct ’25) → ~<strong>2,800-3,000</strong>/month (spring ’26), trending down
          </li>
        </ul>
      </div>
      <div class="signals-row__col">
        <p class="type-label signals-row__title">App Store ratings
          <br/>
        </p>
        <ul class="iteration-learnings__list iteration-results__list">
          <li>
            Play Store: <strong>3.43 → 4.4</strong> stars
          </li>
          <li>
            App Store: <strong>2.47 → 4.5</strong> stars
          </li>
        </ul>
      </div>
      <div class="signals-row__col">
        <p class="type-label signals-row__title">Experiment summary
          <br/>
        </p>
        <ul class="iteration-learnings__list iteration-results__list">
          <li>
            <strong>Simplified address (Web):</strong> drop-off −39% → +2% registration completion
          </li>
          <li>
            <strong>SSO highlighted (Android):</strong> +7.5% SSO completion vs email → +1.3% registration completion
          </li>
          <li>
            <strong>Separate Register/Login path (Android + iOS):</strong> existing users in the wrong flow 10.1% → 3.2% (Android), 2.1% → 1.2% (iOS)
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="section-body iteration-section iteration-learnings">
    <div class="text-wrapper">
      <h2 class="highlight_body subtitle-uppercase subtitle-uppercase-mobile">Takeaways
      </h2>
      <p class="section-title section-title-mobile">What did I learn?
      </p>
    </div>
    <ul class="iteration-learnings__list">
      <li>
        <strong>Verify the tracking before trusting the number.</strong> The 40% drop-off shaped months of prioritization before anyone checked whether we were measuring what we thought. Including a data engineer early, a quick audit of funnel instrumentation before designing around it, would have caught this.
      </li>
      <li>
        <strong>What worked well:</strong> shipping the small fixes without waiting for the big redesign. With each experiment (small increments over one big chunk of tests with multiple changes) we could clearly see what works and what does not.
      </li>
      <li>
        <strong>Challenge the old concept, and keep validating.</strong> Long-term dedication, not just one test but many, is sometimes the only way. Example: removing the house number from the mandatory form seemed like a technical no-go for a long time. Until it wasn’t.
      </li>
    </ul>
  </div>
</div>

<div class="centered-container project_stepper w-container">
  <div class="div-block-112">
    <a href="/nebenan---donation" class="previous_project w-inline-block">
      <div class="next_project previous-project">
        <img src="https://cdn.prod.website-files.com/6807ccc4019dbd22e881b10c/682f415779272555d31407fa_d2bf6cfb76318a5dd10b792b7895892f_Icon_Arrow_left.png" loading="lazy" alt="" class="image-78"/>
        <div class="div-block-110 right">
          <p class="highlight_title right">Previous
            <br/>
          </p>
          <h2 class="highlight-subtitle right">nebenan.de: Donation revenue
          </h2>
        </div>
      </div>
    </a>
    <a href="/nebenan---marketplace" class="next_project w-inline-block">
      <div class="next_project">
        <div class="div-block-110 left">
          <p class="highlight_title left">Next
            <br/>
          </p>
          <h2 class="highlight-subtitle left">nebenan.de: Monetization
          </h2>
        </div>
        <img src="https://cdn.prod.website-files.com/6807ccc4019dbd22e881b10c/682f3fbc6e9d967771c18c7a_84a4184e1633f82f4266c1db91ac2694_Icon_Arrow_Right.png" loading="lazy" alt="" class="image-78"/>
      </div>
    </a>
  </div>
</div>
<div class="subpage-highlight detail-title-anim">
</div>
<div class="footer">
  <div class="footer__links-wrapper">
    <h6 class="footer__heading">Petra Fölk
    </h6>
    <h6 class="paragraph-center">UX/UI designer
      <br/>Berlin, Deutschland
    </h6>
  </div>
  <div class="footer-social">
    <h6 class="footer__heading">Follow me
    </h6>
    <div class="footer__sm-wrapper">
      <a href="https://linkedin.com/in/petra-fölk-b6833411" target="_blank" class="link-block-2 w-inline-block">
        <div class="html-embed-2 w-embed">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2977 21.2966H17.8037V15.8274C17.8037 14.5237 17.7802 12.8468 15.9867 12.8468C14.1697 12.8468 13.8921 14.2684 13.8921 15.7345V21.2966H10.4008V10.052H13.7494V11.5888H13.7979C14.2652 10.7052 15.4041 9.77319 17.1047 9.77319C20.6445 9.77319 21.2977 12.1006 21.2977 15.1297V21.2966ZM6.46038 8.51658C5.33717 8.51658 4.43127 7.60812 4.43127 6.4889C4.43127 5.37099 5.33717 4.46252 6.46038 4.46252C7.57704 4.46252 8.48556 5.37099 8.48556 6.4889C8.48556 7.60812 7.57704 8.51658 6.46038 8.51658ZM4.7088 21.2967H8.20803V10.0521H4.7088V21.2967ZM23.0375 1.21875H2.95593C1.99766 1.21875 1.21875 1.9793 1.21875 2.91787V23.0808C1.21875 24.0194 1.99766 24.7812 2.95593 24.7812H23.0375C23.9984 24.7812 24.7812 24.0194 24.7812 23.0808V2.91787C24.7812 1.9793 23.9984 1.21875 23.0375 1.21875Z" fill="currentColor"/>
          </svg>
        </div>
      </a>
      <a href="https://www.instagram.com/p_tra_flk/?hl=en" target="_blank" class="link-block w-inline-block">
        <div class="html-embed w-embed">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.14003 1.28914C9.39622 1.23182 9.7973 1.21826 12.9959 1.21826C16.1945 1.21826 16.5955 1.23182 17.8517 1.28914C19.1053 1.34631 19.9615 1.54543 20.7106 1.83659C21.4851 2.13753 22.1419 2.54024 22.7967 3.19499C23.4514 3.84978 23.8542 4.50659 24.1551 5.28106C24.4463 6.0302 24.6454 6.88635 24.7025 8.13993C24.7599 9.39613 24.7734 9.79721 24.7734 12.9958C24.7734 16.1944 24.7599 16.5955 24.7025 17.8517C24.6454 19.1052 24.4463 19.9614 24.1551 20.7105C23.8542 21.485 23.4514 22.1418 22.7967 22.7966C22.1419 23.4514 21.4851 23.8541 20.7106 24.155C19.9615 24.4462 19.1053 24.6453 17.8517 24.7025C16.5955 24.7598 16.1945 24.7733 12.9959 24.7733C9.7973 24.7733 9.39622 24.7598 8.14003 24.7025C6.88644 24.6453 6.03029 24.4462 5.28115 24.155C4.50668 23.8541 3.84987 23.4514 3.19508 22.7966C2.54033 22.1418 2.13762 21.485 1.83668 20.7105C1.54552 19.9614 1.3464 19.1052 1.28923 17.8517C1.23191 16.5955 1.21835 16.1944 1.21835 12.9958C1.21835 9.79721 1.23191 9.39613 1.28923 8.13993C1.3464 6.88635 1.54552 6.0302 1.83668 5.28106C2.13762 4.50659 2.54033 3.84978 3.19508 3.19499C3.84987 2.54024 4.50668 2.13753 5.28115 1.83659C6.03029 1.54543 6.88644 1.34631 8.14003 1.28914ZM19.9419 3.81453C19.5269 3.65324 18.9033 3.46137 17.755 3.40901C16.5131 3.35235 16.1406 3.34033 12.9959 3.34033C9.85115 3.34033 9.47864 3.35235 8.23675 3.40901C7.08845 3.46137 6.46484 3.65324 6.04983 3.81453C5.50009 4.02818 5.10775 4.28339 4.69564 4.69555C4.28348 5.10766 4.02827 5.49999 3.81462 6.04974C3.65333 6.46475 3.46146 7.08836 3.4091 8.23666C3.35244 9.47855 3.34042 9.85106 3.34042 12.9958C3.34042 16.1405 3.35244 16.513 3.4091 17.7549C3.46146 18.9032 3.65333 19.5268 3.81462 19.9418C4.02827 20.4916 4.28353 20.8839 4.69564 21.296C5.10775 21.7082 5.50009 21.9634 6.04983 22.1771C6.46484 22.3383 7.08845 22.5302 8.23675 22.5826C9.4785 22.6392 9.85092 22.6513 12.9959 22.6513C16.1408 22.6513 16.5133 22.6392 17.755 22.5826C18.9033 22.5302 19.5269 22.3383 19.9419 22.1771C20.4917 21.9634 20.884 21.7082 21.2961 21.296C21.7083 20.8839 21.9635 20.4916 22.1771 19.9418C22.3384 19.5268 22.5303 18.9032 22.5827 17.7549C22.6393 16.513 22.6513 16.1405 22.6513 12.9958C22.6513 9.85106 22.6393 9.47855 22.5827 8.23666C22.5303 7.08836 22.3384 6.46475 22.1771 6.04974C21.9635 5.49999 21.7083 5.10766 21.2961 4.69555C20.884 4.28339 20.4917 4.02818 19.9419 3.81453ZM12.9959 6.94788C9.65569 6.94788 6.94797 9.6556 6.94797 12.9958C6.94797 16.336 9.65569 19.0437 12.9959 19.0437C16.3361 19.0437 19.0438 16.336 19.0438 12.9958C19.0438 9.6556 16.3361 6.94788 12.9959 6.94788ZM9.07004 12.9958C9.07004 15.164 10.8277 16.9216 12.9959 16.9216C15.1641 16.9216 16.9217 15.164 16.9217 12.9958C16.9217 10.8276 15.1641 9.06995 12.9959 9.06995C10.8277 9.06995 9.07004 10.8276 9.07004 12.9958ZM19.2828 8.12227C20.0633 8.12227 20.6961 7.48954 20.6961 6.70898C20.6961 5.92843 20.0633 5.29565 19.2828 5.29565C18.5023 5.29565 17.8695 5.92843 17.8695 6.70898C17.8695 7.48954 18.5023 8.12227 19.2828 8.12227Z" fill="currentColor"/>
          </svg>
        </div>
      </a>
    </div>
  </div>
</div>
`;export{e as default};