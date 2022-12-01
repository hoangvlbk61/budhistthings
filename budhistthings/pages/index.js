import React, { useEffect, useRef, useState } from "react";
import Head from "next/head"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"

export default function App() {
    const [isArticleVisible, setIsArticleVisible] = useState(false);
    const [timeout, setTO] = useState(false);
    const [articleTimeout, setArticleTimeout] = useState(false);
    const [article, setArticle] = useState("");
    const [loading, setLoading] = useState("is-loading");
    const timeoutIdRef = useRef();

    useEffect(() => {
        timeoutIdRef.current = setTimeout(() => {
            console.log("run")
            setLoading("")
        }, 1000)
    }, [])
    const handleOpenArticle = (article) => {
        setIsArticleVisible(!isArticleVisible);
        setArticle(article);

        setTimeout(() => {
            setTO(!timeout);
        }, 325)
        setTimeout(() => {
            setArticleTimeout(!articleTimeout)
        }, 350)
    }

    const handleCloseArticle = () => {
        setArticleTimeout(!articleTimeout)

        setTimeout(() => {
            setTO(!timeout);
        }, 325)

        setTimeout(() => {
            setIsArticleVisible(!isArticleVisible);
            setArticle("");
        }, 350)
    }

    return (
        <div className={`body ${loading} ${isArticleVisible ? "is-article-visible" : ""}`}>
            <div>
                <Head>
                    <title>Thanh Hoa</title>
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
                </Head>

                <div id="wrapper">
                    <Header onOpenArticle={handleOpenArticle} timeout={timeout} />
                    <Main
                        isArticleVisible={isArticleVisible}
                        timeout={timeout}
                        articleTimeout={articleTimeout}
                        article={article}
                        onCloseArticle={handleCloseArticle}
                    />
                    <Footer timeout={timeout} />
                </div>

                <div id="bg" />
            </div>
        </div>
    )
}