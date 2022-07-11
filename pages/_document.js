import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;900&family=Dancing+Script:wght@700&family=PT+Mono&family=PT+Serif:wght@400;700&family=Roboto:wght@300;400&family=Satisfy&family=Smooch&family=Special+Elite&display=swap" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}