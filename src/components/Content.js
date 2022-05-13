import ContentCard from "./ContentCard";

function Content() {
    return (
      <>
      <h1>What I've Been Reading Lately</h1>
      <ContentCard image={'./open-source.png'} description={`I'm new to open source, and this has been a really helpful guide to getting started making contributions.`} title={`How to Contribute to Open Source Projects – A Beginner's Guide`} contentLink={'https://www.freecodecamp.org/news/how-to-contribute-to-open-source-projects-beginners-guide/'}/>

      </>
    );
  }
  
  export default Content;