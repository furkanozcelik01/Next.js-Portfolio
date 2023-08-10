import React from "react"
import Layout from "./Layout"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid
         border-dark
        font-medium text-lg'>
            <Layout className='py-8 flex items-center 
            justify-between'>
                <span>{ new Date().getFullYear()} &copy; 
                All Rights Reserved.</span>
                <div className='flex items-center'>
                Build width<span className='text-primary 
                text-2xl px-1'>&#9825;</span>
                by&nbsp;<Link href="https://devdreaming.com"
                className='underline underline-offset-2
                'target={"_blank"}>CodeBucks</Link>
                </div>
                <Link href="https://devdreaming.com"
                className='underline underline-offset-2
                ' target={"_blank"}> say helo</Link>
            </Layout>
        </footer>
    )
}

export default Footer