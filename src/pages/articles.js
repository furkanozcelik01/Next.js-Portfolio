import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/articles/pagination component in Reactjs.jpg";

const FeaturedArticle = ({ img, title, time, summary, link }) => {

    return (
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link >
            <Link href={link} target="-blank">
                <h2 className='capitalize text-2xl font-bold my-2'>{title}</h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold'>{time}</span>
        </li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>CodeBucks | Artciles Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center 
      justify-center overflow-hidden'>
                <Layout className="pt-16">
                    <AnimatedText text="Words Can Change The World! "
                        className='mb-16' />
                    <ul className='grid grid-col-2 gap-16'>
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min read"
                            link="/"
                            img={article1}
                        />
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min read"
                            link="/"
                            img={article1}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles