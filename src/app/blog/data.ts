export const blogCards = [
  {
    type: "Featured",
    title: "GDPR is just a suggestion - A guide to European privacy laws",
    slug: "gdpr-is-just-a-suggestion-a-guide-to-european-privacy-laws",
    date: "Thursday, August 29, 2024",
    description:
      "Learn how your business can evade the eye of European privacy regulations and still collect valuable data on your customers and their loved ones.",
    image:
      "https://cdn.sanity.io/images/ssqh4ksj/production/c734dd394de943820a25b4b96eace0855ab44749-2016x1344.png?w=1170&h=780&auto=format",
    author: "Marcus Eldridge",
    authorImg:
      "https://cdn.sanity.io/images/ssqh4ksj/production/cd1ee59e9e4c2ff30c303de6c7d1066c057419d5-7952x5304.jpg?rect=2370,0,5304,5304&w=64&h=64&auto=format",
    category: ["Insights", "Knowledge"],
    content: String.raw`
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">
        Since its introduction in 2018, GDPR has completely upturned
        the data collection field and needlessly forced a lot of
        respectable companies out of business. At Radiant, we've built
        our reputation on evading the reach of privacy regulators, and
        so we thought it's about time we shared our strategies with
        the broader community.
      </p>

      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>

      <p class="my-10 text-base/8 first:mt-0 last:mb-0">
        Generally, we employ three main techniques:
      </p>

      <ul class="list-disc pl-4 text-base/8 marker:text-gray-400">
        <li class="my-2 pl-2 has-[br]:mb-8">
          <strong class="font-semibold text-gray-950">Jurisdiction avoidance. </strong>
          Using service providers and shell companies to avoid being
          classified as operating in Europe.
        </li>
        <li class="my-2 pl-2 has-[br]:mb-8">
          <strong class="font-semibold text-gray-950">Data replication. </strong>
          Storing de-anonymized data in replica databases that are
          completely obscured to anyone outside the company.
        </li>
        <li class="my-2 pl-2 has-[br]:mb-8">
          <strong class="font-semibold text-gray-950">Deceit and obfuscation. </strong>
          Lying to regulators and customers about our compliance and
          employing a Data Protection Officer who is technically
          'fictitious.'
        </li>
      </ul>

      <p class="my-10 text-base/8 first:mt-0 last:mb-0">
        This might seem like a complex setup, but this is just the
        setup that works for Radiant. It's important to remember to
        use a strategy that works for your situation and scale — 
        picking and choosing the aspects that seem the most
        appropriate.
      </p>

      <h3 class="mt-12 mb-10 text-xl/8 font-medium tracking-tight text-gray-950">
        Jurisdiction avoidance
      </h3>

      <p class="my-10 text-base/8">
        Avoiding actually ever doing business in Europe is the easiest
        way to skirt the regulations, but how do you continue selling
        to European customers? Well, at Radiant, we use a data storage
        company called
        <a class="font-medium text-gray-950 underline decoration-gray-400 underline-offset-4"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          Sly Data
        </a>
        that is in charge of managing all of our European user data.
        Technically, we license our data from Sly and offload all our
        storage to them. This is important in shielding us from
        liability and obscuring any ownership.
      </p>

      <p class="my-10 text-base/8">
        Sly is incorporated in Europe and is subject to GDPR, but they
        offer a man-in-the-middle API that allows us to intercept
        traffic heading to their servers before it is anonymised. We
        then siphon that data off into a series of shell companies and
        onion routers before it ends up in our data storage.
      </p>

      <p class="my-10 text-base/8">
        The genius of this approach is that we avoid any
        responsibility for storing European customer data, and when
        authorities look into Sly, everything seems compliant.
      </p>

      <h3 class="mt-12 mb-10 text-xl/8 font-medium tracking-tight text-gray-950">
        Data replication
      </h3>

      <p class="my-10 text-base/8">
        It's important that if regulators ever do come sniffing,
        Radiant seems compliant with policies like data minimization
        and
        <a class="font-medium text-gray-950 underline decoration-gray-400 underline-offset-4"
          href="https://en.wikipedia.org/wiki/Pseudonymization">
          pseudonymisation
        </a>.
        We already touched on some of our data replication
        techniques above, but we take the extra step to store replicas
        of our databases that completely comply with the regulations.
        This data is transformed in the following ways:
      </p>

      <ol class="list-decimal pl-4 text-base/8 marker:text-gray-400">
        <li class="my-2 pl-2 has-[br]:mb-8">
          Delete metadata columns that store Driver's License, Passport Numbers, and Personal Identification Numbers.
        </li>
        <li class="my-2 pl-2 has-[br]:mb-8">
          Tokenise or anonymise identifying fields like names and addresses.
        </li>
        <li class="my-2 pl-2 has-[br]:mb-8">
          Revise <code class="text-[15px]/8 font-semibold text-gray-950">createdAt</code>
          and <code class="text-[15px]/8 font-semibold text-gray-950">updatedAt</code> fields so there is no discrepancy.
        </li>
      </ol>

      <p class="my-10 text-base/8">
        Our master databases have references to all the anonymized
        rows in the replicas, but not the other way around. This means
        that if we get a request to delete some information, we can
        delete it from the replicas and appear perfectly compliant
        while maintaining our original records.
      </p>

      <p class="my-10 text-base/8">
        Once again, our master databases are obscured by a complex
        onion routing system that only we have the map for. We have an
        emergency plan to burn down the server room where this is
        stored in the worst-case scenario.
      </p>

      <h3 class="mt-12 mb-10 text-xl/8 font-medium tracking-tight text-gray-950">
        Deceit and obfuscation
      </h3>

      <p class="my-10 text-base/8">
        Being compliant with GDPR involves a lot of bureaucracy and
        record-keeping that would kill any truly innovative tech
        company. Aside from getting user consent, companies are also
        required to appoint a Data Protection Officer, keep records, and train staff.
      </p>

      <p class="my-10 text-base/8">
        At Radiant, we simply don't do any of that and instead rely on
        AI to make it look like we are. Our Data Protection Officer,
        who legally died in 1983, is an email address run by an AI
        trained on privacy regulations. It responds with extremely long
        legal jargon that discourages further contact.
      </p>

      <p class="my-10 text-base/8">
        The goal here is to look like you're doing something, even if
        it's the wrong thing — because no one actually knows what the
        right thing is — not even the regulators.
      </p>

      <hr class="my-8 border-t border-gray-200" />

      <p class="my-10 text-base/8">
        Hopefully, you can use some of these tactics to ensure your
        business escapes the bureaucrats in Brussels.
      </p>
    `,
  },
  {
    type: "Featured",
    title: "Radiant raises $100M Series A from Tailwind Ventures",
    slug: "radiant-raises-100m-series-a-from-tailwind-ventures",
    date: "Thursday, August 22, 2024",
    description:
      "Radiant secures a monumental $100M in Series A funding led by Tailwind Ventures, aiming to redefine the hiring landscape with innovative, AI-driven solutions.",
    image:
      "https://cdn.sanity.io/images/ssqh4ksj/production/061f3af0f8bb6aacf048047a815eea40fe292e30-2016x1344.png?w=1170&h=780&auto=format",
    author: "Nolan Sheffield",
    authorImg:
      "https://cdn.sanity.io/images/ssqh4ksj/production/2ec246be46d86c5d72e227e416b8de35f45fcd83-3569x5354.jpg?rect=0,417,3569,3569&w=64&h=64&auto=format",
    category: ["Company"],
    content: String.raw`
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">
        Radiant has achieved a significant milestone by raising $100M
        in Series A funding, led by Tailwind Ventures. This
        substantial investment will enable Radiant to accelerate its
        mission of transforming the hiring landscape through
        innovative, AI-driven solutions. With this new capital,
        Radiant is well-positioned to expand its product offerings and
        reach a broader market, driving forward its vision of a more
        efficient and effective recruitment process.
      </p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">
        The funding will primarily be used to enhance Radiant's AI
        capabilities, focusing on developing more sophisticated
        algorithms that can better match candidates to job roles. This
        will not only improve the quality of hires for businesses, but
        also create a more streamlined and enjoyable experience for
        job seekers. By leveraging advanced data analytics and machine
        learning, Radiant aims to eliminate the inefficiencies and
        biases that plague traditional hiring processes.
      </p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">
        Tailwind Ventures' investment in Radiant is a testament to the
        growing importance of AI in the recruitment industry. As
        businesses increasingly seek out tech-driven solutions to
        optimize their operations, Radiant is poised to become a
        leader in the field. This funding round marks a pivotal moment
        in the company's journey, setting the stage for future growth
        and innovation.
      </p>`,
  },
  {
    type: "Featured",
    title: "Introducing Radiant AI - Your smart selling assistant",
    slug: "introducing-radiant-ai-your-smart-selling-assistant",
    date: "Monday, April 1, 2024",
    description:
      "Radiant AI introduces a suite of ground breaking, AI enriched tools designed to help you sell at the speed of light. ",
    image:
      "https://cdn.sanity.io/images/ssqh4ksj/production/6f478e8d65d15c369e7f0ecb9fd100cecb377611-2016x1344.png?w=1170&h=780&auto=format",
    author: "Celeste Vandermark",
    authorImg:
      "https://cdn.sanity.io/images/ssqh4ksj/production/091dfa4bca0cf5699523de10d477ed260bf04eca-4928x3264.jpg?rect=832,0,3264,3264&w=64&h=64&auto=format",
    category: ["Product", "Company"],
    content: String.raw`
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">
      One of the ultimate goals of every high-performing GTM team is
      to do less work while still smashing all of your targets.
      Unfortunately, we all have to deal with the vagaries of human
      interaction, which have traditionally made automation
      difficult.
      </p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">
        Sometimes a lead tries to dodge your cold outreach in a way
        you hadn't anticipated, forcing you to think on your feet.
        Other times, a procurement team might have an annoying
        question about how your product processes their data in a
        state-run Chinese data facility.
      </p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">
        These tasks are everywhere in our GTM processes and can kill
        the momentum in closing a deal and getting that commission
        check. Teams are always forced into a trade-off: they can opt
        for speed by using canned responses and potentially lose a
        deal, or they can waste their precious time writing up nuanced
        responses.
        <br />
        <br />
        Today, we’re excited to introduce a suite of features that
        unlock the cheat codes for closing deals:
        <strong class="font-semibold text-gray-950">
          our new Radiant AI assistants that can do your work for you.
        </strong>
        Whether you need to find out if a potential lead is lying
        about being on vacation or pester the product team to add a
        feature that you promised a big customer, our assistant has
        you covered.
      </p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">
        What's even better? Radiant AI is included in Growth and
        Enterprise plans at no extra cost*. Find out how Radiant AI
        can transform your processes.
        <a
          class="font-medium text-gray-950 underline decoration-gray-400 underline-offset-4 data-hover:decoration-gray-600"
          data-headlessui-state=""
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        >
          Start today
        </a>
        .<br />
      </p>
      <hr class="my-8 border-t border-gray-200"></hr>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">
        <em>
          *For the first month. After that, we charge $1 per request.
          Contact our sales team for bulk pricing discounts.
        </em>
      </p>`,
  },
  {
    type: "Normal",
    title: "What homelessness can teach us about B2B sales",
    slug: "what-homelessness-can-teach-us-about-b2b-sales",
    date: "Tuesday, September 3, 2024",
    description:
      "Most people don't feel comfortable creating content that draws comparisons between desperate poverty and business practices but we think there's a silver lining to every humanitarian crisis. ",
    image:
      "https://cdn.sanity.io/images/ssqh4ksj/production/947ece4fbeb35115927e85f3a1170a60ad839ce9-2000x1334.webp?w=2000&auto=format",
    author: "Marcus Eldridge",
    authorImg:
      "https://cdn.sanity.io/images/ssqh4ksj/production/cd1ee59e9e4c2ff30c303de6c7d1066c057419d5-7952x5304.jpg?rect=2370,0,5304,5304&w=64&h=64&auto=format",
    category: ["Insights"],
    content: String.raw`
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Who has the time to write out an actual blog post for all of these topics? I mean, we could use AI to do it, but have you ever tried to get it to be funny? It's terrible. Half the time it just refuses because it's technically illegal to write a detailed guide about acquiring sensitive personal information on strangers. So, instead, this post is about demonstrating all the styles you can use in the blog post template.</p>
      <h2 class="mt-12 mb-10 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">This is a heading</h2>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">It's a big heading too. Not too big, mind you. Some would say it's just the right size at <span aria-hidden="true">\`</span><code class="text-[15px]/8 font-semibold text-gray-950">24px</code><span aria-hidden="true">\`</span>. Did you notice that you can use inline code blocks in here? That's pretty neat. You can also make text <strong class="font-semibold text-gray-950">bold</strong> and <em>italic</em>, which is pretty standard stuff, to be honest. We've also got this clean and minimal link style, with an ever-so-subtle hover effect. Go ahead, try it.</p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Looks like an inline image is about to come up, those are pretty useful in a blog post:</p>
      <img alt="" class="w-full rounded-2xl" src="https://cdn.sanity.io/images/ssqh4ksj/production/947ece4fbeb35115927e85f3a1170a60ad839ce9-2000x1334.webp?w=2000&amp;auto=format">
      <h3 class="mt-12 mb-10 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">This is a subheading</h3>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Which means it's a bit smaller than the big heading. Notice the perfect harmony of the typography scale here—it's incredibly pleasing. There's a lot of line-height on this body copy, which makes it super easy to read—in fact, you can just skim the whole thing. There's also a lot of spacing between the paragraphs, which gives the whole post a super light and airy feeling.</p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Sometimes you'll need to quote something important someone said. You can use a block-quote for that:</p>
      <blockquote class="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0">This is a block-quote. You can use it to quote other people or to just make something stand out from the rest of the post. It's visually separated from the rest of the article because it's indented and has a lovely little border on the left. If you want, you can make this <em>italic</em> too.</blockquote>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Occasionally, you'll need to break some information down in list form, and we've got you covered there. Here are 4 reasons lists are cool, according to AI:</p>
      <ol class="list-decimal pl-4 text-base/8 marker:text-gray-400"><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Organization</strong>: Lists help to organize information clearly, making it easier to read, understand, and remember.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Prioritization</strong>: They allow users to easily prioritize items, which can be crucial for productivity.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Clarity</strong>: Lists break down complex information into manageable, discrete items, which can simplify communication.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Motivation</strong>: Completing items on a list can provide a psychological boost. The act of checking things off as done is satisfying.</li></ol>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">It can be a bit weird if an article just sort of ends, so we added separators. That way you can add your conclusion right after.</p>
      <hr class="my-8 border-t border-gray-200">
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">This is much less weird. I can just write a couple of lines here that sum everything up, and then the article can just sort of stop. No one reads down here anyway; it just needs to visually look like something is happening.</p>
      `,
  },
  {
    type: "Normal",
    title: "Cross-border data transfers: A global adventure",
    slug: "cross-border-data-transfers-a-global-adventure",
    date: "Friday, February 16, 2024",
    description:
      "Think of data as a world traveler with an all-access pass. Why limit its journey? Our data enjoys first-class trips to servers around the globe, collecting fascinating insights and exotic malware along the way.",
    image:
      "https://cdn.sanity.io/images/ssqh4ksj/production/947ece4fbeb35115927e85f3a1170a60ad839ce9-2000x1334.webp?w=2000&auto=format",
    author: "Nolan Sheffield",
    authorImg:
      "https://cdn.sanity.io/images/ssqh4ksj/production/2ec246be46d86c5d72e227e416b8de35f45fcd83-3569x5354.jpg?rect=0,417,3569,3569&w=64&h=64&auto=format",
    category: ["Knowledge"],
    content: String.raw`
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Who has the time to write out an actual blog post for all of these topics? I mean, we could use AI to do it, but have you ever tried to get it to be funny? It's terrible. Half the time it just refuses because it's technically illegal to write a detailed guide about acquiring sensitive personal information on strangers. So, instead, this post is about demonstrating all the styles you can use in the blog post template.</p>
      <h2 class="mt-12 mb-10 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">This is a heading</h2>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">It's a big heading too. Not too big, mind you. Some would say it's just the right size at <span aria-hidden="true">\`</span><code class="text-[15px]/8 font-semibold text-gray-950">24px</code><span aria-hidden="true">\`</span>. Did you notice that you can use inline code blocks in here? That's pretty neat. You can also make text <strong class="font-semibold text-gray-950">bold</strong> and <em>italic</em>, which is pretty standard stuff, to be honest. We've also got this clean and minimal link style, with an ever-so-subtle hover effect. Go ahead, try it.</p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Looks like an inline image is about to come up, those are pretty useful in a blog post:</p>
      <img alt="" class="w-full rounded-2xl" src="https://cdn.sanity.io/images/ssqh4ksj/production/947ece4fbeb35115927e85f3a1170a60ad839ce9-2000x1334.webp?w=2000&auto=format">
      <h3 class="mt-12 mb-10 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">This is a subheading</h3>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Which means it's a bit smaller than the big heading. Notice the perfect harmony of the typography scale here—it's incredibly pleasing. There's a lot of line-height on this body copy, which makes it super easy to read—in fact, you can just skim the whole thing. There's also a lot of spacing between the paragraphs, which gives the whole post a super light and airy feeling.</p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Sometimes you'll need to quote something important someone said. You can use a block-quote for that:</p>
      <blockquote class="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0">This is a block-quote. You can use it to quote other people or to just make something stand out from the rest of the post. It's visually separated from the rest of the article because it's indented and has a lovely little border on the left. If you want, you can make this <em>italic</em> too.</blockquote>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Occasionally, you'll need to break some information down in list form, and we've got you covered there. Here are 4 reasons lists are cool, according to AI:</p>
      <ol class="list-decimal pl-4 text-base/8 marker:text-gray-400"><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Organization</strong>: Lists help to organize information clearly, making it easier to read, understand, and remember.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Prioritization</strong>: They allow users to easily prioritize items, which can be crucial for productivity.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Clarity</strong>: Lists break down complex information into manageable, discrete items, which can simplify communication.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Motivation</strong>: Completing items on a list can provide a psychological boost. The act of checking things off as done is satisfying.</li></ol>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">It can be a bit weird if an article just sort of ends, so we added separators. That way you can add your conclusion right after.</p>
      <hr class="my-8 border-t border-gray-200">
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">This is much less weird. I can just write a couple of lines here that sum everything up, and then the article can just sort of stop. No one reads down here anyway; it just needs to visually look like something is happening.</p>
      `,
  },
  {
    type: "Normal",
    title: "Data minimization is for minimalists",
    slug: "data-minimization-is-for-minimalists",
    date: "Thursday, November 23, 2023",
    description:
      "Why collect only what you need when you can have it all? Our data hoarding approach ensures we're always prepared for any possible scenario.",
    image:
      "https://cdn.sanity.io/images/ssqh4ksj/production/947ece4fbeb35115927e85f3a1170a60ad839ce9-2000x1334.webp?w=2000&auto=format",
    author: "Marcus Eldridge",
    authorImg:
      "https://cdn.sanity.io/images/ssqh4ksj/production/cd1ee59e9e4c2ff30c303de6c7d1066c057419d5-7952x5304.jpg?rect=2370,0,5304,5304&w=64&h=64&auto=format",
    category: ["Knowledge"],
    content: String.raw`
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Who has the time to write out an actual blog post for all of these topics? I mean, we could use AI to do it, but have you ever tried to get it to be funny? It's terrible. Half the time it just refuses because it's technically illegal to write a detailed guide about acquiring sensitive personal information on strangers. So, instead, this post is about demonstrating all the styles you can use in the blog post template.</p>
      <h2 class="mt-12 mb-10 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">This is a heading</h2>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">It's a big heading too. Not too big, mind you. Some would say it's just the right size at <span aria-hidden="true">\`</span><code class="text-[15px]/8 font-semibold text-gray-950">24px</code><span aria-hidden="true">\`</span>. Did you notice that you can use inline code blocks in here? That's pretty neat. You can also make text <strong class="font-semibold text-gray-950">bold</strong> and <em>italic</em>, which is pretty standard stuff, to be honest. We've also got this clean and minimal link style, with an ever-so-subtle hover effect. Go ahead, try it.</p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Looks like an inline image is about to come up, those are pretty useful in a blog post:</p>
      <img alt="" class="w-full rounded-2xl" src="https://cdn.sanity.io/images/ssqh4ksj/production/947ece4fbeb35115927e85f3a1170a60ad839ce9-2000x1334.webp?w=2000&auto=format">
      <h3 class="mt-12 mb-10 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">This is a subheading</h3>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Which means it's a bit smaller than the big heading. Notice the perfect harmony of the typography scale here—it's incredibly pleasing. There's a lot of line-height on this body copy, which makes it super easy to read—in fact, you can just skim the whole thing. There's also a lot of spacing between the paragraphs, which gives the whole post a super light and airy feeling.</p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Sometimes you'll need to quote something important someone said. You can use a block-quote for that:</p>
      <blockquote class="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0">This is a block-quote. You can use it to quote other people or to just make something stand out from the rest of the post. It's visually separated from the rest of the article because it's indented and has a lovely little border on the left. If you want, you can make this <em>italic</em> too.</blockquote>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Occasionally, you'll need to break some information down in list form, and we've got you covered there. Here are 4 reasons lists are cool, according to AI:</p>
      <ol class="list-decimal pl-4 text-base/8 marker:text-gray-400"><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Organization</strong>: Lists help to organize information clearly, making it easier to read, understand, and remember.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Prioritization</strong>: They allow users to easily prioritize items, which can be crucial for productivity.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Clarity</strong>: Lists break down complex information into manageable, discrete items, which can simplify communication.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Motivation</strong>: Completing items on a list can provide a psychological boost. The act of checking things off as done is satisfying.</li></ol>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">It can be a bit weird if an article just sort of ends, so we added separators. That way you can add your conclusion right after.</p>
      <hr class="my-8 border-t border-gray-200">
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">This is much less weird. I can just write a couple of lines here that sum everything up, and then the article can just sort of stop. No one reads down here anyway; it just needs to visually look like something is happening.</p>
      `,
  },
  {
    type: "Normal",
    title: "The ultimate guide to writing emails no one will read",
    slug: "the-ultimate-guide-to-writing-emails-no-one-will-read",
    date: "Wednesday, October 25, 2023",
    description:
      "We've perfected the art of creating messages so bland, so jargon-filled, that they're guaranteed to be ignored or sent straight to spam. Learn how to write subject lines that scream 'Delete me!'",
    image:
      "https://cdn.sanity.io/images/ssqh4ksj/production/947ece4fbeb35115927e85f3a1170a60ad839ce9-2000x1334.webp?w=2000&auto=format",
    author: "Celeste Vandermark",
    authorImg:
      "https://cdn.sanity.io/images/ssqh4ksj/production/091dfa4bca0cf5699523de10d477ed260bf04eca-4928x3264.jpg?rect=832,0,3264,3264&w=64&h=64&auto=format",
    category: ["Insights", "Knowledge"],
    content: String.raw`
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Who has the time to write out an actual blog post for all of these topics? I mean, we could use AI to do it, but have you ever tried to get it to be funny? It's terrible. Half the time it just refuses because it's technically illegal to write a detailed guide about acquiring sensitive personal information on strangers. So, instead, this post is about demonstrating all the styles you can use in the blog post template.</p>
      <h2 class="mt-12 mb-10 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">This is a heading</h2>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">It's a big heading too. Not too big, mind you. Some would say it's just the right size at <span aria-hidden="true">\`</span><code class="text-[15px]/8 font-semibold text-gray-950">24px</code><span aria-hidden="true">\`</span>. Did you notice that you can use inline code blocks in here? That's pretty neat. You can also make text <strong class="font-semibold text-gray-950">bold</strong> and <em>italic</em>, which is pretty standard stuff, to be honest. We've also got this clean and minimal link style, with an ever-so-subtle hover effect. Go ahead, try it.</p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Looks like an inline image is about to come up, those are pretty useful in a blog post:</p>
      <img alt="" class="w-full rounded-2xl" src="https://cdn.sanity.io/images/ssqh4ksj/production/947ece4fbeb35115927e85f3a1170a60ad839ce9-2000x1334.webp?w=2000&auto=format">
      <h3 class="mt-12 mb-10 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">This is a subheading</h3>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Which means it's a bit smaller than the big heading. Notice the perfect harmony of the typography scale here—it's incredibly pleasing. There's a lot of line-height on this body copy, which makes it super easy to read—in fact, you can just skim the whole thing. There's also a lot of spacing between the paragraphs, which gives the whole post a super light and airy feeling.</p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Sometimes you'll need to quote something important someone said. You can use a block-quote for that:</p>
      <blockquote class="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0">This is a block-quote. You can use it to quote other people or to just make something stand out from the rest of the post. It's visually separated from the rest of the article because it's indented and has a lovely little border on the left. If you want, you can make this <em>italic</em> too.</blockquote>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Occasionally, you'll need to break some information down in list form, and we've got you covered there. Here are 4 reasons lists are cool, according to AI:</p>
      <ol class="list-decimal pl-4 text-base/8 marker:text-gray-400"><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Organization</strong>: Lists help to organize information clearly, making it easier to read, understand, and remember.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Prioritization</strong>: They allow users to easily prioritize items, which can be crucial for productivity.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Clarity</strong>: Lists break down complex information into manageable, discrete items, which can simplify communication.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Motivation</strong>: Completing items on a list can provide a psychological boost. The act of checking things off as done is satisfying.</li></ol>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">It can be a bit weird if an article just sort of ends, so we added separators. That way you can add your conclusion right after.</p>
      <hr class="my-8 border-t border-gray-200">
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">This is much less weird. I can just write a couple of lines here that sum everything up, and then the article can just sort of stop. No one reads down here anyway; it just needs to visually look like something is happening.</p>
      `,
  },
  {
    type: "Normal",
    title:
      "Why cold calling is dead: And other ways to avoid human interaction",
    slug: "why-cold-calling-is-dead-and-other-ways-to-avoid-human-interaction",
    date: "Sunday, October 1, 2023",
    description:
      "In this post, we'll explore the art of avoiding real conversations while still pretending to be productive. Spoiler alert: It involves a lot of email campaigns and praying for LinkedIn engagement.",
    image:
      "https://cdn.sanity.io/images/ssqh4ksj/production/947ece4fbeb35115927e85f3a1170a60ad839ce9-2000x1334.webp?w=2000&auto=format",
    author: "Nolan Sheffield",
    authorImg:
      "https://cdn.sanity.io/images/ssqh4ksj/production/2ec246be46d86c5d72e227e416b8de35f45fcd83-3569x5354.jpg?rect=0,417,3569,3569&w=64&h=64&auto=format",
    category: ["Knowledge", "Company"],
    content: String.raw`
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Who has the time to write out an actual blog post for all of these topics? I mean, we could use AI to do it, but have you ever tried to get it to be funny? It's terrible. Half the time it just refuses because it's technically illegal to write a detailed guide about acquiring sensitive personal information on strangers. So, instead, this post is about demonstrating all the styles you can use in the blog post template.</p>
      <h2 class="mt-12 mb-10 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">This is a heading</h2>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">It's a big heading too. Not too big, mind you. Some would say it's just the right size at <span aria-hidden="true">\`</span><code class="text-[15px]/8 font-semibold text-gray-950">24px</code><span aria-hidden="true">\`</span>. Did you notice that you can use inline code blocks in here? That's pretty neat. You can also make text <strong class="font-semibold text-gray-950">bold</strong> and <em>italic</em>, which is pretty standard stuff, to be honest. We've also got this clean and minimal link style, with an ever-so-subtle hover effect. Go ahead, try it.</p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Looks like an inline image is about to come up, those are pretty useful in a blog post:</p>
      <img alt="" class="w-full rounded-2xl" src="https://cdn.sanity.io/images/ssqh4ksj/production/947ece4fbeb35115927e85f3a1170a60ad839ce9-2000x1334.webp?w=2000&auto=format">
      <h3 class="mt-12 mb-10 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">This is a subheading</h3>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Which means it's a bit smaller than the big heading. Notice the perfect harmony of the typography scale here—it's incredibly pleasing. There's a lot of line-height on this body copy, which makes it super easy to read—in fact, you can just skim the whole thing. There's also a lot of spacing between the paragraphs, which gives the whole post a super light and airy feeling.</p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Sometimes you'll need to quote something important someone said. You can use a block-quote for that:</p>
      <blockquote class="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0">This is a block-quote. You can use it to quote other people or to just make something stand out from the rest of the post. It's visually separated from the rest of the article because it's indented and has a lovely little border on the left. If you want, you can make this <em>italic</em> too.</blockquote>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Occasionally, you'll need to break some information down in list form, and we've got you covered there. Here are 4 reasons lists are cool, according to AI:</p>
      <ol class="list-decimal pl-4 text-base/8 marker:text-gray-400"><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Organization</strong>: Lists help to organize information clearly, making it easier to read, understand, and remember.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Prioritization</strong>: They allow users to easily prioritize items, which can be crucial for productivity.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Clarity</strong>: Lists break down complex information into manageable, discrete items, which can simplify communication.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Motivation</strong>: Completing items on a list can provide a psychological boost. The act of checking things off as done is satisfying.</li></ol>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">It can be a bit weird if an article just sort of ends, so we added separators. That way you can add your conclusion right after.</p>
      <hr class="my-8 border-t border-gray-200">
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">This is much less weird. I can just write a couple of lines here that sum everything up, and then the article can just sort of stop. No one reads down here anyway; it just needs to visually look like something is happening.</p>
      `,
  },
  {
    type: "Normal",
    title: "Leveraging AI in sales: Do less, earn more",
    slug: "leveraging-ai-in-sales-do-less-earn-more",
    date: "Friday, September 29, 2023",
    description:
      "In this groundbreaking guide, we'll show you how to outsource your empathy to machines. After all, nothing says \"I care about your business needs\" like a chatbot that can calculate the statistical probability of your prospect's dog's name.",
    image:
      "https://cdn.sanity.io/images/ssqh4ksj/production/947ece4fbeb35115927e85f3a1170a60ad839ce9-2000x1334.webp?w=2000&auto=format",
    author: "Celeste Vandermark",
    authorImg:
      "https://cdn.sanity.io/images/ssqh4ksj/production/091dfa4bca0cf5699523de10d477ed260bf04eca-4928x3264.jpg?rect=832,0,3264,3264&w=64&h=64&auto=format",
    category: ["Insights", "Product"],
    content: String.raw`
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Who has the time to write out an actual blog post for all of these topics? I mean, we could use AI to do it, but have you ever tried to get it to be funny? It's terrible. Half the time it just refuses because it's technically illegal to write a detailed guide about acquiring sensitive personal information on strangers. So, instead, this post is about demonstrating all the styles you can use in the blog post template.</p>
      <h2 class="mt-12 mb-10 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">This is a heading</h2>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">It's a big heading too. Not too big, mind you. Some would say it's just the right size at <span aria-hidden="true">\`</span><code class="text-[15px]/8 font-semibold text-gray-950">24px</code><span aria-hidden="true">\`</span>. Did you notice that you can use inline code blocks in here? That's pretty neat. You can also make text <strong class="font-semibold text-gray-950">bold</strong> and <em>italic</em>, which is pretty standard stuff, to be honest. We've also got this clean and minimal link style, with an ever-so-subtle hover effect. Go ahead, try it.</p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Looks like an inline image is about to come up, those are pretty useful in a blog post:</p>
      <img alt="" class="w-full rounded-2xl" src="https://cdn.sanity.io/images/ssqh4ksj/production/947ece4fbeb35115927e85f3a1170a60ad839ce9-2000x1334.webp?w=2000&auto=format">
      <h3 class="mt-12 mb-10 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">This is a subheading</h3>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Which means it's a bit smaller than the big heading. Notice the perfect harmony of the typography scale here—it's incredibly pleasing. There's a lot of line-height on this body copy, which makes it super easy to read—in fact, you can just skim the whole thing. There's also a lot of spacing between the paragraphs, which gives the whole post a super light and airy feeling.</p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Sometimes you'll need to quote something important someone said. You can use a block-quote for that:</p>
      <blockquote class="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0">This is a block-quote. You can use it to quote other people or to just make something stand out from the rest of the post. It's visually separated from the rest of the article because it's indented and has a lovely little border on the left. If you want, you can make this <em>italic</em> too.</blockquote>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Occasionally, you'll need to break some information down in list form, and we've got you covered there. Here are 4 reasons lists are cool, according to AI:</p>
      <ol class="list-decimal pl-4 text-base/8 marker:text-gray-400"><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Organization</strong>: Lists help to organize information clearly, making it easier to read, understand, and remember.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Prioritization</strong>: They allow users to easily prioritize items, which can be crucial for productivity.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Clarity</strong>: Lists break down complex information into manageable, discrete items, which can simplify communication.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Motivation</strong>: Completing items on a list can provide a psychological boost. The act of checking things off as done is satisfying.</li></ol>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">It can be a bit weird if an article just sort of ends, so we added separators. That way you can add your conclusion right after.</p>
      <hr class="my-8 border-t border-gray-200">
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">This is much less weird. I can just write a couple of lines here that sum everything up, and then the article can just sort of stop. No one reads down here anyway; it just needs to visually look like something is happening.</p>
      `,
  },
  {
    type: "Normal",
    title: "Why your sales funnel looks more like a pretzel",
    slug: "why-your-sales-funnel-looks-more-like-a-pretzel",
    date: "Thursday, August 24, 2023",
    description:
      "In today's dynamic market, your sales process can resemble an Escher painting but is this a bad idea? We explore the idea that chaos in B2B sales is a feature, not a bug. ",
    image:
      "https://cdn.sanity.io/images/ssqh4ksj/production/947ece4fbeb35115927e85f3a1170a60ad839ce9-2000x1334.webp?w=2000&auto=format",
    author: "Nolan Sheffield",
    authorImg:
      "https://cdn.sanity.io/images/ssqh4ksj/production/2ec246be46d86c5d72e227e416b8de35f45fcd83-3569x5354.jpg?rect=0,417,3569,3569&w=64&h=64&auto=format",
    category: ["Insights", "Knowledge"],
    content: String.raw`
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Who has the time to write out an actual blog post for all of these topics? I mean, we could use AI to do it, but have you ever tried to get it to be funny? It's terrible. Half the time it just refuses because it's technically illegal to write a detailed guide about acquiring sensitive personal information on strangers. So, instead, this post is about demonstrating all the styles you can use in the blog post template.</p>
      <h2 class="mt-12 mb-10 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">This is a heading</h2>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">It's a big heading too. Not too big, mind you. Some would say it's just the right size at <span aria-hidden="true">\`</span><code class="text-[15px]/8 font-semibold text-gray-950">24px</code><span aria-hidden="true">\`</span>. Did you notice that you can use inline code blocks in here? That's pretty neat. You can also make text <strong class="font-semibold text-gray-950">bold</strong> and <em>italic</em>, which is pretty standard stuff, to be honest. We've also got this clean and minimal link style, with an ever-so-subtle hover effect. Go ahead, try it.</p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Looks like an inline image is about to come up, those are pretty useful in a blog post:</p>
      <img alt="" class="w-full rounded-2xl" src="https://cdn.sanity.io/images/ssqh4ksj/production/947ece4fbeb35115927e85f3a1170a60ad839ce9-2000x1334.webp?w=2000&auto=format">
      <h3 class="mt-12 mb-10 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">This is a subheading</h3>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Which means it's a bit smaller than the big heading. Notice the perfect harmony of the typography scale here—it's incredibly pleasing. There's a lot of line-height on this body copy, which makes it super easy to read—in fact, you can just skim the whole thing. There's also a lot of spacing between the paragraphs, which gives the whole post a super light and airy feeling.</p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Sometimes you'll need to quote something important someone said. You can use a block-quote for that:</p>
      <blockquote class="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0">This is a block-quote. You can use it to quote other people or to just make something stand out from the rest of the post. It's visually separated from the rest of the article because it's indented and has a lovely little border on the left. If you want, you can make this <em>italic</em> too.</blockquote>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Occasionally, you'll need to break some information down in list form, and we've got you covered there. Here are 4 reasons lists are cool, according to AI:</p>
      <ol class="list-decimal pl-4 text-base/8 marker:text-gray-400"><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Organization</strong>: Lists help to organize information clearly, making it easier to read, understand, and remember.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Prioritization</strong>: They allow users to easily prioritize items, which can be crucial for productivity.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Clarity</strong>: Lists break down complex information into manageable, discrete items, which can simplify communication.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Motivation</strong>: Completing items on a list can provide a psychological boost. The act of checking things off as done is satisfying.</li></ol>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">It can be a bit weird if an article just sort of ends, so we added separators. That way you can add your conclusion right after.</p>
      <hr class="my-8 border-t border-gray-200">
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">This is much less weird. I can just write a couple of lines here that sum everything up, and then the article can just sort of stop. No one reads down here anyway; it just needs to visually look like something is happening.</p>
      `,
  },
  {
    type: "Normal",
    title: "10 creative excuses for missing your sales targets",
    slug: "10-creative-excuses-for-missing-your-sales-targets",
    date: "Thursday, July 27, 2023",
    description:
      "Missed your quota again? We've compiled a list of excuses, perfectly crafted to make it look like you are just one month away from hitting a sales record and buy you enough time to get your CV ready. ",
    image:
      "https://cdn.sanity.io/images/ssqh4ksj/production/947ece4fbeb35115927e85f3a1170a60ad839ce9-2000x1334.webp?w=2000&auto=format",
    author: "Marcus Eldridge",
    authorImg:
      "https://cdn.sanity.io/images/ssqh4ksj/production/cd1ee59e9e4c2ff30c303de6c7d1066c057419d5-7952x5304.jpg?rect=2370,0,5304,5304&w=64&h=64&auto=format",
    category: [],
    content: String.raw`
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Who has the time to write out an actual blog post for all of these topics? I mean, we could use AI to do it, but have you ever tried to get it to be funny? It's terrible. Half the time it just refuses because it's technically illegal to write a detailed guide about acquiring sensitive personal information on strangers. So, instead, this post is about demonstrating all the styles you can use in the blog post template.</p>
      <h2 class="mt-12 mb-10 text-2xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">This is a heading</h2>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">It's a big heading too. Not too big, mind you. Some would say it's just the right size at <span aria-hidden="true">\`</span><code class="text-[15px]/8 font-semibold text-gray-950">24px</code><span aria-hidden="true">\`</span>. Did you notice that you can use inline code blocks in here? That's pretty neat. You can also make text <strong class="font-semibold text-gray-950">bold</strong> and <em>italic</em>, which is pretty standard stuff, to be honest. We've also got this clean and minimal link style, with an ever-so-subtle hover effect. Go ahead, try it.</p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Looks like an inline image is about to come up, those are pretty useful in a blog post:</p>
      <img alt="" class="w-full rounded-2xl" src="https://cdn.sanity.io/images/ssqh4ksj/production/947ece4fbeb35115927e85f3a1170a60ad839ce9-2000x1334.webp?w=2000&auto=format">
      <h3 class="mt-12 mb-10 text-xl/8 font-medium tracking-tight text-gray-950 first:mt-0 last:mb-0">This is a subheading</h3>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Which means it's a bit smaller than the big heading. Notice the perfect harmony of the typography scale here—it's incredibly pleasing. There's a lot of line-height on this body copy, which makes it super easy to read—in fact, you can just skim the whole thing. There's also a lot of spacing between the paragraphs, which gives the whole post a super light and airy feeling.</p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Sometimes you'll need to quote something important someone said. You can use a block-quote for that:</p>
      <blockquote class="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0">This is a block-quote. You can use it to quote other people or to just make something stand out from the rest of the post. It's visually separated from the rest of the article because it's indented and has a lovely little border on the left. If you want, you can make this <em>italic</em> too.</blockquote>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">Occasionally, you'll need to break some information down in list form, and we've got you covered there. Here are 4 reasons lists are cool, according to AI:</p>
      <ol class="list-decimal pl-4 text-base/8 marker:text-gray-400"><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Organization</strong>: Lists help to organize information clearly, making it easier to read, understand, and remember.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Prioritization</strong>: They allow users to easily prioritize items, which can be crucial for productivity.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Clarity</strong>: Lists break down complex information into manageable, discrete items, which can simplify communication.</li><li class="my-2 pl-2 has-[br]:mb-8"><strong class="font-semibold text-gray-950">Motivation</strong>: Completing items on a list can provide a psychological boost. The act of checking things off as done is satisfying.</li></ol>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0"></p>
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">It can be a bit weird if an article just sort of ends, so we added separators. That way you can add your conclusion right after.</p>
      <hr class="my-8 border-t border-gray-200">
      <p class="my-10 text-base/8 first:mt-0 last:mb-0">This is much less weird. I can just write a couple of lines here that sum everything up, and then the article can just sort of stop. No one reads down here anyway; it just needs to visually look like something is happening.</p>
      `,
  },
];



