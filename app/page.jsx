import Feed from "@components/Feed";

const fetchPosts = async () => {
  const response = await fetch(`https://fakestoreapi.com/products`, {
    next: {
      revalidate: 5,
    },
  });
  console.log("run every fucking time");
  return response.json();
};

const Home = async () => {
  const posts = await fetchPosts();

  return <section className="w-full flex-center flex-col">fefe</section>;
};

export default Home;

{
  /* <h1 className="head_text text-center">
Discover & Share
<br className="max-md:hidden" />
<span className="orange_gradient text-center"> AI-Powered Prompts</span>
</h1>
<p className="desc text-center">
Promptopia is an open-source AI prompting tool for modern world to
discover, create and share creative prompts
</p>

<Feed allPosts={await response.json()} /> */
}
