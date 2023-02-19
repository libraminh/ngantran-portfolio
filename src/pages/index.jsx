import Head from "next/head";
import Image from "next/image";
import {
  About,
  Achievement,
  Blog,
  Contacts,
  Education,
  Experience,
  Footer,
  Landing,
  Navbar,
  Projects,
  Services,
  Skills,
  Testimonials,
} from "../components";
import { FETCH_BIO } from "../hooks/useGerBio";
import { initializeApollo, addApolloState } from "../../lib/apolloClient";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Landing />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Achievement />
      <Services />
      <Testimonials />
      <Blog />
      <Contacts />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: FETCH_BIO,
    // variables: allPostsQueryVars,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
}

export default Home;
