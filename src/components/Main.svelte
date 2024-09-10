<script>
    import Step from "./Step.svelte";

    let steps = [
        { name: "Ceibal e-Market", icon: "fa-solid fa-cart-shopping", href: "https://github.com/nathandb7/emercado" },
        { name: "Expense Tracker", icon: "fa-solid fa-list-check", href: "https://github.com/nathandb7/control-gastos-react" },
        { name: "Real Estate Listings", icon: "fa-solid fa-house", href: "https://github.com/nathandb7/bienesraices-mvc" },
    ];

    let benefits = [
        {
            name: "An experienced professional in graphic design and web development",
            description:
                "With over 10 years of experience in graphic design and 5 years in web development, I have a strong track record of delivering high-quality projects. My ability to blend visual design with frontend and backend development enables me to provide comprehensive solutions within a team environment.",
        },
        {
            name: "Adaptable and a team player",
            description:
                " I’m accustomed to working in collaborative environments, quickly adapting to team dynamics and company processes. My focus on communication and problem-solving ensures that I can seamlessly integrate and contribute to the success of any project.",
        },
        {
            name: "Committed to quality and continuous improvement",
            description:
                "I’m dedicated to continuously improving my skills and staying up-to-date with the latest trends and technologies in web development. My commitment to quality drives me to optimize every project for performance, scalability, and maintainability, ensuring robust and efficient systems.",
        },
    ];
</script>

<main class="flex flex-col flex-1 p-4">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-violet-400">Developer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-violet-400">favorite tech</span> includes CSS,
                JavaScript (React.js or SvelteKit), TailwindCSS, Node.js + Express.js,
                MongoDB, PHP + MySQL
            </p>
            <a
                href="https://www.linkedin.com/in/nadbb/"
                target="_blank"
                class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative
                overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
            >
                <div
                    class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20
                    group-hover:translate-x-full z-0 duration-200 cursor-pointer"
                ></div>
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img
                src={"images/profile.png"}
                alt="Profile image"
                class="object-cover z-[2] max-h-[70vh]"
            />
        </div>
    </section>

    <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">
                A few of my creative endeavors.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curious to <span class="poppins text-violet-400">see</span> my work?
            </h3>
        </div>
        <!-- Nota para luego subir mi video a youtube -->
        <!-- <a
            href=""
            target="_blank"
            class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200"
        >
            <i class="fa-regular fa-circle-play" />
            <p>Watch the video</p>
        </a> -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p>
                    An e-commerce platform designed with <strong
                        class="text-violet-400"
                        >HTML, CSS, JS, Bootstrap!</strong
                    > The site provides a responsive and user-friendly interface, allowing users to browse, search, and purchase products efficiently. It incorporates modern web design techniques to ensure a seamless shopping experience.
                </p>
            </Step>
            <Step step={steps[1]}>
                <p>
                    A personal finance app built using <strong
                        class="text-violet-400">React, Vite,</strong
                    > and 
                    <strong class="text-violet-400">LocalStorage</strong
                    > It allows users to track and categorize their daily expenses, providing a simple and efficient way to manage their budget. Data is saved locally to ensure quick access and a smooth user experience.
                </p>
            </Step>
            <Step step={steps[2]}>
                <p>
                    A real estate website built using <strong class="text-violet-400"
                        >HTML, SASS, Gulp, PHP, MySQL,</strong
                    >and <strong
                    class="text-violet-400">MVC architecture.</strong
                > The platform features property listings, advanced search filters, and detailed property pages, providing an organized and efficient way for users to find and explore real estate opportunities.
                </p>
            </Step>
        </div>
    </section>

    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 SM:GAP-20 MD:GAP-24 relative"
    >
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3
        before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3
        after:h-1.5 after:bg-violet-700 py-4"
        >
            <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-violet-400">About</span> me.
            </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            I am . . .
        </p>
        <div class="flex flex-col gap-20 w-full mx-autp max-w[800px]">
            {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
            <h5 class=" text-2xl sm:text-3xl font-semibold text-center poppins">
                The <span class="text-violet-400">Complete</span> Package
            </h5>
            <div
                class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full"
            >
                <table class="bg-white text-slate-700 rounded text-center">
                    <thead class={"border-b border-solid border-slate-200  "}>
                        <tr class="">
                            <th />
                            <th class="whitespace-nowrap p-2 px-4"
                                >Candidate #1</th
                            >
                            <th class="whitespace-nowrap p-2 px-4"
                                >Candidate #2</th
                            >
                            <th class="whitespace-nowrap p-2 px-4"
                                >Candidate #3</th
                            >
                            <th
                                class="bg-violet-700 text-white whitespace-nowrap p-4 px-8"
                                >Me</th
                            >
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-solid border-slate-200">
                            <td
                                class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
                                >Dedication</td
                            >
                            <td
                                ><i
                                    class="fa-solid fa-xmark text-slate-500"
                                /></td
                            >
                            <td
                                ><i
                                    class="fa-solid fa-check text-slate-500"
                                /></td
                            >
                            <td
                                ><i
                                    class="fa-solid fa-xmark text-slate-500"
                                /></td
                            >
                            <td
                                ><i
                                    class="fa-solid fa-check text-green-500"
                                /></td
                            >
                        </tr>
                        <tr class="border-b border-solid border-slate-200">
                            <td
                                class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
                                >Critical Thought</td
                            >
                            <td
                                ><i
                                    class="fa-solid fa-xmark text-slate-500"
                                /></td
                            >
                            <td
                                ><i
                                    class="fa-solid fa-check text-slate-500"
                                /></td
                            >
                            <td
                                ><i
                                    class="fa-solid fa-check text-slate-500"
                                /></td
                            >
                            <td
                                ><i
                                    class="fa-solid fa-check text-green-500"
                                /></td
                            >
                        </tr>
                        <tr>
                            <td
                                class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
                                >Interpersonal Skills</td
                            >
                            <td
                                ><i
                                    class="fa-solid fa-check text-slate-500"
                                /></td
                            >
                            <td
                                ><i
                                    class="fa-solid fa-check text-slate-500"
                                /></td
                            >
                            <td
                                ><i
                                    class="fa-solid fa-xmark text-slate-500"
                                /></td
                            >
                            <td
                                ><i
                                    class="fa-solid fa-check text-green-500"
                                /></td
                            >
                        </tr>
                        <tr class="border-t border-solid border-slate-200">
                            <td
                                class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap"
                                >Progamming Ability</td
                            >
                            <td
                                ><i
                                    class="fa-solid fa-check text-slate-500"
                                /></td
                            >
                            <td
                                ><i
                                    class="fa-solid fa-xmark text-slate-500"
                                /></td
                            >
                            <td
                                ><i
                                    class="fa-solid fa-check text-slate-500"
                                /></td
                            >
                            <td
                                ><i
                                    class="fa-solid fa-check text-green-500"
                                /></td
                            >
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
                <p>Scroll to see more &rarr;</p>
            </div>
            <p class="mx-auto">So why not ivest?</p>
        </div>
    </section>
</main>
