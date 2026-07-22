import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import {
  ShieldCheck,
  MousePointerClick,
  Zap,
  Globe,
  ChevronDown,
  Home as HomeIcon,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const W = "max-w-screen-2xl mx-auto px-6 md:px-16";

const WHATSAPP_MSG = encodeURIComponent(
  "Hi! I'd like to book a Free Website Review.",
);
const WHATSAPP_LINK = `https://wa.me/5512981622637?text=${WHATSAPP_MSG}`;

export const metadata = {
  title: "Web Design | Torodan",
  description:
    "Modern, conversion-focused websites for professional service businesses. Book a free website review.",
};

export default function WebsiteReview() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-clr2 text-clr1 scroll-smooth">
      <Navbar />

      {/* HERO */}
      <section className="relative flex flex-col items-start justify-end 2xl:min-h-screen pb-24 pt-40 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(var(--clr1) 1px, transparent 1px), linear-gradient(90deg, var(--clr1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <span className="absolute top-40 right-6 md:right-16 text-[10px] tracking-[0.3em] uppercase text-clr1/70 font-medium hidden lg:flex">
          Professional Websites
        </span>

        <div className={`relative w-full ${W} lg:mt-28 2xl:mt-0`}>
          <p className="text-[11px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-8">
            Torodan — Modern Websites
          </p>
          <h1 className="text-5xl md:text-[5.5rem] font-extrabold leading-[1.02] tracking-[-0.03em] mb-6">
            Websites that help
            <br /> businesses{" "}
            <em className="not-italic text-clr3 relative inline-block">
              build trust
            </em>
            <br />
            and win more clients.
          </h1>
          <p className="max-w-xl text-clr1/70 text-lg leading-relaxed mb-12 font-light">
            We help professional businesses stand out online with modern design,
            exceptional user experience, and websites built to convert.
          </p>

          <div className="flex items-center gap-6">
            <a href={WHATSAPP_LINK} target="_blank">
              <Button
                size="lg"
                className="bg-clr3 hover:bg-clr1 text-clr2 transition-all duration-300 hover:scale-105 cursor-pointer tracking-[0.08em] font-medium px-10 py-6 rounded-full"
              >
                Let's Talk
              </Button>
            </a>
            <a
              href="#services"
              className="text-sm text-clr1/70 hover:text-clr1 transition-colors tracking-widest uppercase font-medium "
            >
              How We Work
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="lg:py-32 py-18 bg-clr1">
        <div className={W}>
          <div className="flex flex-col md:flex-row md:items-end justify-between lg:mb-20 mb-10 gap-6">
            <div>
              <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-4">
                WHAT MAKES A GREAT WEBSITE
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-clr2 leading-tight tracking-[-0.02em]">
                Every great website <br />
                should do four things.
              </h2>
            </div>

            <p className="text-clr2/60 max-w-sm text-sm leading-relaxed font-light">
              Every decision we make is focused on improving credibility, user
              experience, and conversions.
            </p>
          </div>

          <div className="grid gap-4 md:gap-px md:grid-cols-4 md:bg-clr2/10">
            {[
              {
                icon: ShieldCheck,
                title: "Build Trust",
                desc: "Professional design that reflects your expertise.",
                num: "01",
              },
              {
                icon: MousePointerClick,
                title: "Convert Visitors",
                desc: "Guide visitors to book an appointment or get in touch.",
                num: "02",
              },
              {
                icon: Zap,
                title: "Fast Performance",
                desc: "Optimized for speed on desktop and mobile.",
                num: "03",
              },
              {
                icon: Globe,
                title: "SEO Ready",
                desc: "Built with clean code and best practices.",
                num: "04",
              },
            ].map(({ icon: Icon, title, desc, num }, i) => (
              <div
                key={i}
                className="
            bg-clr1
            border border-clr2/10
            rounded-xl
            md:border-0
            md:rounded-none
            p-8 md:p-12
            flex flex-col gap-8
            group
            md:hover:bg-clr3
            transition-all duration-500
            cursor-default
          "
              >
                <div className="flex items-start justify-between">
                  <Icon className="w-8 h-8 text-clr3 md:group-hover:text-clr2 transition-colors duration-500" />

                  <span className="text-[10px] tracking-[0.3em] text-clr2/40 md:text-clr2/30 md:group-hover:text-clr2/60 font-medium transition-colors duration-500">
                    {num}
                  </span>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-clr2 leading-snug tracking-[-0.01em]">
                    {title}
                  </h4>

                  <p className="text-clr2/70 md:text-clr2/60 md:group-hover:text-clr2/80 leading-relaxed text-sm transition-colors duration-500">
                    {desc}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="w-16 md:w-8 h-px bg-clr3 md:group-hover:bg-clr2 md:group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEBSITE REVIEW */}
      <section id="review" className="py-32 bg-clr2 text-clr1">
        <div className={W}>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-start">
            {/* LEFT */}
            <div className="md:sticky top-28">
              <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-5">
                Free Website Review
              </p>

              <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] leading-tight mb-6">
                What we evaluate during your website review.
              </h2>

              <p className="text-clr1/65 leading-relaxed max-w-md">
                Every review focuses on the areas that have the biggest impact
                on how people perceive your business and whether they decide to
                contact you.
              </p>

              <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-clr1/10 px-5 py-3">
                <span className="w-2 h-2 rounded-full bg-clr3" />
                <span className="text-sm text-clr1/70">
                  Free · 30 minutes · No obligation
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-5">
              {[
                {
                  number: "01",
                  title: "First Impression",
                  desc: "Does your website immediately communicate professionalism and build trust?",
                },
                {
                  number: "02",
                  title: "Mobile Experience",
                  desc: "We review usability across phones and tablets, where most visitors arrive.",
                },
                {
                  number: "03",
                  title: "Performance",
                  desc: "Loading speed, responsiveness and overall browsing experience.",
                },
                {
                  number: "04",
                  title: "User Journey",
                  desc: "Is it clear how someone books an appointment or contacts your business?",
                },
                {
                  number: "05",
                  title: "Trust Signals",
                  desc: "Reviews, testimonials, credentials and other elements that increase credibility.",
                },
                {
                  number: "06",
                  title: "SEO Foundations",
                  desc: "Technical fundamentals that help potential clients discover your business online.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="group border border-clr1/10 rounded-3xl p-8 transition-all duration-300 hover:border-clr3 hover:bg-clr1/5"
                >
                  <div className="flex gap-6">
                    <span className="text-clr3 text-sm tracking-[0.25em] font-semibold pt-1">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        {item.title}
                      </h3>

                      <p className="text-clr1/65 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 bg-clr1">
        <div
          className={`${W} grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-start`}
        >
          {/* LEFT */}
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-5">
              About Torodan
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-[-0.02em] mb-8 text-clr2">
              A personal approach to modern web design.
            </h2>

            <div className="space-y-6 text-clr2/70 leading-relaxed">
              <p>
                Hi, I'm Pedro, a web designer and frontend developer passionate
                about creating websites that help businesses build credibility
                and grow online.
              </p>

              <p>
                Rather than relying on generic templates, every project is
                designed with your business goals, audience, and user experience
                in mind.
              </p>

              <p>
                My goal is simple: create websites that not only look modern,
                but also make it easier for people to trust your business and
                take action.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-20 bg-clr3" />
              <span className="text-sm text-clr2/60">
                Working with businesses worldwide
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid md:grid-cols-2 gap-5 text-clr2">
            {[
              {
                title: "Custom Design",
                desc: "Every website is designed specifically for your business instead of relying on generic templates.",
              },
              {
                title: "Performance First",
                desc: "Fast loading times, responsive layouts, and clean development from the ground up.",
              },
              {
                title: "Conversion Focus",
                desc: "Every page is structured to guide visitors toward meaningful actions and new enquiries.",
              },
              {
                title: "Direct Collaboration",
                desc: "You'll work directly with the person designing and developing your website from start to finish.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group border border-clr2/10 rounded-3xl p-8 transition-all duration-300 hover:border-clr3 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

                <p className=" leading-relaxed text-sm text-clr2/60">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-28 bg-clr2">
        <div className={W}>
          <div className="mb-12">
            <p className="text-[10px] tracking-[0.35em] uppercase text-clr3 font-semibold mb-4">
              FAQ
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-clr1 leading-tight tracking-[-0.02em]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="border-t border-clr2/15">
            {[
              {
                q: "Can you redesign my existing website?",
                a: "Absolutely. Most of my projects involve redesigning existing websites, improving their design, performance, and usability while preserving what already works well.",
              },
              {
                q: "What makes your approach different?",
                a: "I don't believe in one-size-fits-all websites. Every project starts by understanding your business, your audience, and your goals. The result is a custom website designed to build trust, improve user experience, and support long-term growth.",
              },
              {
                q: "Will I work directly with you?",
                a: "Yes. From our first conversation to the final launch, you'll work directly with me. There are no account managers or intermediaries—just clear communication and a collaborative process.",
              },
              {
                q: "What happens during the free website review?",
                a: "In a 30-minute call, we'll review your website together and identify opportunities to improve design, user experience, performance, and conversion. You'll leave with practical recommendations you can apply, whether or not we work together.",
              },
              {
                q: "Is there any obligation after the review?",
                a: "None at all. The review is intended to provide valuable insights. If you decide you'd like help implementing those improvements, we can discuss the next steps—but the decision is entirely yours.",
              },
              {
                q: "Do you work with businesses outside Brazil?",
                a: "Yes. I work remotely with clients around the world and communicate in English throughout the entire project. Distance isn't a barrier to creating a successful website together.",
              },
            ].map(({ q, a }, i) => (
              <details key={i} className="group border-b border-clr1/15 py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-clr1/85 font-medium text-base md:text-lg tracking-[-0.01em] pr-6">
                    {q}
                  </span>
                  <ChevronDown className="w-5 h-5 text-clr3 shrink-0 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="text-clr1/70 text-[15px] leading-relaxed font-light mt-4 max-w-2xl">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative lg:py-32 py-18 bg-clr3 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(var(--clr2) 1px, transparent 1px), linear-gradient(90deg, var(--clr2) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className={`relative ${W}`}>
          <p className="text-[10px] tracking-[0.35em] uppercase text-clr2/60 font-semibold mb-6">
            LET'S START
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-clr2 leading-[1.05] tracking-[-0.03em] mb-2">
            Book your free <br />
            website review.
          </h2>
          <p className="text-clr2/70 text-lg my-6 font-light leading-relaxed max-w-xl">
            Your website could be working harder for your business.
          </p>
          <a href={WHATSAPP_LINK} target="_blank">
            <Button
              size="lg"
              className="bg-clr2 text-clr3 hover:bg-clr1 hover:text-clr2 transition-all duration-300 hover:scale-105 px-10 py-6 font-semibold cursor-pointer tracking-[0.08em] rounded-full"
            >
              Book a Free Website Review
              <FaWhatsapp className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
