import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowRight, ArrowUpRight, Download } from 'lucide-react';
import type { IconType } from 'react-icons';
import {
    SiBlender,
    SiDocker,
    SiFlutter,
    SiGit,
    SiGithub,
    SiVercel,
    SiGitlab,
    SiGodotengine,
    SiGooglecloud,
    SiGooglegemini,
    SiInfluxdb,
    SiJest,
    SiKubernetes,
    SiLinux,
    SiMeta,
    SiMongodb,
    SiMysql,
    SiNeo4J,
    SiNestjs,
    SiNextdotjs,
    SiNginx,
    SiNodedotjs,
    SiOpenjdk,
    SiPostgresql,
    SiPython,
    SiReact,
    SiScikitlearn,
    SiStrapi,
    SiTypescript,
    SiUnity,
    SiDotnet,
    SiCamunda,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

import ContactDialog from './components/ContactDialog';
import Develop from './components/Develop';

// A tool shown with its real icon. `color` is the brand colour; omit it for
// brands whose mark is black so it follows the text colour in both themes.
type Tool = { name: string; icon?: IconType; color?: string };

const T = {
    react: { name: 'React', icon: SiReact, color: '#149eca' },
    next: { name: 'Next.js', icon: SiNextdotjs },
    ts: { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
    flutter: { name: 'Flutter', icon: SiFlutter, color: '#0468d7' },
    node: { name: 'Node.js', icon: SiNodedotjs, color: '#5fa04e' },
    nest: { name: 'Nest.js', icon: SiNestjs, color: '#e0234e' },
    python: { name: 'Python', icon: SiPython, color: '#3776ab' },
    java: { name: 'Java', icon: SiOpenjdk },
    csharp: { name: 'C#', icon: SiDotnet, color: '#512bd4' },
    strapi: { name: 'Strapi', icon: SiStrapi, color: '#4945ff' },
    mysql: { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
    postgres: { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1' },
    mongo: { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
    influx: { name: 'InfluxDB', icon: SiInfluxdb, color: '#22adf6' },
    neo4j: { name: 'Neo4j', icon: SiNeo4J, color: '#4581c3' },
    git: { name: 'Git', icon: SiGit, color: '#f05032' },
    docker: { name: 'Docker', icon: SiDocker, color: '#2496ed' },
    k8s: { name: 'Kubernetes', icon: SiKubernetes, color: '#326ce5' },
    gitlab: { name: 'GitLab CI/CD', icon: SiGitlab, color: '#fc6d26' },
    github: { name: 'GitHub', icon: SiGithub },
    vercel: { name: 'Vercel', icon: SiVercel },
    nginx: { name: 'Nginx', icon: SiNginx, color: '#009639' },
    linux: { name: 'Linux', icon: SiLinux },
    jest: { name: 'Jest', icon: SiJest, color: '#c21325' },
    azure: { name: 'Azure IoT Hub', icon: VscAzure, color: '#0078d4' },
    unity: { name: 'Unity', icon: SiUnity },
    blender: { name: 'Blender', icon: SiBlender, color: '#e87d0d' },
    godot: { name: 'Godot', icon: SiGodotengine, color: '#478cbf' },
    quest: { name: 'Meta Quest', icon: SiMeta, color: '#0467df' },
    gcloud: { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285f4' },
    gemini: { name: 'Gemini', icon: SiGooglegemini, color: '#8e75b2' },
    sklearn: { name: 'scikit-learn', icon: SiScikitlearn, color: '#f7931e' },
    bpmn: { name: 'BPMN', icon: SiCamunda, color: '#fc5d0d' },
} satisfies Record<string, Tool>;

function ToolIcon({ tool, size = 16 }: { tool: Tool; size?: number }) {
    if (!tool.icon) return null;
    const Icon = tool.icon;
    return (
        <Icon
            size={size}
            aria-hidden
            style={tool.color ? { color: tool.color } : undefined}
            className="shrink-0"
        />
    );
}

function ToolChips({ tools }: { tools: Tool[] }) {
    return (
        <ul className="flex flex-wrap gap-1.5">
            {tools.map((tool) => (
                <li
                    key={tool.name}
                    className="inline-flex items-center gap-1.5 rounded-full bg-bg px-2.5 py-1 text-[0.8125rem] font-medium ring-1 ring-line"
                >
                    <ToolIcon tool={tool} size={14} />
                    {tool.name}
                </li>
            ))}
        </ul>
    );
}

export default function Home() {
    const t = useTranslations('HomePage');

    const services: { key: string; tools: Tool[] }[] = [
        { key: 'design', tools: [T.bpmn, T.git] },
        { key: 'build', tools: [T.react, T.next, T.nest, T.flutter] },
        { key: 'xr', tools: [T.unity, T.blender, T.quest] },
        { key: 'ai', tools: [T.python, T.gemini, T.godot, T.gcloud] },
        {
            key: 'ops',
            tools: [T.docker, T.k8s, T.gitlab, T.github, T.vercel, T.nginx],
        },
        { key: 'docs', tools: [] },
    ];

    const featured: {
        key: 'secai' | 'tandem' | 'crai';
        tools: Tool[];
        links?: { label: string; href: string }[];
        visual: React.ReactNode;
    }[] = [
        {
            key: 'secai',
            tools: [T.nest, T.docker, T.k8s, T.postgres, T.influx, T.azure],
            links: [
                { label: 'SECAI', href: 'https://www.secai-energy.de/' },
                {
                    label: 'BMWE',
                    href: 'https://www.bmwk.de/Redaktion/DE/Schlaglichter-der-Wirtschaftspolitik/2023/06/09-neues-technologieprogramm-edge-datenwirtschaft.html',
                },
            ],
            visual: (
                <div className="relative flex h-full items-end justify-center pt-10">
                    <Image
                        src="/images/heatingApp.png"
                        alt={t('featured.secai.imageAlt')}
                        width={451}
                        height={945}
                        sizes="(min-width: 1024px) 300px, 60vw"
                        className="h-auto w-[56%] max-w-[300px] translate-y-[18%] drop-shadow-[0_24px_40px_rgb(0_0_0/0.25)]"
                    />
                </div>
            ),
        },
        {
            key: 'tandem',
            tools: [T.unity, T.blender, T.python, T.gcloud, T.quest],
            visual: (
                <Image
                    src="/images/readingTandemMain.png"
                    alt={t('featured.tandem.imageAlt')}
                    fill
                    sizes="(min-width: 1024px) 640px, 100vw"
                    className="object-cover object-[50%_40%]"
                />
            ),
        },
        {
            key: 'crai',
            tools: [T.next, T.strapi, T.docker, T.postgres],
            visual: (
                <div className="flex h-full items-center justify-center bg-white p-12 ring-1 ring-inset ring-line">
                    <Image
                        src="/images/crai-logo-blau-pink.svg"
                        alt={t('featured.crai.imageAlt')}
                        width={320}
                        height={160}
                        className="h-auto w-[62%] max-w-[340px]"
                    />
                </div>
            ),
        },
    ];

    const projects: { key: string; year?: string; tools: Tool[] }[] = [
        { key: 'godot', year: '2026', tools: [T.godot, T.python] },
        { key: 'tandem', year: '2024', tools: [T.unity, T.quest] },
        { key: 'video', year: '2024', tools: [T.python, T.gemini] },
        { key: 'dashboard', year: '2024', tools: [T.react] },
        { key: 'circularity', year: '2023–24', tools: [T.react] },
        { key: 'bpmn', year: '2022–23', tools: [T.node, T.flutter, T.neo4j] },
    ];

    const background = [
        {
            group: 'work',
            items: [
                {
                    name: 'DFKI Osnabrück',
                    href: 'https://www.dfki.de/web',
                    logo: '/images/dfki.jpeg',
                    detail: t('background.dfki'),
                },
                {
                    name: 'Nolte Küchen',
                    href: 'https://www.nolte-kuechen.com/de-de/',
                    logo: '/images/nolte.png',
                    detail: t('background.nolte'),
                },
            ],
        },
        {
            group: 'education',
            items: [
                {
                    name: 'Universität Osnabrück',
                    href: 'https://www.uni-osnabrueck.de/startseite/',
                    logo: '/images/uni-osna.png',
                    detail: t('background.osna'),
                },
                {
                    name: 'Universidad de Valladolid',
                    href: 'https://www.uva.es/',
                    logo: '/images/uva.png',
                    detail: t('background.uva'),
                },
                {
                    name: 'DHBW Stuttgart',
                    href: 'https://www.dhbw-stuttgart.de',
                    logo: '/images/dhbw.png',
                    detail: t('background.dhbw'),
                },
            ],
        },
    ] as const;

    const toolGroups: { key: string; tools: Tool[] }[] = [
        { key: 'frontend', tools: [T.react, T.next, T.ts, T.flutter] },
        {
            key: 'backend',
            tools: [T.node, T.nest, T.python, T.java, T.csharp, T.strapi],
        },
        {
            key: 'data',
            tools: [T.postgres, T.mysql, T.mongo, T.influx, T.neo4j],
        },
        {
            key: 'ops',
            tools: [
                T.git,
                T.github,
                T.gitlab,
                T.docker,
                T.k8s,
                T.vercel,
                T.nginx,
                T.linux,
                T.jest,
            ],
        },
        { key: 'xr', tools: [T.unity, T.blender, T.godot, T.quest] },
        {
            key: 'ai',
            tools: [
                T.python,
                T.sklearn,
                T.gemini,
                { name: t('tools.llm') },
                { name: t('tools.speech') },
                { name: t('tools.agents') },
            ],
        },
        {
            key: 'process',
            tools: [
                { name: t('tools.bpmn'), icon: SiCamunda, color: '#fc5d0d' },
                { name: t('tools.dsr') },
                { name: t('tools.workshops') },
                { name: t('tools.rpa') },
            ],
        },
    ];

    return (
        <>
            {/* Hero */}
            <section className="wrap grid min-h-[calc(100svh-4rem)] grid-cols-1 content-center gap-10 py-10 lg:grid-cols-12 lg:gap-6 lg:py-12">
                <div className="flex flex-col justify-center lg:col-span-5 lg:pr-4">
                    <h1
                        className="display enter"
                        style={{ '--i': 0 } as React.CSSProperties}
                    >
                        {t('hero.title')}
                    </h1>
                    <p
                        className="lead enter mt-6 max-w-[42ch]"
                        style={{ '--i': 1 } as React.CSSProperties}
                    >
                        {t('hero.lead')}
                    </p>
                    <div
                        className="enter mt-8 flex flex-col gap-3 xs:flex-row"
                        style={{ '--i': 2 } as React.CSSProperties}
                    >
                        <ContactDialog
                            triggerClassName="btn btn-primary"
                            trigger={
                                <>
                                    {t('hero.contact')}
                                    <ArrowRight
                                        size={18}
                                        className="btn-arrow"
                                        aria-hidden
                                    />
                                </>
                            }
                        />
                        <a
                            href="/marlon-werth-cv.pdf"
                            download="Marlon_Werth_CV.pdf"
                            className="btn btn-secondary"
                        >
                            <Download size={17} aria-hidden />
                            {t('hero.cv')}
                        </a>
                    </div>
                </div>

                <div className="enter-panel relative h-[min(72vw,420px)] overflow-hidden rounded-panel bg-mint sm:h-[460px] lg:col-span-6 lg:col-start-7 lg:h-[min(716px,calc(100svh-7rem))]">
                    <Image
                        src="/images/Marlon.png"
                        alt={t('hero.imageAlt')}
                        width={562}
                        height={1720}
                        priority
                        sizes="(min-width: 1024px) 360px, 60vw"
                        className="absolute left-1/2 top-[7%] h-[230%] w-auto max-w-none -translate-x-1/2 lg:left-[58%] lg:h-[160%]"
                    />
                    <div className="absolute bottom-4 left-4 flex max-w-[calc(100%-2rem)] items-center gap-3 rounded-2xl bg-bg px-4 py-3 ring-1 ring-line sm:bottom-6 sm:left-6">
                        <span
                            aria-hidden
                            className="breathe size-2.5 shrink-0 rounded-full bg-mint-ink"
                        />
                        <span className="text-sm leading-tight">
                            <span className="block text-muted">
                                {t('hero.nowLabel')}
                            </span>
                            <span className="font-semibold">
                                {t('hero.nowValue')}
                            </span>
                        </span>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section
                id="services"
                className="border-t border-line bg-surface py-20 md:py-28"
            >
                <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-6">
                    <div className="lg:col-span-4">
                        <div className="lg:sticky lg:top-28">
                            <h2 className="h2">{t('services.title')}</h2>
                            <p className="lead mt-5 max-w-[38ch]">
                                {t('services.intro')}
                            </p>
                        </div>
                    </div>
                    <ol className="lg:col-span-7 lg:col-start-6">
                        {services.map(({ key, tools }) => (
                            <li
                                key={key}
                                className="grid gap-3 border-t border-line py-7 first:border-t-0 first:pt-0 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-8"
                            >
                                <h3 className="h3">
                                    {t(`services.${key}.title`)}
                                </h3>
                                <div>
                                    <p className="max-w-[60ch] text-muted">
                                        {t(`services.${key}.body`)}
                                    </p>
                                    {tools.length > 0 && (
                                        <ul
                                            className="mt-4 flex gap-3"
                                            aria-label="Tools"
                                        >
                                            {tools.map((tool) => (
                                                <li
                                                    key={tool.name}
                                                    title={tool.name}
                                                    className="grid size-9 place-items-center rounded-full bg-bg ring-1 ring-line"
                                                >
                                                    <ToolIcon
                                                        tool={tool}
                                                        size={17}
                                                    />
                                                    <span className="sr-only">
                                                        {tool.name}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Featured work */}
            <section id="work" className="py-20 md:py-28">
                <div className="wrap">
                    <h2 className="h2">{t('featured.title')}</h2>
                    <div className="mt-12 flex flex-col gap-20 md:mt-16 md:gap-28">
                        {featured.map(({ key, tools, links, visual }, i) => (
                            <article
                                key={key}
                                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-6"
                            >
                                <div
                                    className={`zoom-frame relative aspect-[4/3] overflow-hidden rounded-panel bg-surface lg:col-span-7 ${
                                        i % 2 ? 'lg:order-2 lg:col-start-6' : ''
                                    }`}
                                >
                                    <Develop className="absolute inset-0">
                                        {visual}
                                    </Develop>
                                </div>
                                <div
                                    className={`lg:col-span-5 ${
                                        i % 2
                                            ? 'lg:order-1 lg:col-start-1 lg:pr-6'
                                            : 'lg:pl-8'
                                    }`}
                                >
                                    <h3 className="text-[1.75rem] font-[500] leading-tight tracking-[-0.022em]">
                                        {t(`featured.${key}.title`)}
                                    </h3>
                                    <p className="mt-3 text-muted">
                                        {t(`featured.${key}.summary`)}
                                    </p>
                                    <h4 className="mt-6 text-sm font-semibold">
                                        {t('featured.role')}
                                    </h4>
                                    <ul className="mt-2 space-y-2">
                                        {(
                                            t.raw(
                                                `featured.${key}.points`
                                            ) as string[]
                                        ).map((point) => (
                                            <li
                                                key={point}
                                                className="relative pl-5 text-[0.9375rem] leading-relaxed"
                                            >
                                                <span
                                                    aria-hidden
                                                    className="absolute left-0 top-[0.6em] size-1.5 rounded-full bg-mint-ink"
                                                />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-6">
                                        <ToolChips tools={tools} />
                                    </div>
                                    {links && (
                                        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1">
                                            {links.map((link) => (
                                                <a
                                                    key={link.href}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="link inline-flex min-h-11 items-center gap-1 font-medium"
                                                >
                                                    {link.label}
                                                    <ArrowUpRight
                                                        size={16}
                                                        aria-hidden
                                                    />
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* More projects */}
            <section
                id="projects"
                className="border-t border-line bg-surface py-20 md:py-28"
            >
                <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-6">
                    <div className="lg:col-span-4">
                        <h2 className="h2">{t('projects.title')}</h2>
                        <a
                            href="https://github.com/werthmar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link mt-5 inline-flex min-h-11 items-center gap-1 font-medium"
                        >
                            {t('projects.more')}
                            <ArrowUpRight size={16} aria-hidden />
                        </a>
                    </div>
                    <ul className="lg:col-span-8">
                        {projects.map(({ key, year, tools }) => (
                            <li
                                key={key}
                                className="grid gap-2 border-t border-line py-6 first:border-t-0 first:pt-0 sm:grid-cols-[5.5rem_1fr] sm:gap-6"
                            >
                                <span className="pt-1 text-sm tabular-nums text-muted">
                                    {year}
                                </span>
                                <div>
                                    <h3 className="text-lg font-semibold tracking-[-0.01em]">
                                        {t(`projects.${key}.title`)}
                                    </h3>
                                    <p className="mt-1.5 max-w-[65ch] text-muted">
                                        {t(`projects.${key}.description`)}
                                    </p>
                                    <div className="mt-3">
                                        <ToolChips tools={tools} />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Background */}
            <section id="background" className="py-20 md:py-28">
                <div className="wrap">
                    <h2 className="h2">{t('background.title')}</h2>
                    <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-6">
                        {background.map(({ group, items }) => (
                            <div key={group}>
                                <h3 className="text-sm font-semibold text-muted">
                                    {t(`background.${group}`)}
                                </h3>
                                <ul className="mt-3">
                                    {items.map((item) => (
                                        <li
                                            key={item.name}
                                            className="border-t border-line first:border-t-0"
                                        >
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center gap-4 py-4"
                                            >
                                                <span className="grid size-12 shrink-0 place-items-center overflow-hidden rounded-xl bg-white ring-1 ring-line">
                                                    <Image
                                                        src={item.logo}
                                                        alt=""
                                                        width={40}
                                                        height={40}
                                                        className="size-9 object-contain"
                                                    />
                                                </span>
                                                <span className="min-w-0">
                                                    <span className="flex items-center gap-1 font-semibold">
                                                        {item.name}
                                                        <ArrowUpRight
                                                            size={15}
                                                            aria-hidden
                                                            className="text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                        />
                                                    </span>
                                                    <span className="block text-[0.9375rem] text-muted">
                                                        {item.detail}
                                                    </span>
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools */}
            <section
                id="tools"
                className="border-t border-line bg-surface py-20 md:py-28"
            >
                <div className="wrap">
                    <h2 className="h2">{t('tools.title')}</h2>
                    <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                        {toolGroups.map(({ key, tools }) => (
                            <div key={key}>
                                <h3 className="text-sm font-semibold text-muted">
                                    {t(`tools.${key}`)}
                                </h3>
                                <ul className="mt-3 space-y-2.5">
                                    {tools.map((tool) => (
                                        <li
                                            key={tool.name}
                                            className="flex items-center gap-2.5"
                                        >
                                            {tool.icon ? (
                                                <ToolIcon
                                                    tool={tool}
                                                    size={17}
                                                />
                                            ) : (
                                                <span
                                                    aria-hidden
                                                    className="mx-[5px] size-[7px] shrink-0 rounded-full bg-mint-ink"
                                                />
                                            )}
                                            {tool.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Close */}
            <section className="px-3 py-3 sm:px-4 sm:py-4">
                <div className="rounded-panel bg-mint text-on-mint">
                    <div className="wrap py-20 md:py-28">
                        <h2 className="max-w-[16ch] text-[clamp(2.75rem,6vw+0.5rem,6rem)] font-[450] leading-[0.98] tracking-[-0.04em]">
                            {t('close.title')}
                        </h2>
                        <p className="mt-6 max-w-[40ch] text-lg opacity-80">
                            {t('close.body')}
                        </p>
                        <div className="mt-9">
                            <ContactDialog
                                triggerClassName="btn bg-on-mint text-mint hover:bg-[#1d3a2a]"
                                trigger={
                                    <>
                                        {t('close.button')}
                                        <ArrowRight
                                            size={18}
                                            className="btn-arrow"
                                            aria-hidden
                                        />
                                    </>
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
