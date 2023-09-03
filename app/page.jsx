import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max:md-hidden" />
        <span className="orange_gradient text-center">AI powered prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        debitis ducimus omnis fuga distinctio dolore vitae qui odit. Totam,
        commodi.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
