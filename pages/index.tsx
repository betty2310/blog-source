import type { NextPage } from 'next'
import Head from "next/head";
import Link from 'next/link'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <meta name="google-site-verification" content="pSprDjtnAmX3XLxQpyoQ8lOTIpXXr9qqVsbl4A4KL4M" />
            </Head>
            <main className="container-center github-theme no-list my-10 min-h-full flex-1">
                <p>{"👋 Hello! I'm Huynh Duong (Dương Hữu Huynh in Vietnamese). Look like you've found my space on the internet."}</p>
                <h2>Contact me!</h2>
                <p>{"In case you're interested:"}</p>
                <ul>
                    <li>-&gt; <Link href="https://github.com/betty2310">Find me on GitHub.</Link></li>
                    <li>-&gt; <Link href="mailto:huynh.dh2310@gmail.com">Or send me an email!</Link></li>
                </ul>

                <h2>Development</h2>
                <p>{"Yeah, these are some projects I'm working on, you can find them here:"}</p>
                <ul>
                    <li>-&gt; <Link href="/everyday"><a className="font-bold">Everyday Learning</a></Link>: <i>I am trying to learn something everyday and write about it.</i></li>
                    <li>-&gt; <Link href="https://github.com/betty2310/dotfiles"><a className="font-bold">My dotfiles</a></Link>: <i>Become a ricer of Linux</i> 🤣</li>
                    <li>-&gt; <Link href="/st"><a className="font-bold">ST terminal</a></Link>: <i>My st (suckless/simple terminal) build</i></li>
                </ul>
                <p>{"You can see my DEVLOG in each projects, if doesn't have, please feel free to check them on GitHub."}</p>
            </main>
        </>
    )
}

export default Home
