"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { FaReact, FaNodeJs, FaPython, FaJava, FaWindows, FaApple, FaLinux } from 'react-icons/fa';
import { SiUnity, SiFlutter, SiMysql, SiMongodb, SiNeo4J } from 'react-icons/si';

// Components
import Tag from '../components/Tag';
import LinkButton from '../components/LinkButton';
import Timeline from '../components/Timeline';
import NextPageButton from '../components/NextPageButton';
import ScrollDownButton from "../components/ScrollDownButton";

export default function Portfolio() {
    const t = useTranslations('PortfolioPage');

    const timelineItems = [
        {
            title: t('project1-title'),
            date: '2024',
            description: t('project1-description'),
            tag: 'VR',
            tagColor: 'bg-red-100',
            tag2: 'AI',
            tag2Color: 'bg-blue-100',
            iconColor: 'bg-red-100'
        },
        {
            title: t('project2-title'),
            date: '2024',
            description: t('project2-description'),
            tag: 'Python',
            tagColor: 'bg-yellow-100',
            tag2: 'AI',
            tag2Color: 'bg-blue-100',
            iconColor: 'bg-yellow-100'
        },
        {
            title: t('project3-title'),
            date: '2024',
            description: t('project3-description'),
            tag: 'React',
            tagColor: 'bg-green-100',
            tag2: 'AI',
            tag2Color: 'bg-blue-100',
            iconColor: 'bg-green-100'
        },
        {
            title: t('project4-title'),
            date: '2023-2024',
            description: t('project4-description'),
            tag: 'React',
            tagColor: 'bg-green-100',
            iconColor: 'bg-green-100'
        },
        {
            title: t('project5-title'),
            date: '2022-2023',
            description: t('project5-description'),
            tag: 'Node.js',
            tagColor: 'bg-orange-100',
            tag2: "Flutter",
            tag2Color: "bg-purple-100",
            iconColor: 'bg-orange-100'
        },
        // Add more timeline items as needed
    ];

    return (
        <>
            <div className="flex flex-col justify-center items-center p-6">

                <p className="text-center text-lg max-w-prose mt-20 mb-20">{t('text1')}</p>
                
                {/* Universities */}
                <h1 className="text-3xl font-bold mb-4">{t('universities')}</h1>
                <div className='flex flex-col lg:flex-row gap-4 mb-16'>
                    <LinkButton text='DHBW-Stuttgart' color='gray' icon='/images/dhbw.png' link='https://www.dhbw-stuttgart.de'/>
                    <LinkButton text='Universität Osnabrück' color="white" icon='/images/uni-osna.png' textColor='darkRed' link='https://www.uni-osnabrueck.de/startseite/' />
                    <LinkButton text='Universidad Valladolid' color='rgb(181, 39, 84)' icon='/images/uva.png' link='https://www.uva.es/export/sites/uva/'/>
                </div>

                {/* Work */}
                <h1 className="text-3xl font-bold mb-4">{t('work')}</h1>
                <div className='flex flex-col lg:flex-row gap-4 mb-16'>
                    <LinkButton text='Nolte Küchen' color='white' textColor='black' icon='/images/nolte.png' link='https://www.nolte-kuechen.com/de-de/'/>
                    <LinkButton text='DFKI Osnabrück' color='white' textColor='darkBlue' icon='/images/dfki.jpeg' link='https://www.dfki.de/web'/>
                </div>

                <h1 className="text-3xl font-bold mb-4">{t('technologies')}</h1>
                {/* Development */}
                <div className="bg-accent rounded-lg p-6 w-full max-w-prose shadow-lg mb-6">
                    <h2 className='text-xl font-bold text-gray-400 mb-4'>{t('development')}</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        <Tag text='Node.js' color='#339933' icon={<FaNodeJs />} />
                        <Tag text='React' color='#61DAFB' icon={<FaReact />} />
                        <Tag text='Next.js' color='white' borderColor='black' icon={"/images/nextjs-icon.png"} />
                        <Tag text='Python' color='#3776AB' icon={<FaPython />} />
                        <Tag text='C#' color='purple' icon={"/images/c-sharp-icon.png"} />
                        <Tag text='Unity' color='#000000' icon={<SiUnity />} />
                        <Tag text='Flutter' color='#02569B' icon={<SiFlutter />} />
                        <Tag text='Java' color='#007396' icon={<FaJava />} />
                    </div>
                </div>
                
                {/* Databases */}
                <div className="bg-accent rounded-lg p-6 w-full max-w-prose shadow-lg mb-6">
                    <h2 className='text-xl font-bold text-gray-400 mb-4'>{t('databases')}</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        <Tag text='SQL' color='#4479A1' icon={<SiMysql />} />
                        <Tag text='MongoDB' color='#47A248' icon={<SiMongodb />} />
                        <Tag text='Neo4j' color='#008CC1' icon={<SiNeo4J />} />
                    </div>
                </div>
                
                {/* Operating Systems */}
                <div className="bg-accent rounded-lg p-6 w-full max-w-prose shadow-lg mb-6">
                    <h2 className='text-xl font-bold text-gray-400 mb-4'>{t('os')}</h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        <Tag text='Windows' color='#0078D6' icon={<FaWindows />} />
                        <Tag text='macOS' color='#000000' icon={<FaApple />} />
                        <Tag text='Linux' color='#FCC624' icon={<FaLinux />} />
                    </div>
                </div>
                
                {/* Other */}
                <div className="bg-accent rounded-lg p-6 w-full max-w-prose shadow-lg mb-16">
                    <h2 className='text-xl font-bold text-gray-400 mb-4'>{t('other')}</h2>
                    <ul className="list-disc list-inside">
                        <li className="mb-2">{t('nginx')}</li>
                        <li className="mb-2">{t('ai')}</li>
                        <li className="mb-2">{t('vr')}</li>
                        <li className="mb-2">{t('blender')}</li>
                        <li className="mb-2">{t('rpa')}</li>
                        <li className="mb-2">{t('bpmn')}</li>
                    </ul>
                </div>
                
                <h1 className="text-3xl font-bold mb-8">{t('projects')}</h1>
                {/* Timeline */}
                <div className='pl-6 pr-6 max-w-prose'>
                    <Timeline items={timelineItems} />
                    <p className='text-gray-400'>... {t('more')}</p>
                </div>

            </div>

            <NextPageButton link='/cv' />
            <ScrollDownButton />

        </>
    );
}